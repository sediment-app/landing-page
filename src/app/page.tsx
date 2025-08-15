import { Card } from "@/components/home/card";
import { CheckListItem } from "@/components/home/check-list-item";
import { FeatureSections } from "@/components/home/feature-sections";
import { HeroSection } from "@/components/home/hero-section";
import { CreditCard, SparklesIcon, PiggyBank } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/*<FeatureSections />*/}
      <div
        className="mx-auto mb-6 w-full max-w-5xl animate-fade-up px-5 opacity-0 xl:px-0"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <div className="text-2xl text-gray-700">
          Not just a bank. Not just a budgeting app.
        </div>
        <div className="text-lg text-gray-500">How Sediment Works</div>
      </div>
      <div className="mx-auto mb-20 grid w-full max-w-screen-lg animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <Card>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-peach-100 p-3">
              <CreditCard className="h-8 w-8 text-peach-500" />
            </div>
            <div className="mb-3 text-lg font-medium text-gray-700">
              Structured Checking
            </div>
            <div className="text-gray-500">
              Hard/soft budgets built into your debit card
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-peach-100 p-3">
              <PiggyBank className="h-8 w-8 text-peach-500" />
            </div>
            <div className="mb-3 text-lg font-medium text-gray-700">
              Purpose-Driven Savings
            </div>
            <div className="text-gray-500">
              Every bill, goal, and emergency has a smart account
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-peach-100 p-3">
              <SparklesIcon className="h-8 w-8 text-peach-500" />
            </div>
            <div className="mb-3 text-lg font-medium text-gray-700">
              AI Assistant
            </div>
            <div className="text-gray-500">
              A copilot that helps set up budgets, savings, and more
            </div>
          </div>
        </Card>
      </div>
      <div
        className="mx-auto mb-6 w-full max-w-5xl animate-fade-up px-5 opacity-0 xl:px-0"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <div className="text-2xl text-gray-700">Account Features</div>
        <div className="text-lg text-gray-500">
          What makes Sediment different?
        </div>
      </div>
      <div className="mx-auto mb-20 grid w-full max-w-screen-lg animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-2 xl:px-0">
        <Card>
          <div className="mb-3 text-lg font-medium text-gray-700">
            Budget Categories with Hard & Soft Limits
          </div>
          <div className="text-gray-500">
            Set budgets within your checking account by category. Choose between
            soft budgets that warn you when you&apos;re over budget and hard
            budgets that decline transactions exceeding your set limit. Enjoy
            real-time balance updates per category and flexible budget
            intervals.
          </div>
        </Card>
        <Card>
          <div className="mb-3 text-lg font-medium text-gray-700">
            Transaction Round-Ups & Debit Card Controls
          </div>
          <div className="text-gray-500">
            Round up purchases to the nearest $1, $5, or $10 and direct the
            difference to your chosen savings account. Take control of your
            spending with card freeze/unfreeze, spend limits, merchant category
            blocking, and real-time transaction alerts.
          </div>
        </Card>
        <Card>
          <div className="mb-3 text-lg font-medium text-gray-700">
            Intent-Based Savings Accounts
          </div>
          <div className="text-gray-500">
            Create purpose-driven accounts for bills, planned expenses, goals,
            and emergencies. Each account type comes with specialized features
            like due date tracking, target savings amounts, progress tracking,
            and smart pacing recommendations.
          </div>
        </Card>
        <Card>
          <div className="mb-3 text-lg font-medium text-gray-700">
            Asset-Aware Management
          </div>
          <div className="text-gray-500">
            Link savings accounts to real-world assets like vehicles, homes, and
            more. Access specialized features including document storage,
            payment forecasts, maintenance tracking, event reminders, and asset
            lifecycle planning.
          </div>
        </Card>
        <Card>
          <div className="mb-3 text-lg font-medium text-gray-700">
            AI Assistant That Takes Action
          </div>
          <div className="text-gray-500">
            Get intelligent, context-aware support throughout your experience.
            Beyond answering questions about budgeting and savings strategies,
            our AI can help you set up accounts, move money, adjust budgets, and
            proactively suggest actions based on your behavior.
          </div>
        </Card>
        <Card>
          <div className="mb-3 text-lg font-medium text-gray-700">
            Real-Time Alerts & Behavior Nudges
          </div>
          <div className="text-gray-500">
            Receive notifications for budgets nearing their limits, alerts for
            unusual transactions, and daily or weekly spending digests. Get
            encouraging notifications when spending is on track and personalized
            suggestions to adjust budgets based on your habits.
          </div>
        </Card>
      </div>
      <div
        className="mx-auto mb-6 w-full max-w-5xl animate-fade-up px-5 opacity-0 xl:px-0"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <div className="text-2xl text-gray-700">The Basics</div>
        <div className="text-lg text-gray-500">
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
        <div className="text-2xl text-gray-700">Security and Compliance</div>
        <div className="text-lg text-gray-500">We&apos;ve got your back</div>
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
      </div>
    </>
  );
}
