"use client";

import { ArrowRightIcon } from "lucide-react";
import { FormEvent, useState } from "react";
import { track } from "@vercel/analytics";
import { createClient } from "@/lib/supabase/client";
import { confetti } from "tsparticles-confetti";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const supabase = createClient();

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    track("waitlist_form_submit");
    const { error } = await supabase.from("waitlist").insert({ email });
    setStatus(error ? "error" : "success");
    setLoading(false);

    if (!error) {
      await confetti({ count: 100 });
    }
  };

  return (
    <>
      {!status && (
        <form onSubmit={handleFormSubmit} className="flex justify-center md:justify-start">
          <div className="relative flex grow max-w-md rounded-full border border-slate-300 bg-white shadow-sm transition-colors hover:border-slate-400 [&:has(input:focus)]:border-slate-400">
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
              <span className="font-medium">Request Access</span>
              <ArrowRightIcon
                size="16"
                strokeWidth={2.75}
                className="hidden sm:block"
              />
            </button>
          </div>
        </form>
      )}
      {status === "success" && (
        <div className="flex max-w-md items-center justify-start">
          <span className="text-green-600">
            You&apos;re all set! We&apos;ll be reaching out to you soon.
          </span>
        </div>
      )}

      {status === "error" && (
        <div className="flex max-w-md items-center justify-start">
          <span className="text-red-600">
            Something went wrong. Please try again.
          </span>
        </div>
      )}
    </>
  );
}
