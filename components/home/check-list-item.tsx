import { Check } from "lucide-react";

const CheckListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-950 text-white">
        <Check size={14} strokeWidth={4} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CheckListItem;
