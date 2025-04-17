
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface BenefitStructureDialogProps {
  open: boolean;
  onClose: () => void;
  onSelect: (type: string) => void;
}

const BenefitStructureDialog: React.FC<BenefitStructureDialogProps> = ({ 
  open, 
  onClose, 
  onSelect 
}) => {
  const benefitTypes = [
    { id: 'universal', label: 'Universal Limit' },
    { id: 'ipd-opd', label: 'IPD & OPD Limit' },
    { id: 'ipd-opd-split', label: 'IPD Limit, OPD Clinics, OPD Pharmacy and OPD Lab' },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-medium mb-4">
            What Type Of Benefit Structure
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          {benefitTypes.map((type) => (
            <div
              key={type.id}
              className="p-3 hover:bg-blue-50 cursor-pointer rounded-md transition-all"
              onClick={() => onSelect(type.id)}
            >
              <span className="text-sm">{type.label}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8"
            onClick={onClose}
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BenefitStructureDialog;
