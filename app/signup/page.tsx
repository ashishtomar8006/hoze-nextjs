'use client'

import React, { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Check, Plane, MapPin, Compass, Camera, Heart, Luggage, Navigation, Anchor } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Signup() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic
    console.log('Signup:', formData)
    // For demo purposes, redirect to onboarding
    router.push('/onboarding')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    // Password strength validation
    if (name === 'password') {
      setPasswordStrength({
        length: value.length >= 8,
        uppercase: /[A-Z]/.test(value),
        lowercase: /[a-z]/.test(value),
        number: /\d/.test(value),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(value)
      })
    }
  }

  const getPasswordStrengthColor = () => {
    const score = Object.values(passwordStrength).filter(Boolean).length
    if (score < 2) return 'bg-red-500'
    if (score < 4) return 'bg-yellow-500'
    return 'bg-green-500'
  }

  const getPasswordStrengthText = () => {
    const score = Object.values(passwordStrength).filter(Boolean).length
    if (score < 2) return 'Weak'
    if (score < 4) return 'Medium'
    return 'Strong'
  }

  const handleDemoSignup = () => {
    setFormData({
      fullName: 'Demo User',
      email: 'demo@hozeai.com',
      password: 'demo123',
      confirmPassword: 'demo123'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-[#f8bc33]/10">
      <Header />
      
      <div className="pt-20 pb-16 px-4 relative overflow-hidden">
        {/* Subtle Background Elements - No flickering */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Static travel icons with gentle float */}
          <div className="absolute top-32 right-10 opacity-15">
            <Camera className="h-24 w-24 text-[#4A90E2] animate-float" />
          </div>
          <div className="absolute top-60 left-16 opacity-15">
            <Heart className="h-18 w-18 text-[#f8bc33] animate-float" style={{ animationDelay: '3s' }} />
          </div>
          <div className="absolute bottom-32 right-24 opacity-15">
            <Compass className="h-20 w-20 text-[#1C2E4A] animate-float" style={{ animationDelay: '4s' }} />
          </div>
          <div className="absolute top-80 right-1/3 opacity-15">
            <MapPin className="h-14 w-14 text-[#4A90E2] animate-float" style={{ animationDelay: '1.5s' }} />
          </div>
          
          {/* Additional subtle icons */}
          <div className="absolute bottom-60 left-12 opacity-15">
            <Plane className="h-20 w-20 text-[#f8bc33] animate-float" style={{ animationDelay: '5s' }} />
          </div>
          <div className="absolute top-40 left-1/4 opacity-15">
            <Luggage className="h-16 w-16 text-[#1C2E4A] animate-float" style={{ animationDelay: '2s' }} />
          </div>
          <div className="absolute bottom-80 right-1/4 opacity-15">
            <Navigation className="h-12 w-12 text-[#4A90E2] animate-float" style={{ animationDelay: '6s' }} />
          </div>
          <div className="absolute top-96 left-8 opacity-15">
            <Anchor className="h-14 w-14 text-[#f8bc33] animate-float" style={{ animationDelay: '4.5s' }} />
          </div>
          
          {/* Subtle travel routes - no aggressive animation */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600">
            <path
              d="M100,150 Q200,100 300,150 T500,150 Q600,200 700,150"
              stroke="#4A90E2"
              strokeWidth="2"
              strokeDasharray="8,8"
              fill="none"
              className="animate-gentle-pulse"
            />
            <path
              d="M80,350 Q180,300 280,350 T480,350 Q580,400 680,350"
              stroke="#f8bc33"
              strokeWidth="2"
              strokeDasharray="8,8"
              fill="none"
              className="animate-gentle-pulse"
              style={{ animationDelay: '2s' }}
            />
            <path
              d="M120,500 Q220,450 320,500 T520,500 Q620,550 720,500"
              stroke="#1C2E4A"
              strokeWidth="1"
              strokeDasharray="6,6"
              fill="none"
              className="animate-gentle-pulse"
              style={{ animationDelay: '4s' }}
            />
            
            {/* Static destination dots */}
            <circle cx="150" cy="150" r="3" fill="#4A90E2" opacity="0.6" />
            <circle cx="300" cy="150" r="3" fill="#f8bc33" opacity="0.6" />
            <circle cx="500" cy="150" r="3" fill="#1C2E4A" opacity="0.6" />
            <circle cx="280" cy="350" r="3" fill="#4A90E2" opacity="0.6" />
            <circle cx="480" cy="350" r="3" fill="#f8bc33" opacity="0.6" />
            <circle cx="320" cy="500" r="3" fill="#1C2E4A" opacity="0.6" />
          </svg>
        </div>

        <div className="relative max-w-md mx-auto">
          {/* Demo Credentials Banner */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4 mb-8 animate-fadeInUp">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-amber-800 mb-1">Quick Demo Setup</h3>
                <p className="text-sm text-amber-600">Try the complete onboarding experience</p>
                <p className="text-xs text-amber-700 mt-1">Auto-fill demo information</p>
              </div>
              <button
                onClick={handleDemoSignup}
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105"
              >
                Demo Fill
              </button>
            </div>
          </div>

          {/* Signup Form */}
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-100 p-8 animate-scaleIn delay-200">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-[#f8bc33] to-[#4A90E2] w-16 h-16 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-[#1C2E4A] mb-2">Create Account</h1>
              <p className="text-gray-600">Start your AI-powered travel journey</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name Field */}
              <div className="animate-fadeInUp delay-300">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="animate-fadeInUp delay-400">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="animate-fadeInUp delay-500">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-200"
                    placeholder="Create a strong password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                
                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                          style={{ width: `${(Object.values(passwordStrength).filter(Boolean).length / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-600">{getPasswordStrengthText()}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        { key: 'length', text: '8+ characters' },
                        { key: 'uppercase', text: 'Uppercase' },
                        { key: 'lowercase', text: 'Lowercase' },
                        { key: 'number', text: 'Number' }
                      ].map((req) => (
                        <div key={req.key} className={`flex items-center space-x-1 ${passwordStrength[req.key as keyof typeof passwordStrength] ? 'text-green-600' : 'text-gray-400'}`}>
                          <Check className="h-3 w-3" />
                          <span>{req.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="animate-fadeInUp delay-600">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-200"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
                )}
              </div>

              {/* Create Account Button */}
              <button
                type="submit"
                disabled={formData.password !== formData.confirmPassword}
                className="w-full bg-[#4A90E2] hover:bg-[#1C2E4A] disabled:bg-gray-400 text-white py-3 rounded-lg transition-all duration-300 font-semibold transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center animate-fadeInUp delay-700"
              >
                Create Account
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center animate-fadeInUp delay-800">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">or continue with</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Social Signup */}
            <div className="space-y-3 animate-fadeInUp delay-900">
              <button className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium flex items-center justify-center">
                <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="h-5 w-5 mr-3" />
                Continue with Google
              </button>
              <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium flex items-center justify-center">
                <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Continue with Apple
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center mt-6 animate-fadeInUp delay-1000">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link 
                  href="/login" 
                  className="text-[#4A90E2] hover:text-[#1C2E4A] font-medium transition-colors duration-200"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}