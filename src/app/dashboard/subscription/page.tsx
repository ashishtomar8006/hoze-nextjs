"use client"
import React, { useState } from 'react';
import { CreditCard, Check, Star, Zap, Crown, Calendar, Download, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import DashboardFooter from '@/components/DashboardFooter';

const DashboardSubscription = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const currentPlan = {
    name: "Free Explorer",
    price: 0,
    period: "forever",
    queriesUsed: 3,
    queriesLimit: 5,
    features: [
      "5 AI queries per day",
      "Basic travel recommendations",
      "Text-based chat only",
      "Standard response time",
      "Community support"
    ]
  };

  const plans = [
    {
      id: 'premium',
      name: "Premium Traveler",
      price: 19,
      period: "month",
      icon: Zap,
      description: "For frequent travelers who want more",
      features: [
        "Unlimited AI queries",
        "Voice responses with ElevenLabs",
        "Interactive map suggestions",
        "Priority response time",
        "Email support",
        "Save favorite recommendations",
        "Export itineraries to PDF"
      ],
      popular: true,
      color: "from-[#4A90E2] to-[#1C2E4A]"
    },
    {
      id: 'pro',
      name: "Travel Pro",
      price: 49,
      period: "month",
      icon: Crown,
      description: "For travel professionals and enthusiasts",
      features: [
        "Everything in Premium",
        "Advanced AI personality customization",
        "Multi-language voice responses",
        "Real-time flight & hotel integration",
        "Priority customer support",
        "Team collaboration features",
        "White-label API access",
        "Custom travel reports"
      ],
      popular: false,
      color: "from-[#f8bc33] to-[#e6a82e]"
    }
  ];

  const billingHistory = [
    {
      id: 1,
      date: "Nov 1, 2024",
      amount: "$0.00",
      plan: "Free Explorer",
      status: "Active"
    }
  ];

  const getDisplayPrice = (price: number) => {
    return billingCycle === 'annual' ? Math.round(price * 0.8) : price;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-[#f8bc33]/10 flex flex-col">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="flex flex-col items-center group">
                <img 
                  src="/logo1_new.png" 
                  alt="Hoze AI Logo" 
                  className="h-10 w-auto transform group-hover:scale-110 transition-all duration-300"
                  style={{ 
                    filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.8)) drop-shadow(0 2px 6px rgba(0, 0, 0, 0.6))'
                  }}
                />
                <span className="text-xs text-[#4A90E2] font-medium mt-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  We know the spot
                </span>
              </Link>
              <div className="hidden lg:block">
                <h1 className="text-2xl font-bold text-[#1C2E4A]">Subscription</h1>
                <p className="text-gray-600">Manage your plan and billing</p>
              </div>
            </div>
            <Link 
              href="/dashboard"
              className="bg-[#4A90E2] text-white px-4 py-2 rounded-lg hover:bg-[#1C2E4A] transition-colors duration-200"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 flex-1">
        {/* Current Plan Status */}
        <div className="mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#1C2E4A] mb-2">Current Plan</h2>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl font-bold text-[#4A90E2]">{currentPlan.name}</span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    ${currentPlan.price}/{currentPlan.period}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Daily Queries Used</span>
                    <span className="font-medium">{currentPlan.queriesUsed}/{currentPlan.queriesLimit}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#4A90E2] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentPlan.queriesUsed / currentPlan.queriesLimit) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 lg:mt-0">
                <div className="bg-gradient-to-r from-[#f8bc33] to-[#4A90E2] rounded-lg p-6 text-white text-center">
                  <h3 className="font-bold mb-2">Ready to Upgrade?</h3>
                  <p className="text-sm opacity-90 mb-4">Unlock unlimited queries and premium features</p>
                  <button className="bg-white text-[#4A90E2] px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                    View Plans
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-1 border border-gray-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${
                billingCycle === 'monthly' 
                  ? 'bg-[#4A90E2] text-white shadow-md' 
                  : 'text-gray-600 hover:text-[#4A90E2]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-md transition-all duration-200 relative ${
                billingCycle === 'annual' 
                  ? 'bg-[#4A90E2] text-white shadow-md' 
                  : 'text-gray-600 hover:text-[#4A90E2]'
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-[#f8bc33] text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Available Plans */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            const displayPrice = getDisplayPrice(plan.price);
            
            return (
              <div key={plan.id} className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${plan.popular ? 'ring-2 ring-[#f8bc33]' : ''}`}>
                {plan.popular && (
                  <div className="bg-[#f8bc33] text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl mb-4 bg-gradient-to-r ${plan.color}`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C2E4A] mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-[#1C2E4A]">${displayPrice}</span>
                      <span className="text-gray-600">
                        /{billingCycle === 'annual' ? 'month (billed annually)' : plan.period}
                      </span>
                      {billingCycle === 'annual' && (
                        <div className="text-sm text-[#f8bc33] font-medium mt-1">
                          Save ${(plan.price - displayPrice) * 12}/year
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-[#f8bc33] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 ${
                    plan.popular
                      ? 'bg-[#f8bc33] hover:bg-[#e6a82e] text-white shadow-lg'
                      : 'bg-[#4A90E2] hover:bg-[#1C2E4A] text-white shadow-lg'
                  }`}>
                    Upgrade to {plan.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Billing History */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#1C2E4A] flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-[#4A90E2]" />
              Billing History
            </h3>
            <button className="text-[#4A90E2] hover:text-[#1C2E4A] text-sm font-medium flex items-center">
              <Download className="h-4 w-4 mr-1" />
              Download All
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-gray-600 font-medium">Date</th>
                  <th className="text-left py-3 text-gray-600 font-medium">Plan</th>
                  <th className="text-left py-3 text-gray-600 font-medium">Amount</th>
                  <th className="text-left py-3 text-gray-600 font-medium">Status</th>
                  <th className="text-left py-3 text-gray-600 font-medium">Invoice</th>
                </tr>
              </thead>
              <tbody>
                {billingHistory.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100">
                    <td className="py-4 text-gray-700">{item.date}</td>
                    <td className="py-4 text-gray-700">{item.plan}</td>
                    <td className="py-4 font-medium text-gray-900">{item.amount}</td>
                    <td className="py-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="text-[#4A90E2] hover:text-[#1C2E4A] text-sm">
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-[#1C2E4A] mb-6 flex items-center">
            <CreditCard className="h-5 w-5 mr-2 text-[#4A90E2]" />
            Payment Method
          </h3>
          
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-6 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-xs text-gray-600">CARD</span>
              </div>
              <div>
                <p className="font-medium text-gray-700">No payment method</p>
                <p className="text-sm text-gray-500">Add a payment method to upgrade</p>
              </div>
            </div>
            <button className="bg-[#4A90E2] hover:bg-[#1C2E4A] text-white px-4 py-2 rounded-lg transition-colors duration-200">
              Add Payment Method
            </button>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900">Secure Payment Processing</h4>
              <p className="text-sm text-blue-700">
                All payments are processed securely through Stripe. We never store your payment information.
              </p>
            </div>
          </div>
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
};

export default DashboardSubscription;