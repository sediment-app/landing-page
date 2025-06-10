import Balancer from "react-wrap-balancer";
import { WaitlistForm } from "./waitlist-form";
import { WaitlistCount } from "./waitlist-count";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="min-h-screen overflow-hidden py-24 sm:py-32 lg:pb-32 xl:pb-36">
      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-full lg:grid lg:grid-cols-12 lg:grid-rows-1 lg:items-stretch lg:gap-x-8">
          <div className="relative z-10 mx-auto flex h-full max-w-2xl flex-col justify-center lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1
              className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-left md:text-5xl md:leading-[4rem]"
              style={{
                animationDelay: "0.15s",
                animationFillMode: "forwards",
              }}
            >
              <Balancer>
                The Bank Account That Manages Your Money for You
              </Balancer>
            </h1>
            <p
              className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-left md:text-xl"
              style={{
                animationDelay: "0.25s",
                animationFillMode: "forwards",
              }}
            >
              <Balancer>
                Ditch the spreadsheets. Sediment is the first checking account
                built to automatically budget, save, and plan — for you.
              </Balancer>
            </p>
            <div
              className="mt-6 animate-fade-up opacity-0"
              style={{
                animationDelay: "0.3s",
                animationFillMode: "forwards",
              }}
            >
              <WaitlistForm />
              <WaitlistCount />
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
