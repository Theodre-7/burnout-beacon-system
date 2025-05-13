
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Brain, Calendar, BarChart, AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
                Prevent Burnout<br />Before It Happens
              </h1>
              <p className="text-lg text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                AI-powered wellness companion for healthcare professionals.
                Detect early warning signs and maintain your mental health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Button className="btn-primary" size="lg" asChild>
                  <Link to="/signup">Request Demo</Link>
                </Button>
                <Button variant="outline" size="lg" className="group" asChild>
                  <Link to="/features">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                        <Brain className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Wellness Assistant</h3>
                        <p className="text-sm text-gray-500">Today's check-in</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700">
                          "How are you feeling today, Dr. Johnson? Your recent journal entries show increased stress patterns."
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="flex-1 py-2 px-4 bg-secondary/20 text-gray-700 rounded-lg hover:bg-secondary/30 transition-colors">
                          😊 Good
                        </button>
                        <button className="flex-1 py-2 px-4 bg-secondary/20 text-gray-700 rounded-lg hover:bg-secondary/30 transition-colors">
                          😐 Okay
                        </button>
                        <button className="flex-1 py-2 px-4 bg-secondary/20 text-gray-700 rounded-lg hover:bg-secondary/30 transition-colors">
                          😔 Stressed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/30 rounded-full -z-10"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/30 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How CareMind Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform continuously monitors for signs of burnout and provides personalized support to healthcare professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Early Burnout Detection"
              description="AI algorithms detect subtle changes in language and mood patterns to identify early signs of burnout."
              icon={<AlertTriangle className="h-6 w-6" />}
            />
            <FeatureCard
              title="Journaling Companion"
              description="Private, secure journaling with AI insights that help process emotions and track mental wellbeing."
              icon={<Calendar className="h-6 w-6" />}
            />
            <FeatureCard
              title="Wellness Dashboard"
              description="Real-time analytics and trends to understand your mental health patterns over time."
              icon={<BarChart className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Healthcare Professionals Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              CareMind is helping healthcare workers across the country manage stress and prevent burnout.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="CareMind spotted my burnout patterns before I even recognized them myself. The personalized recommendations helped me make changes that improved my wellbeing."
              author="Dr. Maria Chen"
              role="ER Physician"
              company="Memorial Hospital"
            />
            <TestimonialCard
              quote="As a nurse manager, I've seen burnout impact our entire team. CareMind has helped us create a culture of wellbeing and reduce turnover by 40%."
              author="James Wilson"
              role="Nurse Manager"
              company="City Medical Center"
            />
            <TestimonialCard
              quote="The daily journaling and AI feedback have become an essential part of my routine. It's like having a wellness coach in my pocket."
              author="Dr. Anita Patel"
              role="Pediatrician"
              company="Children's Hospital"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Support Your Healthcare Team?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join the healthcare institutions that are prioritizing staff wellness and reducing burnout.
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

export default Index;
