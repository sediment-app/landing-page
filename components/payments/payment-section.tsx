"use client";

import { useEffect, useMemo, useState } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./checkout-form";

// Publishable key must be exposed to the client
const pk = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string | undefined;

if (!pk) {
  // This guards during runtime; we still render a helpful message.
  // eslint-disable-next-line no-console
  console.warn("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set. Stripe Elements will not load.");
}

export function PaymentSection({ email, onSuccess }: { email: string | null; onSuccess?: () => void }) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Memoize stripePromise so it doesn't reinitialize
  const stripePromise = useMemo<Promise<Stripe | null>>(() => (pk ? loadStripe(pk) : Promise.resolve(null)), [pk]);

  useEffect(() => {
    const createIntent = async () => {
      try {
        const body: Record<string, unknown> = { email };

        const res = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        if (!res.ok) {
          throw new Error(`Failed to create PaymentIntent: ${res.status}`);
        }
        const data = await res.json();
        setClientSecret(data.clientSecret ?? null);
      } catch (e: any) {
        setError(e?.message || "Failed to initialize payment.");
      }
    };

    createIntent();
  }, [email]);

  if (!pk) {
    return (
      <div className="rounded-md border border-yellow-300 bg-yellow-50 p-3 text-sm text-yellow-800">
        Stripe is not configured. Please set <code>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> in your environment.
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-800">
        {error}
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="text-sm text-gray-600">Preparing secure payment...</div>
    );
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret, appearance: { theme: "stripe" } }}>
      <CheckoutForm email={email} onSuccess={onSuccess} />
    </Elements>
  );
}
