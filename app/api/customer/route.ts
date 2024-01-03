import { createCustomer } from "@/lib/helpers/customer";
import { ICustomer } from "@/lib/models/CustomerModel";
import { NextRequest } from "next/server";

async function handler(req: NextRequest) {
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
      return Response.json({ status: 400, error: "Failed to create customer" });
    }
    return Response.json({ status: 200, savedCustomer });
  } catch (error) {
    return Response.json({ status: 500, error: "Internal server error" });
  }
}

export { handler as GET, handler as POST };
