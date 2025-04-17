
import React from 'react';
import { useFormContext } from '@/contexts/FormContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FormTabs: React.FC = () => {
  const { currentStep, goToStep } = useFormContext();

  const tabs = [
    { id: 1, label: 'Hospitalization Benefit (IPD)' },
    { id: 2, label: 'Maternity Benefit (IPD)' },
    { id: 3, label: 'Mentor Health APP Benefit' },
    { id: 4, label: 'OPD & Wellness' },
    { id: 5, label: 'Financial Section' },
  ];

  return (
    <div className="flex items-center justify-between border-b border-gray-200">
      <button className="p-4 text-gray-500">
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <div className="flex-1 flex">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex-1 py-4 px-2 text-center cursor-pointer transition-colors ${
              currentStep === tab.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => goToStep(tab.id)}
          >
            <span className="text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis block">
              {tab.label}
            </span>
          </div>
        ))}
      </div>
      
      <button className="p-4 text-gray-500">
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FormTabs;
