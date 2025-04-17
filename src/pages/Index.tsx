
import React from 'react';
import { FormProvider } from '@/contexts/FormContext';
import FormContainer from './FormContainer';

const Index = () => {
  return (
    <FormProvider>
      <FormContainer />
    </FormProvider>
  );
};

export default Index;
