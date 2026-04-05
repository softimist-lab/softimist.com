import { defineEventHandler, readMultipartFormData } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const parts = await readMultipartFormData(event)
  if (!parts) {
    throw new Error('No form data received.')
  }

  const fields: Record<string, string> = {}
  let fileData: Uint8Array | null = null
  let fileName = ''

  for (const part of parts) {
    if (part.filename) {
      fileData = part.data
      fileName = part.filename
    } else if (part.name) {
      fields[part.name] = new TextDecoder().decode(part.data)
    }
  }

  const { name, email, phone, coverLetter, position } = fields

  if (!name || !email || !coverLetter || !position) {
    throw new Error('Name, email, cover letter, and position are required.')
  }

  if (!fileData || !fileName) {
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
      replyTo: email,
      subject: `Job Application: ${position} — ${name}`,
      html: `
        <h2>New Job Application</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Position</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${position}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${name}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${email}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${phone || 'Not provided'}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Cover Letter</td><td style="padding:8px 12px;border-bottom:1px solid #eee;white-space:pre-wrap">${coverLetter}</td></tr>
        </table>
      `,
      attachments: [
        {
          filename: fileName,
          content: Buffer.from(fileData),
        },
      ],
    })

    return { success: true }
  } catch (err) {
    console.error('[Career Email Error]', err)
    throw new Error('Failed to send application email.')
  }
})
