"use client"
import React, { useState } from 'react';
import { Send, Bot, User, Volume2, MapPin } from 'lucide-react';

const LiveDemo = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hi! I'm your AI travel assistant. Ask me anything about travel destinations, restaurants, activities, or local experiences. What would you like to know?",
      suggestions: ["Best coffee spots in Istanbul", "Vegan restaurants in Paris", "Hidden gems in Tokyo", "Street food in Bangkok"]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

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
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        content: "Great question! Based on my analysis of recent travel data and local insights, here are my top recommendations:\n\n🏛️ **Hagia Sophia Cafe** - Historic ambiance with traditional Turkish coffee\n☕ **Kronotrop** - Modern specialty coffee with amazing Bosphorus views\n🌅 **Mandabatmaz** - Hidden gem loved by locals, perfect Turkish coffee\n\nWould you like more details about any of these places, or shall I suggest some nearby attractions?",
        suggestions: ["Tell me more about Kronotrop", "What's near these cafes?", "Best time to visit?", "How to get there?"]
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  return (
    <section id="demo" className="py-16 bg-gradient-to-br from-white via-blue-50/30 to-[#f8bc33]/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C2E4A] mb-4 animate-fadeInUp">
            Try Our AI Assistant
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-200">
            Experience the power of AI-driven travel recommendations. Ask anything and get instant, personalized suggestions.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500 animate-scaleIn delay-300">
          {/* Chat Header */}
          <div className="bg-[#4A90E2] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-lg animate-pulse-glow">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Travel Assistant</h3>
                  <p className="text-white/80 text-sm flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Online • Ready to help
                  </p>
                </div>
              </div>
              <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-all duration-200 transform hover:scale-110">
                <Volume2 className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gradient-to-br from-gray-50 to-blue-50/30">
            {messages.map((message, index) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeInUp`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`flex max-w-xs lg:max-w-md ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'} space-x-3`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' 
                      ? 'bg-[#4A90E2]' 
                      : 'bg-[#f8bc33]'
                  } transform hover:scale-110 transition-transform duration-200`}>
                    {message.type === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className={`px-4 py-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-[#4A90E2] text-white ml-3'
                      : 'bg-white text-[#1C2E4A] mr-3 shadow-md border border-gray-100'
                  } transform hover:scale-105 transition-all duration-200`}>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    {message.suggestions && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="px-3 py-1 text-xs bg-[#f8bc33]/10 text-[#f8bc33] rounded-full hover:bg-[#f8bc33]/20 transition-all duration-200 border border-[#f8bc33]/20 transform hover:scale-105"
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
            
            {isTyping && (
              <div className="flex justify-start animate-fadeInUp">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#f8bc33]">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl shadow-md border border-gray-100">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#f8bc33] rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-[#f8bc33] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-[#f8bc33] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex space-x-4">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about travel destinations, restaurants, activities..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-200"
              />
              <button
                onClick={handleSend}
                className="bg-[#4A90E2] hover:bg-[#1C2E4A] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 hover:scale-105"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 animate-fadeInUp delay-500">
          <p className="text-[#4A90E2] font-medium mb-4">Try asking:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["What are the best coffee spots in Istanbul?", "Hidden romantic cafes in Paris", "Street food hubs in Bangkok for vegetarians"].map((example, index) => (
              <button
                key={index}
                onClick={() => setInputValue(example)}
                className={`px-4 py-2 bg-[#f8bc33]/10 text-[#f8bc33] rounded-full hover:bg-[#f8bc33]/20 transition-all duration-200 text-sm border border-[#f8bc33]/20 transform hover:scale-105 animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                "{example}"
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;