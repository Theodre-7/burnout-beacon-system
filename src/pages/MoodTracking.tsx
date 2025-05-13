
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Slider } from '@/components/ui/slider';
import { Smile, SmilePlus, Meh, Frown, AlertCircle } from 'lucide-react';

const MoodTracking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [moodValue, setMoodValue] = useState<number[]>([3]);
  const [moodNote, setMoodNote] = useState('');
  
  const moodLabels = [
    { value: 1, icon: <Frown className="h-8 w-8 text-red-500" />, label: 'Struggling' },
    { value: 2, icon: <AlertCircle className="h-8 w-8 text-orange-500" />, label: 'Stressed' },
    { value: 3, icon: <Meh className="h-8 w-8 text-yellow-500" />, label: 'Okay' },
    { value: 4, icon: <Smile className="h-8 w-8 text-green-500" />, label: 'Good' },
    { value: 5, icon: <SmilePlus className="h-8 w-8 text-emerald-500" />, label: 'Great' },
  ];

  const getCurrentMoodIcon = () => {
    const currentMood = moodLabels.find(m => m.value === moodValue[0]);
    return currentMood ? currentMood.icon : null;
  };

  const getCurrentMoodLabel = () => {
    const currentMood = moodLabels.find(m => m.value === moodValue[0]);
    return currentMood ? currentMood.label : '';
  };

  const handleSaveMood = () => {
    console.log('Saving mood:', {
      date: selectedDate,
      moodValue: moodValue[0],
      moodLabel: getCurrentMoodLabel(),
      note: moodNote
    });
    // In a real app, we would save this to a database
    alert('Mood saved successfully!');
    setMoodNote('');
  };

  const pastMoods = [
    { date: '2025-05-12', value: 4, note: 'Had a good day at work with supportive colleagues.' },
    { date: '2025-05-11', value: 2, note: 'Difficult patient case, feeling drained.' },
    { date: '2025-05-10', value: 3, note: 'Regular day, nothing special.' },
    { date: '2025-05-09', value: 5, note: 'Great success with a challenging procedure!' },
    { date: '2025-05-08', value: 3, note: 'Neutral day, a bit tired.' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Mood Tracking</h1>
        <p className="text-gray-500">Monitor your emotional wellbeing over time</p>
      </div>

      <Tabs defaultValue="track">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="track">Track Mood</TabsTrigger>
          <TabsTrigger value="history">Mood History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="track" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>How are you feeling today?</CardTitle>
                <CardDescription>Select your current mood</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center">
                  {moodLabels.map((mood) => (
                    <div 
                      key={mood.value} 
                      className={`flex flex-col items-center cursor-pointer p-2 rounded-lg ${
                        moodValue[0] === mood.value ? 'bg-primary/10' : ''
                      }`}
                      onClick={() => setMoodValue([mood.value])}
                    >
                      {mood.icon}
                      <span className="text-xs mt-1">{mood.label}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Struggling</span>
                    <span>Great</span>
                  </div>
                  <Slider 
                    value={moodValue} 
                    onValueChange={setMoodValue} 
                    max={5} 
                    min={1} 
                    step={1} 
                  />
                </div>
                
                <div>
                  <label htmlFor="mood-note" className="block text-sm font-medium mb-2">
                    Add a note (optional)
                  </label>
                  <textarea
                    id="mood-note"
                    rows={3}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="How was your day? Any specific events that affected your mood?"
                    value={moodNote}
                    onChange={(e) => setMoodNote(e.target.value)}
                  />
                </div>
                
                <Button onClick={handleSaveMood} className="w-full">
                  Save Mood Entry
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Select Date</CardTitle>
                <CardDescription>Change date for your mood entry</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
                
                <div className="mt-4 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    {getCurrentMoodIcon()}
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{getCurrentMoodLabel()}</p>
                    <p className="text-sm text-gray-500">
                      {selectedDate?.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Your Mood History</CardTitle>
              <CardDescription>Review your past mood entries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {pastMoods.map((mood, index) => {
                  const moodInfo = moodLabels.find(m => m.value === mood.value);
                  return (
                    <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {moodInfo?.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-semibold">{moodInfo?.label}</p>
                          <p className="text-sm text-gray-500">{mood.date}</p>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{mood.note}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MoodTracking;
