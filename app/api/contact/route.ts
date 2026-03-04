import { EmailData } from "@/components/Emailer";
import { NextRequest } from "next/server";

import { Resend } from "resend";

const resend = new Resend(process.env.resend_api_key);

export async function POST(request: NextRequest) {
  const body = (await request.json()) as EmailData;

  if (body.website !== "") {
    console.log("website triggered: " + body.website);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  try {
    const data = await resend.emails.send({
      from: "CalDev<noreply@calabrese.dev>",
      to: "peter@calabrese.dev",
      subject: `New Inquiry`,
      html: `<h3>New ${body.project != "other" ? body.project : body.otherProject} Request</h3> <p>Client: ${body.firstName} ${body.lastName} </p> <p> Email: ${body.email} </p> <p>${body.message}</p>`,
    });
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
