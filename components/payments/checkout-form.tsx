"use client";

import { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { createClient } from "@/lib/supabase/client";
import { track } from "@vercel/analytics";

type Props = {
  email: string | null;
  onSuccess?: () => void;
};

export function CheckoutForm({ email, onSuccess }: Props) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    setMessage(null);

    track("payment_form_submit");

    const { error } = await stripe.confirmPayment({
      elements,
      // Stay on page on success; you can supply a return_url if you want redirects
      confirmParams: {},
      redirect: "if_required",
    });

    const { error: supabaseError } = await supabase.from("waitlist").insert({ email });

    if (error || supabaseError) {
      setMessage(error?.message ?? "An unexpected error occurred.");
    } else {
      onSuccess?.();
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement
        options={{
          layout: "accordion",
          defaultValues: email ? { billingDetails: { email } } : undefined,
        }}
      />

      <button
        type="submit"
        disabled={isLoading || !stripe || !elements}
        className="w-full rounded-md bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Processing..." : "Join waitlist - $3.00"}
      </button>

      {message && (
        <div className="text-sm text-gray-700" role="alert">
          {message}
        </div>
      )}
    </form>
  );
}
