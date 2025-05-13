
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Brain, Calendar, Check, Clock, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const DashboardHome: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Dr. Johnson</h1>
          <p className="text-gray-500">Here's your wellness overview</p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">Last updated: Today, 2:30 PM</span>
          <Button size="sm" variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            May 13, 2025
          </Button>
        </div>
      </div>
      
      {/* Wellness Score */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Burnout Risk Score</CardTitle>
            <CardDescription>Based on your recent activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Risk Level: Low</span>
              <span className="text-sm font-medium text-green-500">24/100</span>
            </div>
            <Progress value={24} className="h-2 bg-gray-100" />
            <p className="mt-4 text-sm text-gray-500">
              Your burnout risk has decreased by 12% since last week. Keep up the good work!
            </p>
          </CardContent>
        </Card>
        
        <Card className="col-span-1 bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Today's Mood</CardTitle>
            <CardDescription>Based on your check-ins</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center text-secondary">
                  <span className="text-2xl">😊</span>
                </div>
                <div>
                  <p className="font-medium">Feeling Good</p>
                  <p className="text-sm text-gray-500">Logged at 8:30 AM</p>
                </div>
              </div>
              <Button size="sm" variant="ghost">
                Update
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1 bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Wellness Streak</CardTitle>
            <CardDescription>Journal check-ins</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">7 Day Streak</p>
                  <p className="text-sm text-gray-500">Keep the momentum!</p>
                </div>
              </div>
              <Button size="sm" variant="ghost">
                View Stats
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* AI Insights */}
      <Card className="bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>AI Wellness Assistant</CardTitle>
            <Button size="sm" variant="outline">View All Insights</Button>
          </div>
          <CardDescription>Personalized insights based on your data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
            <div className="flex">
              <div className="mr-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Brain className="h-5 w-5" />
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-900">Hello Dr. Johnson,</p>
                <p className="mt-1 text-gray-700">
                  I've noticed you've been working late shifts three days in a row. This pattern has previously correlated with increased stress in your journaling. Consider taking a short mindfulness break today.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button size="sm" variant="secondary">
                    <Clock className="mr-2 h-4 w-4" />
                    5-min Meditation
                  </Button>
                  <Button size="sm" variant="outline">
                    Breathing Exercise
                  </Button>
                  <Button size="sm" variant="outline">
                    Schedule Break
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Recent Journal and Tasks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>Recent Journal Entries</CardTitle>
              <Button size="sm" variant="ghost">View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: 'May 12', title: 'Challenging patient case', excerpt: 'Treated a difficult trauma case today. The team worked well together...' },
                { date: 'May 10', title: 'Department meeting', excerpt: 'New hospital policies were discussed. I shared concerns about...' },
              ].map((entry, index) => (
                <div key={index} className="flex items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                      <FileText className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{entry.date}</p>
                    <p className="font-medium">{entry.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{entry.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>Wellness Tasks</CardTitle>
              <Button size="sm" variant="ghost">View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: 'Complete weekly reflection', time: 'Today', completed: true },
                { title: 'Try guided meditation', time: 'Today', completed: false },
                { title: 'Check in with mentor', time: 'Tomorrow', completed: false },
              ].map((task, index) => (
                <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center ${task.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                      {task.completed ? <Check className="h-4 w-4" /> : null}
                    </div>
                    <div>
                      <p className={`font-medium ${task.completed ? 'text-gray-400 line-through' : 'text-gray-800'}`}>{task.title}</p>
                      <p className="text-sm text-gray-500">{task.time}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    {task.completed ? 'Completed' : 'Complete'}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
