// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

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
      subject: "You're on the Sediment waitlist!",
      text: "Hey there,\n\nThanks for your interest in Sediment! You're officially on the waitlist for the bank account that enforces your budget, prioritizes your bills, and makes saving automatic — by default, not afterthought.\n\nHere's why this waitlist matters: the banking industry is highly regulated — as it should be. To launch, I need funding to handle the legal, compliance, and operational costs that come with building a banking product. The waitlist helps prove to investors that there's real demand for a better kind of banking.\n\nJust like layers of sediment slowly form stone, the goal of this app is to provide built-in banking tools that help people strengthen their financial foundation.\n\nThanks again for being part of this early stage.\n\nSincerely,\nKyle Rummens\nFounder, Sediment",
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
});
