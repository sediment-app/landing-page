"use client";

import { BellDot } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { track } from "@vercel/analytics";
import { createClient } from "@/lib/supabase/client";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const supabase = useMemo(() => createClient(), []);

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setMessage(null);
    setIsSubmitting(true);

    track("waitlist_form_submit");

    const { error } = await supabase.from("waitlist").insert({ email });

    if (error) {
      setMessage("Something went wrong. Please try again.");
    } else {
      track("waitlist_join_success");
      setMessage("You're on the waitlist! We'll be in touch soon.");
      setEmail("");
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-2">
      <div className="relative flex max-w-md rounded-full border border-slate-300 bg-white shadow-sm transition-colors hover:border-slate-400 [&:has(input:focus)]:border-slate-400">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-0 flex-shrink grow rounded-full border-0 bg-transparent px-4 text-sm text-slate-600 outline-none ring-0 focus:ring-0 focus-visible:ring-0 sm:text-base"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="my-1 mr-1 flex max-w-fit items-center justify-center space-x-2 whitespace-nowrap rounded-full bg-secondary px-3 py-2 text-xs text-slate-100 sm:px-5 sm:text-sm"
        >
          <span className="font-medium">
            {isSubmitting ? "Joining..." : "Join the Waitlist"}
          </span>
          <BellDot size="16" strokeWidth={2.75} className="hidden sm:block" />
        </button>
      </div>
      {message && (
        <p className="text-sm text-slate-600" role="status">
          {message}
        </p>
      )}
    </form>
  );
}
