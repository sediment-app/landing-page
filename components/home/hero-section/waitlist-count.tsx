import { createClient } from "@/lib/supabase/server";
import { PropsWithChildren, Suspense } from "react";

export function WaitlistCount() {
  return (
    <Suspense fallback={<WaitlistCountContainer>0</WaitlistCountContainer>}>
      <AsyncWaitlistCount />
    </Suspense>
  );
}

async function AsyncWaitlistCount() {
  const supabase = await createClient();
  const { data: count, error } = await supabase.rpc("get_waitlist_count");

  if (error) {
    return null;
  }

  return (
    <WaitlistCountContainer>{count.toLocaleString()}</WaitlistCountContainer>
  );
}

function WaitlistCountContainer({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center justify-center gap-2 md:justify-start">
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
        <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
      </span>
      <div className="font-medium text-green-500">
        {children} people on the waitlist
      </div>
    </div>
  );
}
