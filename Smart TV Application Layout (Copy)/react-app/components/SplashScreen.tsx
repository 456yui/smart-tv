import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Play, Sparkles, ArrowRight } from 'lucide-react';
import { PageType } from '../App';

interface SplashScreenProps {
  onNavigate: (page: PageType) => void;
}

export function SplashScreen({ onNavigate }: SplashScreenProps) {
  const [showContent, setShowContent] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // Staggered animation sequence for better TV experience
    const contentTimer = setTimeout(() => setShowContent(true), 500);
    const buttonsTimer = setTimeout(() => setShowButtons(true), 1200);
    
    // Auto-navigate after 5 seconds for TV experience
    const autoNavigateTimer = setTimeout(() => {
      onNavigate('inner');
    }, 5000);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(buttonsTimer);
      clearTimeout(autoNavigateTimer);
    };
  }, [onNavigate]);

  return (
    <div className="relative size-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/85">
        {/* Subtle overlay patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05)_0%,transparent_40%)]"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/6 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-500 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Decorative grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] bg-[length:100px_100px]"></div>
        </div>
      </div>

      {/* Main content container */}
      <div className={`relative z-10 text-center tv-container max-w-6xl mx-auto transition-all duration-1000 ${
        showContent ? 'tv-animate-fade-in' : 'opacity-0 translate-y-8'
      }`}>
        {/* Enhanced logo section */}
        <div className="mb-12 flex items-center justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center mb-6 tv-animate-pulse-glow">
              <Sparkles className="w-16 h-16 text-primary drop-shadow-sm" />
            </div>
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full animate-bounce shadow-lg"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-white/80 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>

        {/* Brand name with enhanced typography */}
        <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 tracking-tight tv-text-shadow">
          StreamVue
        </h1>
        
        {/* Enhanced tagline */}
        <div className="mb-16 space-y-4">
          <p className="text-2xl lg:text-3xl text-white/95 max-w-4xl mx-auto leading-relaxed tv-text-shadow">
            Experience entertainment like never before
          </p>
          <p className="text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Your gateway to premium content, seamlessly delivered to your living room
          </p>
        </div>

        {/* Enhanced action buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-800 ${
          showButtons ? 'tv-animate-scale-in' : 'opacity-0 scale-95'
        }`}>
          <Button 
            onClick={() => onNavigate('inner')}
            className="bg-white text-primary hover:bg-white/95 hover:scale-105 px-12 py-8 text-xl rounded-2xl shadow-xl tv-smooth-transitions tv-focus-ring min-w-64 tv-touch-target"
          >
            <Play className="w-7 h-7 mr-3" />
            Get Started
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
          
          <Button 
            onClick={() => onNavigate('archive')}
            variant="outline"
            className="border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/60 hover:scale-105 px-12 py-8 text-xl rounded-2xl tv-smooth-transitions tv-focus-ring min-w-64 tv-touch-target"
          >
            <Sparkles className="w-6 h-6 mr-3" />
            Browse Content
          </Button>
        </div>

        {/* Enhanced loading indicator */}
        <div className="mt-20 flex flex-col items-center justify-center space-y-6">
          <div className="flex space-x-3">
            <div className="w-3 h-3 bg-white/70 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-white/70 rounded-full animate-pulse delay-300"></div>
            <div className="w-3 h-3 bg-white/70 rounded-full animate-pulse delay-600"></div>
          </div>
          <p className="text-white/70 text-lg tv-text-shadow">Loading your experience...</p>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/30 to-transparent"></div>
      
      {/* Corner decorations */}
      <div className="absolute top-8 right-8 w-16 h-16 border-2 border-white/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-8 left-8 w-12 h-12 border-2 border-white/15 rounded-full animate-pulse delay-1500"></div>
    </div>
  );
}