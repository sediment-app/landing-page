import Balancer from "react-wrap-balancer";
import { WaitlistForm } from "./waitlist-form";
import Image from "next/image";
import { SparklesIcon } from "lucide-react";

export function HeroSection() {
  return (
    <div className="min-h-screen overflow-hidden py-24 sm:py-32 md:min-h-0 lg:pb-32 xl:pb-36">
      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-full lg:grid lg:grid-cols-12 lg:grid-rows-1 lg:items-stretch lg:gap-x-8">
          <div className="relative z-10 mx-auto flex h-full max-w-2xl flex-col justify-center lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <div
              className="mb-4 animate-fade-up opacity-0 flex justify-center md:justify-start"
              style={{
                animationDelay: "0.1s",
                animationFillMode: "forwards",
              }}
            >
              <div className="inline-flex items-center justify-center gap-1.5 rounded-full border-pink-700 bg-pink-700/10 px-2 py-1.5 text-xs font-medium text-pink-700">
                <SparklesIcon size={14} />
                Now in Private Beta
              </div>
            </div>
            <h1
              className="font-dm-serif-text animate-fade-up text-center text-4xl font-bold tracking-[-0.02em] text-secondary opacity-0 drop-shadow-sm md:text-left md:text-5xl md:leading-[4rem]"
              style={{
                animationDelay: "0.15s",
                animationFillMode: "forwards",
              }}
            >
              <Balancer>Your bank account, built for real life</Balancer>
            </h1>
            <p
              className="mt-6 animate-fade-up text-center text-slate-500 opacity-0 md:text-left md:text-xl"
              style={{
                animationDelay: "0.25s",
                animationFillMode: "forwards",
              }}
            >
              <Balancer>
                Ditch the spreadsheets. Sediment is the first bank account built
                to automatically budget, save, and plan — for you.
              </Balancer>
            </p>
            <div
              className="my-6 animate-fade-up space-y-3 opacity-0"
              style={{
                animationDelay: "0.3s",
                animationFillMode: "forwards",
              }}
            >
              <WaitlistForm />
              {/* <WaitlistCount /> */}
            </div>
          </div>

          <div className="relative mt-10 flex h-full items-center justify-center sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <div
              className="animate-fade-up opacity-0"
              style={{
                animationDelay: "0.35s",
                animationFillMode: "forwards",
              }}
            >
              <Image
                src="/screenshots/home.png"
                alt="Sediment Home"
                width={300}
                height={633}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
