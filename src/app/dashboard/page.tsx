"use client"
import React, { useState } from 'react';
import { 
  MessageSquare, MapPin, Heart, Settings, User, Bell, Search, Sparkles, 
  TrendingUp, Clock, Star, Menu, X, Home, Bookmark, Compass, 
  CreditCard, HelpCircle, Calendar, Camera, Navigation, Plane
} from 'lucide-react';
import Link from 'next/link';
import DashboardFooter from '@/components/DashboardFooter';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [assistantTone, setAssistantTone] = useState('Friendly');

  const sidebarItems = [
    { icon: Home, label: 'Home', active: true, path: '/dashboard' },
    { icon: Bookmark, label: 'Saved Plans', count: 0, path: '/dashboard/saved-plans' },
    { icon: MapPin, label: 'Recommendations', count: 3, path: '/dashboard/recommendations' },
    { icon: User, label: 'My Preferences', path: '/dashboard/preferences' },
    { icon: CreditCard, label: 'Subscription', path: '/dashboard/subscription' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
    { icon: HelpCircle, label: 'Help', path: '/dashboard/help' }
  ];

  const personalizedSuggestions = [
    {
      id: 1,
      title: "Cozy Cafes in Istanbul",
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Coffee", "Local", "Authentic"],
      rating: 4.8,
      description: "Hidden gems perfect for coffee lovers"
    },
    {
      id: 2,
      title: "Sunset Spots in Santorini",
      image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Photography", "Romantic", "Scenic"],
      rating: 4.9,
      description: "Best viewpoints for golden hour"
    },
    {
      id: 3,
      title: "Street Food in Bangkok",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Food", "Budget", "Adventure"],
      rating: 4.7,
      description: "Authentic local flavors and experiences"
    }
  ];

  const savedTrips = [
    {
      id: 1,
      title: "3 Days in Istanbul",
      dates: "Dec 15-18, 2024",
      places: 8,
      tags: ["Culture", "Food", "History"]
    },
    {
      id: 2,
      title: "Weekend in Paris",
      dates: "Jan 20-22, 2025",
      places: 5,
      tags: ["Romance", "Art", "Cafes"]
    }
  ];

  const notifications = [
    {
      id: 1,
      message: "New vegan restaurants discovered in Rome based on your preferences",
      time: "2 hours ago",
      type: "recommendation"
    },
    {
      id: 2,
      message: "Weather update: Perfect conditions for your Tokyo trip next week",
      time: "1 day ago",
      type: "weather"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-[#f8bc33]/10 flex flex-col">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-[#4A90E2] transition-colors duration-200"
              >
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
              
              {/* Enhanced Logo with Black Shadow and Text */}
              <Link href="/" className="flex flex-col items-center group">
                <div className="relative">
                  <img 
                    src="/logo1_new.png" 
                    alt="Hoze AI Logo" 
                    className="h-12 w-auto transform group-hover:scale-110 transition-all duration-300"
                    style={{ 
                      filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.8)) drop-shadow(0 2px 6px rgba(0, 0, 0, 0.6))'
                    }}
                  />
                </div>
                <span className="text-xs text-[#4A90E2] font-medium mt-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  We know the spot
                </span>
              </Link>
              
              <div className="hidden lg:flex items-center space-x-2 bg-[#4A90E2]/10 px-3 py-1 rounded-full">
                <Sparkles className="h-4 w-4 text-[#4A90E2]" />
                <span className="text-sm text-[#4A90E2] font-medium">AI Assistant</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <select 
                value={assistantTone}
                onChange={(e) => setAssistantTone(e.target.value)}
                className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
              >
                <option>Casual</option>
                <option>Friendly</option>
                <option>Direct</option>
              </select>
              <button className="p-2 text-gray-600 hover:text-[#4A90E2] transition-colors duration-200 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button className="flex items-center space-x-2 bg-[#4A90E2] text-white px-4 py-2 rounded-lg hover:bg-[#1C2E4A] transition-colors duration-200">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Alex</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white/80 backdrop-blur-sm border-r border-gray-100 transition-transform duration-300`}>
          <div className="p-6 pt-20 lg:pt-6">
            <nav className="space-y-2">
              {sidebarItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                    item.active 
                      ? 'bg-[#4A90E2] text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </div>
                  {item.count !== undefined && (
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.active ? 'bg-white/20' : 'bg-gray-200'
                    }`}>
                      {item.count}
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:ml-0">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-[#4A90E2] to-[#f8bc33] rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Welcome back, Alex! 🎉
                </h1>
                <p className="text-xl opacity-90 mb-4">
                  Your AI travel assistant has 3 new vegan cafes in Rome based on your last search.
                </p>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full">Free Plan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>Last active: 2 hours ago</span>
                  </div>
                </div>
              </div>
              {/* Floating Travel Icons */}
              <div className="absolute top-4 right-4 opacity-20">
                <Plane className="h-16 w-16 animate-float" />
              </div>
              <div className="absolute bottom-4 right-16 opacity-20">
                <Compass className="h-12 w-12 animate-float" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Assistant Interaction Panel */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#1C2E4A] flex items-center">
                    <MessageSquare className="h-6 w-6 mr-3 text-[#4A90E2]" />
                    Chat with Your AI Assistant
                  </h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>Voice & Text</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-lg p-6 mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#4A90E2] w-10 h-10 rounded-full flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#1C2E4A] mb-2">Hi Alex! I'm your AI travel assistant</h3>
                      <p className="text-gray-600 mb-4">
                        I can help you plan trips, find destinations, discover local experiences, and answer any travel-related questions. 
                        What would you like to explore today?
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Best coffee spots in Istanbul",
                          "Hidden gems in Tokyo", 
                          "Vegan restaurants in Paris",
                          "Budget travel tips for Europe"
                        ].map((suggestion, index) => (
                          <button
                            key={index}
                            className="px-3 py-1 bg-[#f8bc33]/10 text-[#f8bc33] rounded-full hover:bg-[#f8bc33]/20 transition-colors duration-200 text-sm border border-[#f8bc33]/20"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Ask me anything about travel..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  />
                  <button className="bg-[#4A90E2] hover:bg-[#1C2E4A] text-white px-6 py-3 rounded-lg transition-colors duration-200">
                    Send
                  </button>
                </div>
              </div>

              {/* Personalized Suggestions */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-[#1C2E4A] flex items-center">
                    <Star className="h-5 w-5 mr-2 text-[#f8bc33]" />
                    Personalized Suggestions
                  </h3>
                  <button className="text-[#4A90E2] hover:text-[#1C2E4A] text-sm font-medium">
                    View All
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                  {personalizedSuggestions.map((suggestion) => (
                    <div key={suggestion.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                      <img 
                        src={suggestion.image} 
                        alt={suggestion.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-[#1C2E4A]">{suggestion.title}</h4>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600 ml-1">{suggestion.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{suggestion.description}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {suggestion.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-[#4A90E2]/10 text-[#4A90E2] text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex space-x-2">
                          <button className="flex-1 bg-[#4A90E2] text-white py-2 px-3 rounded-lg text-sm hover:bg-[#1C2E4A] transition-colors duration-200">
                            Save
                          </button>
                          <button className="flex-1 border border-[#4A90E2] text-[#4A90E2] py-2 px-3 rounded-lg text-sm hover:bg-[#4A90E2] hover:text-white transition-colors duration-200">
                            More Like This
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-6">
              {/* Quick Overview */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-[#1C2E4A] mb-4">Quick Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Queries Today</span>
                    <span className="font-bold text-[#4A90E2]">3/5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Saved Places</span>
                    <span className="font-bold text-[#f8bc33]">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Plan Status</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Free</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Most Recent</span>
                    <span className="text-xs text-gray-500">Istanbul cafes</span>
                  </div>
                </div>
              </div>

              {/* Saved Trips */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#1C2E4A] flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-[#4A90E2]" />
                    Saved Trips
                  </h3>
                  <button className="text-[#4A90E2] hover:text-[#1C2E4A] text-sm">
                    View All
                  </button>
                </div>
                
                <div className="space-y-3">
                  {savedTrips.map((trip) => (
                    <div key={trip.id} className="p-3 bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-lg hover:shadow-md transition-all duration-200">
                      <h4 className="font-medium text-[#1C2E4A] mb-1">{trip.title}</h4>
                      <p className="text-xs text-gray-600 mb-2">{trip.dates} • {trip.places} places</p>
                      <div className="flex flex-wrap gap-1">
                        {trip.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-[#f8bc33]/10 text-[#f8bc33] text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notifications */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-[#1C2E4A] mb-4 flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-[#4A90E2]" />
                  Notifications & Updates
                </h3>
                
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-3 bg-gradient-to-r from-blue-50 to-cyan-50/50 rounded-lg">
                      <p className="text-sm text-gray-700 mb-1">{notification.message}</p>
                      <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upgrade Prompt */}
              <div className="bg-gradient-to-r from-[#f8bc33] to-[#4A90E2] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-2">Unlock Premium Features</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get unlimited queries, voice responses, and advanced features.
                </p>
                <Link 
                  href="/dashboard/subscription"
                  className="bg-white text-[#4A90E2] px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200 inline-block"
                >
                  Upgrade Now
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <DashboardFooter />
    </div>
  );
};

export default Dashboard;