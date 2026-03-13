import { createServerFn } from '@tanstack/react-start'
import nodemailer from 'nodemailer'

export const sendContactEmail = createServerFn({ method: 'POST' })
  .inputValidator(
    (input: { name: string; email: string; phone: string; message: string }) => input,
  )
  .handler(async ({ data }) => {
    if (!data.name || !data.email || !data.message) {
      throw new Error('Name, email, and message are required.')
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Softimist Contact" <contact@softimist.com>`,
      to: process.env.CONTACT_EMAIL || 'info@softimist.com',
      replyTo: data.email,
      subject: `New Contact: ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${data.name}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${data.email}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${data.phone || 'Not provided'}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Message</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${data.message}</td></tr>
        </table>
      `,
    })

    return { success: true }
  })
