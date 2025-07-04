import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "Can I ask questions in any language?",
    answer: "Yes! Our AI assistant supports over 50 languages. You can ask questions and receive responses in your preferred language. Our Premium and Pro plans also include voice responses in multiple languages."
  },
  {
    id: 2,
    question: "Is this free to use?",
    answer: "We offer a free plan with 5 AI queries per day, which is perfect for occasional travelers. For unlimited access and advanced features like voice responses and map integration, you can upgrade to our Premium or Pro plans."
  },
  {
    id: 3,
    question: "Where does the travel data come from?",
    answer: "Our AI analyzes data from multiple trusted sources including verified travel reviews, social media insights (TikTok, Instagram), local tourism boards, and real traveler experiences. We filter out sponsored content to give you authentic recommendations."
  },
  {
    id: 4,
    question: "Can I share my suggestions with others?",
    answer: "Absolutely! Premium and Pro users can save their favorite recommendations, export itineraries to PDF, and share them with travel companions. Pro users also get team collaboration features for group trip planning."
  },
  {
    id: 5,
    question: "How accurate are the AI recommendations?",
    answer: "Our AI has a 98% accuracy rate based on user feedback. We continuously update our algorithms with fresh travel data and user reviews to ensure recommendations stay current and relevant."
  },
  {
    id: 6,
    question: "Do you have a mobile app?",
    answer: "We're currently web-based, but our platform is fully responsive and works great on mobile devices. A dedicated mobile app is in development and will be available soon for iOS and Android."
  },
  {
    id: 7,
    question: "What makes this different from Google Travel or TripAdvisor?",
    answer: "Unlike other platforms, we provide curated, unbiased recommendations without ads or affiliate links. Our AI filters out sponsored content and influencer noise to give you authentic, personalized suggestions based on real traveler experiences."
  },
  {
    id: 8,
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. We offer a 14-day money-back guarantee for all paid plans, and there are no setup fees or cancellation penalties."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/50 to-[#f8bc33]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C2E4A] mb-4 animate-fadeInUp">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 animate-fadeInUp delay-200">
            Everything you need to know about our AI travel assistant
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(faq.id);
            return (
              <div key={faq.id} className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform hover:-translate-y-1 transition-all duration-300 group animate-scaleIn`} style={{ animationDelay: `${index * 0.1}s` }}>
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-[#1C2E4A] pr-4 group-hover:text-[#4A90E2] transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-[#4A90E2]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#4A90E2]" />
                    )}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-4 animate-fadeInUp">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#f8bc33]/5 to-[#4A90E2]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fadeInUp delay-600">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-[#1C2E4A] mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you get the most out of your AI travel assistant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#4A90E2] to-[#1C2E4A] hover:from-[#1C2E4A] hover:to-[#4A90E2] text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold transform hover:-translate-y-1 hover:scale-105 group">
                <span className="group-hover:scale-110 transition-transform duration-300 inline-block">Contact Support</span>
              </button>
              <button className="border-2 border-[#4A90E2] text-[#4A90E2] px-6 py-3 rounded-lg hover:bg-[#4A90E2] hover:text-white transition-all duration-300 font-semibold transform hover:-translate-y-1 hover:scale-105 group">
                <span className="group-hover:scale-110 transition-transform duration-300 inline-block">Schedule Demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;