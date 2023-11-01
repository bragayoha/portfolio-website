// import { EmailTemplate } from '../../../components/EmailTemplate'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const fromEmail = process.env.FROM_EMAIL

export async function POST(req, res) {
    const { body } = await req.json()
    const { email, subject, message } = body
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: ['delivered@resend.dev', email],
            subject: subject,
            html: (
                <>
                    <h1>
                        {subject}
                    </h1>
                    <p>
                        Obrigado por me contatar!
                    </p>
                    <p>
                        Nova mensagem enviada:
                    </p>
                    <p>
                        {message}
                    </p>
                </>),
        })

        return NextResponse.json(data)
    } catch(error) {
        return NextResponse.json({ error })
    }
}