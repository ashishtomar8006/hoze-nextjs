'use client'
import React, { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, ArrowRight, MapPin, Plane, Compass, Globe, Camera, Heart, Luggage, Navigation } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Login() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic
    console.log('Login:', formData)
    // For demo purposes, redirect to onboarding
    router.push('/onboarding')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleDemoLogin = () => {
    setFormData({
      email: 'demo@hozeai.com',
      password: 'demo123'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-[#f8bc33]/10">
      <Header />
      
      <div className="pt-20 pb-16 px-4 relative overflow-hidden">
        {/* Subtle Background Elements - No flickering */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Static travel icons with gentle float */}
          <div className="absolute top-20 left-10 opacity-20">
            <Plane className="h-24 w-24 text-[#4A90E2] animate-float" />
          </div>
          <div className="absolute top-40 right-20 opacity-20">
            <Compass className="h-20 w-20 text-[#f8bc33] animate-float" style={{ animationDelay: '2s' }} />
          </div>
          <div className="absolute bottom-40 left-20 opacity-20">
            <Globe className="h-22 w-22 text-[#1C2E4A] animate-float" style={{ animationDelay: '4s' }} />
          </div>
          <div className="absolute top-60 left-1/2 opacity-15">
            <MapPin className="h-16 w-16 text-[#4A90E2] animate-float" style={{ animationDelay: '1s' }} />
          </div>
          
          {/* Additional subtle icons */}
          <div className="absolute bottom-60 right-16 opacity-15">
            <Camera className="h-14 w-14 text-[#f8bc33] animate-float" style={{ animationDelay: '3s' }} />
          </div>
          <div className="absolute top-80 right-1/3 opacity-15">
            <Heart className="h-12 w-12 text-[#1C2E4A] animate-float" style={{ animationDelay: '5s' }} />
          </div>
          <div className="absolute bottom-20 left-1/3 opacity-15">
            <Luggage className="h-18 w-18 text-[#4A90E2] animate-float" style={{ animationDelay: '6s' }} />
          </div>
          <div className="absolute top-32 left-1/3 opacity-15">
            <Navigation className="h-10 w-10 text-[#f8bc33] animate-float" style={{ animationDelay: '2.5s' }} />
          </div>
          
          {/* Subtle dotted paths - no aggressive animation */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600">
            <path
              d="M100,100 Q200,50 300,100 T500,100 Q600,150 700,100"
              stroke="#4A90E2"
              strokeWidth="2"
              strokeDasharray="6,6"
              fill="none"
              className="animate-gentle-pulse"
            />
            <path
              d="M50,300 Q150,250 250,300 T450,300 Q550,350 650,300"
              stroke="#f8bc33"
              strokeWidth="2"
              strokeDasharray="6,6"
              fill="none"
              className="animate-gentle-pulse"
              style={{ animationDelay: '2s' }}
            />
            <path
              d="M80,450 Q180,400 280,450 T480,450 Q580,500 680,450"
              stroke="#1C2E4A"
              strokeWidth="1"
              strokeDasharray="4,4"
              fill="none"
              className="animate-gentle-pulse"
              style={{ animationDelay: '4s' }}
            />
            
            {/* Static destination dots */}
            <circle cx="150" cy="100" r="3" fill="#4A90E2" opacity="0.6" />
            <circle cx="300" cy="100" r="3" fill="#f8bc33" opacity="0.6" />
            <circle cx="500" cy="100" r="3" fill="#1C2E4A" opacity="0.6" />
            <circle cx="250" cy="300" r="3" fill="#4A90E2" opacity="0.6" />
            <circle cx="450" cy="300" r="3" fill="#f8bc33" opacity="0.6" />
          </svg>
        </div>

        <div className="relative max-w-md mx-auto">
          {/* Demo Credentials Banner */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-4 mb-8 animate-fadeInUp">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-emerald-800 mb-1">Try Demo Account</h3>
                <p className="text-sm text-emerald-600">Experience the full onboarding flow</p>
                <p className="text-xs text-emerald-700 mt-1 font-mono">Email: demo@hozeai.com | Password: demo123</p>
              </div>
              <button
                onClick={handleDemoLogin}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 transform hover:scale-105"
              >
                Use Demo
              </button>
            </div>
          </div>

          {/* Login Form */}
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-100 p-8 animate-scaleIn delay-200">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-[#4A90E2] to-[#f8bc33] w-16 h-16 rounded-full flex items-center justify-center">
                  <Lock className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-[#1C2E4A] mb-2">Welcome Back</h1>
              <p className="text-gray-600">Sign in to continue your travel journey</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="animate-fadeInUp delay-300">
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
                    autoFocus
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="animate-fadeInUp delay-400">
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
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end animate-fadeInUp delay-500">
                <Link 
                  href="/forgot-password" 
                  className="text-sm text-[#4A90E2] hover:text-[#1C2E4A] transition-colors duration-200"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#4A90E2] hover:bg-[#1C2E4A] text-white py-3 rounded-lg transition-all duration-300 font-semibold transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center animate-fadeInUp delay-600"
              >
                Sign In
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center animate-fadeInUp delay-700">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">or continue with</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3 animate-fadeInUp delay-800">
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

            {/* Sign Up Link */}
            <div className="text-center mt-6 animate-fadeInUp delay-900">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link 
                  href="/signup" 
                  className="text-[#4A90E2] hover:text-[#1C2E4A] font-medium transition-colors duration-200"
                >
                  Sign up
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