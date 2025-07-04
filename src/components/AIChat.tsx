import React, { useState } from 'react';
import { Send, Bot, User, Sparkles, MapPin, Calendar, Heart } from 'lucide-react';

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hi! I'm your AI travel assistant. I can help you plan amazing trips, find hidden gems, and create personalized itineraries. What kind of adventure are you looking for?",
      suggestions: ["Beach vacation", "City exploration", "Mountain adventure", "Cultural experience"]
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      suggestions: []
    };
    
    setMessages([...messages, newMessage]);
    setInputValue('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        content: "Great choice! Based on your preferences, I'd recommend exploring some amazing destinations. Let me suggest a few options that match your travel style.",
        suggestions: ["See recommendations", "Plan itinerary", "Check weather", "Find flights"]
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  return (
    <section id="chat" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 text-sm font-medium mb-4">
            <Bot className="h-4 w-4 mr-2" />
            AI Travel Assistant
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Chat with Your Personal Travel AI
          </h2>
          <p className="text-xl text-slate-600">
            Get instant recommendations, plan itineraries, and discover amazing destinations
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-slate-200/50 overflow-hidden">
          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-xs lg:max-w-md ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'} space-x-3`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-500'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className={`px-4 py-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white ml-3'
                      : 'bg-gradient-to-r from-slate-100 to-gray-100 text-slate-800 mr-3'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    {message.suggestions && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="px-3 py-1 text-xs bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200 border border-white/20"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="border-t border-slate-200/50 p-4">
            <div className="flex space-x-4">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me about travel destinations, planning tips, or anything travel-related..."
                className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
              />
              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 bg-white/80 backdrop-blur-lg rounded-xl hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl group">
            <MapPin className="h-6 w-6 text-blue-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
            <p className="text-sm font-medium text-slate-700">Find Destinations</p>
          </button>
          <button className="p-4 bg-white/80 backdrop-blur-lg rounded-xl hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl group">
            <Calendar className="h-6 w-6 text-cyan-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
            <p className="text-sm font-medium text-slate-700">Plan Itinerary</p>
          </button>
          <button className="p-4 bg-white/80 backdrop-blur-lg rounded-xl hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl group">
            <Sparkles className="h-6 w-6 text-purple-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
            <p className="text-sm font-medium text-slate-700">Get Suggestions</p>
          </button>
          <button className="p-4 bg-white/80 backdrop-blur-lg rounded-xl hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl group">
            <Heart className="h-6 w-6 text-pink-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
            <p className="text-sm font-medium text-slate-700">Save Favorites</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIChat;