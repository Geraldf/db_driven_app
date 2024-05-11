import { NextRequest, NextResponse } from "next/server"
import { EmailConfig, EmailUserConfig } from "@auth/core/providers"
import { Theme } from "@auth/core/types"

const nodemailer = require("nodemailer")
type Params = {
  identifier: string
  url: string
  expires: Date
  provider: EmailConfig
  token: string
  theme: Theme
  request: Request
}

// Handles POST requests to /api
export default function MyMailer(config: EmailUserConfig): EmailConfig {
  return {
    id: "mymailer",
    type: "email",
    name: "MyMailer",
    from: process.env.EMAIL_FROM!,
    maxAge: 24 * 60 * 60,
    async sendVerificationRequest(params: Params): Promise<void> {
      const res = SendMail(params)

      // if (!res.ok)
      //   throw new Error("Resend error: " + JSON.stringify(await res.json()))
    },
    options: config,
  }
}
export async function SendMail(
  params: Params
): Promise<NextResponse<{ message: string }> | undefined> {
  console.log("dealing with request")

  // create transporter object
  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.de",
    port: 587,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },

    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    const { host } = new URL(params.url)

    return NextResponse.json({ message: "Success: email was sent" })
  } catch (error) {
    NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 })
  }
}
function html(params: Params) {
  const { url, theme } = params
  const { host } = new URL(url)

  const escapedHost = host.replace(/\./g, "&#8203;.")

  const brandColor = theme.brandColor || "#346df1"
  const color = {
    background: "#f9f9f9",
    text: "#444",
    mainBackground: "#fff",
    buttonBackground: brandColor,
    buttonBorder: brandColor,
    buttonText: theme.buttonText || "#fff",
  }

  return `
<body style="background: ${color.background};">
  <table width="100%" border="0" cellspacing="20" cellpadding="0"
    style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center"
        style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
        Sign in to <strong>${escapedHost}</strong>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
                target="_blank"
                style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Sign
                in</a></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center"
        style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
        If you did not request this email you can safely ignore it.
      </td>
    </tr>
  </table>
</body>
`
}
// Email Text body (fallback for email clients that don't render HTML, e.g. feature phones)
