
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, File, Home, Settings, User } from 'lucide-react';

const DashboardSidebar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const menuItems = [
    {
      name: 'Dashboard',
      icon: <Home className="w-5 h-5" />,
      path: '/dashboard'
    },
    {
      name: 'Journal',
      icon: <File className="w-5 h-5" />,
      path: '/dashboard/journal'
    },
    {
      name: 'Mood Tracking',
      icon: <Calendar className="w-5 h-5" />,
      path: '/dashboard/mood'
    },
    {
      name: 'Profile',
      icon: <User className="w-5 h-5" />,
      path: '/dashboard/profile'
    },
    {
      name: 'Settings',
      icon: <Settings className="w-5 h-5" />,
      path: '/dashboard/settings'
    }
  ];
  
  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-nunito font-bold text-primary">
            Care<span className="text-gray-800">Mind</span>
          </span>
        </Link>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="w-5 h-5 text-gray-500" />
          </div>
          <div>
            <p className="text-sm font-medium">Dr. Sarah Johnson</p>
            <p className="text-xs text-gray-500">sarah@hospital.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
