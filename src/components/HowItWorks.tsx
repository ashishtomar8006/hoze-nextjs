"use client"
import React from 'react';
import { MessageSquare, Brain, Sparkles } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: MessageSquare,
    title: "Ask a Question",
    description: "Simply ask anything like 'Best vegan restaurants in Paris' or 'Hidden gems in Tokyo'",
    example: "What are the best coffee spots in Istanbul?"
  },
  {
    id: 2,
    icon: Brain,
    title: "AI Analyzes Data",
    description: "Our AI assistant analyzes travel data and influencer insights from trusted sources",
    example: "Processing 10,000+ reviews and recommendations"
  },
  {
    id: 3,
    icon: Sparkles,
    title: "Get Curated Suggestions",
    description: "Receive personalized, curated suggestions instantly—no clutter, just insights",
    example: "5 perfect coffee spots with ratings and details"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gradient-to-br from-white via-blue-50/30 to-[#f8bc33]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C2E4A] mb-4 animate-fadeInUp">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-200">
            Get personalized travel recommendations in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="relative text-center group">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#f8bc33] to-[#4A90E2] transform translate-x-1/2 z-0 animate-fadeInRight" style={{ animationDelay: `${index * 0.3}s` }} />
                )}
                
                <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 group animate-scaleIn`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="bg-[#4A90E2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#f8bc33] rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                    {step.id}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1C2E4A] mb-4 group-hover:text-[#4A90E2] transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-lg p-3 border-l-4 border-[#f8bc33] group-hover:border-[#4A90E2] transition-colors duration-300">
                    <p className="text-sm text-[#4A90E2] font-medium group-hover:text-[#1C2E4A] transition-colors duration-300">
                      Example: {step.example}
                    </p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f8bc33]/5 to-[#4A90E2]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fadeInUp delay-600">
          <button className="bg-[#4A90E2] hover:bg-[#1C2E4A] text-white px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 font-semibold group">
            <span className="group-hover:scale-110 transition-transform duration-300 inline-block">Try It Now</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;