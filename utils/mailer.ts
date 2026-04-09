import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendBookingEmail(data: any) {
  await resend.emails.send({
    from: "you@yourdomain.com",      // can be any verified email in Resend
    to: process.env.BUSINESS_EMAIL!,        // business owner email
    subject: "New Booking Received",
    html: `
      <h2>New Booking</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Mobile:</b> ${data.mobile}</p>
      <p><b>Visa Type:</b> ${data.visaType}</p>
      <p><b>Date:</b> ${data.date}</p>
    `,
  });
}