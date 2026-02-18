import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create transporter with Mailtrap SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || "sandbox.smtp.mailtrap.io",
      port: parseInt(process.env.MAIL_PORT || "2525"),
      secure: false, // use TLS
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // Email HTML template
    const htmlContent = `
  <div style="background:#f6f7f9;padding:24px;font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;">
      
      <!-- Header -->
      <tr>
        <td style="background:#8FA98F;padding:20px;text-align:center;">
          <h1 style="color:#ffffff;margin:0;font-size:20px;">
            New Contact Message
          </h1>
        </td>
      </tr>

      <!-- Content -->
      <tr>
        <td style="padding:24px;color:#333333;">
          
          <p style="margin:0 0 12px;">
            <strong>Name:</strong><br/>
            ${name}
          </p>

          <p style="margin:0 0 12px;">
            <strong>Email:</strong><br/>
            <a href="mailto:${email}" style="color:#8FA98F;text-decoration:none;">
              ${email}
            </a>
          </p>

          <p style="margin:0 0 12px;">
            <strong>Subject:</strong><br/>
            ${subject || "—"}
          </p>

          <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />

          <p style="margin:0 0 8px;">
            <strong>Message:</strong>
          </p>

          <p style="margin:0;line-height:1.6;color:#444;">
            ${message.replace(/\n/g, "<br/>")}
          </p>

        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#f3f4f6;padding:16px;text-align:center;font-size:12px;color:#6b7280;">
          This message was sent from The Learning Field website contact form.
        </td>
      </tr>

    </table>
  </div>
`;

    // Send email
    const info = await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME || "The Learning Field"}" <${process.env.MAIL_FROM_ADDRESS || "noreply@thelearningfield.com"}>`,
      to: process.env.MAIL_TO_ADDRESS || "fk4854667@gmail.com",
      subject: subject || "New Contact Form Message",
      html: htmlContent,
      replyTo: email,
    });

    console.log("Email sent successfully:", info.messageId);

    return NextResponse.json({ 
      success: true, 
      messageId: info.messageId 
    });
  } catch (error: any) {
    console.error("EMAIL_ERROR:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
