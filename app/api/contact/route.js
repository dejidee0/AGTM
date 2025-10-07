import { Resend } from "resend";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

// Contact notification email template (to your business)
const contactNotificationTemplate = (data) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
    .value { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; }
    .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎯 New Contact Form Submission</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${data.name}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>
      <div class="field">
        <div class="label">Message:</div>
        <div class="value">${data.message.replace(/\n/g, "<br>")}</div>
      </div>
      <div class="field">
        <div class="label">Submitted:</div>
        <div class="value">${new Date(data.timestamp).toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}</div>
      </div>
    </div>
    <div class="footer">
      <p>This email was sent from your AGTM Partner contact form.</p>
      <p>Reply directly to this email to respond to ${data.name}.</p>
    </div>
  </div>
</body>
</html>
`;

// Confirmation email template (to the customer)
const confirmationEmailTemplate = (data) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
    .message-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea; }
    .cta { text-align: center; margin: 30px 0; }
    .button { display: inline-block; padding: 12px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 25px; font-weight: bold; }
    .contact-info { background: white; padding: 15px; border-radius: 8px; margin-top: 20px; }
    .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✅ Thank You for Contacting Us!</h1>
    </div>
    <div class="content">
      <p>Hi <strong>${data.name}</strong>,</p>
      <p>Thank you for reaching out to AGTM Partner! We've successfully received your message and our team will review it shortly.</p>
      
      <div class="message-box">
        <strong>📝 Your message:</strong><br><br>
        ${data.message.replace(/\n/g, "<br>")}
      </div>
      
      <p><strong>⏱️ What happens next?</strong></p>
      <p>Our team typically responds within 24 hours during business hours (Monday-Friday, 9AM-6PM WAT). We'll get back to you at <strong>${data.email}</strong>.</p>
      
      <div class="contact-info">
        <p style="margin: 5px 0;"><strong>📧 Email:</strong> info@agtmpartner.com</p>
        <p style="margin: 5px 0;"><strong>📞 Phone:</strong> +2349154100476</p>
        <p style="margin: 5px 0;"><strong>📍 Location:</strong> Lagos, Nigeria</p>
      </div>

      <div class="cta">
        <a href="https://agtmpartner.com" class="button">Visit Our Website</a>
      </div>
      
      <p>Best regards,<br>
      <strong>The AGTM Partner Team</strong></p>
    </div>
    <div class="footer">
      <p><strong>AGTM Partner</strong> - Accelerating Growth in Africa's Digital Economy</p>
      <p>Lagos, Nigeria | info@agtmpartner.com | +2349154100476</p>
    </div>
  </div>
</body>
</html>
`;

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const emailData = { name, email, message, timestamp };

    console.log("Processing contact form submission:", { name, email });

    // Send notification email to your business
    const notificationResult = await resend.emails.send({
      from: "AGTM Partner <onboarding@resend.dev>",
      to: "Godspower@agtmpartner.com",
      subject: `New Contact Form: ${name}`,
      html: contactNotificationTemplate(emailData),
      replyTo: email, // Allows you to reply directly to the customer
    });

    console.log("Notification email sent:", notificationResult.id);

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      {
        error:
          "Failed to send message. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function GET() {
  return new Response("GET method not supported. Use POST.", {
    status: 405,
  });
}
