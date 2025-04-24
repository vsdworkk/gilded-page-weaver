
import { Progress } from "@/components/ui/progress";

const steps = [
  "Introduction",
  "Role Details",
  "Your Experience",
  "Guidance",
  "STAR Examples",
  "Finalise",
];

export function ReviewProgress({ currentStep = 0 }: { currentStep?: number }) {
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto mb-16 space-y-6">
      <h1 className="text-4xl font-playfair text-center mb-12 animate-fade-in">
        Review & Edit
      </h1>
      <div className="flex justify-between relative mb-2">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex flex-col items-center relative z-10"
          >
            <div
              className={`w-4 h-4 rounded-full mb-2 transition-all duration-500 ${
                index <= currentStep
                  ? "bg-editor-accent scale-100"
                  : "bg-editor-muted scale-90"
              }`}
            />
            <span
              className={`text-sm transition-colors duration-500 absolute -bottom-6 ${
                index <= currentStep
                  ? "text-editor-text"
                  : "text-editor-muted"
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
      <Progress value={progress} className="h-1 bg-editor-muted" />
    </div>
  );
}
