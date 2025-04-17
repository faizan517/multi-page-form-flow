
import React from 'react';
import FormField from '@/components/ui/FormField';
import { useFormContext } from '@/contexts/FormContext';
import { Button } from '@/components/ui/button';

const MaternityBenefit: React.FC = () => {
  const { goToNextStep, goToPreviousStep } = useFormContext();

  // Options for dropdowns
  const optionsList = [
    { value: 'covered', label: 'Covered' },
    { value: 'not-covered', label: 'Not Covered' },
    { value: 'partially-covered', label: 'Partially Covered' },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
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

export default MaternityBenefit;
