
import React from 'react';
import { useFormContext } from '@/contexts/FormContext';
import { ChevronDown } from 'lucide-react';

interface FormFieldProps {
  label: string;
  fieldName: string;
  type?: 'text' | 'select' | 'percentage' | 'number';
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
  className?: string;
  helpText?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  fieldName,
  type = 'text',
  placeholder = '',
  options = [],
  className = '',
  helpText,
}) => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    updateFormData(fieldName as any, e.target.value);
  };

  const getInputElement = () => {
    switch (type) {
      case 'select':
        return (
          <div className="relative">
            <select
              id={fieldName}
              name={fieldName}
              value={(formData as any)[fieldName] || ''}
              onChange={handleChange}
              className="block w-full px-4 py-2.5 pr-10 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">{placeholder || 'Select your option'}</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        );
      case 'percentage':
        return (
          <div className="relative">
            <input
              type="text"
              id={fieldName}
              name={fieldName}
              value={(formData as any)[fieldName] || ''}
              onChange={handleChange}
              placeholder={placeholder || 'Enter percentage'}
              className="block w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-gray-500">%</span>
            </div>
          </div>
        );
      case 'number':
        return (
          <input
            type="number"
            id={fieldName}
            name={fieldName}
            value={(formData as any)[fieldName] || ''}
            onChange={handleChange}
            placeholder={placeholder || 'Enter number'}
            className="block w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        );
      default:
        return (
          <input
            type="text"
            id={fieldName}
            name={fieldName}
            value={(formData as any)[fieldName] || ''}
            onChange={handleChange}
            placeholder={placeholder || 'Enter text'}
            className="block w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        );
    }
  };

  return (
    <div className={`mb-6 ${className}`}>
      <label htmlFor={fieldName} className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      {getInputElement()}
      {helpText && <p className="mt-1 text-xs text-gray-500">{helpText}</p>}
    </div>
  );
};

export default FormField;
