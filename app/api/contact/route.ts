import { NextRequest, NextResponse } from 'next/server'

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

    // ─── Option A: Nodemailer (configure SMTP) ─────────────────────────────
    // Uncomment and configure if you have SMTP credentials:
    //
    // const nodemailer = require('nodemailer')
    // const transporter = nodemailer.createTransporter({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT) || 587,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // })
    //
    // await transporter.sendMail({
    //   from: `"Amplify Contact" <${process.env.SMTP_USER}>`,
    //   to: process.env.CONTACT_EMAIL || 'hello@amplifyagency.com',
    //   subject: `New Project Inquiry from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company || 'N/A'}</p>
    //     <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
    //     <p><strong>Message:</strong><br/>${message}</p>
    //   `,
    // })

    // ─── Option B: Log to console (development) ───────────────────────────
    console.log('📧 New Contact Form Submission:', {
      name,
      email,
      company,
      budget,
      message,
      timestamp: new Date().toISOString(),
    })

    // ─── Option C: Send to webhook (e.g. Slack, Discord, Make.com) ────────
    // if (process.env.WEBHOOK_URL) {
    //   await fetch(process.env.WEBHOOK_URL, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name, email, company, budget, message }),
    //   })
    // }

    return NextResponse.json(
      { success: true, message: 'Message received successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
