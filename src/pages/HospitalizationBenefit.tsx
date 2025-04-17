
import React from 'react';
import FormField from '@/components/ui/FormField';
import { useFormContext } from '@/contexts/FormContext';
import { Button } from '@/components/ui/button';

const HospitalizationBenefit: React.FC = () => {
  const { goToNextStep } = useFormContext();

  // Options for dropdowns
  const percentageOptions = [
    { value: '10', label: '10%' },
    { value: '20', label: '20%' },
    { value: '30', label: '30%' },
    { value: '40', label: '40%' },
    { value: '50', label: '50%' },
  ];

  const coverageOptions = [
    { value: 'covered', label: 'Covered' },
    { value: 'not-covered', label: 'Not Covered' },
    { value: 'partially-covered', label: 'Partially Covered' },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        <FormField
          label="Plan Name"
          fieldName="planName"
          placeholder="Enter name"
        />
        
        <FormField
          label="Additional hospitalization limit in case of Accidental Injury"
          fieldName="additionalHospitalization"
          type="select"
          placeholder="Select your percentage"
          options={percentageOptions}
        />
        
        <FormField
          label="Coverage includes charges/ fees of: Room, OT, ICU, Surgeon, Physician, Anesthesiologist, Medicines, labs, Oxygen & Blood Supplies"
          fieldName="coverageIncludes"
          type="select"
          placeholder="Select your Option"
          options={coverageOptions}
        />
        
        <FormField
          label="Accidental Dental Treatment (up to 6 months)"
          fieldName="accidentalDental"
          type="select"
          placeholder="Select your option"
          options={coverageOptions}
        />
        
        <FormField
          label="Pre & Post Hospitalization (Consultation, Medicince, labs)"
          fieldName="prePostHospitalization"
          type="select"
          placeholder="Select your option"
          options={coverageOptions}
        />
        
        <FormField
          label="Lacerated wounds & Fractures, Ambulance charges (emergencies only)"
          fieldName="laceratedWounds"
          type="select"
          placeholder="Select your option"
          options={coverageOptions}
        />
        
        <FormField
          label="Emergency Dental treatment in case of Accidental Injuries (within 48 hours for pain relief only)"
          fieldName="emergencyDental"
          type="select"
          placeholder="Select your option"
          options={coverageOptions}
        />
        
        <FormField
          label="Emergency International Coverage (in line with treatment cost in Pakistan)"
          fieldName="emergencyInternational"
          type="select"
          placeholder="Select your option"
          options={coverageOptions}
        />
        
        <div className="md:col-span-2">
          <FormField
            label="Daycare: Coronary Scan, Incision & drainage under anesthesia (local + general), Laser Therapy (Eye+kidney) Cataract, Endoscopy, Angiography, Dialysis, Chemotherapy"
            fieldName="daycare"
            type="select"
            placeholder="Select your option"
            options={coverageOptions}
          />
        </div>
        
        <FormField
          label="Specialized Investigations: Mammography, Dexa, ECHO MRI, CT Scan, Endoscopy, Thallium Scan, Angiography."
          fieldName="specializedInvestigations"
          type="select"
          placeholder="Select your option"
          options={coverageOptions}
        />
        
        <FormField
          label="ICU/CCU/SCU"
          fieldName="icuCoverage"
          type="select"
          placeholder="Select your option"
          options={coverageOptions}
        />
        
        <FormField
          label="Congenital Birth Defects"
          fieldName="congenitalBirthDefects"
          type="select"
          placeholder="Select your percentage"
          options={percentageOptions}
        />
        
        <FormField
          label="Hepatitis B & C including Interferon Therapy"
          fieldName="hepatitisTherapy"
          type="select"
          placeholder="Select your percentage"
          options={percentageOptions}
        />
        
        <FormField
          label="Pre- Existing Conditions"
          fieldName="preExistingConditions"
          type="select"
          placeholder="Select your percentage"
          options={percentageOptions}
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

export default HospitalizationBenefit;
