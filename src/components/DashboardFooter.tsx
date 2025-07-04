"use client"
import React from 'react';
import { Heart, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

const DashboardFooter = () => {
  return (
    <footer className="bg-[#1C2E4A] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="animate-fadeInUp">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex flex-col items-center">
                <img 
                  src="/logo1_new.png" 
                  alt="Hoze AI Logo" 
                  className="h-8 w-auto transform hover:scale-110 transition-all duration-300"
                  style={{ filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.8))' }}
                />
                <span className="text-xs text-[#f8bc33] font-medium mt-1 opacity-80 hover:opacity-100 transition-opacity duration-300">
                  We know the spot
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              Your intelligent travel companion, powered by AI to create unforgettable journeys.
            </p>
            <div className="flex space-x-3">
              {[Github, Twitter, Linkedin].map((Icon, index) => (
                <button key={index} className={`bg-[#4A90E2]/20 hover:bg-[#4A90E2]/30 p-2 rounded-lg transition-all duration-300 transform hover:scale-110 animate-fadeInUp`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp delay-200">
            <h3 className="text-lg font-semibold mb-4 text-[#f8bc33]">Dashboard</h3>
            <ul className="space-y-2">
              {[
                { href: "/dashboard", text: "Home" },
                { href: "/dashboard/saved-plans", text: "Saved Plans" },
                { href: "/dashboard/recommendations", text: "Recommendations" },
                { href: "/dashboard/preferences", text: "Preferences" }
              ].map((link, index) => (
                <li key={index} className={`animate-fadeInLeft`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-all duration-200 transform hover:translate-x-1 inline-block text-sm">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div className="animate-fadeInUp delay-300">
            <h3 className="text-lg font-semibold mb-4 text-[#f8bc33]">Account</h3>
            <ul className="space-y-2">
              {[
                { href: "/dashboard/subscription", text: "Subscription" },
                { href: "/dashboard/settings", text: "Settings" },
                { href: "/dashboard/help", text: "Help Center" },
                { href: "/", text: "Back to Home" }
              ].map((item, index) => (
                <li key={index} className={`animate-fadeInLeft`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-all duration-200 transform hover:translate-x-1 inline-block text-sm">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fadeInUp delay-400">
            <h3 className="text-lg font-semibold mb-4 text-[#f8bc33]">Support</h3>
            <div className="space-y-3">
              <div className="flex items-center group">
                <Mail className="h-4 w-4 text-[#4A90E2] mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">hello@hozeai.com</span>
              </div>
              <div className="flex items-center group">
                <Phone className="h-4 w-4 text-[#f8bc33] mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start group">
                <MapPin className="h-4 w-4 text-[#4A90E2] mr-2 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#4A90E2]/20 mt-8 pt-6 animate-fadeInUp delay-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Hoze AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#f8bc33] rounded-full mr-2 animate-pulse" />
                <span className="text-gray-300 text-sm">AI Status: Online</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-4 w-4 text-red-500 mr-1" />
                <span className="text-gray-300 text-sm">Made with love</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;