
import React from 'react';
import FormField from '@/components/ui/FormField';
import { useFormContext } from '@/contexts/FormContext';
import { Button } from '@/components/ui/button';

const OPDWellnessBenefit: React.FC = () => {
  const { goToNextStep, goToPreviousStep } = useFormContext();

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        <div className="md:col-span-2">
          <FormField
            label="Complementary Group OPD pool Pre authorized booking through Mentor Platform"
            fieldName="complementaryGroupOPD"
            placeholder="Enter Amount"
          />
        </div>
        
        <div className="md:col-span-2">
          <FormField
            label="Wellness Screening on Site KLI (Karachi,Lahore & islamabad) Vision (Color blindness, Visual Acuity), Hearing Tests Cognitive, Cardiovascular Health, Pulmonary, Health, Musculoskeletal Health, Cognitive Health."
            fieldName="wellnessScreening"
            type="number"
            placeholder="Enter number"
          />
        </div>
        
        <FormField
          label="Health Awareness Session"
          fieldName="healthAwarenessSession"
          type="number"
          placeholder="Enter number"
        />
        
        <FormField
          label="Mental Health Session"
          fieldName="mentalHealthSession"
          type="number"
          placeholder="Enter number"
        />
      </div>
      
      <div className="mt-8 flex justify-end">
        <Button 
          type="button"
          onClick={goToNextStep}
          className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default OPDWellnessBenefit;
