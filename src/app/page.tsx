import { Card } from "@/components/home/card";
import { CheckListItem } from "@/components/home/check-list-item";
import { ComparisonSection } from "@/components/home/comparison-section";
import { FeatureSections } from "@/components/home/feature-sections";
import { HeroSection } from "@/components/home/hero-section";
import { CreditCard, SparklesIcon, PiggyBank } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ComparisonSection />
      <FeatureSections />
      <div
        className="mx-auto mb-6 mt-10 w-full max-w-5xl animate-fade-up px-5 opacity-0 xl:px-0"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <div className="font-dm-serif-text text-2xl text-secondary">
          More Features
        </div>
      </div>
      <div className="mx-auto mb-20 grid w-full max-w-screen-lg animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-2 xl:px-0">
        <Card>
          <div className="mb-3 text-lg font-medium text-slate-700">
            Transaction Round-Ups & Debit Card Controls
          </div>
          <div className="text-slate-500">
            Round up purchases to the nearest $1, $5, or $10 and direct the
            difference to your chosen savings account. Take control of your
            spending with card freeze/unfreeze, spend limits, merchant category
            blocking, and real-time transaction alerts.
          </div>
        </Card>
        <Card>
          <div className="mb-3 text-lg font-medium text-slate-700">
            Real-Time Alerts & Behavior Nudges
          </div>
          <div className="text-slate-500">
            Receive notifications for budgets nearing their limits, alerts for
            unusual transactions, and daily or weekly spending digests. Get
            encouraging notifications when spending is on track and personalized
            suggestions to adjust budgets based on your habits.
          </div>
        </Card>
      </div>
      {/*
      <div
        className="mx-auto mb-6 w-full max-w-5xl animate-fade-up px-5 opacity-0 xl:px-0"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <div className="text-2xl text-slate-700">The Basics</div>
        <div className="text-lg text-slate-500">
          It&apos;s not a bank account without these features
        </div>
      </div>
      <div className="mx-auto mb-20 grid w-full max-w-screen-lg animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-2 xl:px-0">
        <Card>
          <div className="flex flex-col gap-3">
            <CheckListItem>Individual or joint account</CheckListItem>
            <CheckListItem>Access to 55,000+ free ATMs</CheckListItem>
            <CheckListItem>Physical and virtual debit cards</CheckListItem>
            <CheckListItem>Mobile deposits</CheckListItem>
            <CheckListItem>ACH, wire, and book payments</CheckListItem>
          </div>
        </Card>
      </div>
      <div
        className="mx-auto mb-6 w-full max-w-5xl animate-fade-up px-5 opacity-0 xl:px-0"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <div className="text-2xl text-slate-700">Security and Compliance</div>
        <div className="text-lg text-slate-500">We&apos;ve got your back</div>
      </div>
      <div className="mx-auto mb-20 grid w-full max-w-screen-lg animate-fade-up grid-cols-1 gap-5 px-5 pb-32 md:grid-cols-2 xl:px-0">
        <Card>
          <div className="flex flex-col gap-3">
            <CheckListItem>FDIC insured</CheckListItem>
            <CheckListItem>BSA/AML</CheckListItem>
            <CheckListItem>Fraud monitoring</CheckListItem>
            <CheckListItem>Data encryption</CheckListItem>
          </div>
        </Card>
      </div>*/}
    </>
  );
}
