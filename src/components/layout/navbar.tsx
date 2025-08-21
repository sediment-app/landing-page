"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";

export function Navbar() {
  const scrolled = useScroll(0);

  return (
    <>
      <div
        className={`fixed top-0 flex w-full justify-center ${
          scrolled
            ? "border-b border-slate-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-center md:justify-start">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Sediment Logo"
              width="30"
              height="30"
              className="mr-2"
            ></Image>
            <p className="font-dm-serif-text text-secondary">Sediment</p>
          </Link>
        </div>
      </div>
    </>
  );
}
