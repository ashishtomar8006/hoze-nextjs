"use client"
import React, { useState } from 'react';
import { Settings, User, Bell, Shield, Globe, Trash2, Save, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import DashboardFooter from '@/components/DashboardFooter';

const DashboardSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState({
    profile: {
      fullName: 'Alex Johnson',
      email: 'alex@example.com',
      timezone: 'America/New_York',
      language: 'English',
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    notifications: {
      emailRecommendations: true,
      emailWeather: true,
      emailDeals: false,
      emailReminders: true,
      pushRecommendations: true,
      pushWeather: false,
      pushDeals: false,
      pushReminders: true
    },
    privacy: {
      profileVisibility: 'private',
      dataSharing: false,
      analytics: true,
      marketing: false
    },
    ai: {
      responseLength: 'medium',
      personality: 'friendly',
      voiceEnabled: true,
      autoSave: true,
      learningEnabled: true
    }
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'ai', label: 'AI Assistant', icon: Settings }
  ];

  const handleSave = () => {
    // Handle save logic
    console.log('Settings saved:', settings);
  };

  const handleDeleteAccount = () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      // Handle account deletion
      console.log('Account deletion requested');
    }
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
                <h1 className="text-2xl font-bold text-[#1C2E4A]">Settings</h1>
                <p className="text-gray-600">Manage your account and preferences</p>
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
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-[#4A90E2] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
              {/* Profile Settings */}
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1C2E4A] mb-6">Profile Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={settings.profile.fullName}
                          onChange={(e) => setSettings({
                            ...settings,
                            profile: { ...settings.profile, fullName: e.target.value }
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={settings.profile.email}
                          onChange={(e) => setSettings({
                            ...settings,
                            profile: { ...settings.profile, email: e.target.value }
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Timezone
                        </label>
                        <select
                          value={settings.profile.timezone}
                          onChange={(e) => setSettings({
                            ...settings,
                            profile: { ...settings.profile, timezone: e.target.value }
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                        >
                          <option value="America/New_York">Eastern Time</option>
                          <option value="America/Chicago">Central Time</option>
                          <option value="America/Denver">Mountain Time</option>
                          <option value="America/Los_Angeles">Pacific Time</option>
                          <option value="Europe/London">London</option>
                          <option value="Europe/Paris">Paris</option>
                          <option value="Asia/Tokyo">Tokyo</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Language
                        </label>
                        <select
                          value={settings.profile.language}
                          onChange={(e) => setSettings({
                            ...settings,
                            profile: { ...settings.profile, language: e.target.value }
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                        >
                          <option value="English">English</option>
                          <option value="Spanish">Spanish</option>
                          <option value="French">French</option>
                          <option value="German">German</option>
                          <option value="Italian">Italian</option>
                          <option value="Japanese">Japanese</option>
                        </select>
                      </div>
                    </div>
                    
                    {/* Password Change */}
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Current Password
                          </label>
                          <div className="relative">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              value={settings.profile.currentPassword}
                              onChange={(e) => setSettings({
                                ...settings,
                                profile: { ...settings.profile, currentPassword: e.target.value }
                              })}
                              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              New Password
                            </label>
                            <input
                              type={showPassword ? 'text' : 'password'}
                              value={settings.profile.newPassword}
                              onChange={(e) => setSettings({
                                ...settings,
                                profile: { ...settings.profile, newPassword: e.target.value }
                              })}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Confirm New Password
                            </label>
                            <input
                              type={showPassword ? 'text' : 'password'}
                              value={settings.profile.confirmPassword}
                              onChange={(e) => setSettings({
                                ...settings,
                                profile: { ...settings.profile, confirmPassword: e.target.value }
                              })}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notification Settings */}
              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1C2E4A] mb-6">Notification Settings</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
                      <div className="space-y-4">
                        {Object.entries(settings.notifications).filter(([key]) => key.startsWith('email')).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-gray-700">
                                {key.replace('email', '').replace(/([A-Z])/g, ' $1').trim()}
                              </h4>
                              <p className="text-sm text-gray-600">
                                Receive email notifications for this category
                              </p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={value}
                                onChange={(e) => setSettings({
                                  ...settings,
                                  notifications: {
                                    ...settings.notifications,
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
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Push Notifications</h3>
                      <div className="space-y-4">
                        {Object.entries(settings.notifications).filter(([key]) => key.startsWith('push')).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-gray-700">
                                {key.replace('push', '').replace(/([A-Z])/g, ' $1').trim()}
                              </h4>
                              <p className="text-sm text-gray-600">
                                Receive push notifications for this category
                              </p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={value}
                                onChange={(e) => setSettings({
                                  ...settings,
                                  notifications: {
                                    ...settings.notifications,
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
              )}

              {/* Privacy Settings */}
              {activeTab === 'privacy' && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1C2E4A] mb-6">Privacy Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-700">Profile Visibility</h4>
                        <p className="text-sm text-gray-600">Control who can see your profile</p>
                      </div>
                      <select
                        value={settings.privacy.profileVisibility}
                        onChange={(e) => setSettings({
                          ...settings,
                          privacy: { ...settings.privacy, profileVisibility: e.target.value }
                        })}
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                      >
                        <option value="private">Private</option>
                        <option value="friends">Friends Only</option>
                        <option value="public">Public</option>
                      </select>
                    </div>
                    
                    {Object.entries(settings.privacy).filter(([key]) => key !== 'profileVisibility').map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-700">
                            {key.replace(/([A-Z])/g, ' $1').replace(/^\w/, c => c.toUpperCase())}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {key === 'dataSharing' && 'Share anonymized data to improve our services'}
                            {key === 'analytics' && 'Help us improve by sharing usage analytics'}
                            {key === 'marketing' && 'Receive marketing communications and offers'}
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={value as boolean}
                            onChange={(e) => setSettings({
                              ...settings,
                              privacy: {
                                ...settings.privacy,
                                [key]: e.target.checked
                              }
                            })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4A90E2]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4A90E2]"></div>
                        </label>
                      </div>
                    ))}
                    
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4 text-red-600">Danger Zone</h3>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h4 className="font-medium text-red-800 mb-2">Delete Account</h4>
                        <p className="text-sm text-red-600 mb-4">
                          Once you delete your account, there is no going back. Please be certain.
                        </p>
                        <button
                          onClick={handleDeleteAccount}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* AI Assistant Settings */}
              {activeTab === 'ai' && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1C2E4A] mb-6">AI Assistant Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Response Length
                      </label>
                      <select
                        value={settings.ai.responseLength}
                        onChange={(e) => setSettings({
                          ...settings,
                          ai: { ...settings.ai, responseLength: e.target.value }
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                      >
                        <option value="short">Short</option>
                        <option value="medium">Medium</option>
                        <option value="detailed">Detailed</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        AI Personality
                      </label>
                      <select
                        value={settings.ai.personality}
                        onChange={(e) => setSettings({
                          ...settings,
                          ai: { ...settings.ai, personality: e.target.value }
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                      >
                        <option value="casual">Casual</option>
                        <option value="friendly">Friendly</option>
                        <option value="professional">Professional</option>
                        <option value="enthusiastic">Enthusiastic</option>
                      </select>
                    </div>
                    
                    {Object.entries(settings.ai).filter(([key]) => !['responseLength', 'personality'].includes(key)).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-700">
                            {key.replace(/([A-Z])/g, ' $1').replace(/^\w/, c => c.toUpperCase())}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {key === 'voiceEnabled' && 'Enable voice responses from the AI assistant'}
                            {key === 'autoSave' && 'Automatically save your conversations and recommendations'}
                            {key === 'learningEnabled' && 'Allow AI to learn from your preferences and improve recommendations'}
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={value as boolean}
                            onChange={(e) => setSettings({
                              ...settings,
                              ai: {
                                ...settings.ai,
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
              )}

              {/* Save Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-end">
                  <button
                    onClick={handleSave}
                    className="bg-[#4A90E2] hover:bg-[#1C2E4A] text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
};

export default DashboardSettings;