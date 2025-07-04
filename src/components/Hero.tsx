import React from 'react';
import { Play, ArrowRight, Sparkles, Star, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-[#f8bc33]/10">
      {/* Animated Background Elements */}
      <div className="absolute -top-40 -right-32 w-96 h-96 bg-[#4A90E2]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-[#f8bc33]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#1C2E4A]/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
        
              <Sparkles className="h-4 w-4 mr-2 text-[#f8bc33]" />
              AI-Powered Travel Intelligence
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C2E4A] mb-6 leading-tight animate-fadeInUp">
              Your AI-Powered
              <span className="block text-[#4A90E2] animate-fadeInUp delay-200">
                Travel Companion
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl animate-fadeInUp delay-300">
              Get smart, personalized travel suggestions—without the noise. 
              Our AI analyzes real travel data to give you curated recommendations instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-gradient-to-r from-[#4A90E2] to-[#1C2E4A] hover:from-[#1C2E4A] hover:to-[#4A90E2] text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 font-semibold animate-fadeInUp delay-400 group">
                <span className="group-hover:scale-110 transition-transform duration-300 inline-block">Plan Your Trip</span>
              </button>
              <button className="bg-gradient-to-r from-[#f8bc33] to-[#4A90E2] hover:from-[#4A90E2] hover:to-[#f8bc33] text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 font-semibold animate-fadeInUp delay-500 group">
                <span className="group-hover:scale-110 transition-transform duration-300 inline-block">Try the Demo</span>
              </button>
              <button className="border-2 border-[#4A90E2] text-[#4A90E2] px-8 py-4 rounded-lg hover:bg-[#4A90E2] hover:text-white transition-all duration-300 font-semibold flex items-center justify-center animate-fadeInUp delay-600 group">
                <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:scale-110 transition-transform duration-300 inline-block">See How It Works</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start animate-fadeInUp delay-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#1C2E4A]">98%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#4A90E2]">50+</div>
                <div className="text-sm text-gray-600">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#f8bc33]">10K+</div>
                <div className="text-sm text-gray-600">Happy Travelers</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Visual */}
          <div className="relative animate-fadeInRight">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 group">
              <img
                src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AI-recommended travel destination"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2E4A]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white animate-fadeInUp delay-800">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-[#f8bc33] rounded-full mr-2 animate-pulse" />
                  <span className="text-sm opacity-90">AI Recommended</span>
                </div>
                <p className="text-lg font-semibold">Santorini, Greece</p>
                <p className="text-sm opacity-90">Perfect for romantic getaways</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 transform hover:scale-110 transition-all duration-300 animate-float delay-1000">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#f8bc33] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-[#1C2E4A]">AI Active</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 transform hover:scale-110 transition-all duration-300 animate-float delay-1200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Star className="h-4 w-4 text-[#f8bc33] fill-current mr-1" />
                  <p className="text-xl font-bold text-[#4A90E2]">4.9</p>
                </div>
                <p className="text-xs text-gray-600">User Rating</p>
              </div>
            </div>

            <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-[#f8bc33] to-[#4A90E2] rounded-xl shadow-lg p-3 transform hover:scale-110 transition-all duration-300 animate-float delay-1400">
              <MapPin className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;