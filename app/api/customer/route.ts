import { createCustomer } from "@/lib/helpers/customer";
import { ICustomer } from "@/lib/models/CustomerModel";
import { NextApiResponse } from "next";
import { NextRequest } from "next/server";

export default async function handler(req: NextRequest, res: NextApiResponse) {
  let passedValue = await new Response(req.body).text();
  let bodyreq = JSON.parse(passedValue);
  try {
    const { name, email, applications } = bodyreq;
    // Call the createCustomer function to create a new customer
    const savedCustomer: ICustomer | null = await createCustomer(
      name,
      email,
      applications
    );

    if (!savedCustomer) {
      return res?.status(400).json({ error: "Failed to create customer" });
    }
    res?.status(200).json({ savedCustomer });
    return savedCustomer;
  } catch (error) {
    return res?.status(500).json({ error: "Internal server error" });
  }
}

export { handler as GET, handler as POST };
