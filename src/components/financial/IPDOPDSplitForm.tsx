
import React from 'react';
import FormField from '@/components/ui/FormField';

const IPDOPDSplitForm: React.FC = () => {
  return (
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
  );
};

export default IPDOPDSplitForm;
