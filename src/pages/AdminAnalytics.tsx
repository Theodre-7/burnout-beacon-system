
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const mockData = [
  { month: 'Jan', lowRisk: 65, mediumRisk: 28, highRisk: 7 },
  { month: 'Feb', lowRisk: 59, mediumRisk: 32, highRisk: 9 },
  { month: 'Mar', lowRisk: 55, mediumRisk: 34, highRisk: 11 },
  { month: 'Apr', lowRisk: 52, mediumRisk: 36, highRisk: 12 },
  { month: 'May', lowRisk: 58, mediumRisk: 33, highRisk: 9 },
  { month: 'Jun', lowRisk: 63, mediumRisk: 29, highRisk: 8 },
];

const departmentData = [
  { department: 'Emergency', avgScore: 72 },
  { department: 'Surgery', avgScore: 68 },
  { department: 'Pediatrics', avgScore: 81 },
  { department: 'Oncology', avgScore: 65 },
  { department: 'Cardiology', avgScore: 74 },
  { department: 'Neurology', avgScore: 70 },
];

const AdminAnalytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Team Analytics</h1>
        <p className="text-muted-foreground">
          Monitor team wellbeing metrics and identify trends.
        </p>
      </div>
      <Separator />
      
      <div className="grid gap-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Team Wellness Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">72/100</div>
              <p className="text-xs text-muted-foreground">+2% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">High Risk Staff</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">-1 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">+4% from last month</p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="trends">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="trends">Burnout Risk Trends</TabsTrigger>
            <TabsTrigger value="departments">Department Comparison</TabsTrigger>
          </TabsList>
          
          <TabsContent value="trends" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Burnout Risk Distribution</CardTitle>
                <CardDescription>6-month trend of staff burnout risk levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="lowRisk" stroke="#4ade80" name="Low Risk" strokeWidth={2} />
                      <Line type="monotone" dataKey="mediumRisk" stroke="#facc15" name="Medium Risk" strokeWidth={2} />
                      <Line type="monotone" dataKey="highRisk" stroke="#f87171" name="High Risk" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="departments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Department Wellness Scores</CardTitle>
                <CardDescription>Average wellness scores by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={departmentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="department" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="avgScore" fill="#4C9AFF" name="Average Wellness Score" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminAnalytics;
