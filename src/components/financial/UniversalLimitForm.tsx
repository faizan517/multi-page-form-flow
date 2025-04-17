
import React from 'react';
import FormField from '@/components/ui/FormField';

const UniversalLimitForm: React.FC = () => {
  return (
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
  );
};

export default UniversalLimitForm;
