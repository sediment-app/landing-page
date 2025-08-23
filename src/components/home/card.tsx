import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-slate-200 bg-white/50 p-6 backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
