
import React, { useEffect } from 'react';
import FormField from '@/components/ui/FormField';
import { useFormContext } from '@/contexts/FormContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

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

  // Universal Limit Form (first image)
  if (benefitType === 'universal' || !benefitType) {
    return (
      <div className="p-6 bg-gray-50">
        <div className="mb-8">
          <div className="p-4 bg-blue-50 mb-6 rounded-md">
            <h3 className="font-medium text-gray-800 mb-2">Service Provider</h3>
            <p className="text-sm text-gray-600">
              Mentor Health can obtain Takaful Coverage from any Company in order to provide the best solution as per requirement, and all will be digitally connected through the Mentor platform, offering hassle-free service to organizations and their staff.
            </p>
            <p className="text-sm text-gray-500 text-right mt-2">TPA Services provided by</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Universal Limit</label>
                <FormField
                  label=""
                  fieldName="universalLimit"
                  placeholder="Enter amount"
                />
                <p className="text-xs text-gray-500 mt-1">The entire benefit structure and all limits will fall within this single-limit budget.</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Room Charges Limit</label>
                <FormField
                  label=""
                  fieldName="roomChargesLimit"
                  placeholder="Enter amount"
                />
                <p className="text-xs text-gray-500 mt-1">The entire benefit structure and all limits will fall within this single-limit budget.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-800 mb-4">Maternity related Limits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">(Normal)</label>
                <FormField
                  label=""
                  fieldName="maternityNormal"
                  placeholder="Enter amount"
                />
                <p className="text-xs text-gray-500 mt-1">The entire benefit structure and all limits will fall within this single-limit budget.</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">(Cesarean)</label>
                <FormField
                  label=""
                  fieldName="maternityCesarean"
                  placeholder="Enter amount"
                />
                <p className="text-xs text-gray-500 mt-1">The entire benefit structure and all limits will fall within this single-limit budget.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-800 mb-4">Mentor Health APP Benefit</h3>
            <div>
              <label className="block text-sm font-medium mb-2">Mentor Individual Wallet</label>
              <p className="text-xs text-gray-600 mb-2">Individual pre-authorized limit (set by Employer for individual employee as per budget)</p>
              <FormField
                label=""
                fieldName="mentorIndividualWallet"
                placeholder="Enter Limit"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-800 mb-4">OPD & Wellness</h3>
            <div>
              <label className="block text-sm font-medium mb-2">Complementary</label>
              <p className="text-xs text-gray-600 mb-2">Pool for Category</p>
              <FormField
                label=""
                fieldName="opdComplementary"
                placeholder="Enter Limit"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm">
            <div>
              <label className="block text-sm font-medium mb-2">Admin Fee</label>
              <FormField
                label=""
                fieldName="adminFee"
                type="percentage"
                placeholder="Enter percentage"
              />
            </div>
          </div>
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

  // IPD & OPD Limit Form (second image)
  if (benefitType === 'ipd-opd') {
    return (
      <div className="p-6 bg-gray-50">
        <div className="mb-8">
          <div className="p-4 bg-blue-50 mb-6 rounded-md">
            <h3 className="font-medium text-gray-800 mb-2">Service Provider</h3>
            <p className="text-sm text-gray-600">
              Mentor Health can obtain Takaful Coverage from any Company in order to provide the best solution as per requirement, and all will be digitally connected through the Mentor platform, offering hassle-free service to organizations and their staff.
            </p>
            <p className="text-sm text-gray-500 text-right mt-2">TPA Services provided by</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-800 mb-4">Hospitalization Benefit (IPD)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Annual Limit for Hospitalization</label>
                <FormField
                  label=""
                  fieldName="ipdPremiumPerEmployee"
                  placeholder="Enter Limit"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Daily Room & Board (Sub Limit)</label>
                <FormField
                  label=""
                  fieldName="dailyRoomBoardLimit"
                  placeholder="Enter Limit"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-800 mb-4">Maternity Benefit (IPD)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Normal</label>
                <FormField
                  label=""
                  fieldName="maternityNormal"
                  placeholder="Enter Limit"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Cesarean Case</label>
                <FormField
                  label=""
                  fieldName="maternityCesarean"
                  placeholder="Enter Limit"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-800 mb-4">Mentor Health APP Benefit</h3>
            <div>
              <label className="block text-sm font-medium mb-2">Mentor Individual Wallet</label>
              <p className="text-xs text-gray-600 mb-2">Individual pre-authorized limit (set by Employer for individual employee as per budget)</p>
              <FormField
                label=""
                fieldName="mentorIndividualWallet"
                placeholder="Enter Limit"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-800 mb-4">OPD (Pharmacy, Clinic & Lab)</h3>
            <div>
              <label className="block text-sm font-medium mb-2">OPD limit</label>
              <FormField
                label=""
                fieldName="opdPremiumPerEmployee"
                placeholder="Enter Limit"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-800 mb-4">OPD & Wellness</h3>
            <div>
              <label className="block text-sm font-medium mb-2">Complementary</label>
              <p className="text-xs text-gray-600 mb-2">Pool for Category</p>
              <FormField
                label=""
                fieldName="opdComplementary"
                placeholder="Enter Limit"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Admin Fee (per employee)</label>
                <FormField
                  label=""
                  fieldName="adminFeePerEmployee"
                  type="percentage"
                  placeholder="Enter percentage"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Total Premium</label>
                <FormField
                  label=""
                  fieldName="totalPremium"
                  placeholder="Calculated total premium"
                  disabled={true}
                />
              </div>
            </div>
          </div>
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

  // IPD Limit, OPD Clinics, OPD Pharmacy and OPD Lab Form (third image)
  if (benefitType === 'ipd-opd-split') {
    return (
      <div className="p-6 bg-gray-50">
        <div className="mb-8">
          <div className="p-4 bg-blue-50 mb-6 rounded-md">
            <h3 className="font-medium text-gray-800 mb-2">Service Provider</h3>
            <p className="text-sm text-gray-600">
              Mentor Health can obtain Takaful Coverage from any Company in order to provide the best solution as per requirement, and all will be digitally connected through the Mentor platform, offering hassle-free service to organizations and their staff.
            </p>
            <p className="text-sm text-gray-500 text-right mt-2">TPA Services provided by</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-800 mb-4">Hospitalization Benefit (IPD)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Annual Limit for Hospitalization</label>
                <FormField
                  label=""
                  fieldName="ipdPremiumPerEmployee"
                  placeholder="Enter Limit"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Daily Room & Board (Sub Limit)</label>
                <FormField
                  label=""
                  fieldName="dailyRoomBoardLimit"
                  placeholder="Enter Limit"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-800 mb-4">Maternity Benefit (IPD)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Normal</label>
                <FormField
                  label=""
                  fieldName="maternityNormal"
                  placeholder="Enter Limit"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Cesarean Case</label>
                <FormField
                  label=""
                  fieldName="maternityCesarean"
                  placeholder="Enter Limit"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-800 mb-4">Mentor Health APP Benefit</h3>
            <div>
              <label className="block text-sm font-medium mb-2">Mentor Individual Wallet</label>
              <p className="text-xs text-gray-600 mb-2">Individual pre-authorized limit (set by Employer for individual employee as per budget)</p>
              <FormField
                label=""
                fieldName="mentorIndividualWallet"
                placeholder="Enter Limit"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Pharmacy Pool</label>
                <p className="text-xs text-gray-600 mb-2">Pharmacy Pool Amount/employee</p>
                <FormField
                  label=""
                  fieldName="opdPharmacyPremium"
                  placeholder="Enter amount"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Lab Pool</label>
                <p className="text-xs text-gray-600 mb-2">Lab Pool Amount/employee</p>
                <FormField
                  label=""
                  fieldName="opdLabPremium"
                  placeholder="Enter amount"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">OPD/Clinic Consultation</label>
              <p className="text-xs text-gray-600 mb-2">Clinic Consultation Pool Amount/employee</p>
              <FormField
                label=""
                fieldName="opdClinicsPremium"
                placeholder="Enter amount"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-800 mb-4">OPD & Wellness</h3>
            <div>
              <label className="block text-sm font-medium mb-2">Complementary</label>
              <p className="text-xs text-gray-600 mb-2">Pool for Category</p>
              <FormField
                label=""
                fieldName="opdComplementary"
                placeholder="Enter Limit"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Admin Fee (per employee)</label>
                <FormField
                  label=""
                  fieldName="adminFeePerEmployee"
                  type="percentage"
                  placeholder="Enter percentage"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Total Premium</label>
                <FormField
                  label=""
                  fieldName="totalPremium"
                  placeholder="Calculated total premium"
                  disabled={true}
                />
              </div>
            </div>
          </div>
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
