import React from 'react';
import { TrendingUp, Users, Clock, Star, ArrowRight } from 'lucide-react';

const recommendations = [
  {
    id: 1,
    title: "Best Time to Visit Japan",
    category: "Seasonal Guide",
    readTime: "5 min read",
    popularity: "98% match rate",
    image: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=400",
    excerpt: "Discover the perfect seasons for cherry blossoms, autumn colors, and cultural festivals."
  },
  {
    id: 2,
    title: "Hidden Gems in Europe",
    category: "Destination Guide",
    readTime: "8 min read",
    popularity: "95% match rate",
    image: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=400",
    excerpt: "Explore lesser-known European destinations that offer authentic experiences away from crowds."
  },
  {
    id: 3,
    title: "Digital Nomad Paradise",
    category: "Work & Travel",
    readTime: "6 min read",
    popularity: "92% match rate",
    image: "https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=400",
    excerpt: "Top destinations for remote workers with great WiFi, co-working spaces, and communities."
  },
  {
    id: 4,
    title: "Budget Backpacking Guide",
    category: "Budget Travel",
    readTime: "10 min read",
    popularity: "89% match rate",
    image: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400",
    excerpt: "How to travel the world on a shoestring budget without compromising on experiences."
  }
];

const trendingDestinations = [
  { name: "Iceland", trend: "+45%", reason: "Northern Lights season" },
  { name: "Costa Rica", trend: "+38%", reason: "Eco-tourism boom" },
  { name: "Portugal", trend: "+32%", reason: "Affordable European gem" },
  { name: "New Zealand", trend: "+28%", reason: "Adventure activities" },
  { name: "Morocco", trend: "+25%", reason: "Cultural immersion" }
];

const PopularRecommendations = () => {
  return (
    <section id="recommendations" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-700 text-sm font-medium mb-4">
            <TrendingUp className="h-4 w-4 mr-2" />
            Popular Recommendations
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trending Travel Insights
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay updated with the latest travel trends, destination guides, and expert recommendations 
            powered by AI analysis of global travel patterns.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Recommendations */}
          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {recommendations.map((item) => (
                <div key={item.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-blue-200">
                  <div className="md:flex">
                    <div className="md:w-48 md:flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {item.category}
                        </span>
                        <div className="flex items-center text-sm text-slate-500">
                          <Users className="h-4 w-4 mr-1" />
                          {item.popularity}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {item.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {item.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-slate-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {item.readTime}
                        </div>
                        <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-all duration-200">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Trending Destinations */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                Trending Now
              </h3>
              <div className="space-y-4">
                {trendingDestinations.map((destination, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-colors duration-200">
                    <div>
                      <p className="font-medium text-slate-900">{destination.name}</p>
                      <p className="text-sm text-slate-600">{destination.reason}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-600 font-semibold text-sm">{destination.trend}</p>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <Star className="h-3 w-3 text-gray-300" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                AI Travel Insights
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-white/60 backdrop-blur-sm rounded-lg">
                  <p className="text-sm font-medium text-slate-900">Peak Season Alert</p>
                  <p className="text-xs text-slate-600">Europe bookings up 40% for summer</p>
                </div>
                <div className="p-3 bg-white/60 backdrop-blur-sm rounded-lg">
                  <p className="text-sm font-medium text-slate-900">Weather Update</p>
                  <p className="text-xs text-slate-600">Perfect conditions in Southeast Asia</p>
                </div>
                <div className="p-3 bg-white/60 backdrop-blur-sm rounded-lg">
                  <p className="text-sm font-medium text-slate-900">Price Drop</p>
                  <p className="text-xs text-slate-600">Flight deals to Japan down 25%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularRecommendations;