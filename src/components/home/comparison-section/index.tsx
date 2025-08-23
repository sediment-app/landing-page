import { CheckIcon, XIcon } from "lucide-react";
import { Card } from "../card";

export function ComparisonSection() {
  return (
    <section className="relative z-10 mx-auto max-w-screen-lg px-4 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-dm-serif-text mb-4 text-3xl font-normal text-secondary md:text-4xl lg:text-5xl">
            Not just a bank. Not just a budgeting app.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-500">
            Most apps only solve part of the problem. Sediment is the first to
            bring your bank and budget together.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="grid gap-4 md:grid-cols-3 lg:gap-4">
          {/* Bank Apps Column */}
          <Card className="text-center">
            <div className="mb-6">
              <div className="mb-2 flex justify-center">
                <XIcon className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="font-dm-serif-text mb-2 text-xl font-normal text-secondary lg:text-2xl">
                Bank Apps
              </h3>
            </div>

            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                -<p className="text-slate-500">Show you a single balance.</p>
              </div>
              <div className="flex items-start gap-3">
                -<p className="text-slate-500">No budgets, no planning.</p>
              </div>
              <div className="flex items-start gap-3">
                -
                <p className="text-slate-500">
                  Bills hit randomly — you hope it&apos;s enough.
                </p>
              </div>
            </div>
          </Card>

          {/* Budgeting Apps Column */}
          <Card className="text-center">
            <div className="mb-6">
              <div className="mb-2 flex justify-center">
                <XIcon className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="font-dm-serif-text mb-2 text-xl font-normal text-secondary lg:text-2xl">
                Budgeting Apps
              </h3>
            </div>

            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                -
                <p className="text-slate-500">
                  Show charts after you&apos;ve spent.
                </p>
              </div>
              <div className="flex items-start gap-3">
                -
                <p className="text-slate-500">Can&apos;t block overspending.</p>
              </div>
              <div className="flex items-start gap-3">
                -
                <p className="text-slate-500">
                  Can only read data from your bank, can&apos;t help you enforce
                </p>
              </div>
            </div>
          </Card>

          {/* Sediment Column */}
          <Card className="text-center">
            <div className="relative z-10">
              <div className="mb-6">
                <div className="mb-2 flex justify-center">
                  <CheckIcon className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="font-dm-serif-text mb-2 text-xl font-normal text-secondary lg:text-2xl">
                  Sediment
                </h3>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  -
                  <p className="font-medium text-slate-500">
                    Budgets that enforce (warn or block).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  -
                  <p className="font-medium text-slate-500">
                    Bill-specific savings with automation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  -
                  <p className="font-medium text-slate-500">
                    AI assistant that acts for you.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  -
                  <p className="font-medium text-slate-500">
                    Your bank + your budget, finally in one place.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
