import React, { useEffect, useRef } from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';

function App() {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (!scriptRef.current) {
      const script = document.createElement('script');
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;
      script.defer = true;
      
      script.onerror = (error) => {
        console.error('Error loading ElevenLabs script:', error);
      };

      scriptRef.current = script;
      document.body.appendChild(script);
    }
    
    return () => {
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://raw.githubusercontent.com/thmStarKiller/laKikeApp/refs/heads/main/img/lakikepharaonica.jpg"
          alt="Luxury Sauna"
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 animate-fade-in">
            Habla con La Kike
            <Sparkles className="inline-block ml-4 animate-pulse" />
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl px-4 animate-slide-up">
            Tu compañera virtual para una experiencia única
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* AI Agent Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img 
              src="https://raw.githubusercontent.com/thmStarKiller/laKikeApp/refs/heads/main/img/lakikecholita.png" 
              alt="La Kike AI Agent"
              className="w-full h-auto lakikeimg"
            />
          </div>

          {/* Chat Interface */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="text-pink-400 animate-bounce" />
              <h2 className="text-2xl font-bold text-white">Conversemos</h2>
            </div>
            <div className="rounded-xl overflow-hidden bg-white/5 p-2">
              <elevenlabs-convai agent-id="suW241XcGJ5wFSLzxCSe"></elevenlabs-convai>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Conversación Natural', 'Respuestas Inteligentes', 'Disponible 24/7'].map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 transform hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-2">{feature}</h3>
              <div className="w-12 h-1 bg-pink-500 mb-4"></div>
              <p className="text-white/80">
                Experimenta una nueva forma de interactuar con la Kike
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;