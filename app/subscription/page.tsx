'use client'

import React, { useState } from 'react'
import { Check, Zap, Crown, Sparkles, ArrowRight, SkipForward } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const plans = [
  {
    id: 'free',
    name: "Free Explorer",
    price: "0",
    period: "forever",
    icon: Sparkles,
    description: "Perfect for occasional travelers",
    features: [
      "5 AI queries per day",
      "Basic travel recommendations",
      "Text-based chat only",
      "Standard response time",
      "Community support"
    ],
    limitations: [
      "Limited to 5 queries daily",
      "No voice responses",
      "No map integration"
    ],
    cta: "Start Free",
    popular: false,
    color: "from-gray-500 to-gray-600"
  },
  {
    id: 'premium',
    name: "Premium Traveler",
    price: "19",
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
    limitations: [],
    cta: "Start Premium",
    popular: true,
    color: "from-[#4A90E2] to-[#1C2E4A]"
  },
  {
    id: 'pro',
    name: "Travel Pro",
    price: "49",
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
    limitations: [],
    cta: "Go Pro",
    popular: false,
    color: "from-[#f8bc33] to-[#e6a82e]"
  }
]

export default function Subscription() {
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState('premium')
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId)
  }

  const handleContinue = () => {
    console.log('Selected plan:', selectedPlan, 'Billing:', billingCycle)
    // Navigate to dashboard or payment
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-[#f8bc33]/10">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/logo1_new.png" 
                alt="Hoze AI Logo" 
                className="h-8 w-auto"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8))' }}
              />
            </Link>
            <Link 
              href="/dashboard" 
              className="flex items-center space-x-2 text-gray-600 hover:text-[#4A90E2] transition-colors duration-200"
            >
              <SkipForward className="h-4 w-4" />
              <span>Skip & Explore First</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1C2E4A] mb-4 animate-fadeInUp">
              Choose Your Plan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-200">
              Start free and upgrade as your travel planning needs grow. 
              You can always change your plan later.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-12 animate-fadeInUp delay-300">
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

          {/* Plans */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon
              const isSelected = selectedPlan === plan.id
              const displayPrice = billingCycle === 'annual' && plan.price !== '0' 
                ? Math.round(parseInt(plan.price) * 0.8).toString() 
                : plan.price
              
              return (
                <div 
                  key={plan.id} 
                  className={`relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 group animate-scaleIn cursor-pointer ${
                    isSelected ? 'border-[#4A90E2] scale-105' : 'border-gray-100'
                  } ${plan.popular ? 'ring-2 ring-[#f8bc33]/50' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onClick={() => handlePlanSelect(plan.id)}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-[#f8bc33] text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 bg-gradient-to-r ${plan.color}`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1C2E4A] mb-2 group-hover:text-[#4A90E2] transition-colors duration-300">
                        {plan.name}
                      </h3>
                      <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                        {plan.description}
                      </p>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-[#1C2E4A] group-hover:text-[#4A90E2] transition-colors duration-300">
                          ${displayPrice}
                        </span>
                        <span className="text-gray-600">
                          /{billingCycle === 'annual' && plan.price !== '0' ? 'month (billed annually)' : plan.period}
                        </span>
                        {billingCycle === 'annual' && plan.price !== '0' && (
                          <div className="text-sm text-[#f8bc33] font-medium mt-1">
                            Save ${(parseInt(plan.price) - parseInt(displayPrice)) * 12}/year
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={`flex items-start animate-fadeInLeft`} style={{ animationDelay: `${featureIndex * 0.1}s` }}>
                          <Check className="h-5 w-5 text-[#f8bc33] mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {plan.limitations.length > 0 && (
                      <div className="mb-6">
                        <p className="text-sm text-gray-500 mb-2">Limitations:</p>
                        <ul className="space-y-1">
                          {plan.limitations.map((limitation, limitIndex) => (
                            <li key={limitIndex} className="text-sm text-gray-500 flex items-start">
                              <span className="mr-2">•</span>
                              {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <button 
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 ${
                        isSelected
                          ? 'bg-[#4A90E2] text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {isSelected ? 'Selected' : 'Select Plan'}
                    </button>
                  </div>

                  {/* Selection indicator */}
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#4A90E2] rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Features Comparison */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-12 animate-fadeInUp delay-600">
            <h3 className="text-2xl font-bold text-[#1C2E4A] mb-6 text-center">
              What's included in each plan?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-[#1C2E4A] mb-3">Free Explorer</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Basic AI recommendations</li>
                  <li>✓ 5 queries per day</li>
                  <li>✓ Community support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#4A90E2] mb-3">Premium Traveler</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Everything in Free</li>
                  <li>✓ Unlimited queries</li>
                  <li>✓ Voice responses</li>
                  <li>✓ Map integration</li>
                  <li>✓ Save favorites</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#f8bc33] mb-3">Travel Pro</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Everything in Premium</li>
                  <li>✓ Multi-language support</li>
                  <li>✓ Team collaboration</li>
                  <li>✓ API access</li>
                  <li>✓ Custom reports</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp delay-700">
            <button
              onClick={handleContinue}
              className="bg-[#4A90E2] hover:bg-[#1C2E4A] text-white px-8 py-4 rounded-lg transition-all duration-300 font-semibold transform hover:-translate-y-1 hover:scale-105 flex items-center"
            >
              Continue with {plans.find(p => p.id === selectedPlan)?.name}
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
            
            <Link 
              href="/dashboard"
              className="text-gray-600 hover:text-[#4A90E2] transition-colors duration-200 flex items-center"
            >
              <SkipForward className="h-4 w-4 mr-2" />
              Skip & Explore First (Limited Access)
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="text-center mt-12 animate-fadeInUp delay-800">
            <p className="text-gray-600 mb-4">
              Trusted by thousands of travelers worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              {["✓ No setup fees", "✓ Cancel anytime", "✓ 14-day money-back guarantee", "✓ Secure payment processing"].map((item, index) => (
                <span key={index} className={`animate-fadeInUp`} style={{ animationDelay: `${index * 0.1}s` }}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}