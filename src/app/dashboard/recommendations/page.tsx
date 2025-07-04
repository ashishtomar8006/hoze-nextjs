"use client"
import React, { useState } from 'react';
import { Star, MapPin, Clock, Heart, Share, Filter, Search, TrendingUp, Camera } from 'lucide-react';
import Link from 'next/link';
import DashboardFooter from '@/components/DashboardFooter';

const Recommendations = () => {
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const recommendations = [
    {
      id: 1,
      title: "Cozy Cafes in Istanbul",
      location: "Istanbul, Turkey",
      category: "food",
      rating: 4.8,
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Coffee", "Local", "Authentic", "Hidden Gem"],
      description: "Discover the best local coffee spots away from tourist crowds. Perfect for digital nomads and coffee enthusiasts.",
      aiReason: "Based on your love for authentic local experiences and coffee culture",
      timeToVisit: "Best in morning",
      priceRange: "$5-15",
      saved: false
    },
    {
      id: 2,
      title: "Sunset Photography Spots in Santorini",
      location: "Santorini, Greece",
      category: "photography",
      rating: 4.9,
      image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Photography", "Sunset", "Romantic", "Scenic"],
      description: "Capture breathtaking sunsets from these lesser-known viewpoints. Perfect for photographers and couples.",
      aiReason: "Matches your interest in photography and romantic destinations",
      timeToVisit: "Golden hour",
      priceRange: "Free",
      saved: true
    },
    {
      id: 3,
      title: "Street Food Markets in Bangkok",
      location: "Bangkok, Thailand",
      category: "food",
      rating: 4.7,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Street Food", "Local", "Budget", "Adventure"],
      description: "Authentic Thai street food experiences in local markets. Great for food adventurers on a budget.",
      aiReason: "Perfect for your adventurous food preferences and budget travel style",
      timeToVisit: "Evening",
      priceRange: "$2-8",
      saved: false
    },
    {
      id: 4,
      title: "Hidden Temples in Kyoto",
      location: "Kyoto, Japan",
      category: "culture",
      rating: 4.8,
      image: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Culture", "Temples", "Peaceful", "Traditional"],
      description: "Serene temples away from crowds where you can experience authentic Japanese spirituality.",
      aiReason: "Aligns with your interest in cultural experiences and peaceful environments",
      timeToVisit: "Early morning",
      priceRange: "$3-10",
      saved: false
    },
    {
      id: 5,
      title: "Rooftop Bars in New York",
      location: "New York, USA",
      category: "nightlife",
      rating: 4.6,
      image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Nightlife", "Views", "Urban", "Cocktails"],
      description: "Best rooftop bars with stunning city views and craft cocktails. Perfect for evening entertainment.",
      aiReason: "Matches your urban exploration preferences and nightlife interests",
      timeToVisit: "Evening",
      priceRange: "$15-30",
      saved: true
    },
    {
      id: 6,
      title: "Hiking Trails in Banff",
      location: "Banff, Canada",
      category: "nature",
      rating: 4.9,
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Hiking", "Nature", "Mountains", "Adventure"],
      description: "Spectacular mountain trails with breathtaking views. Perfect for outdoor enthusiasts.",
      aiReason: "Based on your love for outdoor adventures and mountain landscapes",
      timeToVisit: "Summer months",
      priceRange: "Free",
      saved: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All', count: recommendations.length },
    { id: 'food', label: 'Food & Drink', count: recommendations.filter(r => r.category === 'food').length },
    { id: 'culture', label: 'Culture', count: recommendations.filter(r => r.category === 'culture').length },
    { id: 'photography', label: 'Photography', count: recommendations.filter(r => r.category === 'photography').length },
    { id: 'nature', label: 'Nature', count: recommendations.filter(r => r.category === 'nature').length },
    { id: 'nightlife', label: 'Nightlife', count: recommendations.filter(r => r.category === 'nightlife').length }
  ];

  const filteredRecommendations = recommendations.filter(rec => {
    const matchesCategory = filterCategory === 'all' || rec.category === filterCategory;
    const matchesSearch = rec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         rec.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         rec.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleSave = (id: number) => {
    // Handle save/unsave logic
    console.log('Toggle save for recommendation:', id);
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
                <h1 className="text-2xl font-bold text-[#1C2E4A]">AI Recommendations</h1>
                <p className="text-gray-600">Personalized suggestions just for you</p>
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

      <div className="max-w-7xl mx-auto px-4 py-8 flex-1">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1C2E4A] mb-2 lg:hidden">AI Recommendations</h1>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <TrendingUp className="h-5 w-5 text-[#f8bc33]" />
              <span>Updated based on your latest preferences</span>
            </div>
            
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search recommendations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilterCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                  filterCategory === category.id
                    ? 'bg-[#4A90E2] text-white'
                    : 'bg-white/80 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span>{category.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  filterCategory === category.id ? 'bg-white/20' : 'bg-gray-200'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Recommendations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecommendations.map((rec) => (
            <div key={rec.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img 
                  src={rec.image} 
                  alt={rec.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{rec.rating}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button 
                    onClick={() => toggleSave(rec.id)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
                      rec.saved 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/90 text-gray-600 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${rec.saved ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 hover:text-[#4A90E2] transition-colors duration-200">
                    <Share className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#1C2E4A] mb-2">{rec.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {rec.location}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {rec.timeToVisit}
                    </div>
                    <span className="font-medium text-[#f8bc33]">{rec.priceRange}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{rec.description}</p>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50/50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-[#4A90E2] font-medium mb-1">Why AI recommends this:</p>
                  <p className="text-xs text-gray-600">{rec.aiReason}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {rec.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-[#4A90E2]/10 text-[#4A90E2] text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-[#4A90E2] hover:bg-[#1C2E4A] text-white py-2 px-3 rounded-lg text-sm transition-colors duration-200">
                    Get Directions
                  </button>
                  <button className="flex-1 border border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white py-2 px-3 rounded-lg text-sm transition-colors duration-200">
                    More Like This
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredRecommendations.length === 0 && (
          <div className="text-center py-12">
            <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-600 mb-2">No recommendations found</h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your filters or search terms to find more recommendations.
            </p>
            <button 
              onClick={() => {
                setFilterCategory('all');
                setSearchQuery('');
              }}
              className="bg-[#4A90E2] hover:bg-[#1C2E4A] text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      <DashboardFooter />
    </div>
  );
};

export default Recommendations;