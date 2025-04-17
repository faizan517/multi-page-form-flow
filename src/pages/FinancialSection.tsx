
import React from 'react';
import FormField from '@/components/ui/FormField';
import { useFormContext } from '@/contexts/FormContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const FinancialSection: React.FC = () => {
  const { goToPreviousStep, benefitType } = useFormContext();

  const handleSubmit = () => {
    toast({
      title: "Form Submitted",
      description: "Your benefit structure form has been submitted successfully.",
    });
  };

  // Universal Limit Form (default)
  if (benefitType === 'universal' || !benefitType) {
    return (
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <FormField
            label="Universal Limit"
            fieldName="universalLimit"
            placeholder="Enter amount"
          />
          
          <FormField
            label="Room Charges Limit"
            fieldName="roomChargesLimit"
            placeholder="Enter amount"
          />
          
          <FormField
            label="Maternity Normal"
            fieldName="maternityNormal"
            placeholder="Enter amount"
          />
          
          <FormField
            label="Maternity Cesarean"
            fieldName="maternityCesarean"
            placeholder="Enter amount"
          />
          
          <FormField
            label="Mentor Individual Wallet"
            fieldName="mentorIndividualWallet"
            placeholder="Enter amount"
          />
          
          <FormField
            label="OPD Complementary"
            fieldName="opdComplementary"
            placeholder="Enter amount"
          />
          
          <FormField
            label="Admin Fee"
            fieldName="adminFee"
            placeholder="Enter amount"
          />
        </div>
        
        <div className="mt-8 flex justify-end gap-4">
          <Button 
            type="button"
            onClick={goToPreviousStep}
            variant="outline"
            className="px-8 py-2"
          >
            Previous
          </Button>
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
  }

  // IPD & OPD Limit Form
  if (benefitType === 'ipd-opd') {
    return (
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <FormField
            label="IPD Premium per Employee"
            fieldName="ipdPremiumPerEmployee"
            placeholder="Enter amount"
          />
          
          <FormField
            label="OPD Premium per Employee"
            fieldName="opdPremiumPerEmployee"
            placeholder="Enter amount"
          />
          
          <FormField
            label="Admin Fee (per employee)"
            fieldName="adminFeePerEmployee"
            placeholder="Enter amount"
          />
          
          <FormField
            label="Total Premium"
            fieldName="totalPremium"
            placeholder="Calculated total premium"
            disabled
          />
        </div>
        
        <div className="mt-8 flex justify-end gap-4">
          <Button 
            type="button"
            onClick={goToPreviousStep}
            variant="outline"
            className="px-8 py-2"
          >
            Previous
          </Button>
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
  }

  // IPD Limit, OPD Clinics, OPD Pharmacy and OPD Lab Form
  if (benefitType === 'ipd-opd-split') {
    return (
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <FormField
            label="IPD Premium per Employee"
            fieldName="ipdPremiumPerEmployee"
            placeholder="Enter amount"
          />
          
          <FormField
            label="OPD Clinics Premium per Employee"
            fieldName="opdClinicsPremium"
            placeholder="Enter amount"
          />
          
          <FormField
            label="OPD Pharmacy Premium per Employee"
            fieldName="opdPharmacyPremium"
            placeholder="Enter amount"
          />
          
          <FormField
            label="OPD Lab Premium per Employee"
            fieldName="opdLabPremium"
            placeholder="Enter amount"
          />
          
          <FormField
            label="Admin Fee (per employee)"
            fieldName="adminFeePerEmployee"
            placeholder="Enter amount"
          />
          
          <FormField
            label="Total Premium"
            fieldName="totalPremium"
            placeholder="Calculated total premium"
            disabled
          />
        </div>
        
        <div className="mt-8 flex justify-end gap-4">
          <Button 
            type="button"
            onClick={goToPreviousStep}
            variant="outline"
            className="px-8 py-2"
          >
            Previous
          </Button>
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
  }

  // Fallback to default
  return null;
};

export default FinancialSection;
