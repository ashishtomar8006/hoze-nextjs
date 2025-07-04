import React from 'react';
import { Check, Zap, Crown, Sparkles } from 'lucide-react';

const plans = [
  {
    id: 1,
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
    popular: false
  },
  {
    id: 2,
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
    popular: true
  },
  {
    id: 3,
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
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-gradient-to-br from-white via-blue-50/30 to-[#f8bc33]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C2E4A] mb-4 animate-fadeInUp">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-200">
            Start free and upgrade as your travel planning needs grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div key={plan.id} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 group animate-scaleIn ${
                plan.popular ? 'border-[#f8bc33] scale-105' : 'border-gray-100'
              }`} style={{ animationDelay: `${index * 0.2}s` }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-pulse-glow">
                    <div className="bg-[#f8bc33] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-[#f8bc33]' 
                        : 'bg-[#4A90E2]'
                    }`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C2E4A] mb-2 group-hover:text-[#4A90E2] transition-colors duration-300">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                      {plan.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-[#1C2E4A] group-hover:text-[#4A90E2] transition-colors duration-300">${plan.price}</span>
                      <span className="text-gray-600">/{plan.period}</span>
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
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group ${
                    plan.popular
                      ? 'bg-[#f8bc33] hover:bg-[#e6a82e] text-white shadow-lg hover:shadow-2xl'
                      : 'bg-[#4A90E2] hover:bg-[#1C2E4A] text-white shadow-lg hover:shadow-2xl'
                  }`}>
                    <span className="group-hover:scale-110 transition-transform duration-300 inline-block">{plan.cta}</span>
                  </button>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#f8bc33]/5 to-[#4A90E2]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fadeInUp delay-600">
          <p className="text-gray-600 mb-4">
            All plans include our core AI travel recommendations
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {["✓ No setup fees", "✓ Cancel anytime", "✓ 14-day money-back guarantee", "✓ Secure payment processing"].map((item, index) => (
              <span key={index} className={`animate-fadeInUp`} style={{ animationDelay: `${index * 0.1}s` }}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;