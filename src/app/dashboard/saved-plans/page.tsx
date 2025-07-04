"use client"
import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Star, Trash2, Edit, Share, Download, Plus, Filter } from 'lucide-react';
import Link from 'next/link';
import DashboardFooter from '@/components/DashboardFooter';

const SavedPlans = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  
  const savedPlans = [
    {
      id: 1,
      title: "3 Days in Istanbul",
      destination: "Istanbul, Turkey",
      dates: "Dec 15-18, 2024",
      status: "upcoming",
      places: 8,
      image: "https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Culture", "Food", "History"],
      description: "Exploring the historic districts and local cuisine",
      created: "2 days ago"
    },
    {
      id: 2,
      title: "Weekend in Paris",
      destination: "Paris, France",
      dates: "Jan 20-22, 2025",
      status: "planning",
      places: 5,
      image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Romance", "Art", "Cafes"],
      description: "Romantic getaway with museum visits",
      created: "1 week ago"
    },
    {
      id: 3,
      title: "Tokyo Food Adventure",
      destination: "Tokyo, Japan",
      dates: "Mar 10-15, 2025",
      status: "draft",
      places: 12,
      image: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Food", "Culture", "Urban"],
      description: "Street food and traditional restaurants tour",
      created: "3 weeks ago"
    },
    {
      id: 4,
      title: "Santorini Sunset Tour",
      destination: "Santorini, Greece",
      dates: "Aug 5-8, 2024",
      status: "completed",
      places: 6,
      image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Photography", "Romantic", "Scenic"],
      description: "Perfect sunset spots and wine tasting",
      created: "2 months ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-green-100 text-green-800';
      case 'planning': return 'bg-blue-100 text-blue-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredPlans = filterStatus === 'all' 
    ? savedPlans 
    : savedPlans.filter(plan => plan.status === filterStatus);

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
                <h1 className="text-2xl font-bold text-[#1C2E4A]">Saved Plans</h1>
                <p className="text-gray-600">Manage your travel itineraries</p>
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
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-[#1C2E4A] mb-2 lg:hidden">Saved Plans</h1>
              <p className="text-gray-600">You have {savedPlans.length} saved travel plans</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-600" />
                <select 
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                >
                  <option value="all">All Plans</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="planning">Planning</option>
                  <option value="draft">Draft</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <button className="bg-[#f8bc33] hover:bg-[#e6a82e] text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                New Plan
              </button>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlans.map((plan) => (
            <div key={plan.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img 
                  src={plan.image} 
                  alt={plan.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(plan.status)}`}>
                    {plan.status.charAt(0).toUpperCase() + plan.status.slice(1)}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#1C2E4A] mb-2">{plan.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {plan.destination}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {plan.dates}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {plan.places} places • Created {plan.created}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {plan.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-[#4A90E2]/10 text-[#4A90E2] text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-600 hover:text-[#4A90E2] transition-colors duration-200">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-[#f8bc33] transition-colors duration-200">
                      <Share className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-green-600 transition-colors duration-200">
                      <Download className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-red-600 transition-colors duration-200">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <button className="bg-[#4A90E2] hover:bg-[#1C2E4A] text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200">
                    View Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPlans.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-600 mb-2">No plans found</h3>
            <p className="text-gray-500 mb-6">
              {filterStatus === 'all' 
                ? "You haven't created any travel plans yet." 
                : `No ${filterStatus} plans found.`}
            </p>
            <button className="bg-[#4A90E2] hover:bg-[#1C2E4A] text-white px-6 py-3 rounded-lg transition-colors duration-200">
              Create Your First Plan
            </button>
          </div>
        )}
      </div>

      <DashboardFooter />
    </div>
  );
};

export default SavedPlans;