
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '@/components/DashboardSidebar';
import Navbar from '@/components/Navbar';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
