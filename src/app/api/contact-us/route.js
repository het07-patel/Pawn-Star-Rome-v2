import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";
import { NextResponse } from "next/server";
import { emailPattern, HTTP_MESSAGES } from "@/utils/lib";
import { contactDetailsReceivedEmail, contactUsEmail } from "@/utils/template";
import { sendMail } from "@/utils/mailer";
import { companyEmail } from "@/utils/environments";

const window = new JSDOM("").window;
const DOMPurifyInstance = DOMPurify(window);

const sanitizeValue = (value) => {
  return DOMPurifyInstance.sanitize(value);
};

export async function POST(request) {
  try {
    const bodyData = await request.json();
    let { name, email, phoneNumber, message } = bodyData;

    name = sanitizeValue(name) ? name.trim() : null;
    email = sanitizeValue(email) ? email.trim() : null;
    phoneNumber = sanitizeValue(phoneNumber) ? Number(phoneNumber) : null;
    message = sanitizeValue(message) ? message.trim() : null;

    if (name && email && phoneNumber) {
      const emailResult = emailPattern.test(email);
      if (emailResult) {
        // Send Mail to company owner
        const { subject: cdSubject, description: cdDesc } =
          contactDetailsReceivedEmail({
            name,
            email,
            phoneNumber,
            message,
          });
        const cdMailPayload = {
          toMail: companyEmail,
          subject: cdSubject,
          body: cdDesc,
        };

        await sendMail(cdMailPayload);
        const response = NextResponse.json({
          status: 200,
          message: HTTP_MESSAGES.SUCCESS,
        });

        // Send Mail to customer
        try {
          const { subject, description } = contactUsEmail(name);
          const mailPayload = {
            toMail: email,
            subject,
            body: description,
          };

          sendMail(mailPayload);
        } catch (error) {
          console.log("Error sending email", error);
        }

        return response;
      } else {
        return NextResponse.json({
          status: 400,
          message: HTTP_MESSAGES.EMAIL_VALIDATION,
        });
      }
    } else {
      return NextResponse.json({
        status: 400,
        message: HTTP_MESSAGES.INVALID_DATA,
      });
    }
  } catch (error) {
    console.log(error?.message, "e");
    return NextResponse.json({
      status: 500,
      message: HTTP_MESSAGES.SERVER_ERROR,
    });
  }
}
