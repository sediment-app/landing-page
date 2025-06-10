import Image from "next/image";

export function PurposeDrivenSavingsSection() {
  return (
    <div className="relative mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center">
        <Image
          src="/screenshots/asset.png"
          alt="Purpose-Driven Savings"
          width={300}
          height={300}
        />
      </div>
      <div>
        <h2>Purpose-Driven Savings</h2>
      </div>
    </div>
  );
}
