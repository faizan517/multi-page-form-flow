
import React, { createContext, useContext, useState, ReactNode } from 'react';

type FormData = {
  // Hospitalization Benefit fields
  planName: string;
  additionalHospitalization: string;
  coverageIncludes: string;
  accidentalDental: string;
  prePostHospitalization: string;
  laceratedWounds: string;
  emergencyDental: string;
  emergencyInternational: string;
  daycare: string;
  specializedInvestigations: string;
  icuCoverage: string;
  congenitalBirthDefects: string;
  hepatitisTherapy: string;
  preExistingConditions: string;
  
  // Maternity Benefit fields
  maternityPerCovered: string;
  legalAbortion: string;
  preNatalExpenses: string;
  initialVaccines: string;
  preExistingMaternities: string;
  
  // Mentor Health APP Benefit fields
  onlineDoctorGeneral: string;
  onlineDoctorPsychologist: string;
  onlineDoctorSpecialist: string;
  onlineConsultationPsychologist: string;
  discountPharmacy: string;
  discountLaboratory: string;
  covidTest: string;
  inAppPurchases: string;
  mentorWalletLimit: string;
  
  // OPD & Wellness fields
  complementaryGroupOPD: string;
  wellnessScreening: string;
  healthAwarenessSession: string;
  mentalHealthSession: string;
  
  // Financial Section fields
  universalLimit: string;
  roomChargesLimit: string;
  maternityNormal: string;
  maternityCesarean: string;
  mentorIndividualWallet: string;
  opdComplementary: string;
  adminFee: string;
};

type FormContextType = {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
  currentStep: number;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  goToStep: (step: number) => void;
  totalSteps: number;
};

const defaultFormData: FormData = {
  // Default empty values for all fields
  planName: '',
  additionalHospitalization: '',
  coverageIncludes: '',
  accidentalDental: '',
  prePostHospitalization: '',
  laceratedWounds: '',
  emergencyDental: '',
  emergencyInternational: '',
  daycare: '',
  specializedInvestigations: '',
  icuCoverage: '',
  congenitalBirthDefects: '',
  hepatitisTherapy: '',
  preExistingConditions: '',
  
  maternityPerCovered: '',
  legalAbortion: '',
  preNatalExpenses: '',
  initialVaccines: '',
  preExistingMaternities: '',
  
  onlineDoctorGeneral: '',
  onlineDoctorPsychologist: '',
  onlineDoctorSpecialist: '',
  onlineConsultationPsychologist: '',
  discountPharmacy: '',
  discountLaboratory: '',
  covidTest: '',
  inAppPurchases: '',
  mentorWalletLimit: '',
  
  complementaryGroupOPD: '',
  wellnessScreening: '',
  healthAwarenessSession: '',
  mentalHealthSession: '',
  
  universalLimit: '',
  roomChargesLimit: '',
  maternityNormal: '',
  maternityCesarean: '',
  mentorIndividualWallet: '',
  opdComplementary: '',
  adminFee: '',
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        currentStep,
        goToNextStep,
        goToPreviousStep,
        goToStep,
        totalSteps
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
