import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not defined in environment variables.');
      return NextResponse.json(
        { error: 'Email service is not configured on the server.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, company, mobile, email, location, requirement, details } = body;

    // Basic validation
    if (!name || !company || !mobile || !email) {
      return NextResponse.json(
        { error: 'Name, Company, Mobile, and Email are required fields.' },
        { status: 400 }
      );
    }

    // Validate 10-digit mobile number
    const cleanedMobile = typeof mobile === 'string' ? mobile.replace(/\D/g, '') : '';
    const normalizedMobile = (cleanedMobile.length === 12 && cleanedMobile.startsWith('91'))
      ? cleanedMobile.slice(2)
      : cleanedMobile;

    if (!/^[6-9]\d{9}$/.test(normalizedMobile)) {
      return NextResponse.json(
        { error: 'Please enter a valid 10-digit mobile number.' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_NOTIFICATION_EMAIL || 'anandcoder0@gmail.com';
    const defaultFrom = 'Durga Dulari Enterprises <onboarding@resend.dev>';
    let fromEmail = process.env.RESEND_FROM_EMAIL || defaultFrom;
    if (!fromEmail.includes('<')) {
      fromEmail = `Durga Dulari Enterprises <${fromEmail}>`;
    } else if (fromEmail.toLowerCase().includes('durga dulari website')) {
      fromEmail = fromEmail.replace(/durga dulari website/i, 'Durga Dulari Enterprises');
    }

    const emailSubject = `New Inquiry: ${name} (${company}) - ${requirement || 'General'}`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0B2545; padding: 24px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 20px; font-weight: bold; letter-spacing: 0.5px;">Durga Dulari Enterprises</h1>
          <p style="margin: 6px 0 0 0; font-size: 14px; color: #F4791F; font-weight: bold;">New Website Inquiry Received</p>
        </div>
        
        <div style="padding: 24px;">
          <p style="font-size: 15px; color: #334155; margin-top: 0;">You have received a new contact submission from your website:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b; width: 35%;">Client Name:</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Company Name:</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${company}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Mobile Number:</td>
              <td style="padding: 10px 0; color: #0f172a;">
                <a href="tel:${normalizedMobile}" style="color: #F4791F; text-decoration: none; font-weight: bold;">+91 ${normalizedMobile}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Email Address:</td>
              <td style="padding: 10px 0; color: #0f172a;">
                <a href="mailto:${email}" style="color: #0B2545; text-decoration: none; font-weight: bold;">${email}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Location / City:</td>
              <td style="padding: 10px 0; color: #0f172a;">${location || 'Not specified'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Requirement:</td>
              <td style="padding: 10px 0; color: #0B2545; font-weight: bold;">${requirement || 'General'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #64748b; vertical-align: top;">Requirement Details:</td>
              <td style="padding: 12px 0; color: #334155; line-height: 1.5; white-space: pre-line;">${details ? details : 'No additional details provided.'}</td>
            </tr>
          </table>

          <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin: 28px auto 0 auto; width: 100%; border-top: 1px solid #e2e8f0; padding-top: 20px;">
            <tr>
              <td align="center" style="text-align: center;">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                  <tr>
                    <td style="padding: 0 6px;">
                      <a href="mailto:${email}" style="display: inline-block; background-color: #0B2545; color: #ffffff; padding: 11px 22px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px; white-space: nowrap;">Reply via Email</a>
                    </td>
                    <td style="padding: 0 6px;">
                      <a href="tel:+91${normalizedMobile}" style="display: inline-block; background-color: #F4791F; color: #ffffff; padding: 11px 22px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px; white-space: nowrap;">Call Client</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>

        <div style="background-color: #f8fafc; padding: 12px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9;">
          Durga Dulari Enterprises • Automated Lead Notification System
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: emailSubject,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send inquiry email.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
      message: 'Inquiry submitted successfully.',
    });
  } catch (err: any) {
    console.error('Contact API Exception:', err);
    return NextResponse.json(
      { error: err.message || 'An unexpected error occurred while processing inquiry.' },
      { status: 500 }
    );
  }
}
