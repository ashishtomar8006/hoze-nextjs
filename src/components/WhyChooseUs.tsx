import React from 'react';
import { Shield, Zap, Users, Award } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: "Avoid Influencer Overload",
    description: "No more sifting through sponsored content and biased reviews. Get genuine recommendations based on real traveler experiences."
  },
  {
    icon: Zap,
    title: "Skip Unreliable Search Results",
    description: "Stop wasting time on outdated travel guides and generic search results. Our AI provides fresh, relevant suggestions."
  },
  {
    icon: Users,
    title: "Get Curated Content with Real Reviews",
    description: "Every recommendation is backed by verified reviews and real traveler feedback, not marketing campaigns."
  },
  {
    icon: Award,
    title: "No Ads, No Links—Just Recommendations",
    description: "Pure, unbiased travel advice without affiliate links, sponsored content, or hidden agendas."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-blue-50/30 to-[#f8bc33]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C2E4A] mb-4 animate-fadeInUp">
            Why AI Travel Assistant?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-200">
            Experience travel planning the way it should be—intelligent, unbiased, and tailored to you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className={`flex items-start space-x-4 p-6 bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-2xl hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 group animate-scaleIn`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-[#4A90E2] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C2E4A] mb-2 group-hover:text-[#4A90E2] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all duration-300 animate-fadeInUp delay-600">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Travel Planning?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of smart travelers who've discovered the future of trip planning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#4A90E2] px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg transform hover:-translate-y-1 hover:scale-105 group">
              <span className="group-hover:scale-110 transition-transform duration-300 inline-block">Start Free Trial</span>
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg transition-all duration-300 font-semibold transform hover:-translate-y-1 hover:scale-105 group">
              <span className="group-hover:scale-110 transition-transform duration-300 inline-block">Watch Demo</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;