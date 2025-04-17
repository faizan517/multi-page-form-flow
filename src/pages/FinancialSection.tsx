
import React, { useEffect } from 'react';
import { useFormContext } from '@/contexts/FormContext';
import { toast } from '@/hooks/use-toast';
import ServiceProviderInfo from '@/components/financial/ServiceProviderInfo';
import FormActions from '@/components/financial/FormActions';
import UniversalLimitForm from '@/components/financial/UniversalLimitForm';
import IPDOPDForm from '@/components/financial/IPDOPDForm';
import IPDOPDSplitForm from '@/components/financial/IPDOPDSplitForm';

const FinancialSection: React.FC = () => {
  const { goToPreviousStep, benefitType, formData, updateFormData } = useFormContext();

  // Calculate total premium when values change (for ipd-opd and ipd-opd-split types)
  useEffect(() => {
    if (benefitType === 'ipd-opd') {
      const ipdPremium = parseFloat(formData.ipdPremiumPerEmployee) || 0;
      const opdPremium = parseFloat(formData.opdPremiumPerEmployee) || 0;
      const adminFee = parseFloat(formData.adminFeePerEmployee) || 0;
      const total = ipdPremium + opdPremium + adminFee;
      
      if (total > 0) {
        updateFormData('totalPremium', total.toString());
      }
    } else if (benefitType === 'ipd-opd-split') {
      const ipdPremium = parseFloat(formData.ipdPremiumPerEmployee) || 0;
      const opdClinicsPremium = parseFloat(formData.opdClinicsPremium) || 0;
      const opdPharmacyPremium = parseFloat(formData.opdPharmacyPremium) || 0;
      const opdLabPremium = parseFloat(formData.opdLabPremium) || 0;
      const adminFee = parseFloat(formData.adminFeePerEmployee) || 0;
      const total = ipdPremium + opdClinicsPremium + opdPharmacyPremium + opdLabPremium + adminFee;
      
      if (total > 0) {
        updateFormData('totalPremium', total.toString());
      }
    }
  }, [
    formData.ipdPremiumPerEmployee,
    formData.opdPremiumPerEmployee,
    formData.adminFeePerEmployee,
    formData.opdClinicsPremium,
    formData.opdPharmacyPremium,
    formData.opdLabPremium,
    benefitType,
    updateFormData
  ]);

  const handleSubmit = () => {
    toast({
      title: "Form Submitted",
      description: "Your benefit structure form has been submitted successfully.",
    });
  };

  // Render the appropriate form based on benefit type
  const renderFormContent = () => {
    switch (benefitType) {
      case 'ipd-opd':
        return <IPDOPDForm />;
      case 'ipd-opd-split':
        return <IPDOPDSplitForm />;
      case 'universal':
      default:
        return <UniversalLimitForm />;
    }
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-8">
        <ServiceProviderInfo />
      </div>
      
      {renderFormContent()}
      
      <FormActions 
        onPrevious={goToPreviousStep} 
        onSubmit={handleSubmit} 
      />
    </div>
  );
};

export default FinancialSection;
