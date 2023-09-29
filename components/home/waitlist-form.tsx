"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { BellDot } from "lucide-react";
import { FormEvent, useState } from "react";
import { confetti } from "tsparticles-confetti";
import Modal from "../shared/modal";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const supabase = createClientComponentClient();

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const error = null;
    //const { error } = await supabase.from("waitlist").insert({ email });
    setStatus(error ? "error" : "success");
    setLoading(false);

    if (!error) {
      setShowModal(true);
      await confetti({ count: 100 });
    }
  };

  return (
    <>
      {!status && (
        <form onSubmit={handleFormSubmit}>
          <div className="relative mx-auto flex max-w-md">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="grow rounded-full border border-gray-300 bg-transparent bg-white text-gray-600 shadow-sm outline-none transition-colors hover:border-gray-400"
            />
            <button
              type="submit"
              className="absolute bottom-0 right-0 top-0 m-1 flex max-w-fit items-center justify-center space-x-2 rounded-full bg-gray-900 px-5 py-2 text-sm text-gray-100"
            >
              <span>Join the Waitlist</span>
              <BellDot size="16" />
            </button>
          </div>
        </form>
      )}

      {status === "success" && (
        <div className="mx-auto flex max-w-md items-center justify-center">
          <span className="text-green-600">
            Thank you for joining the waitlist!
          </span>
        </div>
      )}

      {status === "error" && (
        <div className="mx-auto flex max-w-md items-center justify-center">
          <span className="text-red-600">
            Something went wrong. Please try again.
          </span>
        </div>
      )}
    </>
  );
};

export default WaitlistForm;
