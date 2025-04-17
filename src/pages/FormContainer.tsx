
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
import { useIsMobile } from '@/hooks/use-mobile';

const FormContainer: React.FC = () => {
  const { currentStep } = useFormContext();
  const isMobile = useIsMobile();

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
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header username="Fazi" />
        <div className="flex-1 overflow-y-auto">
          <FormTabs />
          <div className={isMobile ? "px-2" : ""}>
            {renderFormStep()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
