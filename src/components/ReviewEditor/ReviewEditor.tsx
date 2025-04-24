
import { useState } from 'react';
import { ReviewProgress } from './Progress';
import Editor from '../Editor/Editor';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ReviewEditor() {
  const [currentStep, setCurrentStep] = useState(0);
  const { toast } = useToast();
  const isLastStep = currentStep === 5;

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSave = () => {
    toast({
      title: "Progress saved",
      description: "Your content has been saved successfully",
      className: "bg-white border-gray-200 text-gray-800",
    });
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <ReviewProgress currentStep={currentStep} />
        
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
          <Editor />
          
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="ghost"
              className="text-gray-800 hover:bg-gray-100"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-800 hover:bg-gray-50"
                onClick={handleSave}
              >
                <Save className="mr-2 h-4 w-4" />
                Save & Close
              </Button>
              
              <Button
                onClick={handleNext}
                className="bg-purple-500 text-white hover:bg-purple-600"
              >
                {isLastStep ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Submit Pitch
                  </>
                ) : (
                  "Continue"
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

