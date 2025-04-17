
import React from 'react';
import { Button } from '@/components/ui/button';

interface FormActionsProps {
  onPrevious: () => void;
  onSubmit: () => void;
}

const FormActions: React.FC<FormActionsProps> = ({ onPrevious, onSubmit }) => {
  return (
    <div className="mt-8 flex justify-end gap-4">
      <Button 
        type="button"
        onClick={onPrevious}
        variant="outline"
        className="px-8 py-2"
      >
        Previous
      </Button>
      <Button 
        type="button"
        onClick={onSubmit}
        className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </Button>
    </div>
  );
};

export default FormActions;
