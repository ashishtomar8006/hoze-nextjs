import React from 'react';
import { User, Heart, Utensils, Camera } from 'lucide-react';

const useCases = [
  {
    id: 1,
    icon: User,
    title: "Solo Female Traveler in Bali",
    query: "Safe places for solo female travelers in Bali with good WiFi",
    response: "🏨 **Canggu Co-working Spaces**\n• Dojo Bali - Female-friendly community\n• Outsite Canggu - Safe accommodation\n\n🍃 **Ubud Wellness Retreats**\n• Yoga Barn - Daily classes & community\n• Radiantly Alive - Women's circles",
    tags: ["Safety", "Community", "WiFi", "Wellness"]
  },
  {
    id: 2,
    icon: Heart,
    title: "Hidden Romantic Cafes in Paris",
    query: "Romantic, less touristy cafes in Paris for couples",
    response: "☕ **Le Procope** - Historic literary cafe\n• Intimate candlelit tables\n• Famous writers' hangout\n\n🌹 **Cafe de Flore** - Classic Parisian romance\n• Perfect for morning coffee dates\n• Beautiful Art Deco interior",
    tags: ["Romance", "Hidden Gems", "Atmosphere", "Local"]
  },
  {
    id: 3,
    icon: Utensils,
    title: "Street Food Hubs in Bangkok for Vegetarians",
    query: "Best vegetarian street food areas in Bangkok",
    response: "🥬 **Chatuchak Weekend Market**\n• Jay Fai - Michelin starred vegetarian\n• Fresh fruit stalls everywhere\n\n🍜 **Chinatown (Yaowarat)**\n• Buddhist vegetarian restaurants\n• Amazing tofu and noodle dishes",
    tags: ["Vegetarian", "Street Food", "Local Markets", "Authentic"]
  },
  {
    id: 4,
    icon: Camera,
    title: "Instagram-Worthy Spots in Santorini",
    query: "Most photogenic locations in Santorini for sunset photos",
    response: "📸 **Oia Village**\n• Blue domed churches\n• Best sunset viewpoints\n\n🏛️ **Fira to Oia Hike**\n• Dramatic cliff views\n• Golden hour photography\n\n⛪ **Three Bells of Fira**\n• Iconic blue and white architecture",
    tags: ["Photography", "Sunset", "Architecture", "Scenic"]
  }
];

const UseCases = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/50 to-[#f8bc33]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C2E4A] mb-4 animate-fadeInUp">
            Real Use Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-200">
            See how our AI assistant helps different types of travelers find exactly what they're looking for
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div key={useCase.id} className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-gray-100 group animate-scaleIn`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-[#4A90E2] to-[#f8bc33] w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1C2E4A] group-hover:text-[#4A90E2] transition-colors duration-300">
                      {useCase.title}
                    </h3>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-lg p-4 mb-4 border-l-4 border-[#4A90E2] group-hover:border-[#f8bc33] transition-colors duration-300">
                    <p className="text-sm text-[#4A90E2] font-medium mb-1 group-hover:text-[#1C2E4A] transition-colors duration-300">Query:</p>
                    <p className="text-gray-700 italic">"{useCase.query}"</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#f8bc33]/5 to-[#4A90E2]/5 rounded-lg p-4 mb-4 group-hover:from-[#4A90E2]/5 group-hover:to-[#f8bc33]/5 transition-all duration-300">
                    <p className="text-sm text-[#f8bc33] font-medium mb-2 group-hover:text-[#4A90E2] transition-colors duration-300">AI Response:</p>
                    <div className="text-gray-700 text-sm whitespace-pre-line group-hover:text-gray-800 transition-colors duration-300">
                      {useCase.response}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {useCase.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={`px-3 py-1 bg-[#f8bc33]/10 text-[#f8bc33] text-xs rounded-full border border-[#f8bc33]/20 group-hover:bg-[#4A90E2]/10 group-hover:text-[#4A90E2] group-hover:border-[#4A90E2]/20 transition-all duration-300 animate-fadeInUp`} style={{ animationDelay: `${tagIndex * 0.1}s` }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f8bc33]/5 to-[#4A90E2]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fadeInUp delay-600">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#1C2E4A] mb-4">
              Ready to Get Personalized Recommendations?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of travelers who trust our AI for authentic, curated travel experiences
            </p>
            <button className="bg-gradient-to-r from-[#4A90E2] to-[#f8bc33] text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 font-semibold group">
              <span className="group-hover:scale-110 transition-transform duration-300 inline-block">Start Your Journey</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;