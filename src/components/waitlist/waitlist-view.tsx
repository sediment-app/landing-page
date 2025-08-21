"use client";

import { Card } from "@/components/home/card";
import { PaymentSection } from "@/components/payments/payment-section";
import Link from "next/link";
import { useState } from "react";

type Props = {
  email: string | null;
};

export default function WaitlistView({ email }: Props) {
  const [success, setSuccess] = useState(false);

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl space-y-8">
        {/* Navigation */}
        <div className="pt-6 text-left">
          <Link href="/" className="text-slate-600 hover:text-slate-800">
            ← Go to Home
          </Link>
        </div>

        {/* Main Card */}
        {!success ? (
          <Card>
            <div className="pb-4 text-center">
              <div className="text-2xl font-bold">Join Our Waitlist</div>
              <div className="text-base">
                Secure your spot with a one-time $3 payment
              </div>
            </div>

            <div className="space-y-6">
              {/* Benefits Section */}
              <div className="space-y-3 rounded-lg bg-blue-50 p-4">
                <h3 className="flex items-center gap-2 font-semibold text-slate-900">
                  Why We Require Payment
                </h3>
                <div className="space-y-2 text-sm text-slate-700">
                  <ul className="list-disc pl-6">
                    <li>Cover part of our launch and compliance costs</li>
                    <li>
                      Show potential investors there&apos;s real demand for
                      better banking
                    </li>
                  </ul>
                </div>
              </div>

              <div className="h-px bg-slate-200" />

              {/* Payment Form */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Payment Details</h3>
                  <div className="text-2xl font-bold text-green-600">$3.00</div>
                </div>

                {/* Stripe Payment Element */}
                <PaymentSection
                  email={email}
                  onSuccess={() => setSuccess(true)}
                />
              </div>
            </div>
          </Card>
        ) : (
          <Card>
            <div className="space-y-3 text-center">
              <div className="text-2xl font-bold text-green-700">
                Thank you!
              </div>
              <p className="text-slate-700">Your support has been recorded.</p>
              {email && (
                <p className="text-sm text-slate-500">
                  A receipt will be sent to {email}.
                </p>
              )}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
