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
      from: "Kyle Rummens <kyle@sediment.money>",
      to: email,
      bcc: "k.d.rummens@gmail.com",
      subject: "Sediment private beta waitlist",
      text: "Hey there,\n\nThanks for your interest in Sediment! \n\nYou're officially on the private beta waitlist for the bank account that enforces your budget, prioritizes your bills, and makes saving automatic — by default, not afterthought.\nSomeone from the team will be in touch with you soon. In the meantime, please take a moment to respond to this email and answer the following questions:\n\n1. What do you currently use for your personal banking (traditional bank, credit union, neobank, etc.)?\n2. How do you currently manage your personal finances (budgeting app, spreadsheet, etc.)?\n3. Which of Sediment's features are you most interested in? (checking account bugets, bill pay, transaction round-ups, etc.)\n\nThanks again for being part of this early stage.\n\nSincerely,\nKyle Rummens\nFounder, Sediment",
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
