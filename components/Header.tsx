'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Globe, User } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Increased width with reduced spacing */}
          <Link href="/" className="flex items-center space-x-3 animate-fadeInLeft">
            <div className="flex flex-col items-center">
              <img 
                src="/logo1_new.png" 
                alt="Hoze AI Logo" 
                className="h-8 w-auto max-w-none transform hover:scale-110 transition-all duration-300"
                style={{ 
                  filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.8))',
                  width: 'auto',
                  minWidth: '120px'
                }}
              />
              <span className="text-xs text-[#4A90E2] font-medium opacity-80 hover:opacity-100 transition-opacity duration-300" style={{ marginTop: '2px' }}>
                We know the spot
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "#how-it-works", text: "How It Works" },
              { href: "#features", text: "Features" },
              { href: "#demo", text: "Demo" },
              { href: "#pricing", text: "Pricing" }
            ].map((item, index) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-lg font-light text-[#4A90E2] hover:text-[#1C2E4A] transition-all duration-300 relative group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f8bc33] group-hover:w-full transition-all duration-300"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#f8bc33]/10 to-[#4A90E2]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4 animate-fadeInRight">
            <button className="text-[#4A90E2] hover:text-[#1C2E4A] transition-all duration-300 transform hover:scale-110 hover:rotate-12">
              <Globe className="h-5 w-5" />
            </button>
            <Link 
              href="/login"
              className="bg-gradient-to-r from-[#f8bc33] to-[#4A90E2] hover:from-[#4A90E2] hover:to-[#f8bc33] text-white px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-medium transform hover:-translate-y-1 hover:scale-105"
            >
              <User className="h-4 w-4 inline mr-2" />
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#4A90E2] hover:text-[#1C2E4A] transition-all duration-300 transform hover:scale-110"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 py-4 animate-fadeInUp">
            <nav className="flex flex-col space-y-4">
              {[
                { href: "#how-it-works", text: "How It Works" },
                { href: "#features", text: "Features" },
                { href: "#demo", text: "Demo" },
                { href: "#pricing", text: "Pricing" }
              ].map((item, index) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-lg font-light text-[#4A90E2] hover:text-[#1C2E4A] transition-all duration-300 px-4 py-2 rounded-lg hover:bg-[#f8bc33]/10 animate-fadeInLeft"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.text}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-gray-100">
                <Link 
                  href="/login"
                  className="w-full bg-gradient-to-r from-[#f8bc33] to-[#4A90E2] text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 block text-center"
                >
                  Sign In
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}