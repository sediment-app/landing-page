"use client";

import { createClient } from "@/lib/supabase/client";
import { BellDot } from "lucide-react";
import { FormEvent, useState } from "react";
import { confetti } from "tsparticles-confetti";
import { track } from "@vercel/analytics";

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
        <form onSubmit={handleFormSubmit}>
          <div className="relative flex max-w-md rounded-full border border-gray-300 bg-white shadow-sm transition-colors hover:border-gray-400 [&:has(input:focus)]:border-gray-400">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-0 flex-shrink grow rounded-full border-0 bg-transparent px-4 text-sm text-gray-600 outline-none ring-0 focus:ring-0 focus-visible:ring-0 sm:text-base"
            />
            <button
              type="submit"
              className="my-1 mr-1 flex max-w-fit items-center justify-center space-x-2 whitespace-nowrap rounded-full bg-blue-950 px-3 py-2 text-xs text-gray-100 sm:px-5 sm:text-sm"
            >
              <span className="font-medium">Join the Waitlist</span>
              <BellDot
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
            Thank you for joining the waitlist!
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
