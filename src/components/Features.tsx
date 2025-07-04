import React from 'react';
import { Shield, Globe, Mic, Zap, Filter, Heart } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Shield,
    title: "No Source Clutter",
    description: "No influencer names, just pure insights and recommendations you can trust."
  },
  {
    id: 2,
    icon: Globe,
    title: "Multilingual Support",
    description: "Speak or type in your language—our AI understands and responds naturally."
  },
  {
    id: 3,
    icon: Mic,
    title: "Voice & Text Chat",
    description: "Interact like you're talking to a local friend who knows all the best spots."
  },
  {
    id: 4,
    icon: Zap,
    title: "Real-time Recommendations",
    description: "Fresh data from TikTok, Instagram, and trusted travel sources updated daily."
  },
  {
    id: 5,
    icon: Filter,
    title: "Tailored to You",
    description: "Filter by food preferences, trip type, mood, budget, and personal interests."
  },
  {
    id: 6,
    icon: Heart,
    title: "Curated Experiences",
    description: "Hand-picked suggestions that match your travel style and preferences perfectly."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/50 to-[#f8bc33]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C2E4A] mb-4 animate-fadeInUp">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-200">
            Everything you need for intelligent travel planning, powered by advanced AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 group animate-scaleIn`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-[#4A90E2] w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[#1C2E4A] mb-3 group-hover:text-[#4A90E2] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
                
                <div className="mt-4 flex items-center">
                  <div className="w-2 h-2 bg-[#f8bc33] rounded-full mr-2 animate-pulse" />
                  <span className="text-sm text-[#4A90E2] font-medium group-hover:text-[#1C2E4A] transition-colors duration-300">Available Now</span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#f8bc33]/5 to-[#4A90E2]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fadeInUp delay-600">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#1C2E4A] mb-4">
              Why Choose Our AI Travel Assistant?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                "Avoid influencer overload and biased recommendations",
                "Skip unreliable search results and outdated guides",
                "Get curated content with verified reviews",
                "No ads, no affiliate links—just honest recommendations"
              ].map((item, index) => (
                <div key={index} className={`flex items-start space-x-3 animate-fadeInLeft`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-2 h-2 bg-[#f8bc33] rounded-full mt-2 flex-shrink-0 animate-pulse" />
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;