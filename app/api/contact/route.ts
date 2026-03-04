import { NextRequest } from "next/server";

import { Resend } from "resend";

const resend = new Resend(process.env.resend_api_key);

type body = {
  firstName: string;
  lastName?: string;
  email: string;
  message: string;
  website?: string;
};
export async function POST(request: NextRequest) {
  const body = (await request.json()) as body;

  if (body.website !== "") {
    console.log("website triggered: " + body.website);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  try {
    const data = await resend.emails.send({
      from: "CalDev<noreply@calabrese.dev>",
      to: "peter@calabrese.dev",
      subject: `New Inquiry From: ${body.firstName} ${body.lastName} `,
      html: `<h1>${body.firstName} ${body.lastName} - <a href='maitlto:${body.email}'>${body.email}</a></h1> <p>${body.message}</p>`,
    });
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
