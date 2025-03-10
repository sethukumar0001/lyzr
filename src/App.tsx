import React from 'react';
import { Mail, Globe, DollarSign, CheckCircle2, ArrowRight, Sparkles, Star, Zap, Trophy } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-violet-600 to-fuchsia-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        
        {/* Geometric Grid Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="grid grid-cols-8 gap-4 p-8 opacity-20">
            {Array.from({ length: 32 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-white/30 rounded-lg transform transition-all duration-1000 hover:scale-110"
                style={{
                  animation: `float ${2 + Math.random() * 2}s infinite ease-in-out ${i * 0.1}s`,
                  clipPath: i % 2 === 0 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : 'circle(50% at 50% 50%)'
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <Globe className="w-20 h-20 text-white/90 mx-auto animate-pulse" />
              <Sparkles className="w-8 h-8 text-yellow-300 absolute -top-2 -right-2 animate-bounce" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              lyzr.in
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-4">
              Premium Domain For Sale
            </p>
            <div className="text-3xl font-bold text-yellow-300 mb-8 animate-pulse">
              $2,000
            </div>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Secure this memorable domain for your next big project
            </p>
            <a
              href="mailto:sethukumartirumanyam@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-white text-violet-600 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all hover:scale-105 transform shadow-lg"
            >
              Contact Owner
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Premium Features
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A powerful domain name that stands out from the crowd
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-xl transform transition-all hover:scale-105">
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <p className="text-gray-600">Short, memorable domain name</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-fuchsia-50 to-violet-50 rounded-xl transform transition-all hover:scale-105">
              <div className="w-12 h-12 bg-fuchsia-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-fuchsia-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dynamic</h3>
              <p className="text-gray-600">Perfect for modern brands</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-xl transform transition-all hover:scale-105">
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Exclusive</h3>
              <p className="text-gray-600">Stand out from competitors</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-fuchsia-50 to-violet-50 rounded-xl transform transition-all hover:scale-105">
              <div className="w-12 h-12 bg-fuchsia-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-fuchsia-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global</h3>
              <p className="text-gray-600">Ready for worldwide reach</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose This Domain?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:-translate-y-2">
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Memorable</h3>
              <p className="text-gray-600">Short, catchy, and easy to remember</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:-translate-y-2">
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Brandable</h3>
              <p className="text-gray-600">Perfect for your next big venture</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg transform transition-all hover:-translate-y-2">
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Investment</h3>
              <p className="text-gray-600">A valuable digital asset</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Secure Your Domain Today
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Don't miss the opportunity to own this premium domain
            </p>
            <div className="text-2xl font-bold text-violet-600 mb-8">
              Price: $2,000
            </div>
            <div className="inline-flex items-center justify-center space-x-2 text-lg text-violet-600 hover:text-violet-700 transition-colors">
              <Mail className="w-6 h-6" />
              <a href="mailto:sethukumartirumanyam@gmail.com" className="hover:underline">
                sethukumartirumanyam@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} lyzr.in - All rights reserved
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
}

export default App;