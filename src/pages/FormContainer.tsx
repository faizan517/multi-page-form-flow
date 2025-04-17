
import React from 'react';
import { useFormContext } from '@/contexts/FormContext';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import FormTabs from '@/components/layout/FormTabs';
import HospitalizationBenefit from './HospitalizationBenefit';
import MaternityBenefit from './MaternityBenefit';
import MentorAppBenefit from './MentorAppBenefit';
import OPDWellnessBenefit from './OPDWellnessBenefit';
import FinancialSection from './FinancialSection';

const FormContainer: React.FC = () => {
  const { currentStep } = useFormContext();

  // Render the appropriate form step based on currentStep
  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return <HospitalizationBenefit />;
      case 2:
        return <MaternityBenefit />;
      case 3:
        return <MentorAppBenefit />;
      case 4:
        return <OPDWellnessBenefit />;
      case 5:
        return <FinancialSection />;
      default:
        return <HospitalizationBenefit />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header username="Fazi" />
        <div className="flex-1 overflow-y-auto">
          <FormTabs />
          <div>
            {renderFormStep()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
