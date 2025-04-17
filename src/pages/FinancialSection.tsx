
import React from 'react';
import FormField from '@/components/ui/FormField';
import { useFormContext } from '@/contexts/FormContext';
import { Button } from '@/components/ui/button';

const FinancialSection: React.FC = () => {
  const { formData, goToPreviousStep } = useFormContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit the form data to your backend here
    console.log('Form submitted with data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h3 className="text-gray-700 font-medium mb-2">Service Provider</h3>
        <p className="text-sm text-gray-600">
          Mentor Health can obtain Takaful Coverage from any Company in order to provide the best solution as per requirement, and all will be digitally connected through the Mentor platform, offering hassle-free service to organizations and their staff.
        </p>
        <p className="text-sm text-gray-600 mt-2 text-center">TPA Services provided by</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        <div>
          <FormField
            label="Universal Limit"
            fieldName="universalLimit"
            placeholder="Enter amount"
          />
          <p className="text-xs text-gray-500 mt-1">
            The entire benefit structure and all limits will fall within this single limit budget.
          </p>
        </div>
        
        <div>
          <FormField
            label="Room Charges Limit"
            fieldName="roomChargesLimit"
            placeholder="Enter amount"
          />
          <p className="text-xs text-gray-500 mt-1">
            The entire benefit structure and all limits will fall within this single limit budget.
          </p>
        </div>
        
        <div>
          <FormField
            label="Maternity related Limits (Normal)"
            fieldName="maternityNormal"
            placeholder="Enter amount"
          />
          <p className="text-xs text-gray-500 mt-1">
            The entire benefit structure and all limits will fall within this single limit budget.
          </p>
        </div>
        
        <div>
          <FormField
            label="Maternity related Limits (Caesarian)"
            fieldName="maternityCesarean"
            placeholder="Enter amount"
          />
          <p className="text-xs text-gray-500 mt-1">
            The entire benefit structure and all limits will fall within this single limit budget.
          </p>
        </div>
      </div>

      <div className="mt-10 bg-blue-50 p-6 rounded-md">
        <h3 className="text-blue-800 font-medium mb-4">Mentor Health APP Benefit</h3>
        <div>
          <h4 className="text-gray-700 text-sm font-medium mb-2">Mentor Individual Wallet</h4>
          <p className="text-sm text-gray-600 mb-3">
            Individual pre-authorized limit (set by Employer for individual employee as per budget)
          </p>
          <FormField
            label=""
            fieldName="mentorIndividualWallet"
            placeholder="Enter Limit"
          />
        </div>
      </div>

      <div className="mt-6 bg-blue-50 p-6 rounded-md">
        <h3 className="text-blue-800 font-medium mb-4">OPD & Wellness</h3>
        <div>
          <h4 className="text-gray-700 text-sm font-medium mb-2">Complementary: Pool for Category</h4>
          <FormField
            label=""
            fieldName="opdComplementary"
            placeholder="Enter Limit"
          />
        </div>
      </div>

      <div className="mt-6 bg-blue-50 p-6 rounded-md">
        <h3 className="text-blue-800 font-medium mb-4">Admin Fee</h3>
        <FormField
          label=""
          fieldName="adminFee"
          type="percentage"
          placeholder="Enter percentage"
        />
      </div>

      <div className="mt-8 flex justify-end">
        <Button 
          type="button"
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default FinancialSection;
