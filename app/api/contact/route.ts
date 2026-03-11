import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, budget, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^\S+@\S+\.\S+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const smtpHost = process.env.SMTP_HOST?.trim()
    const smtpPort = Number(process.env.SMTP_PORT || 587)
    const smtpUser = process.env.SMTP_USER?.trim()
    const smtpPass = process.env.SMTP_PASS?.trim().replace(/\s+/g, '')
    const recipient = process.env.CONTACT_EMAIL?.trim() || 'anooshaashraf321@gmail.com'

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        { error: 'Email service is not configured on the server' },
        { status: 500 }
      )
    }

    if (smtpUser.includes('your_gmail') || smtpPass.includes('your_16_char')) {
      return NextResponse.json(
        { error: 'SMTP credentials are placeholders. Set real SMTP_USER and Gmail App Password in .env.local' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    await transporter.sendMail({
      from: `"Amplify Contact" <${smtpUser}>`,
      to: recipient,
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || 'N/A')}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget || 'N/A')}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message).replaceAll('\n', '<br/>')}</p>
      `,
      text: [
        'New Contact Form Submission',
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || 'N/A'}`,
        `Budget: ${budget || 'N/A'}`,
        `Message:\n${message}`,
      ].join('\n\n'),
    })

    return NextResponse.json(
      { success: true, message: 'Message received successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Contact form error:', error)

    if (error?.code === 'EAUTH') {
      return NextResponse.json(
        { error: 'SMTP authentication failed. Use a Gmail App Password (16 chars) with 2-Step Verification enabled.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
