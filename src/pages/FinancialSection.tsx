
import React, { useEffect } from 'react';
import { useFormContext } from '@/contexts/FormContext';
import { toast } from '@/hooks/use-toast';
import ServiceProviderInfo from '@/components/financial/ServiceProviderInfo';
import FormActions from '@/components/financial/FormActions';
import UniversalLimitForm from '@/components/financial/UniversalLimitForm';
import IPDOPDForm from '@/components/financial/IPDOPDForm';
import IPDOPDSplitForm from '@/components/financial/IPDOPDSplitForm';
import { useIsMobile } from '@/hooks/use-mobile';
import { createBenefitPlan, getPlansByCorporateId } from '@/services/benefitStructureApi';
import { useQuery } from '@tanstack/react-query';

const FinancialSection: React.FC = () => {
  const { goToPreviousStep, benefitType, formData, updateFormData } = useFormContext();
  const isMobile = useIsMobile();

  // Fetch existing plans
  const { data: plans } = useQuery({
    queryKey: ['plans', 46], // Using corporateId 46 as specified in the example
    queryFn: () => getPlansByCorporateId(46),
  });

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

  const handleSubmit = async () => {
    try {
      const payload = {
        CorporateId: 46,
        PlanName: formData.planName || "Comprehensive Health Plan",
        BenefitStructureTypeId: 2,
        HospitalizationBenefits: {
          AccidentalHospitalizationLimit: parseFloat(formData.additionalHospitalization) || 0.0,
          CoverageIncludesCharges: formData.coverageIncludes || "Room Rent, ICU, Surgery, Medication",
          AccidentalDentalTreatment: formData.accidentalDental === "covered",
          DentalTreatmentLimit: 5000.0,
          PrePostHospitalizationConsultation: parseInt(formData.prePostHospitalization) || 30,
          LaceratedWoundsFractureAmbulanceCovered: formData.laceratedWounds === "covered",
          EmergencyDentalCovered: formData.emergencyDental === "covered",
          EmergencyInternationalCoverage: formData.emergencyInternational === "covered",
          DaycareProcedures: formData.daycare === "covered",
          SpecializedInvestigations: formData.specializedInvestigations === "covered",
          IcuCcuScu: formData.icuCoverage === "covered",
          PreExistingConditions: formData.preExistingConditions === "covered",
          CongenitalBirthDefects: formData.congenitalBirthDefects === "covered",
          HepatitisBC: formData.hepatitisTherapy === "covered"
        },
        MaternityBenefits: {
          LegalAbortionCovered: formData.legalAbortion === "covered",
          PrePostNatalExpensesCovered: formData.preNatalExpenses === "covered",
          NewbornVaccinesCovered: formData.initialVaccines === "covered",
          PreExistingMaternitiesCovered: formData.preExistingMaternities === "covered"
        },
        AppBenefits: {
          GeneralPractitionerConsultationsApp: formData.onlineDoctorGeneral || "Unlimited",
          GeneralPractitionerConsultationsPhone: "5 per month",
          PsychologistConsultations: parseInt(formData.onlineDoctorPsychologist) || 4,
          SpecialistConsultationsApp: parseInt(formData.onlineDoctorSpecialist) || 3,
          PsychologistConsultationsApp: parseInt(formData.onlineConsultationPsychologist) || 2,
          PharmacyDiscountPercentage: parseFloat(formData.discountPharmacy) || 12.5,
          LabDiscountPercentage: parseFloat(formData.discountLaboratory) || 15.0,
          CovidPcrTestCoverage: parseFloat(formData.covidTest) || 25.0,
          InAppPurchasesCoverage: parseFloat(formData.inAppPurchases) || 70.0
        },
        OpdWellnessBenefits: {
          GroupOpdPoolAmount: parseFloat(formData.complementaryGroupOPD) || 25000.0,
          WellnessScreeningCount: formData.wellnessScreening === "true",
          HealthAwarenessSessions: parseInt(formData.healthAwarenessSession) || 5,
          MentalHealthSessions: parseInt(formData.mentalHealthSession) || 3
        },
        FinancialDetails: {
          UniversalLimit: parseFloat(formData.universalLimit) || 200000.0,
          AnnualHospitalizationLimit: parseFloat(formData.ipdPremiumPerEmployee) || 100000.0,
          DailyRoomLimit: parseFloat(formData.dailyRoomBoardLimit) || 3000.0,
          OpdLimit: parseFloat(formData.opdPremiumPerEmployee) || 15000.0,
          PharmacyPool: parseFloat(formData.opdPharmacyPremium) || 6000.0,
          LabPool: parseFloat(formData.opdLabPremium) || 5000.0,
          ClinicConsultationPool: parseFloat(formData.opdClinicsPremium) || 4000.0,
          RoomChargesLimit: parseFloat(formData.roomChargesLimit) || 2500.0,
          NormalMaternityLimit: parseFloat(formData.maternityNormal) || 30000.0,
          CesareanMaternityLimit: parseFloat(formData.maternityCesarean) || 40000.0,
          MentorhIndividualWalletLimit: parseFloat(formData.mentorIndividualWallet) || 10000.0,
          ComplementaryPoolLimit: parseFloat(formData.opdComplementary) || 2000.0,
          AdminFeePercentage: parseFloat(formData.adminFee) || 3.0
        }
      };

      await createBenefitPlan(payload);
      toast({
        title: "Success",
        description: "Benefit plan created successfully",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to create benefit plan. Please try again.",
        variant: "destructive",
      });
    }
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
    <div className={`p-3 md:p-6 bg-gray-50 ${isMobile ? 'space-y-4' : ''}`}>
      <div className="mb-4 md:mb-8">
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
