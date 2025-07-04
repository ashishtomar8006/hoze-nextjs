"use client"
import React, { useState } from 'react';
import { HelpCircle, Search, MessageSquare, Book, Video, Mail, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import DashboardFooter from '@/components/DashboardFooter';

const DashboardHelp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const helpCategories = [
    {
      id: 1,
      title: "Getting Started",
      icon: Book,
      description: "Learn the basics of using your AI travel assistant",
      articles: [
        "How to create your first travel plan",
        "Understanding AI recommendations",
        "Setting up your preferences",
        "Using voice commands"
      ]
    },
    {
      id: 2,
      title: "AI Assistant",
      icon: MessageSquare,
      description: "Make the most of your AI travel companion",
      articles: [
        "How to ask better questions",
        "Understanding AI responses",
        "Customizing AI personality",
        "Voice interaction tips"
      ]
    },
    {
      id: 3,
      title: "Video Tutorials",
      icon: Video,
      description: "Watch step-by-step guides and tutorials",
      articles: [
        "Platform overview (5 min)",
        "Planning your first trip (8 min)",
        "Advanced features tour (12 min)",
        "Tips and tricks (6 min)"
      ]
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How does the AI travel assistant work?",
      answer: "Our AI assistant analyzes your preferences, travel history, and real-time data from trusted sources to provide personalized recommendations. It learns from your interactions to improve suggestions over time."
    },
    {
      id: 2,
      question: "Can I use the assistant offline?",
      answer: "The AI assistant requires an internet connection to provide real-time recommendations and access the latest travel data. However, you can save recommendations for offline viewing."
    },
    {
      id: 3,
      question: "How accurate are the AI recommendations?",
      answer: "Our AI has a 98% accuracy rate based on user feedback. We continuously update our algorithms with fresh travel data and user reviews to ensure recommendations stay current and relevant."
    },
    {
      id: 4,
      question: "Can I share my travel plans with others?",
      answer: "Yes! Premium and Pro users can save their favorite recommendations, export itineraries to PDF, and share them with travel companions. Pro users also get team collaboration features."
    },
    {
      id: 5,
      question: "What languages does the AI support?",
      answer: "Our AI assistant supports over 50 languages for text interactions. Premium and Pro plans also include voice responses in multiple languages."
    },
    {
      id: 6,
      question: "How do I upgrade my subscription?",
      answer: "You can upgrade your subscription anytime from the Subscription page in your dashboard. Changes take effect immediately, and you'll only pay the prorated difference."
    }
  ];

  const contactOptions = [
    {
      id: 1,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      contact: "support@hozeai.com",
      icon: Mail,
      action: "Send Email"
    },
    {
      id: 2,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available 24/7",
      icon: MessageSquare,
      action: "Start Chat"
    },
    {
      id: 3,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      icon: Phone,
      action: "Call Now"
    }
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                <h1 className="text-2xl font-bold text-[#1C2E4A]">Help Center</h1>
                <p className="text-gray-600">Get help and learn how to use Hoze AI</p>
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
        {/* Search Bar */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#1C2E4A] mb-4 lg:hidden">Help Center</h1>
            <p className="text-xl text-gray-600">How can we help you today?</p>
          </div>
          
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent text-lg"
            />
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#1C2E4A] mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {helpCategories.map((category) => (
              <div key={category.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group">
                <div className="flex items-center mb-4">
                  <div className="bg-[#4A90E2] w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1C2E4A]">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article, index) => (
                    <li key={index}>
                      <button className="text-[#4A90E2] hover:text-[#1C2E4A] text-sm transition-colors duration-200 text-left">
                        {article}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#1C2E4A] mb-8">Frequently Asked Questions</h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-[#1C2E4A] pr-4">
                      {faq.question}
                    </h3>
                    {openFaq === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-[#4A90E2] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#4A90E2] flex-shrink-0" />
                    )}
                  </button>
                  
                  {openFaq === faq.id && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {filteredFaqs.length === 0 && (
              <div className="text-center py-8">
                <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-600 mb-2">No results found</h3>
                <p className="text-gray-500">
                  Try adjusting your search terms or browse our categories above.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Contact Support */}
        <div>
          <h2 className="text-2xl font-bold text-[#1C2E4A] mb-8">Contact Support</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactOptions.map((option) => (
              <div key={option.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group">
                <div className="bg-[#4A90E2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <option.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1C2E4A] mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-3">{option.description}</p>
                <p className="text-[#4A90E2] font-medium mb-4">{option.contact}</p>
                <button className="bg-[#4A90E2] hover:bg-[#1C2E4A] text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-12 bg-gradient-to-r from-[#4A90E2] to-[#f8bc33] rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Quick Tips for Better Results</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">🎯 Be Specific</h4>
              <p className="text-sm opacity-90">
                Instead of "good restaurants," try "romantic Italian restaurants in Rome under $50"
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🗣️ Use Natural Language</h4>
              <p className="text-sm opacity-90">
                Talk to the AI like you would a friend: "I'm looking for cozy cafes with WiFi"
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📍 Include Context</h4>
              <p className="text-sm opacity-90">
                Mention your travel style, budget, and preferences for better recommendations
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">💬 Ask Follow-ups</h4>
              <p className="text-sm opacity-90">
                Don't hesitate to ask for more details or alternative suggestions
              </p>
            </div>
          </div>
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
};

export default DashboardHelp;