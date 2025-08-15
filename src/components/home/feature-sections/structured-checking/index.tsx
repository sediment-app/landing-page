import Image from "next/image";

export function StructuredCheckingSection() {
  return (
    <div className="relative mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2">
      <div>
        <h2>Structured Checking</h2>
        <p></p>
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
