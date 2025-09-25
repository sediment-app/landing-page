import Image from "next/image";

export function StructuredCheckingSection() {
  return (
    <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2 md:gap-12 lg:px-8">
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="font-dm-serif-text text-3xl font-normal text-secondary md:text-4xl lg:text-5xl">
          Structured Checking
        </h2>
        <p className="text-lg leading-8 text-slate-500">
          Set budgets within your checking account by category. Choose between
          soft budgets that warn you when you're over budget and hard budgets
          that decline transactions exceeding your set limit. Enjoy real-time
          balance updates per category and flexible budget intervals.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/screenshots/structured-checking.png"
          alt="Structured Checking"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
