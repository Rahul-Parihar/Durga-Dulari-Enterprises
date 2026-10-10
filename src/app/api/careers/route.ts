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
    const { name, email, phone, position, experience, message } = body;

    // Basic validation
    if (!name || !email || !phone || !position || !experience) {
      return NextResponse.json(
        { error: 'Name, Email, Phone, Position, and Experience are required fields.' },
        { status: 400 }
      );
    }

    // Validate 10-digit mobile number
    const cleanedPhone = typeof phone === 'string' ? phone.replace(/\D/g, '') : '';
    const normalizedPhone = (cleanedPhone.length === 12 && cleanedPhone.startsWith('91'))
      ? cleanedPhone.slice(2)
      : cleanedPhone;

    if (!/^[6-9]\d{9}$/.test(normalizedPhone)) {
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

    const emailSubject = `New Job Application: ${name} - ${position} (${experience} exp)`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0B2545; padding: 24px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 20px; font-weight: bold; letter-spacing: 0.5px;">Durga Dulari Enterprises</h1>
          <p style="margin: 6px 0 0 0; font-size: 14px; color: #F4791F; font-weight: bold;">New Candidate Job Application</p>
        </div>
        
        <div style="padding: 24px;">
          <p style="font-size: 15px; color: #334155; margin-top: 0;">A new candidate has submitted their application through the Careers portal:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b; width: 35%;">Applicant Name:</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Position Applied For:</td>
              <td style="padding: 10px 0; color: #0B2545; font-weight: bold; font-size: 15px;">${position}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Experience:</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${experience}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Mobile Number:</td>
              <td style="padding: 10px 0; color: #0f172a;">
                <a href="tel:+91${normalizedPhone}" style="color: #F4791F; text-decoration: none; font-weight: bold;">+91 ${normalizedPhone}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Email Address:</td>
              <td style="padding: 10px 0; color: #0f172a;">
                <a href="mailto:${email}" style="color: #0B2545; text-decoration: none; font-weight: bold;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #64748b; vertical-align: top;">Introduction / Notes:</td>
              <td style="padding: 12px 0; color: #334155; line-height: 1.5; white-space: pre-line;">${message ? message : 'No additional introduction provided.'}</td>
            </tr>
          </table>

          <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin: 28px auto 0 auto; width: 100%; border-top: 1px solid #e2e8f0; padding-top: 20px;">
            <tr>
              <td align="center" style="text-align: center;">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                  <tr>
                    <td style="padding: 0 6px;">
                      <a href="tel:+91${normalizedPhone}" style="display: inline-block; background-color: #F4791F; color: #ffffff; padding: 11px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 13px; white-space: nowrap;">Call Candidate</a>
                    </td>
                    <td style="padding: 0 6px;">
                      <a href="https://wa.me/91${normalizedPhone}" style="display: inline-block; background-color: #25D366; color: #ffffff; padding: 11px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 13px; white-space: nowrap;">WhatsApp</a>
                    </td>
                    <td style="padding: 0 6px;">
                      <a href="mailto:${email}" style="display: inline-block; background-color: #0B2545; color: #ffffff; padding: 11px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 13px; white-space: nowrap;">Reply via Email</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>

        <div style="background-color: #f8fafc; padding: 12px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9;">
          Durga Dulari Enterprises • Automated HR Recruitment System
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
      console.error('Resend Career API Error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send job application email.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
      message: 'Job application submitted successfully.',
    });
  } catch (err: any) {
    console.error('Career API Exception:', err);
    return NextResponse.json(
      { error: err.message || 'An unexpected error occurred while processing application.' },
      { status: 500 }
    );
  }
}
