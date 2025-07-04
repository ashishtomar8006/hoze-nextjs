import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Digital Nomad",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
    content: "This is how Google Travel should work! No more scrolling through endless sponsored posts. Just pure, helpful recommendations.",
    rating: 5,
    location: "Currently in Bali"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Travel Photographer",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
    content: "Finally found hidden gems that aren't overrun by tourists. The AI really understands what authentic travel experiences look like.",
    rating: 5,
    location: "Recently in Tokyo"
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Solo Traveler",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
    content: "As a solo female traveler, safety is my priority. The AI gives me confidence with its detailed, personalized safety recommendations.",
    rating: 5,
    location: "Planning trip to Morocco"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Food Enthusiast",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100",
    content: "The food recommendations are incredible! Found the best local spots that even my foodie friends hadn't heard of.",
    rating: 5,
    location: "Recently in Bangkok"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/50 to-[#f8bc33]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C2E4A] mb-4 animate-fadeInUp">
            What Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-200">
            Real feedback from early beta users who've experienced the future of travel planning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 group animate-scaleIn`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-[#f8bc33] mr-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#f8bc33] fill-current group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic group-hover:text-gray-800 transition-colors duration-300">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h4 className="font-bold text-[#1C2E4A] group-hover:text-[#4A90E2] transition-colors duration-300">{testimonial.name}</h4>
                  <p className="text-[#4A90E2] text-sm group-hover:text-[#f8bc33] transition-colors duration-300">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.location}</p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f8bc33]/5 to-[#4A90E2]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fadeInUp delay-600">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-[#1C2E4A] mb-4">
              Join Our Beta Community
            </h3>
            <p className="text-gray-600 mb-6">
              Be among the first to experience the future of AI-powered travel planning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email for early access"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-200"
              />
              <button className="bg-gradient-to-r from-[#f8bc33] to-[#4A90E2] text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold transform hover:-translate-y-1 hover:scale-105 group">
                <span className="group-hover:scale-110 transition-transform duration-300 inline-block">Join Beta</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;