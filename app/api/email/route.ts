import nodemailer from "nodemailer";
import { NextRequest } from "next/server";
import { EMAIL_PASSWORD, EMAIL_USERNAME } from "@/config";

async function handler(req: NextRequest) {
  let passedValue = await new Response(req.body).text();
  let bodyreq = JSON.parse(passedValue);

  try {
    const { email, subject, text } = bodyreq;
    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your SMTP service name
      auth: {
        user: EMAIL_USERNAME, // Your email address
        pass: EMAIL_PASSWORD, // Your email password or app password
      },
    });
    // Setup email data
    const mailOptions = {
      from: EMAIL_USERNAME, // Sender address
      to: email, // List of receivers
      subject: subject, // Subject line
      text: text, // Plain text body
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      console.log("info: ", info);
      if (error) {
        console.log("email send error: ", error);
        Response.json({ status: 400, error: "Failed to send email" });
      }
      Response.json({ status: 200, message: "Email sent successfully", info });
    });
    Response.json({ status: 400, error: "Failed to send email" });
  } catch (error) {
    return Response.json({ status: 500, error: "Internal server error" });
  }
}

export { handler as GET, handler as POST };
