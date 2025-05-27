
import { createClient } from "@/lib/supabase/server";
import { PropsWithChildren, Suspense } from "react";

export function WaitlistCount() {
  return (
    <Suspense fallback={<WaitlistCountContainer>0</WaitlistCountContainer>}>
      <AsyncWaitlistCount />
    </Suspense>
  )
}

async function AsyncWaitlistCount() {
  const supabase = await createClient();
  const { data: count, error } = await supabase.rpc("get_waitlist_count");

  if(error) {
    return null;
  }

  return <WaitlistCountContainer>{count.toLocaleString()}</WaitlistCountContainer>
}

function WaitlistCountContainer({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center justify-center pt-12 gap-2">
      <span className="size-2 relative flex">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
        <span className="size-2 relative inline-flex rounded-full bg-green-500"></span>
      </span>
      <div className="text-green-500 font-medium">{children} people on the waitlist</div>
    </div>
  );
}