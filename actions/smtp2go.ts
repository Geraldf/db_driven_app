export type SMTP2GO_Params = {
  to: Array<string>
  from: string
  subject: string
  body_text?: any
  body_html: any
}
export const sendsmtp2go = async (params: SMTP2GO_Params) => {
  const snmtp2go = {
    api_key: process.env.NEXT_PUBLIC_SMTP2GO_APIKEY,
    to: params.to,
    sender: params.from,
    subject: params.subject,
    text_body: params.body_text,
    html_body: params.body_html
  }
  try {
    const res = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      body: JSON.stringify(snmtp2go),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res

    // Handle response here
  } catch (error) {
    throw new Error(String(error))
  }
}
