import { createServerFn } from '@tanstack/react-start'
import nodemailer from 'nodemailer'

export const sendCareerEmail = createServerFn({ method: 'POST' })
  .inputValidator(
    (input: {
      name: string
      email: string
      phone: string
      coverLetter: string
      position: string
      fileBase64: string
      fileName: string
    }) => input,
  )
  .handler(async ({ data }) => {
    if (!data.name || !data.email || !data.coverLetter || !data.position) {
      throw new Error('Name, email, cover letter, and position are required.')
    }

    if (!data.fileBase64 || !data.fileName) {
      throw new Error('CV/Resume file is required.')
    }

    try {
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
        from: `"Softimist Careers" <contact@softimist.com>`,
        to: process.env.CONTACT_EMAIL || 'info@softimist.com',
        replyTo: data.email,
        subject: `Job Application: ${data.position} — ${data.name}`,
        html: `
          <h2>New Job Application</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px">
            <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Position</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${data.position}</td></tr>
            <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${data.name}</td></tr>
            <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${data.email}</td></tr>
            <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${data.phone || 'Not provided'}</td></tr>
            <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Cover Letter</td><td style="padding:8px 12px;border-bottom:1px solid #eee;white-space:pre-wrap">${data.coverLetter}</td></tr>
          </table>
        `,
        attachments: [
          {
            filename: data.fileName,
            content: data.fileBase64,
            encoding: 'base64',
          },
        ],
      })

      return { success: true }
    } catch (err) {
      console.error('[Career Email Error]', err)
      throw new Error('Failed to send application email.')
    }
  })
