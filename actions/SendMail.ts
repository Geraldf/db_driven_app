import { EmailConfig, EmailUserConfig } from "@auth/core/providers"
import { Theme } from "@auth/core/types"

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
      try {
        const res = await sendBrevo(params)
      } catch (error) {
        throw new Error("Error Sending mail" + JSON.stringify(error))
      }
    },
    options: config,
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

const sendBrevo = async (params: Params): Promise<void> => {
  const sendto = { email: params.identifier }
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    // The body format will vary depending on provider, please see their documentation
    // for further details.
    body: JSON.stringify({
      sender: {
        name: "NextAuthExample",
        email: `${process.env.EMAIL_USER}`,
      },
      to: [sendto],
      subject: "Sign in to app",
      htmlContent: html(params),
    }),
    // Authentication will also vary from provider to provider, please see their docs.
    headers: {
      "api-key": `${process.env.SMPT_API}`,
      "content-type": "application/json",
      accept: "application/json",
    },
    method: "POST",
  })

  if (!response.ok) {
    const { errors } = await response.json()
    throw new Error(JSON.stringify(errors))
  }
}
