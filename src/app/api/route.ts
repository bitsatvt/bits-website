"use server"
import Mailgun from "mailgun.js";
import FormData from "form-data";

export async function POST(req: Request) {
  const { firstName, lastName, email, company, interest, message } = await req.json();

  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.API_KEY!,
  });

  await mg.messages.create(
    'sandboxe32f5e668fe9476cb5514bec27242694.mailgun.org',
    {
      from: `BITS at VT <postmaster@sandboxe32f5e668fe9476cb5514bec27242694.mailgun.org>`,
      to: ['bitsatvt@gmail.com'],
      subject: `New Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Company: ${company}
        Interest: ${interest}
        Message: ${message}
      `
    }
  );

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}