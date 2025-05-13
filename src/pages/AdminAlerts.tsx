
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Bell, Clock, CheckCircle2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AlertItem = ({ 
  severity, 
  department, 
  message, 
  time, 
  status 
}: { 
  severity: 'high' | 'medium' | 'low',
  department: string,
  message: string,
  time: string,
  status: 'new' | 'acknowledged' | 'resolved'
}) => {
  const severityColors = {
    high: 'bg-red-100 text-red-800 border-red-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    low: 'bg-blue-100 text-blue-800 border-blue-200'
  };
  
  const statusBadges = {
    new: <Badge variant="destructive">New</Badge>,
    acknowledged: <Badge variant="outline">Acknowledged</Badge>,
    resolved: <Badge variant="secondary">Resolved</Badge>
  };
  
  const severityIcons = {
    high: <AlertTriangle className="h-5 w-5 text-red-600" />,
    medium: <Bell className="h-5 w-5 text-yellow-600" />,
    low: <Bell className="h-5 w-5 text-blue-600" />
  };
  
  return (
    <div className={`p-4 border rounded-lg mb-3 ${severityColors[severity]}`}>
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <div className="mt-0.5">
            {severityIcons[severity]}
          </div>
          <div>
            <div className="font-medium">{message}</div>
            <div className="text-sm text-muted-foreground">Department: {department}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {statusBadges[status]}
        </div>
      </div>
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5 mr-1" />
          {time}
        </div>
        {status !== 'resolved' && (
          <div className="flex gap-2">
            {status === 'new' && (
              <Button size="sm" variant="outline">Acknowledge</Button>
            )}
            <Button size="sm">{status === 'new' ? 'Respond' : 'Resolve'}</Button>
          </div>
        )}
      </div>
    </div>
  );
};

const AdminAlerts: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Alerts</h1>
        <p className="text-muted-foreground">
          Monitor and respond to wellness alerts across your organization.
        </p>
      </div>
      <Separator />
      
      <div className="grid gap-6">
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Last 30 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">High Priority</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">8</div>
              <p className="text-xs text-muted-foreground">Require immediate attention</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Unresolved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">12</div>
              <p className="text-xs text-muted-foreground">Awaiting resolution</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Resolved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">16</div>
              <p className="text-xs text-muted-foreground">In the last 30 days</p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="active">
          <TabsList>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="acknowledged">Acknowledged</TabsTrigger>
            <TabsTrigger value="resolved">Resolved</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Alerts</CardTitle>
                <CardDescription>Alerts that require attention</CardDescription>
              </CardHeader>
              <CardContent>
                <AlertItem 
                  severity="high" 
                  department="Emergency" 
                  message="3 staff members showing high burnout risk" 
                  time="Today, 10:42 AM" 
                  status="new" 
                />
                <AlertItem 
                  severity="high" 
                  department="Surgery" 
                  message="Staff member reported concerning journal entry" 
                  time="Today, 9:15 AM" 
                  status="new" 
                />
                <AlertItem 
                  severity="medium" 
                  department="Oncology" 
                  message="Department wellness score dropped 15%" 
                  time="Yesterday, 3:30 PM" 
                  status="new" 
                />
                <AlertItem 
                  severity="low" 
                  department="Radiology" 
                  message="Low engagement with wellness resources" 
                  time="Yesterday, 11:20 AM" 
                  status="new" 
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="acknowledged" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Acknowledged Alerts</CardTitle>
                <CardDescription>Alerts that have been seen but not yet resolved</CardDescription>
              </CardHeader>
              <CardContent>
                <AlertItem 
                  severity="high" 
                  department="Pediatrics" 
                  message="Surge in negative mood entries after schedule change" 
                  time="2 days ago" 
                  status="acknowledged" 
                />
                <AlertItem 
                  severity="medium" 
                  department="ICU" 
                  message="Multiple missed wellness check-ins" 
                  time="3 days ago" 
                  status="acknowledged" 
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="resolved" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Resolved Alerts</CardTitle>
                <CardDescription>Alerts that have been addressed</CardDescription>
              </CardHeader>
              <CardContent>
                <AlertItem 
                  severity="high" 
                  department="Cardiology" 
                  message="Staff member requested support" 
                  time="5 days ago" 
                  status="resolved" 
                />
                <AlertItem 
                  severity="medium" 
                  department="Neurology" 
                  message="Burnout risk elevation in night shift staff" 
                  time="1 week ago" 
                  status="resolved" 
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Alert Settings</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">High burnout risk alerts</p>
                    <p className="text-sm text-muted-foreground">Alert when staff burnout risk exceeds 75%</p>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Department wellness score drops</p>
                    <p className="text-sm text-muted-foreground">Alert when department scores drop more than 10%</p>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Concerning journal entries</p>
                    <p className="text-sm text-muted-foreground">AI detection of concerning patterns in journal entries</p>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminAlerts;
