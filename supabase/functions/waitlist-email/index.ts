// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

type InsertPayload = {
  type: "INSERT";
  table: string;
  schema: string;
  record: { email: string };
  old_record: null;
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

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

  // Create a Supabase client with the service role key
  const supabase = createClient(
    SUPABASE_URL || "",
    SUPABASE_SERVICE_ROLE_KEY || "",
  );

  // Get the total count of waitlist entries
  const { count: totalCount } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true });

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
      subject: "You're on the Sediment waitlist!",
      text:
        "Hey there,\n\nThanks for your interest in Sediment! You're officially on the waitlist for the bank account that enforces your budget, prioritizes your bills, and makes saving automatic — by default, not afterthought.\n\nYou're number " +
        ((totalCount ?? 16) + 300).toLocaleString() +
        " on the waitlist!\n\nHere's why this waitlist matters: the banking industry is highly regulated — as it should be. To launch, I need funding to handle the legal, compliance, and operational costs that come with building a banking product. The waitlist helps prove to investors that there's real demand for a better kind of banking.\n\nJust like layers of sediment slowly form stone, the goal of this app is to provide built-in banking tools that help people strengthen their financial foundation.\n\nThanks again for being part of this early stage.\n\nSincerely,\nKyle Rummens\nFounder, Sediment",
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
