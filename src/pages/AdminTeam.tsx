
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Search, Filter, PlusCircle, Mail, Phone, Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  status: 'active' | 'on leave' | 'offline';
  riskLevel: 'low' | 'medium' | 'high';
  avatar?: string;
}

const mockTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Senior Doctor",
    department: "Emergency",
    email: "sarah.j@hospital.com",
    phone: "+1 (555) 123-4567",
    status: "active",
    riskLevel: "low"
  },
  {
    id: 2,
    name: "Dr. Michael Wong",
    role: "Surgeon",
    department: "Surgery",
    email: "m.wong@hospital.com",
    phone: "+1 (555) 234-5678",
    status: "active",
    riskLevel: "medium"
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    role: "Pediatrician",
    department: "Pediatrics",
    email: "e.chen@hospital.com",
    phone: "+1 (555) 345-6789",
    status: "on leave",
    riskLevel: "low"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    role: "Cardiologist",
    department: "Cardiology",
    email: "j.wilson@hospital.com",
    phone: "+1 (555) 456-7890",
    status: "active",
    riskLevel: "high"
  },
  {
    id: 5,
    name: "Nurse Lisa Rodriguez",
    role: "Head Nurse",
    department: "Oncology",
    email: "l.rodriguez@hospital.com",
    phone: "+1 (555) 567-8901",
    status: "active",
    riskLevel: "medium"
  },
  {
    id: 6,
    name: "Dr. David Park",
    role: "Neurologist",
    department: "Neurology",
    email: "d.park@hospital.com",
    phone: "+1 (555) 678-9012",
    status: "offline",
    riskLevel: "low"
  },
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const statusColors = {
    active: "bg-green-100 text-green-800",
    "on leave": "bg-yellow-100 text-yellow-800",
    offline: "bg-gray-100 text-gray-800"
  };
  
  const riskColors = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800"
  };
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14">
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback className="bg-primary/10 text-primary">
                {member.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}, {member.department}</p>
              
              <div className="flex gap-2 mt-1">
                <Badge variant="outline" className={statusColors[member.status]}>
                  {member.status === 'active' && <Check className="h-3 w-3 mr-1" />}
                  {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                </Badge>
                <Badge variant="outline" className={riskColors[member.riskLevel]}>
                  {member.riskLevel.charAt(0).toUpperCase() + member.riskLevel.slice(1)} Risk
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Phone className="h-4 w-4" />
              <span className="sr-only">Call</span>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Button variant="outline" className="w-full">View Profile</Button>
          <Button className="w-full">Check In</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const AdminTeam: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Team Members</h1>
        <p className="text-muted-foreground">
          Manage and support your healthcare team.
        </p>
      </div>
      <Separator />
      
      <div className="grid gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <div className="relative w-full">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search team members..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
          
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            <span>Add Team Member</span>
          </Button>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Staff</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">128</div>
              <p className="text-xs text-muted-foreground">Across 6 departments</p>
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
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">High Risk Staff</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">6.25% of total staff</p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Staff</TabsTrigger>
            <TabsTrigger value="high-risk">High Risk</TabsTrigger>
            <TabsTrigger value="departments">By Department</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mockTeamMembers.map(member => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="high-risk" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mockTeamMembers
                .filter(member => member.riskLevel === 'high')
                .map(member => (
                  <TeamMemberCard key={member.id} member={member} />
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="departments" className="mt-6">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Emergency Department</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {mockTeamMembers
                    .filter(member => member.department === 'Emergency')
                    .map(member => (
                      <TeamMemberCard key={member.id} member={member} />
                    ))
                  }
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Surgery Department</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {mockTeamMembers
                    .filter(member => member.department === 'Surgery')
                    .map(member => (
                      <TeamMemberCard key={member.id} member={member} />
                    ))
                  }
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Other Departments</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {mockTeamMembers
                    .filter(member => !['Emergency', 'Surgery'].includes(member.department))
                    .map(member => (
                      <TeamMemberCard key={member.id} member={member} />
                    ))
                  }
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminTeam;
