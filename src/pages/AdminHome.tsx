
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Download, FileText, Users } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

// Dummy data for charts
const burnoutTrendData = [
  { name: 'Jan', value: 35 },
  { name: 'Feb', value: 38 },
  { name: 'Mar', value: 42 },
  { name: 'Apr', value: 40 },
  { name: 'May', value: 35 },
];

const departmentData = [
  { name: 'ER', low: 20, medium: 10, high: 5 },
  { name: 'ICU', low: 15, medium: 12, high: 8 },
  { name: 'Surgery', low: 25, medium: 8, high: 2 },
  { name: 'Pediatrics', low: 30, medium: 5, high: 0 },
  { name: 'Oncology', low: 22, medium: 9, high: 4 },
];

const AdminHome: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-500">Staff wellness overview and metrics</p>
        </div>
        <div>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Staff</p>
                <p className="text-2xl font-bold">142</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Users className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-green-600">
                <span className="font-medium">+4 new</span> this month
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Engagement Rate</p>
                <p className="text-2xl font-bold">78%</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <FileText className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-green-600">
                <span className="font-medium">+12%</span> from last month
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Avg. Burnout Score</p>
                <p className="text-2xl font-bold">38/100</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                <AlertTriangle className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-green-600">
                <span className="font-medium">-5 points</span> from last month
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">High Risk Staff</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                <AlertTriangle className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-red-600">
                <span className="font-medium">+2</span> from last week
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Burnout Trend Chart */}
      <Card className="bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Organization Burnout Trend</CardTitle>
            <Button variant="outline" size="sm">
              Last 5 Months
            </Button>
          </div>
          <CardDescription>Average burnout score across all departments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={burnoutTrendData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#4C9AFF" 
                  fill="#4C9AFF" 
                  fillOpacity={0.2} 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      {/* Department Comparison */}
      <Card className="bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Department Comparison</CardTitle>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </div>
          <CardDescription>Burnout risk distribution by department</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={departmentData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Bar dataKey="low" stackId="a" fill="#A5D6B7" name="Low Risk" />
                <Bar dataKey="medium" stackId="a" fill="#FEC6A1" name="Medium Risk" />
                <Bar dataKey="high" stackId="a" fill="#FD8A8A" name="High Risk" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      {/* Recent Alerts */}
      <Card className="bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Alerts</CardTitle>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <CardDescription>Recent burnout risk alerts requiring attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: 'A-1243',
                level: 'High',
                department: 'Emergency',
                message: '3 staff members showing high burnout indicators',
                date: 'Today, 10:23 AM',
              },
              {
                id: 'A-1242',
                level: 'Medium',
                department: 'ICU',
                message: 'Increasing stress patterns detected over 2 weeks',
                date: 'Yesterday, 3:45 PM',
              },
              {
                id: 'A-1241',
                level: 'Low',
                department: 'Pediatrics',
                message: 'Slight increase in negative sentiment in journals',
                date: 'May 11, 2:30 PM',
              },
            ].map((alert) => (
              <div key={alert.id} className="flex items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="mr-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    alert.level === 'High' ? 'bg-red-100 text-red-600' : 
                    alert.level === 'Medium' ? 'bg-yellow-100 text-yellow-600' : 
                    'bg-green-100 text-green-600'
                  }`}>
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium flex items-center">
                      <span>{alert.department}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className={`text-sm ${
                        alert.level === 'High' ? 'text-red-600' : 
                        alert.level === 'Medium' ? 'text-yellow-600' : 
                        'text-green-600'
                      }`}>{alert.level} Risk</span>
                    </p>
                    <span className="text-sm text-gray-500">{alert.date}</span>
                  </div>
                  <p className="text-gray-700 mt-1">{alert.message}</p>
                  <div className="mt-2 flex">
                    <Button size="sm" variant="outline" className="mr-2">
                      Investigate
                    </Button>
                    <Button size="sm" variant="ghost">
                      Dismiss
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminHome;
