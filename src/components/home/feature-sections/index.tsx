import { StructuredCheckingSection } from "./structured-checking";
import { PurposeDrivenSavingsSection } from "./purpose-driven-savings";
import { AiAssistantSection } from "./ai-assistant";

export function FeatureSections() {
  return (
    <div className="space-y-12 md:space-y-24">
      <StructuredCheckingSection />
      <PurposeDrivenSavingsSection />
      <AiAssistantSection />
    </div>
  );
}
