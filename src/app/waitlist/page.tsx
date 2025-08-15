import WaitlistView from "@/components/waitlist/waitlist-view";

type Props = {
  searchParams: Promise<{ email?: string }>;
};

export default async function WaitlistPage({ searchParams }: Props) {
  const { email } = await searchParams;

  return <WaitlistView email={email ?? null} />;
}
