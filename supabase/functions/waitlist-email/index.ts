// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"

type InsertPayload = {
  type: "INSERT";
  table: string;
  schema: string;
  record: { email: string };
  old_record: null;
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

Deno.serve(async (request) => {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  let email: string;

  try {
    const body = (await request.json()) as InsertPayload;
    if (!body || body.type !== "INSERT") {
      throw new Error("Invalid type");
    }
    if (!body.record?.email) {
      throw new Error("Invalid record");
    }
    email = body.record.email;
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Kyle Rummens <kyle@getsediment.com>",
      to: email,
      bcc: "k.d.rummens@gmail.com",
      subject: "You're on the waitlist!",
      html: "<p>Hey there,</p><p>Thanks for your interest in Sediment! You're officially on the waitlist for the bank account and debit card that help you stick to your budget. I started this project with the goal of adding these simple features to my own banking, and I'm convinced that this can help others as well.</p><p>Please consider sharing Sediment with your friends and family. I believe Sediment can be a tool for people of all financial backgrounds. If you've never put together a budget and don't know where to get started, start with Sediment. If you're a pro, maybe you've had the same pain points in banking that I have. </p><p>Just like how layers of sediment in a riverbed become stone, I hope this project will be a tool for people to start (or continue) adding layers to their financial foundation.</p><p>Sincerely,<p><span>Kyle Rummens</span><br><span>Founder, Sediment</span>",
    }),
  });

  const data = await res.json();

  console.log(data);

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
})