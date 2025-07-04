"use client"
import React, { useState } from 'react';
import { User, Save, RefreshCw, MapPin, Utensils, Camera, Heart, Plane } from 'lucide-react';
import Link from 'next/link';
import DashboardFooter from '@/components/DashboardFooter';

const Preferences = () => {
  const [preferences, setPreferences] = useState({
    travelStyle: 'solo',
    tripVibe: 'culture',
    dietary: 'anything',
    climate: 'mixed',
    environment: 'both',
    pace: 'easy',
    spontaneous: 'sometimes',
    accommodation: 'both',
    budget: 'mid',
    foodImportance: '4',
    languages: ['English'],
    accessibility: false,
    notifications: {
      recommendations: true,
      weather: true,
      deals: false,
      reminders: true
    }
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    // Show success message
  };

  const handleReset = () => {
    // Reset to default preferences
    setPreferences({
      travelStyle: 'solo',
      tripVibe: 'culture',
      dietary: 'anything',
      climate: 'mixed',
      environment: 'both',
      pace: 'easy',
      spontaneous: 'sometimes',
      accommodation: 'both',
      budget: 'mid',
      foodImportance: '4',
      languages: ['English'],
      accessibility: false,
      notifications: {
        recommendations: true,
        weather: true,
        deals: false,
        reminders: true
      }
    });
  };

  const preferenceOptions = {
    travelStyle: [
      { id: 'solo', label: 'Solo Explorer', emoji: '🧳' },
      { id: 'couple', label: 'Romantic Couple', emoji: '💕' },
      { id: 'group', label: 'Group Adventurer', emoji: '👥' }
    ],
    tripVibe: [
      { id: 'adventure', label: 'Adventure', emoji: '🏔️' },
      { id: 'relaxation', label: 'Relaxation', emoji: '🏖️' },
      { id: 'luxury', label: 'Luxury', emoji: '✨' },
      { id: 'culture', label: 'Culture', emoji: '🏛️' }
    ],
    dietary: [
      { id: 'anything', label: 'Anything Goes', emoji: '🍽️' },
      { id: 'vegetarian', label: 'Vegetarian', emoji: '🥗' },
      { id: 'vegan', label: 'Vegan', emoji: '🌱' }
    ],
    climate: [
      { id: 'tropical', label: 'Tropical', emoji: '🌴' },
      { id: 'cold', label: 'Cold', emoji: '❄️' },
      { id: 'dry', label: 'Dry', emoji: '🌵' },
      { id: 'mixed', label: 'Mixed', emoji: '🌤️' }
    ],
    environment: [
      { id: 'city', label: 'City Explorer', emoji: '🏙️' },
      { id: 'nature', label: 'Nature Lover', emoji: '🌲' },
      { id: 'both', label: 'Both', emoji: '🌆' }
    ],
    pace: [
      { id: 'fast', label: 'Fast-paced', emoji: '⚡' },
      { id: 'easy', label: 'Easygoing', emoji: '😌' },
      { id: 'planner', label: 'Detailed Planner', emoji: '📋' }
    ],
    spontaneous: [
      { id: 'yes', label: 'Yes, always!', emoji: '🎲' },
      { id: 'sometimes', label: 'Sometimes', emoji: '🤔' },
      { id: 'no', label: 'No, I prefer planning', emoji: '📅' }
    ],
    accommodation: [
      { id: 'hotel', label: 'Hotels', emoji: '🏨' },
      { id: 'airbnb', label: 'Airbnb', emoji: '🏠' },
      { id: 'both', label: 'Both', emoji: '🏘️' }
    ],
    budget: [
      { id: 'budget', label: 'Budget ($50-100)', emoji: '💰' },
      { id: 'mid', label: 'Mid-range ($100-250)', emoji: '💳' },
      { id: 'luxury', label: 'Luxury ($250+)', emoji: '💎' }
    ]
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
                <h1 className="text-2xl font-bold text-[#1C2E4A]">My Preferences</h1>
                <p className="text-gray-600">Customize your AI travel assistant</p>
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

      <div className="max-w-4xl mx-auto px-4 py-8 flex-1">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1C2E4A] mb-2 lg:hidden">My Preferences</h1>
          <p className="text-gray-600">
            Help us personalize your travel recommendations by updating your preferences below.
          </p>
        </div>

        <div className="space-y-8">
          {/* Travel Preferences */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#1C2E4A] mb-6 flex items-center">
              <Plane className="h-6 w-6 mr-3 text-[#4A90E2]" />
              Travel Preferences
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(preferenceOptions).map(([key, options]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-3 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <div className="space-y-2">
                    {options.map((option) => (
                      <label key={option.id} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                        <input
                          type="radio"
                          name={key}
                          value={option.id}
                          checked={preferences[key as keyof typeof preferences] === option.id}
                          onChange={(e) => setPreferences({
                            ...preferences,
                            [key]: e.target.value
                          })}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                          preferences[key as keyof typeof preferences] === option.id
                            ? 'border-[#4A90E2] bg-[#4A90E2]'
                            : 'border-gray-300'
                        }`}>
                          {preferences[key as keyof typeof preferences] === option.id && (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                        <span className="text-2xl mr-3">{option.emoji}</span>
                        <span className="text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Food Importance Scale */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-[#1C2E4A] mb-6 flex items-center">
              <Utensils className="h-5 w-5 mr-2 text-[#f8bc33]" />
              Food Discovery Importance
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Not important</span>
                <span>Extremely important</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={preferences.foodImportance}
                onChange={(e) => setPreferences({
                  ...preferences,
                  foodImportance: e.target.value
                })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="text-center">
                <span className="text-lg font-medium text-[#4A90E2]">
                  Level {preferences.foodImportance}/5
                </span>
              </div>
            </div>
          </div>

          {/* Additional Settings */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-[#1C2E4A] mb-6 flex items-center">
              <User className="h-5 w-5 mr-2 text-[#4A90E2]" />
              Additional Settings
            </h3>
            
            <div className="space-y-6">
              {/* Accessibility */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-700">Accessibility Requirements</h4>
                  <p className="text-sm text-gray-600">Include wheelchair accessible places</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.accessibility}
                    onChange={(e) => setPreferences({
                      ...preferences,
                      accessibility: e.target.checked
                    })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4A90E2]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4A90E2]"></div>
                </label>
              </div>

              {/* Notifications */}
              <div>
                <h4 className="font-medium text-gray-700 mb-4">Notification Preferences</h4>
                <div className="space-y-3">
                  {Object.entries(preferences.notifications).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => setPreferences({
                            ...preferences,
                            notifications: {
                              ...preferences.notifications,
                              [key]: e.target.checked
                            }
                          })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4A90E2]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4A90E2]"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <button
              onClick={handleReset}
              className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset to Defaults
            </button>
            <button
              onClick={handleSave}
              disabled={isLoading}
              className="flex items-center justify-center px-6 py-3 bg-[#4A90E2] hover:bg-[#1C2E4A] text-white rounded-lg transition-colors duration-200 disabled:opacity-50"
            >
              {isLoading ? (
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Save className="h-4 w-4 mr-2" />
              )}
              {isLoading ? 'Saving...' : 'Save Preferences'}
            </button>
          </div>
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
};

export default Preferences;