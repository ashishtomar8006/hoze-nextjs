import React from 'react'
import { Bot, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Smartphone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 animate-fadeInUp">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex flex-col items-center">
                <img 
                  src="/logo1_new.png" 
                  alt="Hoze AI Logo" 
                  className="h-8 w-auto transform hover:scale-110 transition-custom"
                  style={{ filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.8))' }}
                />
                <span className="text-xs text-accent font-medium mt-1 opacity-80 hover:opacity-100 transition-custom">
                  We know the spot
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your intelligent travel companion, powered by AI to create unforgettable journeys 
              tailored to your unique preferences and dreams.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <button key={index} className={`bg-primary/20 hover:bg-primary/30 p-2 rounded-custom-lg transition-custom transform hover:scale-110 hover:-translate-y-1 animate-fadeInUp`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp delay-200">
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "#how-it-works", text: "How It Works" },
                { href: "#features", text: "Features" },
                { href: "#demo", text: "Live Demo" },
                { href: "#pricing", text: "Pricing" },
                { href: "/about", text: "About Us" },
                { href: "#", text: "Travel Blog" }
              ].map((link, index) => (
                <li key={index} className={`animate-fadeInLeft`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-custom transform hover:translate-x-1 inline-block">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fadeInUp delay-300">
            <h3 className="text-lg font-semibold mb-4 text-accent">Company</h3>
            <ul className="space-y-3">
              {[
                { href: "/about", text: "About Us" },
                { href: "/contact", text: "Contact Us" },
                { href: "#", text: "Privacy Policy" },
                { href: "#", text: "Terms of Service" },
                { href: "#", text: "Careers" },
                { href: "#", text: "Press Kit" }
              ].map((item, index) => (
                <li key={index} className={`animate-fadeInLeft`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <a href={item.href} className="text-gray-300 hover:text-white transition-custom transform hover:translate-x-1 inline-block">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & App */}
          <div className="animate-fadeInUp delay-400">
            <h3 className="text-lg font-semibold mb-4 text-accent">Contact</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center group">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0 group-hover:scale-110 transition-custom" />
                <span className="text-gray-300 group-hover:text-white transition-custom">hello@hozeai.com</span>
              </div>
              <div className="flex items-center group">
                <Phone className="h-5 w-5 text-accent mr-3 flex-shrink-0 group-hover:scale-110 transition-custom" />
                <span className="text-gray-300 group-hover:text-white transition-custom">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start group">
                <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-custom" />
                <span className="text-gray-300 group-hover:text-white transition-custom">123 Innovation Street<br />San Francisco, CA 94105</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-accent">App Download</h4>
              <div className="space-y-2">
                {["Coming Soon - iOS", "Coming Soon - Android"].map((text, index) => (
                  <button key={index} className={`flex items-center bg-primary/20 hover:bg-primary/30 px-4 py-2 rounded-custom-lg transition-custom w-full transform hover:scale-105 animate-fadeInUp`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <Smartphone className="h-5 w-5 mr-2" />
                    <span className="text-sm">{text}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-primary/20 py-8 animate-fadeInUp delay-500">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Get the latest AI travel insights and exclusive beta features</p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-primary/10 border border-primary/20 rounded-l-custom-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-gray-400 transition-custom"
              />
              <button className="bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-r-custom-lg hover:shadow-custom-lg transition-custom font-semibold transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary/20 py-6 animate-fadeInUp delay-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Hoze AI. All rights reserved. Powered by advanced AI technology.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
                <span className="text-gray-300 text-sm">AI Status: Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}