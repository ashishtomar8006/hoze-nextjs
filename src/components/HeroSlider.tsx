"use client"
import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, MapPin, Clock, Play, Pause } from 'lucide-react';

const useCases = [
  {
    id: 1,
    title: "Solo Female Traveler in Bali",
    query: "Safe places for solo female travelers in Bali with good WiFi",
    response: "🏨 **Canggu Co-working Spaces**\n• Dojo Bali - Female-friendly community\n• Outsite Canggu - Safe accommodation\n\n🍃 **Ubud Wellness Retreats**\n• Yoga Barn - Daily classes & community\n• Radiantly Alive - Women's circles",
    tags: ["Safety", "Community", "WiFi", "Wellness"],
    destination: "Bali, Indonesia",
    image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Ubud Rice Terraces",
    tagText: "Solo Travel",
    sliderTitle: "Discover Safe Havens"
  },
  {
    id: 2,
    title: "Hidden Romantic Cafes in Paris",
    query: "Romantic, less touristy cafes in Paris for couples",
    response: "☕ **Le Procope** - Historic literary cafe\n• Intimate candlelit tables\n• Famous writers' hangout\n\n🌹 **Cafe de Flore** - Classic Parisian romance\n• Perfect for morning coffee dates\n• Beautiful Art Deco interior",
    tags: ["Romance", "Hidden Gems", "Atmosphere", "Local"],
    destination: "Paris, France",
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Montmartre District",
    tagText: "Romantic Spots",
    sliderTitle: "Find Hidden Romance"
  },
  {
    id: 3,
    title: "Street Food Hubs in Bangkok for Vegetarians",
    query: "Best vegetarian street food areas in Bangkok",
    response: "🥬 **Chatuchak Weekend Market**\n• Jay Fai - Michelin starred vegetarian\n• Fresh fruit stalls everywhere\n\n🍜 **Chinatown (Yaowarat)**\n• Buddhist vegetarian restaurants\n• Amazing tofu and noodle dishes",
    tags: ["Vegetarian", "Street Food", "Local Markets", "Authentic"],
    destination: "Bangkok, Thailand",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Chatuchak Market",
    tagText: "Food Discovery",
    sliderTitle: "Taste Authentic Flavors"
  },
  {
    id: 4,
    title: "Instagram-Worthy Spots in Santorini",
    query: "Most photogenic locations in Santorini for sunset photos",
    response: "📸 **Oia Village**\n• Blue domed churches\n• Best sunset viewpoints\n\n🏛️ **Fira to Oia Hike**\n• Dramatic cliff views\n• Golden hour photography\n\n⛪ **Three Bells of Fira**\n• Iconic blue and white architecture",
    tags: ["Photography", "Sunset", "Architecture", "Scenic"],
    destination: "Santorini, Greece",
    image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Oia Village",
    tagText: "Photography",
    sliderTitle: "Capture Perfect Moments"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      handleSlideChange((prev) => (prev + 1) % useCases.length);
    }, 6000); // Increased from 4500ms to 6000ms (6 seconds)

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleSlideChange = (newSlide: number | ((prev: number) => number)) => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (typeof newSlide === 'function') {
        setCurrentSlide(newSlide);
      } else {
        setCurrentSlide(newSlide);
      }
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50); // Quick fade-in after content change
    }, 300); // Longer blur-out duration
  };

  const nextSlide = () => {
    handleSlideChange((prev) => (prev + 1) % useCases.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    handleSlideChange((prev) => (prev - 1 + useCases.length) % useCases.length);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentUseCase = useCases[currentSlide];

  return (
    <section className="relative pt-20 pb-8 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-[#f8bc33]/10 min-h-[68vh]">
      {/* Lighter and More Blurred Background Elements */}
      <div className="absolute -top-40 -right-32 w-96 h-96 bg-[#4A90E2]/5 rounded-full blur-3xl animate-float opacity-60" />
      <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-[#f8bc33]/5 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '1s' }} />
      
      {/* Subtle floating travel elements with more blur */}
      <div className="absolute top-20 right-16 opacity-3">
        <div className="w-20 h-20 bg-[#4A90E2]/10 rounded-full animate-float flex items-center justify-center blur-sm">
          <div className="w-10 h-10 bg-[#4A90E2]/20 rounded-full animate-pulse" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 opacity-3">
        <div className="w-16 h-16 bg-[#f8bc33]/10 rounded-full animate-float flex items-center justify-center blur-sm" style={{ animationDelay: '2s' }}>
          <div className="w-8 h-8 bg-[#f8bc33]/20 rounded-full animate-pulse" />
        </div>
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-3">
        <div className="w-12 h-12 bg-[#1C2E4A]/10 rounded-full animate-float blur-sm" style={{ animationDelay: '3s' }} />
      </div>
      
      {/* Much lighter travel route animations with blur */}
      <svg className="absolute inset-0 w-full h-full opacity-3 blur-sm" viewBox="0 0 800 600">
        <path
          d="M100,100 Q200,50 300,100 T500,100 Q600,150 700,100"
          stroke="#4A90E2"
          strokeWidth="2"
          strokeDasharray="12,12"
          fill="none"
          className="animate-pulse"
        >
          <animate attributeName="stroke-dashoffset" values="0;24;0" dur="6s" repeatCount="indefinite" />
        </path>
        <path
          d="M50,300 Q150,250 250,300 T450,300 Q550,350 650,300"
          stroke="#f8bc33"
          strokeWidth="2"
          strokeDasharray="12,12"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '2s' }}
        >
          <animate attributeName="stroke-dashoffset" values="24;0;24" dur="6s" repeatCount="indefinite" />
        </path>
        <path
          d="M80,450 Q180,400 280,450 T480,450 Q580,500 680,450"
          stroke="#1C2E4A"
          strokeWidth="1"
          strokeDasharray="8,8"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '4s' }}
        >
          <animate attributeName="stroke-dashoffset" values="0;16;0" dur="5s" repeatCount="indefinite" />
        </path>
        
        {/* Lighter destination markers */}
        <circle cx="150" cy="100" r="3" fill="#4A90E2" className="animate-pulse opacity-50">
          <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="100" r="3" fill="#f8bc33" className="animate-pulse opacity-50" style={{ animationDelay: '1s' }}>
          <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="500" cy="100" r="3" fill="#1C2E4A" className="animate-pulse opacity-50" style={{ animationDelay: '2s' }}>
          <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
      
      {/* Vertical Navigation Controls - Left Side with Proper Spacing */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 animate-fadeInUp delay-400">
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={prevSlide}
            className="bg-white/90 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
          >
            <ChevronUp className="h-5 w-5 text-[#4A90E2]" />
          </button>
          
          <div className="flex flex-col space-y-3">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 transform hover:scale-125 ${
                  index === currentSlide 
                    ? 'bg-[#f8bc33] scale-125 shadow-lg' 
                    : 'bg-gray-300 hover:bg-[#4A90E2]'
                }`}
              />
            ))}
          </div>
          
          {/* Play/Pause Button */}
          <button
            onClick={toggleAutoPlay}
            className="bg-white/90 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
            title={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isAutoPlaying ? (
              <Pause className="h-5 w-5 text-[#4A90E2]" />
            ) : (
              <Play className="h-5 w-5 text-[#4A90E2]" />
            )}
          </button>
          
          <button
            onClick={nextSlide}
            className="bg-white/90 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
          >
            <ChevronDown className="h-5 w-5 text-[#4A90E2]" />
          </button>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full pl-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[56vh]">
          {/* Left Content - Use Cases */}
          <div className="text-left relative">
            <div className="">
              {/* Dynamic Tag - Changes with each slide - NOW ON LEFT SIDE - REMOVED BOTTOM PADDING */}
              <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#f8bc33]/20 to-[#4A90E2]/20 rounded-full text-[#1C2E4A] text-sm font-medium mb-4 border border-[#f8bc33]/30 transition-all duration-300 ${
                isTransitioning ? 'opacity-0 blur-sm transform scale-95' : 'opacity-100 blur-none transform scale-100'
              }`}>
                <div className="w-2 h-2 bg-[#f8bc33] rounded-full mr-2 animate-pulse" />
                {currentUseCase.tagText}
              </div>
            </div>
            
            {/* Current Use Case */}
            <div className={`bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-100 mb-6 transition-all duration-300 ${
              isTransitioning ? 'opacity-0 blur-sm transform scale-95' : 'opacity-100 blur-none transform scale-100'
            }`}>
              <h3 className="text-xl font-bold text-[#1C2E4A] mb-4">
                {currentUseCase.title}
              </h3>
              
              <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-lg p-4 mb-4 border-l-4 border-[#4A90E2]">
                <p className="text-sm text-[#4A90E2] font-medium mb-1">Query:</p>
                <p className="text-gray-700 italic">"{currentUseCase.query}"</p>
              </div>
              
              <div className="bg-gradient-to-r from-[#f8bc33]/5 to-[#4A90E2]/5 rounded-lg p-4 mb-4">
                <p className="text-sm text-[#f8bc33] font-medium mb-2">AI Response:</p>
                <div className="text-gray-700 text-sm whitespace-pre-line">
                  {currentUseCase.response}
                </div>
              </div>
              
              {/* Tags moved here - on the left side within the use case card - REMOVED BOTTOM PADDING */}
              <div className="flex flex-wrap gap-2">
                {currentUseCase.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-[#f8bc33]/10 text-[#f8bc33] text-xs rounded-full border border-[#f8bc33]/20 transition-all duration-300 hover:bg-[#f8bc33]/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-gradient-to-r from-[#4A90E2] to-[#1C2E4A] hover:from-[#1C2E4A] hover:to-[#4A90E2] text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 font-semibold group">
                <span className="group-hover:scale-110 transition-transform duration-300 inline-block">Try AI Assistant</span>
              </button>
              <button className="bg-gradient-to-r from-[#f8bc33] to-[#4A90E2] hover:from-[#4A90E2] hover:to-[#f8bc33] text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 font-semibold group">
                <span className="group-hover:scale-110 transition-transform duration-300 inline-block">View All Cases</span>
              </button>
            </div>
          </div>
          
          {/* Right Content - Destination Image */}
          <div className="relative">
            <div className={`relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 group ${
              isTransitioning ? 'opacity-0 blur-sm transform scale-95' : 'opacity-100 blur-none transform scale-100'
            }`}>
              <img
                src={currentUseCase.image}
                alt={currentUseCase.destination}
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2E4A]/60 via-transparent to-transparent" />
              
              {/* "Real-time, Updated Daily" Tag - Bottom Left Corner with Bouncing Animation */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-bounce">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-[#4A90E2] mr-2 animate-pulse" />
                  <div>
                    <p className="text-sm font-bold text-[#4A90E2]">Real-time</p>
                    <p className="text-xs text-gray-600">Updated Daily</p>
                  </div>
                </div>
              </div>
              
              {/* Destination Info Overlay - positioned on right side */}
              <div className="absolute top-6 right-6 text-white bg-black/30 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-[#f8bc33] rounded-full mr-2 animate-pulse" />
                  <span className="text-sm opacity-90">AI Recommended</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{currentUseCase.destination}</h3>
                <div className="flex items-center text-sm opacity-90">
                  <MapPin className="h-4 w-4 mr-1" />
                  {currentUseCase.location}
                </div>
              </div>
            </div>
            
            {/* Dynamic Title Under Image - Left Aligned with Stylish Cursive Font */}
            <div className={`mt-6 text-left transition-all duration-300 ${
              isTransitioning ? 'opacity-0 blur-sm transform -translate-x-4' : 'opacity-100 blur-none transform translate-x-0'
            }`}>
              <h1 className="slider-heading text-2xl md:text-3xl lg:text-4xl leading-tight" style={{ color: '#1d2e4a' }}>
                {currentUseCase.sliderTitle}
              </h1>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 transform hover:scale-110 transition-all duration-300 animate-float delay-1000">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#f8bc33] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-[#1C2E4A]">Live Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Progress Bar */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
          <div className="flex space-x-1">
            {useCases.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentSlide 
                    ? 'w-8 bg-[#f8bc33] shadow-lg' 
                    : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;