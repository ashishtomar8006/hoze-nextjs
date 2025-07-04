import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Headphones } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@hozeai.com",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      action: "Call Now"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with support",
      contact: "Available 24/7",
      action: "Start Chat"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters",
      contact: "123 Innovation Street, San Francisco, CA 94105",
      action: "Get Directions"
    }
  ];

  const supportOptions = [
    {
      icon: Users,
      title: "General Inquiries",
      description: "Questions about our platform, features, or partnerships"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Help with account issues, bugs, or technical difficulties"
    },
    {
      icon: MessageSquare,
      title: "Feedback",
      description: "Share your thoughts, suggestions, or feature requests"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-[#f8bc33]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1C2E4A] mb-6 animate-fadeInUp">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-200">
              Have questions about Hoze AI? We're here to help. Reach out to our team 
              and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className={`text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/50 hover:shadow-lg transition-all duration-300 animate-scaleIn`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-[#4A90E2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1C2E4A] mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-3">{method.description}</p>
                  <p className="text-[#4A90E2] font-medium mb-4">{method.contact}</p>
                  <button className="bg-[#4A90E2] hover:bg-[#1C2E4A] text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium">
                    {method.action}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/50 to-[#f8bc33]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fadeInLeft">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-[#1C2E4A] mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="press">Press Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#4A90E2] hover:bg-[#1C2E4A] text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-fadeInRight">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#1C2E4A] mb-6">Get in Touch</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    We're here to help you make the most of your travel planning experience. 
                    Whether you have questions, feedback, or need support, our team is ready to assist you.
                  </p>
                </div>

                {/* Support Options */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#1C2E4A]">How can we help?</h3>
                  {supportOptions.map((option, index) => {
                    const IconComponent = option.icon;
                    return (
                      <div key={index} className={`flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md animate-fadeInUp`} style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="bg-[#f8bc33] w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#1C2E4A] mb-1">{option.title}</h4>
                          <p className="text-gray-600 text-sm">{option.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Office Hours */}
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-[#4A90E2] mr-3" />
                    <h3 className="text-xl font-bold text-[#1C2E4A]">Office Hours</h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM PST</p>
                    <p><span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM PST</p>
                    <p><span className="font-medium">Sunday:</span> Closed</p>
                    <p className="text-sm text-[#4A90E2] mt-3">
                      * Live chat support available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C2E4A] mb-4 animate-fadeInUp">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 animate-fadeInUp delay-200">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We typically respond to all inquiries within 24 hours during business days. For urgent technical issues, our live chat support is available 24/7."
              },
              {
                question: "Can I schedule a demo of Hoze AI?",
                answer: "Absolutely! Contact us through any of the methods above and mention you'd like to schedule a demo. We'll set up a personalized walkthrough of our platform."
              },
              {
                question: "Do you offer enterprise solutions?",
                answer: "Yes, we offer enterprise solutions for travel agencies, tour operators, and large organizations. Contact us to discuss custom pricing and features."
              },
              {
                question: "How can I provide feedback or suggest features?",
                answer: "We love hearing from our users! You can submit feedback through our contact form, email us directly, or use the feedback option in our app."
              }
            ].map((faq, index) => (
              <div key={index} className={`bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-lg p-6 animate-fadeInUp`} style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-bold text-[#1C2E4A] mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;