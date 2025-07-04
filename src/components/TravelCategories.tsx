import React from 'react';
import { Mountain, Waves, Building2, TreePine, Camera, Heart } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "Adventure",
    icon: Mountain,
    description: "Thrilling experiences and outdoor activities",
    image: "https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&w=400",
    color: "from-orange-400 to-red-500"
  },
  {
    id: 2,
    name: "Beach & Islands",
    icon: Waves,
    description: "Tropical paradises and coastal getaways",
    image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=400",
    color: "from-blue-400 to-cyan-500"
  },
  {
    id: 3,
    name: "City Breaks",
    icon: Building2,
    description: "Urban exploration and cultural immersion",
    image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=400",
    color: "from-purple-400 to-pink-500"
  },
  {
    id: 4,
    name: "Nature & Wildlife",
    icon: TreePine,
    description: "National parks and wildlife encounters",
    image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400",
    color: "from-green-400 to-emerald-500"
  },
  {
    id: 5,
    name: "Photography",
    icon: Camera,
    description: "Picture-perfect destinations and scenic views",
    image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=400",
    color: "from-indigo-400 to-blue-500"
  },
  {
    id: 6,
    name: "Romantic",
    icon: Heart,
    description: "Intimate getaways and couple experiences",
    image: "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=400",
    color: "from-pink-400 to-rose-500"
  }
];

const TravelCategories = () => {
  return (
    <section id="categories" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full text-violet-700 text-sm font-medium mb-4">
            <Camera className="h-4 w-4 mr-2" />
            Travel Categories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Find Your Perfect Travel Style
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Whether you're seeking adventure, relaxation, or cultural immersion, 
            our AI will help you discover destinations that match your travel preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className={`inline-flex w-12 h-12 items-center justify-center rounded-xl bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-200">
                    {category.name}
                  </h3>
                  
                  <p className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors duration-200">
                    {category.description}
                  </p>
                  
                  <button className="mt-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                    Explore {category.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            Not sure which category fits you best? Let our AI assistant help you decide!
          </p>
          <button className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-8 py-3 rounded-xl hover:from-violet-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold">
            Take Travel Style Quiz
          </button>
        </div>
      </div>
    </section>
  );
};

export default TravelCategories;