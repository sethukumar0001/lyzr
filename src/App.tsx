import { Sparkles, Zap, Globe, Rocket, Code, Palette, Brain, Laptop } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay" />
        
        {/* Interactive Background */}
        <div className="absolute inset-0">
          <div className="relative h-full">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/10 backdrop-blur-sm"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 100 + 50}px`,
                  height: `${Math.random() * 100 + 50}px`,
                  animation: `float ${3 + Math.random() * 7}s infinite ease-in-out ${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center">
            <div className="relative inline-block mb-8">
              <div className="relative">
                <Globe className="w-24 h-24 text-white/90 mx-auto animate-spin-slow" />
                <Sparkles className="w-10 h-10 text-yellow-300 absolute -top-4 -right-4 animate-pulse" />
                <Zap className="w-10 h-10 text-blue-300 absolute -bottom-4 -left-4 animate-bounce" />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-6 tracking-tight">
              lyzr.in
            </h1>
            <p className="text-2xl md:text-4xl text-white/90 mb-8 font-light">
              Where Innovation Meets Imagination
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 animate-float">
                #Innovation
              </span>
              <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 animate-float-delay-1">
                #Technology
              </span>
              <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 animate-float-delay-2">
                #Future
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Exploring the Digital Frontier
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Rocket className="w-8 h-8" />, title: "Innovation Hub", desc: "Pushing boundaries of what's possible" },
              { icon: <Code className="w-8 h-8" />, title: "Tech Excellence", desc: "Crafting the future of technology" },
              { icon: <Palette className="w-8 h-8" />, title: "Creative Core", desc: "Where ideas come to life" },
              { icon: <Brain className="w-8 h-8" />, title: "Smart Solutions", desc: "Intelligent approaches to challenges" }
            ].map((feature, i) => (
              <div key={i} className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 text-white transform group-hover:rotate-12 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Section */}
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform -skew-y-6 rounded-3xl"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <Laptop className="w-16 h-16 text-indigo-600 mb-8" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Building Tomorrow's Digital Landscape</h2>
                <p className="text-xl text-gray-600 mb-8">
                  At lyzr.in, we're crafting the future of digital experiences. Join us on this exciting journey of innovation and discovery.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { number: "100+", label: "Projects" },
                    { number: "50+", label: "Innovations" },
                    { number: "∞", label: "Possibilities" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <Globe className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">lyzr.in</h3>
            <p className="text-gray-600 mb-8">Shaping the digital future</p>
            <div className="flex space-x-6">
              {["Twitter", "LinkedIn", "GitHub"].map((platform) => (
                <a key={platform} href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  {platform}
                </a>
              ))}
            </div>
            <div className="mt-8 text-center text-gray-500">
              © {new Date().getFullYear()} lyzr.in - All rights reserved
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay-1 {
          animation: float 3s ease-in-out infinite 1s;
        }
        .animate-float-delay-2 {
          animation: float 3s ease-in-out infinite 2s;
        }
      `}</style>
    </div>
  );
}

export default App;