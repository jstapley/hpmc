import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, lastName, phone, email, message, consent } = await request.json();

    if (!email || !phone) {
      return NextResponse.json({ error: "Email and phone are required" }, { status: 400 });
    }

    // Email to Daniel with all form details
    await resend.emails.send({
      from: "Hull Pro Marine Care <contact@hullpromarinecare.com>",
      to: "danieldetails2019@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission — ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2d4a7a; padding: 24px 32px;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 32px; border: 1px solid #e0e0e0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #1a2a4a; width: 140px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #1a2a4a;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #1a2a4a;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: 600; color: #1a2a4a; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #333;">${message || "No message provided"}</td>
              </tr>
            </table>
            <p style="margin-top: 24px; font-size: 12px; color: #888;">
              Marketing consent: ${consent ? "Yes" : "No"}
            </p>
          </div>
          <div style="padding: 16px 32px; background: #f7f8fa; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #888;">Hull Pro Marine Care — hullpromarinecare.com</p>
          </div>
        </div>
      `,
    });

    // Confirmation email to the client
    await resend.emails.send({
      from: "Hull Pro Marine Care <contact@hullpromarinecare.com>",
      to: email,
      subject: "We received your message — Hull Pro Marine Care",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2d4a7a; padding: 24px 32px;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Thank you, ${firstName}!</h1>
          </div>
          <div style="padding: 32px; border: 1px solid #e0e0e0;">
            <p style="color: #333; line-height: 1.7; margin-top: 0;">
              We've received your message and Daniel will be in touch with you shortly.
            </p>
            <p style="color: #333; line-height: 1.7;">
              In the meantime, feel free to reach us directly:
            </p>
            <ul style="color: #333; line-height: 2;">
              <li>📧 <a href="mailto:danieldetails2019@gmail.com" style="color: #2d4a7a;">danieldetails2019@gmail.com</a></li>
              <li>📞 <a href="tel:+12687764829" style="color: #2d4a7a;">+1 268-776-4829</a></li>
            </ul>
            <div style="margin-top: 32px; padding: 20px; background: #f7f8fa; border-left: 4px solid #2d4a7a;">
              <p style="margin: 0; font-size: 13px; color: #555;"><strong>Your message:</strong><br/>${message || "No message provided"}</p>
            </div>
          </div>
          <div style="padding: 16px 32px; background: #f7f8fa; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #888;">Hull Pro Marine Care — Winthorpes Bay, Burma Road, Antigua</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}