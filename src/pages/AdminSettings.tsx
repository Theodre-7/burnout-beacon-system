
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Settings</h1>
        <p className="text-muted-foreground">
          Configure organization-wide settings and preferences.
        </p>
      </div>
      <Separator />
      
      <Tabs defaultValue="general">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="alerts">Alert Settings</TabsTrigger>
          <TabsTrigger value="privacy">Privacy & Data</TabsTrigger>
          <TabsTrigger value="integration">Integrations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Organization Details</CardTitle>
              <CardDescription>Update your organization information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="orgName">Organization Name</Label>
                  <Input id="orgName" defaultValue="City General Hospital" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="orgId">Organization ID</Label>
                  <Input id="orgId" defaultValue="CGH-12345" disabled />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="adminEmail">Admin Email</Label>
                  <Input id="adminEmail" type="email" defaultValue="admin@hospital.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Admin Phone</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Configure user access and permissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <div>
                  <Label className="block font-medium">Automatic User Approval</Label>
                  <p className="text-sm text-muted-foreground">Automatically approve new user registrations</p>
                </div>
                <Switch id="user-approval" />
              </div>
              <Separator />
              <div className="flex items-center justify-between space-x-2">
                <div>
                  <Label className="block font-medium">Multi-factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Require MFA for all admin users</p>
                </div>
                <Switch id="mfa-required" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between space-x-2">
                <div>
                  <Label className="block font-medium">Self-registration</Label>
                  <p className="text-sm text-muted-foreground">Allow staff to self-register with organization email</p>
                </div>
                <Switch id="self-registration" />
              </div>
              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="alerts" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Alert Thresholds</CardTitle>
              <CardDescription>Configure when alerts are triggered</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>Burnout Risk Threshold</Label>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <Slider defaultValue={[75]} max={100} step={5} className="mb-6" />
                  <p className="text-sm text-muted-foreground">Trigger alerts when burnout risk exceeds this threshold</p>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>Wellness Score Drop</Label>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <Slider defaultValue={[15]} max={50} step={5} className="mb-6" />
                  <p className="text-sm text-muted-foreground">Trigger alerts when scores drop by this percentage</p>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>Journal Entry Sentiment</Label>
                    <span className="text-sm font-medium">High Sensitivity</span>
                  </div>
                  <Select defaultValue="high">
                    <SelectTrigger>
                      <SelectValue placeholder="Select sensitivity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low Sensitivity</SelectItem>
                      <SelectItem value="medium">Medium Sensitivity</SelectItem>
                      <SelectItem value="high">High Sensitivity</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-muted-foreground mt-2">Sensitivity level for concerning journal entries</p>
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Save Thresholds</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Alert Notifications</CardTitle>
              <CardDescription>Configure how alerts are delivered</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <div>
                  <Label className="block font-medium">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Send alerts via email</p>
                </div>
                <Switch id="email-alerts" defaultChecked />
              </div>
              <div className="space-y-2 pl-6">
                <Label htmlFor="notification-emails">Notification Recipients</Label>
                <Input id="notification-emails" defaultValue="admin@hospital.com, hr@hospital.com" />
                <p className="text-xs text-muted-foreground">Comma-separated email addresses</p>
              </div>
              <Separator />
              <div className="flex items-center justify-between space-x-2">
                <div>
                  <Label className="block font-medium">SMS Notifications</Label>
                  <p className="text-sm text-muted-foreground">Send urgent alerts via SMS</p>
                </div>
                <Switch id="sms-alerts" />
              </div>
              <Separator />
              <div className="flex items-center justify-between space-x-2">
                <div>
                  <Label className="block font-medium">Dashboard Notifications</Label>
                  <p className="text-sm text-muted-foreground">Display alerts on the admin dashboard</p>
                </div>
                <Switch id="dashboard-alerts" defaultChecked />
              </div>
              <div className="flex justify-end">
                <Button>Save Notification Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="privacy" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Privacy Settings</CardTitle>
              <CardDescription>Configure data handling and privacy options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <div>
                  <Label className="block font-medium">Anonymized Reporting</Label>
                  <p className="text-sm text-muted-foreground">Keep all reports anonymized by default</p>
                </div>
                <Switch id="anonymized-reports" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between space-x-2">
                <div>
                  <Label className="block font-medium">Journal Privacy</Label>
                  <p className="text-sm text-muted-foreground">Keep journal contents private from admins</p>
                </div>
                <Switch id="journal-privacy" defaultChecked />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="data-retention">Data Retention Period</Label>
                <Select defaultValue="18-months">
                  <SelectTrigger id="data-retention">
                    <SelectValue placeholder="Select retention period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6-months">6 months</SelectItem>
                    <SelectItem value="12-months">12 months</SelectItem>
                    <SelectItem value="18-months">18 months</SelectItem>
                    <SelectItem value="24-months">24 months</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">How long to keep user data</p>
              </div>
              <div className="flex justify-end">
                <Button>Save Privacy Settings</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Compliance & Legal</CardTitle>
              <CardDescription>Manage compliance settings and legal documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <div>
                  <Label className="block font-medium">GDPR Compliance</Label>
                  <p className="text-sm text-muted-foreground">Enable GDPR compliance features</p>
                </div>
                <Switch id="gdpr-compliance" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between space-x-2">
                <div>
                  <Label className="block font-medium">HIPAA Compliance</Label>
                  <p className="text-sm text-muted-foreground">Enable HIPAA compliance features</p>
                </div>
                <Switch id="hipaa-compliance" defaultChecked />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Legal Documents</Label>
                <div className="space-y-3 mt-2">
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <span>Privacy Policy</span>
                    <Button variant="outline" size="sm">Update</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <span>Terms of Service</span>
                    <Button variant="outline" size="sm">Update</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <span>Data Processing Agreement</span>
                    <Button variant="outline" size="sm">Update</Button>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Save Compliance Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="integration" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Connected Systems</CardTitle>
              <CardDescription>Manage connections with other hospital systems</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">HR Management System</h3>
                  <p className="text-sm text-muted-foreground">Connected on May 10, 2025</p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">Electronic Health Records (EHR)</h3>
                  <p className="text-sm text-muted-foreground">Not connected</p>
                </div>
                <Button>Connect</Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">Staff Scheduling System</h3>
                  <p className="text-sm text-muted-foreground">Connected on May 5, 2025</p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>API Settings</CardTitle>
              <CardDescription>Manage API access and keys</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <div className="flex space-x-2">
                  <Input id="api-key" type="password" value="••••••••••••••••••••••••••" readOnly className="font-mono" />
                  <Button variant="outline">Reveal</Button>
                  <Button variant="outline">Regenerate</Button>
                </div>
                <p className="text-xs text-muted-foreground">Use this key to authenticate API requests</p>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between space-x-2">
                <div>
                  <Label className="block font-medium">API Access</Label>
                  <p className="text-sm text-muted-foreground">Enable API access for external systems</p>
                </div>
                <Switch id="api-access" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between space-x-2">
                <div>
                  <Label className="block font-medium">Webhook Notifications</Label>
                  <p className="text-sm text-muted-foreground">Send events to registered webhook URLs</p>
                </div>
                <Switch id="webhook-notifications" />
              </div>
              
              <div className="flex justify-end">
                <Button>Save API Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings;
