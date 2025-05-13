
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileDown, FileText, Calendar, BarChart3, PieChart, FileSpreadsheet } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const ReportCard = ({ 
  title, 
  description, 
  type, 
  date, 
  icon 
}: { 
  title: string, 
  description: string, 
  type: string, 
  date: string, 
  icon: React.ReactNode 
}) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex justify-between">
          <CardTitle>{title}</CardTitle>
          <Badge variant="outline">{type}</Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-1" />
          <span>Generated: {date}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-3 border-t">
        <Button variant="ghost" size="sm" className="text-primary">Preview</Button>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <FileDown className="h-4 w-4" />
          <span>Download</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

const AdminReports: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">
          Generate and manage wellness reports for your organization.
        </p>
      </div>
      <Separator />
      
      <div className="grid gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <Select defaultValue="monthly">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Report type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly Reports</SelectItem>
                <SelectItem value="monthly">Monthly Reports</SelectItem>
                <SelectItem value="quarterly">Quarterly Reports</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="emergency">Emergency</SelectItem>
                <SelectItem value="surgery">Surgery</SelectItem>
                <SelectItem value="oncology">Oncology</SelectItem>
                <SelectItem value="pediatrics">Pediatrics</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span>Generate New Report</span>
          </Button>
        </div>
        
        <Tabs defaultValue="saved">
          <TabsList>
            <TabsTrigger value="saved">Saved Reports</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>
          
          <TabsContent value="saved" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ReportCard
                title="Monthly Wellness Summary"
                description="Organization-wide wellness metrics and trends"
                type="PDF"
                date="May. 1, 2025"
                icon={<BarChart3 />}
              />
              <ReportCard
                title="Department Comparison"
                description="Comparative analysis of wellness metrics by department"
                type="Excel"
                date="Apr. 15, 2025"
                icon={<PieChart />}
              />
              <ReportCard
                title="Burnout Risk Analysis"
                description="Distribution of burnout risk levels across staff"
                type="PDF"
                date="Apr. 1, 2025"
                icon={<BarChart3 />}
              />
              <ReportCard
                title="Quarterly Executive Summary"
                description="Executive overview of wellness program effectiveness"
                type="PowerPoint"
                date="Mar. 31, 2025"
                icon={<FileText />}
              />
              <ReportCard
                title="Engagement Statistics"
                description="Analysis of staff engagement with wellness resources"
                type="Excel"
                date="Mar. 15, 2025"
                icon={<FileSpreadsheet />}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="scheduled" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Scheduled Reports</CardTitle>
                <CardDescription>Automatically generated reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Weekly Department Summary</h3>
                      <p className="text-sm text-muted-foreground">Sent every Monday at 8:00 AM</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm">Disable</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Monthly Executive Report</h3>
                      <p className="text-sm text-muted-foreground">Sent on the 1st of each month</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm">Disable</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Quarterly Trend Analysis</h3>
                      <p className="text-sm text-muted-foreground">Sent on the last day of each quarter</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm">Disable</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Schedule New Report</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="templates" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Report Templates</CardTitle>
                <CardDescription>Customizable report templates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="h-10 w-10 p-2 bg-primary/10 text-primary rounded-lg" />
                      <div>
                        <h3 className="font-medium">Wellness Dashboard</h3>
                        <p className="text-sm text-muted-foreground">Complete wellness metrics with visualizations</p>
                      </div>
                    </div>
                    <Button variant="outline">Use Template</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-10 w-10 p-2 bg-primary/10 text-primary rounded-lg" />
                      <div>
                        <h3 className="font-medium">Executive Summary</h3>
                        <p className="text-sm text-muted-foreground">Concise overview for leadership review</p>
                      </div>
                    </div>
                    <Button variant="outline">Use Template</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileSpreadsheet className="h-10 w-10 p-2 bg-primary/10 text-primary rounded-lg" />
                      <div>
                        <h3 className="font-medium">Raw Data Export</h3>
                        <p className="text-sm text-muted-foreground">Complete data export for custom analysis</p>
                      </div>
                    </div>
                    <Button variant="outline">Use Template</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Create Custom Template</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminReports;
