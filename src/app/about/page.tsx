import { Users, Target, Award, Heart, ArrowRight, CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Former Google AI researcher with 10+ years in machine learning and travel tech."
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Ex-Airbnb engineer who led recommendation systems for 50M+ users."
    },
    {
      name: "Emma Thompson",
      role: "Head of Product",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Travel industry veteran with experience at Booking.com and TripAdvisor."
    },
    {
      name: "David Kim",
      role: "Lead AI Engineer",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "PhD in Natural Language Processing, specializing in conversational AI."
    }
  ]

  const values = [
    {
      icon: Target,
      title: "Authentic Experiences",
      description: "We believe travel should be about genuine connections and authentic experiences, not tourist traps."
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Our recommendations come from real travelers, not sponsored content or affiliate marketing."
    },
    {
      icon: Award,
      title: "Innovation First",
      description: "We're constantly pushing the boundaries of what AI can do for travel planning."
    },
    {
      icon: Heart,
      title: "Traveler-Centric",
      description: "Every feature we build is designed with the traveler's needs and dreams in mind."
    }
  ]

  const milestones = [
    { year: "2023", event: "Founded Hoze AI with a vision to revolutionize travel planning" },
    { year: "2023", event: "Launched beta version with 1,000 early adopters" },
    { year: "2024", event: "Reached 10,000+ active users across 50+ countries" },
    { year: "2024", event: "Introduced multilingual support and voice interactions" },
    { year: "2024", event: "Partnership with major travel data providers" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-[#f8bc33]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1C2E4A] mb-6 animate-fadeInUp">
              About Hoze AI
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-200">
              We're on a mission to make travel planning intelligent, authentic, and effortless 
              through the power of AI and real traveler insights.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-3xl font-bold text-[#1C2E4A] mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hoze AI was born from a simple frustration: why is it so hard to find authentic travel 
                recommendations without wading through sponsored content and biased reviews?
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our founders, seasoned travelers and tech veterans, experienced this pain firsthand. 
                They envisioned an AI assistant that could cut through the noise and provide genuine, 
                personalized travel advice based on real experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, Hoze AI serves thousands of travelers worldwide, helping them discover hidden gems, 
                avoid tourist traps, and create unforgettable journeys tailored to their unique preferences.
              </p>
            </div>
            
            <div className="animate-fadeInRight">
              <img
                src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Frustrated traveler struggling to find travel information"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C2E4A] mb-4 animate-fadeInUp">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 animate-fadeInUp delay-200">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className={`text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/50 hover:shadow-lg transition-all duration-300 animate-scaleIn`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-[#4A90E2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1C2E4A] mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/50 to-[#f8bc33]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C2E4A] mb-4 animate-fadeInUp">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 animate-fadeInUp delay-200">
              The passionate people behind Hoze AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center animate-scaleIn`} style={{ animationDelay: `${index * 0.1}s` }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-[#1C2E4A] mb-2">{member.name}</h3>
                <p className="text-[#4A90E2] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C2E4A] mb-4 animate-fadeInUp">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 animate-fadeInUp delay-200">
              Key milestones in our mission to revolutionize travel planning
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center space-x-6 animate-fadeInLeft`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#4A90E2] rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-lg p-4">
                    <span className="text-[#f8bc33] font-bold text-lg">{milestone.year}</span>
                    <p className="text-gray-700 mt-1">{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1C2E4A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeInUp">
            Ready to Experience the Future of Travel Planning?
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-fadeInUp delay-200">
            Join thousands of travelers who trust Hoze AI for authentic, personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-300">
            <button className="bg-[#f8bc33] hover:bg-[#e6a82e] text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center">
              Get Started Free
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#1C2E4A] px-8 py-3 rounded-lg transition-all duration-300 font-semibold transform hover:-translate-y-1 hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}