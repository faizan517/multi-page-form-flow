
import React from 'react';
import FormField from '@/components/ui/FormField';
import { useFormContext } from '@/contexts/FormContext';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const MaternityBenefit: React.FC = () => {
  const { goToNextStep, goToPreviousStep } = useFormContext();
  const isMobile = useIsMobile();

  // Options for dropdowns
  const optionsList = [
    { value: 'covered', label: 'Covered' },
    { value: 'not-covered', label: 'Not Covered' },
    { value: 'partially-covered', label: 'Partially Covered' },
  ];

  return (
    <div className={`p-3 md:p-6 ${isMobile ? 'space-y-4' : ''}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-12 gap-y-4 md:gap-y-6">
        <FormField
          label="Maternity (Per Covered Per Annum)"
          fieldName="maternityPerCovered"
          type="select"
          placeholder="Select your option"
          options={optionsList}
        />
        
        <FormField
          label="Legal Abortion/ D&C / D&E"
          fieldName="legalAbortion"
          type="select"
          placeholder="Select your option"
          options={optionsList}
        />
        
        <FormField
          label="Pre-natal Expenses / Post natal Expense"
          fieldName="preNatalExpenses"
          type="select"
          placeholder="Select your option"
          options={optionsList}
        />
        
        <FormField
          label="Intial Vaccines for new Born/Circumcision Cover"
          fieldName="initialVaccines"
          type="select"
          placeholder="Select your option"
          options={optionsList}
        />
        
        <FormField
          label="Pre-Existing Maternities"
          fieldName="preExistingMaternities"
          type="select"
          placeholder="Select your option"
          options={optionsList}
        />
      </div>
      
      <div className={`mt-6 md:mt-8 flex ${isMobile ? 'justify-center' : 'justify-end'}`}>
        <Button 
          type="button"
          onClick={goToNextStep}
          className="bg-blue-600 text-white px-6 md:px-8 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default MaternityBenefit;
