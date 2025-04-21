import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  FileBarChart, 
  FileText, 
  HelpCircle 
} from 'lucide-react';
import Logo from './Logo';
import BenefitStructureDialog from '../dialogs/BenefitStructureDialog';
import { useFormContext } from '@/contexts/FormContext';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [benefitDialogOpen, setBenefitDialogOpen] = useState(false);
  const { setBenefitType } = useFormContext();

  const handleCorporatesClick = () => {
    navigate("/corporate-list");
  };

  const handleBenefitTypeSelect = (type) => {
    setBenefitType(type);
    setBenefitDialogOpen(false);
    navigate('/');
  };

  const sidebarItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: <LayoutDashboard className="w-5 h-5" />, 
      path: '/dashboard',
      onClick: () => navigate('/dashboard')
    },
    { 
      id: 'corporates', 
      label: 'Corporate List', 
      icon: <Building2 className="w-5 h-5" />, 
      path: '/corporate-list',
      onClick: handleCorporatesClick
    },
    { 
      id: 'users', 
      label: 'User Management', 
      icon: <Users className="w-5 h-5" />, 
      path: '/users',
      onClick: () => navigate('/users')
    },
    { 
      id: 'reports', 
      label: 'Reports', 
      icon: <FileBarChart className="w-5 h-5" />, 
      path: '/reports',
      onClick: () => navigate('/reports')
    },
    { 
      id: 'export', 
      label: 'Data Export', 
      icon: <FileText className="w-5 h-5" />, 
      path: '/export',
      onClick: () => navigate('/export')
    },
    { 
      id: 'support', 
      label: 'Help & Support', 
      icon: <HelpCircle className="w-5 h-5" />, 
      path: '/support',
      onClick: () => navigate('/support')
    },
  ];

  return (
    <>
      <div className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col shadow-lg">
        <div className="p-6">
          <Logo />
        </div>
        <div className="flex-1 flex flex-col mt-6">
          {sidebarItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center px-6 py-3 cursor-pointer ${
                location.pathname === item.path ? 'bg-blue-600 text-white' : 'text-gray-500 hover:bg-gray-100'
              }`}
              onClick={item.onClick}
            >
              <div className={`${location.pathname === item.path ? 'text-white' : 'text-blue-600'}`}>
                {item.icon}
              </div>
              <span className="ml-3">{item.label}</span>
              {item.id === 'corporates' || 
               item.id === 'users' || 
               item.id === 'reports' || 
               item.id === 'export' || 
               item.id === 'support' ? (
                <span className="ml-auto">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              ) : null}
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-sm font-medium">FZ</span>
            </div>
            <div className="ml-3">
              <div className="text-sm font-medium">Fazi</div>
              <div className="text-xs text-gray-500">Admin</div>
            </div>
            <div className="ml-auto">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <BenefitStructureDialog 
        open={benefitDialogOpen} 
        onClose={() => setBenefitDialogOpen(false)} 
        onSelect={handleBenefitTypeSelect}
      />
    </>
  );
};

export default Sidebar;
