import { clientEmail, password } from "./environments";
import nodemailer from "nodemailer";

export const sendMail = async ({ toMail, subject, body }) => {
  // for gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: clientEmail,
      pass: password,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // for hostinger
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.hostinger.com", // Replace with your SMTP server host
  //   port: 465, // Replace with your SMTP server port (587 or 465)
  //   secure: true, // true for 465, false for 587
  //   auth: {
  //     user: clientEmail, // Your email address
  //     pass: password, // Your email password or app-specific password
  //   },
  //   tls: {
  //     rejectUnauthorized: false, // Use only if necessary
  //   },
  // });

  const mailData = {
    from: clientEmail, // sender address
    to: toMail, // list of receivers
    subject, // Subject line
    html: body, // html body
  };

  try {
    const info = await transporter.sendMail(mailData);
    // console.log("Email sent: " + info.response);~
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
