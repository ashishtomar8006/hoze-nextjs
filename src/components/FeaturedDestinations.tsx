import React from 'react';
import { Star, MapPin, Clock, Thermometer } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    location: "Cyclades Islands",
    duration: "5-7 days",
    temperature: "24°C",
    description: "Iconic white buildings, blue domes, and breathtaking sunsets over the Aegean Sea.",
    price: "From $1,200",
    tags: ["Romantic", "Sunset Views", "Island Life"]
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    image: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    location: "Kansai Region",
    duration: "4-6 days",
    temperature: "18°C",
    description: "Traditional temples, bamboo forests, and authentic Japanese culture.",
    price: "From $980",
    tags: ["Cultural", "Historic", "Temples"]
  },
  {
    id: 3,
    name: "Banff, Canada",
    image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    location: "Alberta",
    duration: "6-8 days",
    temperature: "12°C",
    description: "Stunning mountain landscapes, crystal-clear lakes, and pristine wilderness.",
    price: "From $850",
    tags: ["Nature", "Mountains", "Adventure"]
  }
];

const FeaturedDestinations = () => {
  return (
    <section id="destinations" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full text-emerald-700 text-sm font-medium mb-4">
            <Star className="h-4 w-4 mr-2" />
            Featured Destinations
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            AI-Curated Travel Experiences
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover handpicked destinations recommended by our AI based on traveler preferences, 
            seasonal trends, and unique experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-slate-700">{destination.rating}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    AI Recommended
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{destination.name}</h3>
                  <span className="text-lg font-semibold text-blue-600">{destination.price}</span>
                </div>
                
                <div className="flex items-center text-slate-600 text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {destination.location}
                </div>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-slate-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {destination.duration}
                  </div>
                  <div className="flex items-center">
                    <Thermometer className="h-4 w-4 mr-1" />
                    {destination.temperature}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Explore Destination
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-8 py-3 rounded-xl transition-colors duration-200 font-semibold">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;