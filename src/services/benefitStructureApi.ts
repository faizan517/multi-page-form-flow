
const BASE_URL = 'http://184.168.124.181:12/api/BenefitStructure';

interface Plan {
  Id: number;
  PlanName: string;
}

export const createBenefitPlan = async (data: any) => {
  try {
    const response = await fetch(`${BASE_URL}/CreateBenefitPlan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to create benefit plan');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating benefit plan:', error);
    throw error;
  }
};

export const getPlansByCorporateId = async (corporateId: number): Promise<Plan[]> => {
  try {
    const response = await fetch(`${BASE_URL}/GetPlansByCorporateId?corporateId=${corporateId}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch plans');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching plans:', error);
    throw error;
  }
};
