import Image from "next/image";

export function AiAssistantSection() {
  return (
    <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2 md:gap-12 lg:px-8">
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="font-dm-serif-text text-3xl font-normal text-secondary md:text-4xl lg:text-5xl">
          AI Assistant
        </h2>
        <p className="text-lg leading-8 text-slate-500">
          Get intelligent, context-aware support throughout your experience.
          Beyond answering questions about budgeting and savings strategies, our
          AI can help you set up accounts, move money, adjust budgets, and
          proactively suggest actions based on your behavior.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/screenshots/ai-assistant.png"
          alt="AI Assistant"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
