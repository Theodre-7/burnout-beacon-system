
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };
  
  const plans = [
    {
      name: "Starter",
      description: "For small healthcare practices",
      price: isAnnual ? 499 : 59,
      period: isAnnual ? "/year" : "/month",
      discount: isAnnual ? "Save $209" : null,
      features: [
        "Up to 25 healthcare staff",
        "Basic burnout detection",
        "Journaling & mood tracking",
        "Basic analytics dashboard",
        "Email support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      description: "For medium-sized clinics & departments",
      price: isAnnual ? 999 : 99,
      period: isAnnual ? "/year" : "/month",
      discount: isAnnual ? "Save $189" : null,
      features: [
        "Up to 100 healthcare staff",
        "Advanced AI burnout detection",
        "Enhanced journaling with voice input",
        "Comprehensive analytics dashboard",
        "Departmental risk reports",
        "Admin alerts for high-risk staff",
        "Priority email & chat support",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For hospitals & large healthcare systems",
      price: isAnnual ? "Custom" : "Custom",
      period: "",
      discount: null,
      features: [
        "Unlimited healthcare staff",
        "Advanced AI burnout detection",
        "Full journaling & wellness features",
        "Custom analytics & reporting",
        "System-wide risk assessment",
        "API integration with HR systems",
        "Data export capabilities",
        "Dedicated account manager",
        "24/7 priority support",
      ],
      cta: "Contact Sales",
      popular: false,
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Pricing Header */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the plan that's right for your organization and start preventing burnout today.
            </p>
            
            <div className="flex items-center justify-center mb-8">
              <Label htmlFor="billing-toggle" className={`mr-2 ${!isAnnual ? 'text-gray-600' : 'text-gray-900 font-medium'}`}>
                Annual Billing
              </Label>
              <Switch
                id="billing-toggle"
                checked={!isAnnual}
                onCheckedChange={toggleBilling}
              />
              <Label htmlFor="billing-toggle" className={`ml-2 ${isAnnual ? 'text-gray-600' : 'text-gray-900 font-medium'}`}>
                Monthly Billing
              </Label>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Plans */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`
                  bg-white rounded-2xl border ${plan.popular ? 'border-primary shadow-lg relative' : 'border-gray-200'} 
                  p-8 flex flex-col h-full
                `}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-medium py-1 px-4 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-end">
                    {typeof plan.price === 'number' ? (
                      <>
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-gray-600 ml-1">{plan.period}</span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold">{plan.price}</span>
                    )}
                  </div>
                  {plan.discount && (
                    <p className="text-green-600 text-sm font-medium mt-1">{plan.discount}</p>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Check className="h-4 w-4 text-green-500" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                  asChild
                >
                  <Link to="/signup">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Everything you need to know about our pricing and product.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How does the free trial work?",
                answer: "All plans come with a 14-day free trial. You won't be charged until the trial period ends, and you can cancel anytime during this period with no obligation."
              },
              {
                question: "Can I change plans later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remainder of your billing period. When downgrading, changes will take effect at the start of your next billing cycle."
              },
              {
                question: "Is there a contract or commitment?",
                answer: "There is no long-term contract. Annual plans are paid upfront for the year, while monthly plans can be canceled anytime."
              },
              {
                question: "How is user count calculated?",
                answer: "User count is based on the number of active healthcare staff accounts. Admin accounts that only view reports don't count toward your user limit."
              },
              {
                question: "Is my data secure and private?",
                answer: "Absolutely. We take data security and privacy extremely seriously. All data is encrypted, HIPAA-compliant, and we never share individual user data with employers or third parties."
              },
              {
                question: "Do you offer discounts for non-profits or educational institutions?",
                answer: "Yes, we offer special pricing for non-profit healthcare organizations and teaching hospitals. Please contact our sales team for more information."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join the healthcare institutions that are prioritizing staff wellness and preventing burnout.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-primary" size="lg" asChild>
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
