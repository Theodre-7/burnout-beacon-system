
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, FileText, Mic, Send } from 'lucide-react';

const Journal: React.FC = () => {
  const [journalEntry, setJournalEntry] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Journal entry submitted:', journalEntry);
    setJournalEntry('');
    // Here you would normally send the data to your backend
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Journal</h1>
        <p className="text-gray-500">Document your thoughts and experiences</p>
      </div>
      
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>New Entry</CardTitle>
          <CardDescription>How was your day? Share your thoughts, feelings, and experiences.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-500">May 13, 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-500">
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
              <Textarea
                placeholder="Write about your day, challenges you faced, or moments of joy..."
                value={journalEntry}
                onChange={(e) => setJournalEntry(e.target.value)}
                rows={8}
                className="resize-none focus-visible:ring-primary"
              />
            </div>
            <div className="flex items-center justify-between">
              <Button type="button" variant="outline" size="sm">
                <Mic className="h-4 w-4 mr-2" />
                Voice Entry
              </Button>
              <div className="flex items-center space-x-2">
                <Button type="button" variant="outline" size="sm">
                  Save Draft
                </Button>
                <Button type="submit" size="sm" disabled={journalEntry.trim() === ''}>
                  <Send className="h-4 w-4 mr-2" />
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recent Entries</h2>
          <Button variant="outline" size="sm">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              date: 'May 12, 2025',
              title: 'Challenging patient case',
              excerpt: 'Treated a difficult trauma case today. The team worked well together despite the challenges. I felt proud of how we handled it, though I noticed my stress levels rising during the critical moments.',
              sentiment: 'mixed',
            },
            {
              date: 'May 10, 2025',
              title: 'Department meeting',
              excerpt: 'New hospital policies were discussed. I shared concerns about the scheduling system and felt heard by administration. Positive steps toward better work-life balance.',
              sentiment: 'positive',
            },
            {
              date: 'May 8, 2025',
              title: 'Long shift reflections',
              excerpt: 'Double shift today due to staffing shortages. Feeling physically exhausted but managed to maintain good patient care. Need to focus on rest tomorrow.',
              sentiment: 'negative',
            },
            {
              date: 'May 5, 2025',
              title: 'Professional development',
              excerpt: 'Attended a workshop on trauma-informed care. Learning new techniques has reinvigorated my passion for this work. Looking forward to implementing these approaches.',
              sentiment: 'positive',
            },
          ].map((entry, index) => (
            <Card key={index} className="bg-white hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{entry.date}</span>
                  <div className={`w-3 h-3 rounded-full ${
                    entry.sentiment === 'positive' ? 'bg-green-500' : 
                    entry.sentiment === 'negative' ? 'bg-red-500' : 'bg-yellow-500'
                  }`}></div>
                </div>
                <CardTitle className="text-lg">{entry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-3">{entry.excerpt}</p>
                <div className="mt-4 flex justify-end">
                  <Button variant="ghost" size="sm" className="text-primary">
                    <FileText className="h-4 w-4 mr-2" />
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
