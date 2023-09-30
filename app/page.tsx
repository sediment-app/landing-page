import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import WaitlistForm from "@/components/home/waitlist-form";

export default async function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-4xl px-5 xl:px-0">
        <div className="mx-auto mb-5 flex max-w-fit animate-fade-up cursor-default items-center justify-center space-x-2 overflow-hidden rounded-full border border-peach-200 bg-peach-50 px-6 py-1">
          <p className="text-sm font-semibold text-peach-500">
            Launching soon!
          </p>
        </div>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-5xl md:leading-[4rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Bridge the banking and budgeting gap with the only debit card that
            sticks to your budget
          </Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Say hello to effortless budgeting and smarter spending with every
            swipe.
          </Balancer>
        </p>
        <div
          className="mx-auto mt-6 animate-fade-up opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <WaitlistForm />
        </div>
      </div>
      <div className="mb-10 mt-20 grid w-full max-w-screen-lg animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-2 xl:px-0">
        <Card>
          <div className="mb-3 text-lg font-medium text-gray-700">
            Budget folders in your checking account
          </div>
          <div className="text-gray-500">
            Empower yourself to take charge of your finances by seamlessly
            integrating budget folders into your checking account. No more
            juggling multiple apps or spreadsheets - manage your budget
            effortlessly, right from your account.
          </div>
        </Card>
        <Card>
          <div className="mb-3 text-lg font-medium text-gray-700">
            Smart debit card automatically enforces your budget
          </div>
          <div className="text-gray-500">With every transaction you make with your debit card, the transaction amount is automatically withdrawn from the appropriate budget folder within your account. You can even have fine-tuned control over which budget a transaction pulls from.</div>
        </Card>
        <Card>
          <div className="mb-3 text-lg font-medium text-gray-700">
            Grow your savings with transaction round-ups
          </div>
          <div className="text-gray-500">
            Make the most out of every purchase by leveraging our transaction
            round-up feature. It automatically rounds each transaction to the
            nearest dollar, directing the spare change straight into your
            dedicated savings account. It&apos;s like a digital piggy bank that fills
            itself.
          </div>
        </Card>
        <Card>
          <div className="mb-3 text-lg font-medium text-gray-700">
            Set hard limits on selected budgets
          </div>
          <div className="text-gray-500">
            Set unyielding spending limits for specific budgets and experience
            peace of mind like never before. Enabled budget folders ensure that
            a transaction will be declined if it would exceed your budget.
          </div>
        </Card>
      </div>
    </>
  );
}
