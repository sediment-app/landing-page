import { NextRequest } from "next/server";
import Stripe from "stripe";

const stripeSecret = process.env.STRIPE_SECRET_KEY as string | undefined;

if (!stripeSecret) {
  // eslint-disable-next-line no-console
  console.warn(
    "STRIPE_SECRET_KEY is not set. /api/create-payment-intent will not work.",
  );
}

const stripe = stripeSecret ? new Stripe(stripeSecret) : (null as any);

export async function POST(req: NextRequest) {
  if (!stripe) {
    return Response.json({ error: "Stripe not configured" }, { status: 500 });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const email = typeof body?.email === "string" ? body.email : undefined;

    // Hard-coded $3.00 USD
    const amount: number = 300; // cents
    const currency = "usd" as const;

    if (amount < 50) {
      return Response.json({ error: "Amount too low" }, { status: 400 });
    }

    const intent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: { enabled: true },
      receipt_email: email,
      metadata: { source: "waitlist-thank-you", email: email || "" },
    });

    return Response.json({ clientSecret: intent.client_secret });
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error("Failed to create PaymentIntent", err);
    return Response.json(
      { error: err?.message || "Server error" },
      { status: 500 },
    );
  }
}
