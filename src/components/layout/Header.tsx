
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'employees', label: 'Employees', path: '/employees' },
    { id: 'benefit-structure', label: 'Benefit Structure', path: '/' },
    { id: 'claim-list', label: 'Claim List', path: '/claim-list' },
  ];

  return (
    <div className="border-b border-gray-200">
      <div className="p-6">
        <h1 className="text-2xl font-medium">
          Hello {username} <span role="img" aria-label="wave">👋</span>,
        </h1>
      </div>
      <div className="flex border-b border-gray-200">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`px-8 py-4 cursor-pointer ${
              (item.id === 'benefit-structure' && location.pathname === '/') ||
              location.pathname === item.path
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-700 hover:text-blue-600'
            }`}
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
