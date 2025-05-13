
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart, Bell, File, Home, Settings, Users } from 'lucide-react';

const AdminSidebar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const menuItems = [
    {
      name: 'Overview',
      icon: <Home className="w-5 h-5" />,
      path: '/admin'
    },
    {
      name: 'Team Analytics',
      icon: <BarChart className="w-5 h-5" />,
      path: '/admin/analytics'
    },
    {
      name: 'Alerts',
      icon: <Bell className="w-5 h-5" />,
      path: '/admin/alerts'
    },
    {
      name: 'Reports',
      icon: <File className="w-5 h-5" />,
      path: '/admin/reports'
    },
    {
      name: 'Team Members',
      icon: <Users className="w-5 h-5" />,
      path: '/admin/team'
    },
    {
      name: 'Settings',
      icon: <Settings className="w-5 h-5" />,
      path: '/admin/settings'
    }
  ];
  
  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-nunito font-bold text-primary">
            Care<span className="text-gray-800">Mind</span>
            <span className="ml-1 text-xs font-normal text-gray-500">Admin</span>
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
            <Users className="w-5 h-5 text-gray-500" />
          </div>
          <div>
            <p className="text-sm font-medium">HR Manager</p>
            <p className="text-xs text-gray-500">admin@hospital.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
