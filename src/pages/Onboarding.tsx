import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, SkipForward, Check, MapPin, Plane, Compass, Globe, Camera, Heart, Luggage, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const onboardingQuestions = [
  {
    id: 1,
    question: "What kind of traveler are you?",
    type: "single",
    options: [
      { id: "solo", label: "Solo Explorer", emoji: "🧳", description: "I love discovering places on my own" },
      { id: "couple", label: "Romantic Couple", emoji: "💕", description: "Traveling with my partner" },
      { id: "group", label: "Group Adventurer", emoji: "👥", description: "I travel with friends or family" }
    ]
  },
  {
    id: 2,
    question: "What's your ideal trip vibe?",
    type: "single",
    options: [
      { id: "adventure", label: "Adventure", emoji: "🏔️", description: "Thrilling experiences and outdoor activities" },
      { id: "relaxation", label: "Relaxation", emoji: "🏖️", description: "Peaceful and rejuvenating experiences" },
      { id: "luxury", label: "Luxury", emoji: "✨", description: "Premium experiences and comfort" },
      { id: "culture", label: "Culture", emoji: "🏛️", description: "Museums, history, and local traditions" }
    ]
  },
  {
    id: 3,
    question: "Any dietary preferences?",
    type: "single",
    options: [
      { id: "anything", label: "Anything Goes", emoji: "🍽️", description: "I'll try any local cuisine" },
      { id: "vegetarian", label: "Vegetarian", emoji: "🥗", description: "Plant-based meals preferred" },
      { id: "vegan", label: "Vegan", emoji: "🌱", description: "Strictly plant-based diet" }
    ]
  },
  {
    id: 4,
    question: "What's your favorite climate?",
    type: "single",
    options: [
      { id: "tropical", label: "Tropical", emoji: "🌴", description: "Warm and humid weather" },
      { id: "cold", label: "Cold", emoji: "❄️", description: "Cool temperatures and snow" },
      { id: "dry", label: "Dry", emoji: "🌵", description: "Low humidity, desert-like" },
      { id: "mixed", label: "Mixed", emoji: "🌤️", description: "I enjoy all types of weather" }
    ]
  },
  {
    id: 5,
    question: "Are you a city explorer or nature lover?",
    type: "single",
    options: [
      { id: "city", label: "City Explorer", emoji: "🏙️", description: "Urban adventures and city life" },
      { id: "nature", label: "Nature Lover", emoji: "🌲", description: "Mountains, forests, and wildlife" },
      { id: "both", label: "Both", emoji: "🌆", description: "I enjoy city and nature equally" }
    ]
  },
  {
    id: 6,
    question: "What's your travel style?",
    type: "single",
    options: [
      { id: "fast", label: "Fast-paced", emoji: "⚡", description: "Pack in as much as possible" },
      { id: "easy", label: "Easygoing", emoji: "😌", description: "Take it slow and enjoy the moment" },
      { id: "planner", label: "Detailed Planner", emoji: "📋", description: "Everything scheduled and organized" }
    ]
  },
  {
    id: 7,
    question: "Do you like spontaneous travel?",
    type: "single",
    options: [
      { id: "yes", label: "Yes, always!", emoji: "🎲", description: "I love unexpected adventures" },
      { id: "sometimes", label: "Sometimes", emoji: "🤔", description: "Depends on the situation" },
      { id: "no", label: "No, I prefer planning", emoji: "📅", description: "I like everything planned ahead" }
    ]
  },
  {
    id: 8,
    question: "Accommodation preference?",
    type: "single",
    options: [
      { id: "hotel", label: "Hotels", emoji: "🏨", description: "Professional service and amenities" },
      { id: "airbnb", label: "Airbnb", emoji: "🏠", description: "Local experience and home comfort" },
      { id: "both", label: "Both", emoji: "🏘️", description: "Depends on the destination" }
    ]
  },
  {
    id: 9,
    question: "What's your budget range per day?",
    type: "single",
    options: [
      { id: "budget", label: "Budget ($50-100)", emoji: "💰", description: "Affordable and value-focused" },
      { id: "mid", label: "Mid-range ($100-250)", emoji: "💳", description: "Comfortable with some luxuries" },
      { id: "luxury", label: "Luxury ($250+)", emoji: "💎", description: "Premium experiences preferred" }
    ]
  },
  {
    id: 10,
    question: "How important is food discovery?",
    type: "scale",
    options: [
      { id: "1", label: "Not important", emoji: "😐" },
      { id: "2", label: "Slightly important", emoji: "🙂" },
      { id: "3", label: "Moderately important", emoji: "😊" },
      { id: "4", label: "Very important", emoji: "😋" },
      { id: "5", label: "Extremely important", emoji: "🤤" }
    ]
  }
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isAnimating, setIsAnimating] = useState(false);

  const currentQuestion = onboardingQuestions[currentStep];
  const progress = ((currentStep + 1) / onboardingQuestions.length) * 100;

  const handleAnswer = (optionId: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: optionId });
    
    // Auto-advance after selection
    setTimeout(() => {
      if (currentStep < onboardingQuestions.length - 1) {
        nextStep();
      }
    }, 500);
  };

  const nextStep = () => {
    if (currentStep < onboardingQuestions.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleComplete = () => {
    console.log('Onboarding completed:', answers);
    // Navigate to subscription page
    window.location.href = '/subscription';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-[#f8bc33]/10">
      <Header />
      
      {/* Progress Bar - Directly under header with no gap */}
      <div className="mt-16 bg-gradient-to-r from-[#4A90E2] to-[#f8bc33] shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-medium">{currentStep + 1} of {onboardingQuestions.length}</span>
            <Link to="/subscription" className="text-white/80 hover:text-white transition-colors duration-200 text-sm">
              Skip Personalization
            </Link>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-500 shadow-lg"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        {/* Subtle Background with Floating Travel Icons - No flickering */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Static travel icons with gentle float */}
          <div className="absolute top-32 right-10 opacity-15">
            <Plane className="h-20 w-20 text-[#4A90E2] animate-float" />
          </div>
          <div className="absolute bottom-40 left-16 opacity-15">
            <Compass className="h-16 w-16 text-[#f8bc33] animate-float" style={{ animationDelay: '2s' }} />
          </div>
          <div className="absolute top-60 left-1/4 opacity-15">
            <MapPin className="h-14 w-14 text-[#1C2E4A] animate-float" style={{ animationDelay: '4s' }} />
          </div>
          <div className="absolute bottom-60 right-1/4 opacity-15">
            <Globe className="h-16 w-16 text-[#4A90E2] animate-float" style={{ animationDelay: '3s' }} />
          </div>
          <div className="absolute top-80 right-1/3 opacity-15">
            <Camera className="h-12 w-12 text-[#f8bc33] animate-float" style={{ animationDelay: '5s' }} />
          </div>
          <div className="absolute bottom-80 left-1/3 opacity-15">
            <Heart className="h-14 w-14 text-[#1C2E4A] animate-float" style={{ animationDelay: '6s' }} />
          </div>
          <div className="absolute top-96 left-8 opacity-15">
            <Luggage className="h-18 w-18 text-[#4A90E2] animate-float" style={{ animationDelay: '1.5s' }} />
          </div>
          <div className="absolute bottom-20 right-8 opacity-15">
            <Navigation className="h-10 w-10 text-[#f8bc33] animate-float" style={{ animationDelay: '7s' }} />
          </div>
          
          {/* Subtle travel routes - no aggressive animation */}
          <svg className="absolute inset-0 w-full h-full opacity-8" viewBox="0 0 800 600">
            <path
              d="M100,100 Q200,50 300,100 T500,100 Q600,150 700,100"
              stroke="#4A90E2"
              strokeWidth="2"
              strokeDasharray="10,10"
              fill="none"
              className="animate-gentle-pulse"
            />
            <path
              d="M50,300 Q150,250 250,300 T450,300 Q550,350 650,300"
              stroke="#f8bc33"
              strokeWidth="2"
              strokeDasharray="10,10"
              fill="none"
              className="animate-gentle-pulse"
              style={{ animationDelay: '2s' }}
            />
            <path
              d="M80,450 Q180,400 280,450 T480,450 Q580,500 680,450"
              stroke="#1C2E4A"
              strokeWidth="1"
              strokeDasharray="8,8"
              fill="none"
              className="animate-gentle-pulse"
              style={{ animationDelay: '4s' }}
            />
            
            {/* Static destination markers */}
            <circle cx="150" cy="100" r="4" fill="#4A90E2" opacity="0.6" />
            <circle cx="300" cy="100" r="4" fill="#f8bc33" opacity="0.6" />
            <circle cx="500" cy="100" r="4" fill="#1C2E4A" opacity="0.6" />
            <circle cx="250" cy="300" r="4" fill="#4A90E2" opacity="0.6" />
            <circle cx="450" cy="300" r="4" fill="#f8bc33" opacity="0.6" />
            <circle cx="280" cy="450" r="4" fill="#1C2E4A" opacity="0.6" />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Question Card */}
            <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-[#1C2E4A] mb-4 animate-fadeInUp">
                  {currentQuestion.question}
                </h1>
                <div className="flex items-center justify-center space-x-2 text-gray-600 animate-fadeInUp delay-200">
                  <MapPin className="h-4 w-4" />
                  <span>Personalizing your travel experience</span>
                </div>
              </div>

              {/* Options */}
              <div className={`grid ${currentQuestion.type === 'scale' ? 'grid-cols-5' : 'md:grid-cols-2 lg:grid-cols-3'} gap-4 max-w-4xl mx-auto`}>
                {currentQuestion.options.map((option, index) => {
                  const isSelected = answers[currentQuestion.id] === option.id;
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleAnswer(option.id)}
                      className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-scaleIn ${
                        isSelected 
                          ? 'border-[#4A90E2] bg-[#4A90E2]/10 shadow-lg' 
                          : 'border-gray-200 bg-white/80 backdrop-blur-sm hover:border-[#f8bc33] hover:shadow-xl'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {isSelected && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#4A90E2] rounded-full flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      )}
                      
                      <div className="text-center">
                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                          {option.emoji}
                        </div>
                        <h3 className={`font-bold mb-2 transition-colors duration-200 ${
                          isSelected ? 'text-[#4A90E2]' : 'text-[#1C2E4A] group-hover:text-[#4A90E2]'
                        }`}>
                          {option.label}
                        </h3>
                        {option.description && (
                          <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                            {option.description}
                          </p>
                        )}
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#f8bc33]/5 to-[#4A90E2]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12 max-w-2xl mx-auto">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-[#4A90E2] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronLeft className="h-5 w-5" />
                <span>Previous</span>
              </button>

              <div className="flex space-x-2">
                {onboardingQuestions.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentStep 
                        ? 'bg-[#4A90E2] scale-125' 
                        : index < currentStep 
                          ? 'bg-[#f8bc33]' 
                          : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {currentStep === onboardingQuestions.length - 1 ? (
                <button
                  onClick={handleComplete}
                  className="flex items-center space-x-2 px-6 py-3 bg-[#4A90E2] hover:bg-[#1C2E4A] text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <span>Complete</span>
                  <Check className="h-5 w-5" />
                </button>
              ) : (
                <button
                  onClick={nextStep}
                  disabled={!answers[currentQuestion.id]}
                  className="flex items-center space-x-2 px-6 py-3 bg-[#4A90E2] hover:bg-[#1C2E4A] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <span>Next</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Skip Option */}
            <div className="text-center mt-8">
              <Link 
                to="/subscription"
                className="inline-flex items-center space-x-2 text-gray-500 hover:text-[#4A90E2] transition-colors duration-200"
              >
                <SkipForward className="h-4 w-4" />
                <span>Skip personalization for now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Onboarding;