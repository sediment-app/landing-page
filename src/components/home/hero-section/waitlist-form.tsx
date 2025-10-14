"use client";

import { BellDot } from "lucide-react";
import { FormEvent, useState } from "react";
import { track } from "@vercel/analytics";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    track("waitlist_form_submit");
    router.push(`/waitlist?email=${encodeURIComponent(email)}`);
  };

  return (
    <form onSubmit={handleFormSubmit}>
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
          className="my-1 mr-1 flex max-w-fit items-center justify-center space-x-2 whitespace-nowrap rounded-full bg-secondary px-3 py-2 text-xs text-slate-100 sm:px-5 sm:text-sm"
        >
          <span className="font-medium">Join the Waitlist</span>
          <BellDot size="16" strokeWidth={2.75} className="hidden sm:block" />
        </button>
      </div>
    </form>
  );
}
