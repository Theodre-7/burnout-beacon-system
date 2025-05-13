
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import { AlertTriangle, BarChart, Brain, Calendar, Clock, FileText, Heart, MessageSquare, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Comprehensive Burnout Prevention</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Our platform offers a complete suite of tools designed specifically for healthcare professionals and institutions to monitor, prevent, and address burnout.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Features */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              CareMind combines advanced AI technology with evidence-based wellness practices to create a comprehensive burnout prevention platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Early Burnout Detection"
              description="AI algorithms detect subtle changes in language and mood patterns to identify early signs of burnout before they become critical."
              icon={<AlertTriangle className="h-6 w-6" />}
            />
            <FeatureCard
              title="AI Wellness Assistant"
              description="Personalized recommendations and insights based on your unique patterns, providing timely interventions when needed."
              icon={<Brain className="h-6 w-6" />}
            />
            <FeatureCard
              title="Journaling Companion"
              description="Private, secure journaling with AI insights that help process emotions and track mental wellbeing over time."
              icon={<FileText className="h-6 w-6" />}
            />
            <FeatureCard
              title="Mood Tracking"
              description="Simple daily check-ins to monitor emotional wellbeing with visual trends and patterns over time."
              icon={<Heart className="h-6 w-6" />}
            />
            <FeatureCard
              title="Wellness Analytics"
              description="Real-time analytics and trends to understand your mental health patterns and make informed decisions."
              icon={<BarChart className="h-6 w-6" />}
            />
            <FeatureCard
              title="Team Insights (Admin)"
              description="Anonymized team-level analytics to help leadership identify departments that may need additional support."
              icon={<User className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>
      
      {/* Platform Sections */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Platform Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A closer look at how CareMind works for different stakeholders
            </p>
          </div>
          
          {/* For Healthcare Workers */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  For Healthcare Workers
                </div>
                <h3 className="text-2xl font-bold mb-4">Your Personal Wellness Companion</h3>
                <p className="text-gray-600 mb-6">
                  CareMind provides healthcare professionals with a private space to process their experiences and receive personalized support.
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      icon: <FileText className="h-5 w-5" />,
                      title: "Private Journaling",
                      description: "Secure, confidential space to process difficult experiences and emotions"
                    },
                    {
                      icon: <Calendar className="h-5 w-5" />,
                      title: "Daily Check-ins",
                      description: "Quick mood tracking to build awareness of emotional patterns"
                    },
                    {
                      icon: <MessageSquare className="h-5 w-5" />,
                      title: "AI Support",
                      description: "24/7 access to supportive guidance based on your unique needs"
                    },
                    {
                      icon: <Clock className="h-5 w-5" />,
                      title: "Wellness Resources",
                      description: "Curated meditation, breathing exercises, and self-care activities"
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex">
                      <div className="mr-4 mt-1">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-6 relative z-10">
                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-2">Journal Assistant</h4>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="text-gray-700 italic">
                        "Today was challenging. The patient in Room 302 coded and we couldn't save them. I feel responsible even though I know we did everything we could..."
                      </p>
                    </div>
                    <div className="bg-primary/5 border border-primary/10 p-4 rounded-lg">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-1">
                          <Brain className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-gray-700">
                            I notice you're experiencing some guilt about today's outcome. Remember that not all clinical situations have positive outcomes despite our best efforts. Would you like to explore some self-compassion exercises that might help?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" className="flex-1">
                      Yes, I'd like that
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Not right now
                    </Button>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/30 rounded-full -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/30 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
          
          {/* For Administrators */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="bg-white rounded-2xl shadow-xl p-6 relative z-10">
                  <div className="mb-4">
                    <h4 className="text-lg font-medium mb-2">Department Wellness Overview</h4>
                    <div className="p-4">
                      <div className="h-60 bg-gray-100 rounded-lg flex items-center justify-center">
                        {/* Placeholder for chart */}
                        <div className="text-center">
                          <BarChart className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-500">Burnout risk by department</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-sm">Risk Alert</p>
                      <span className="text-xs text-red-500 font-medium">3 High Risk</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Emergency department showing elevated burnout indicators. Consider reviewing workload distribution.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary/30 rounded-full -z-10"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/30 rounded-full -z-10"></div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  For Administrators
                </div>
                <h3 className="text-2xl font-bold mb-4">Team Wellness Dashboard</h3>
                <p className="text-gray-600 mb-6">
                  CareMind provides healthcare leaders with anonymized insights to support team wellbeing while respecting individual privacy.
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      icon: <BarChart className="h-5 w-5" />,
                      title: "Team Analytics",
                      description: "Anonymized department-level trends to identify where support is needed"
                    },
                    {
                      icon: <AlertTriangle className="h-5 w-5" />,
                      title: "Early Warning System",
                      description: "Proactive alerts when burnout risk thresholds are reached"
                    },
                    {
                      icon: <User className="h-5 w-5" />,
                      title: "Resource Allocation",
                      description: "Data-driven insights to effectively distribute support resources"
                    },
                    {
                      icon: <Settings className="h-5 w-5" />,
                      title: "Privacy Controls",
                      description: "Robust privacy settings that never compromise individual confidentiality"
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex">
                      <div className="mr-4 mt-1">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Staff Wellbeing?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join the healthcare institutions that are prioritizing staff wellness and reducing burnout with CareMind.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-primary" size="lg" asChild>
              <Link to="/signup">Request Demo</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Features;
