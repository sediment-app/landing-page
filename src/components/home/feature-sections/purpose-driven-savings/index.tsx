export function PurposeDrivenSavingsSection() {
  return (
    <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2 md:gap-12 lg:px-8">
      <div className="flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          width={300}
          height={300}
          className="rounded-[52px]"
        >
          <source src="/videos/assets.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="font-dm-serif-text text-3xl font-normal text-secondary md:text-4xl lg:text-5xl">
          Asset-linked Savings
        </h2>
        <p className="text-lg leading-8 text-slate-500">
          Link savings accounts to real-world assets like vehicles, homes, and
          more. Access specialized features including document storage, payment
          forecasts, maintenance tracking, event reminders, and asset lifecycle
          planning.
        </p>
      </div>
    </div>
  );
}
