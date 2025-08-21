export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-xl border border-slate-200 bg-white/50 p-6 backdrop-blur-md">
      {children}
    </div>
  );
}
