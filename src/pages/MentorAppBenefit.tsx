
import React from 'react';
import FormField from '@/components/ui/FormField';
import { useFormContext } from '@/contexts/FormContext';
import { Button } from '@/components/ui/button';

const MentorAppBenefit: React.FC = () => {
  const { goToNextStep, goToPreviousStep } = useFormContext();

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        <FormField
          label="Online Doctor's Consultations (General Practioner)"
          fieldName="onlineDoctorGeneral"
          type="number"
          placeholder="Enter number consultations"
        />
        
        <FormField
          label="Online Doctor's Consultations (Psychologist)"
          fieldName="onlineDoctorPsychologist"
          type="number"
          placeholder="Enter number consultations"
        />
        
        <FormField
          label="Online Doctor's Consultations (Specialist)"
          fieldName="onlineDoctorSpecialist"
          type="number"
          placeholder="Enter number consultations"
        />
        
        <FormField
          label="Online Consultation through Psychologist through App"
          fieldName="onlineConsultationPsychologist"
          type="number"
          placeholder="Enter number consultations"
        />
        
        <FormField
          label="Discount on Pharmacy with Home Delivery through App"
          fieldName="discountPharmacy"
          type="percentage"
          placeholder="Enter percentage"
        />
        
        <FormField
          label="Discount on Laboratory with Home Sampling through App"
          fieldName="discountLaboratory"
          type="percentage"
          placeholder="Enter percentage"
        />
        
        <FormField
          label="COVID 19 - PCR TEST"
          fieldName="covidTest"
          type="percentage"
          placeholder="Enter percentage"
        />
        
        <FormField
          label="In App Purchases"
          fieldName="inAppPurchases"
          type="percentage"
          placeholder="Enter percentage"
        />
        
        <div className="md:col-span-2">
          <FormField
            label="Mentor Individual Wallet: Individual pre-authorized limit set by Employer for individual employee as per budget"
            fieldName="mentorWalletLimit"
            placeholder="Enter amount"
          />
        </div>
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

export default MentorAppBenefit;
