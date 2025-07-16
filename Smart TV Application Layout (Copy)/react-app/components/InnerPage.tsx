import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Home, 
  Search, 
  Heart, 
  Settings, 
  User, 
  Play, 
  Star,
  Clock,
  Sparkles,
  ChevronRight,
  Menu,
  Info
} from 'lucide-react';
import { PageType } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface InnerPageProps {
  onNavigate: (page: PageType) => void;
}

export function InnerPage({ onNavigate }: InnerPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('trending');
  const [focusedContent, setFocusedContent] = useState<number | null>(null);

  const categories = [
    { id: 'trending', label: 'Trending', icon: Star, color: 'from-orange-500 to-red-500' },
    { id: 'recently-watched', label: 'Recently Watched', icon: Clock, color: 'from-blue-500 to-purple-500' },
    { id: 'favorites', label: 'Favorites', icon: Heart, color: 'from-pink-500 to-red-500' },
    { id: 'recommended', label: 'Recommended', icon: Sparkles, color: 'from-green-500 to-blue-500' },
  ];

  const featuredContent = [
    {
      id: 1,
      title: "The Digital Frontier",
      description: "Experience the future of entertainment in stunning 4K resolution with groundbreaking visual effects",
      rating: 4.8,
      duration: "2h 15m",
      genre: "Sci-Fi Drama",
      year: "2024",
      quality: "4K HDR"
    },
    {
      id: 2,
      title: "Ocean's Mystery",
      description: "Dive deep into the unknown depths of our planet's oceans and discover incredible marine life",
      rating: 4.6,
      duration: "1h 45m",
      genre: "Documentary",
      year: "2023",
      quality: "4K"
    },
    {
      id: 3,
      title: "City Lights",
      description: "A romantic tale set in the heart of the metropolitan city during the golden hour",
      rating: 4.9,
      duration: "1h 58m",
      genre: "Romance",
      year: "2024",
      quality: "HD"
    }
  ];

  return (
    <div className="size-full min-h-screen bg-background">
      {/* Enhanced Header Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/50 tv-glassmorphism">
        <div className="flex items-center justify-between px-8 py-6">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">StreamVue</h1>
              <p className="text-sm text-muted-foreground">Premium Entertainment</p>
            </div>
          </div>

          {/* Enhanced Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Button 
              variant="ghost" 
              className="text-foreground hover:text-primary hover:bg-primary/10 px-6 py-3 rounded-xl tv-smooth-transitions tv-focus-ring tv-touch-target"
            >
              <Home className="w-5 h-5 mr-3" />
              Home
            </Button>
            <Button 
              variant="ghost" 
              className="text-foreground hover:text-primary hover:bg-primary/10 px-6 py-3 rounded-xl tv-smooth-transitions tv-focus-ring tv-touch-target"
              onClick={() => onNavigate('archive')}
            >
              <Search className="w-5 h-5 mr-3" />
              Browse
            </Button>
            <Button 
              variant="ghost" 
              className="text-foreground hover:text-primary hover:bg-primary/10 px-6 py-3 rounded-xl tv-smooth-transitions tv-focus-ring tv-touch-target"
              onClick={() => onNavigate('logo')}
            >
              <Info className="w-5 h-5 mr-3" />
              About
            </Button>
          </nav>

          {/* Enhanced User Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="lg" 
              className="rounded-xl tv-focus-ring tv-touch-target"
            >
              <Settings className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="rounded-xl tv-focus-ring tv-touch-target"
            >
              <User className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="lg:hidden rounded-xl tv-focus-ring tv-touch-target"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Enhanced Main Content */}
      <main className="tv-container">
        {/* Enhanced Hero Section */}
        <section className="tv-section-spacing">
          <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-r from-primary via-primary/95 to-primary/85 tv-animate-fade-in">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_60%)]"></div>
            
            <div className="relative z-10 flex items-center h-full px-12">
              <div className="max-w-3xl space-y-6">
                <Badge className="bg-white/20 text-white px-4 py-2 text-lg border-white/30">
                  <Star className="w-4 h-4 mr-2" />
                  Featured
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tv-text-shadow">
                  The Ultimate Streaming Experience
                </h2>
                <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                  Discover thousands of movies, shows, and documentaries in crystal-clear quality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-primary hover:bg-white/95 hover:scale-105 px-10 py-6 text-lg rounded-2xl tv-smooth-transitions tv-focus-ring"
                  >
                    <Play className="w-6 h-6 mr-3" />
                    Start Watching
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-2 border-white/40 text-white hover:bg-white/15 px-10 py-6 text-lg rounded-2xl tv-smooth-transitions tv-focus-ring"
                  >
                    <Info className="w-6 h-6 mr-3" />
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Category Navigation */}
        <section className="tv-section-spacing">
          <h3 className="text-3xl font-bold mb-8">Browse by Category</h3>
          <div className="flex flex-wrap gap-6 overflow-x-auto pb-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <Button
                  key={category.id}
                  variant={isSelected ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`min-w-fit whitespace-nowrap px-8 py-6 text-lg rounded-2xl tv-smooth-transitions tv-focus-ring tv-touch-target ${
                    isSelected 
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                      : 'hover:scale-105 hover:shadow-md'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-3" />
                  {category.label}
                </Button>
              );
            })}
          </div>
        </section>

        {/* Enhanced Content Grid */}
        <section className="tv-section-spacing">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold">
              {categories.find(c => c.id === selectedCategory)?.label}
            </h3>
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('archive')}
              className="hover:bg-primary/10 px-6 py-3 rounded-xl tv-smooth-transitions tv-focus-ring"
            >
              View All
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 tv-card-spacing">
            {featuredContent.map((content, index) => (
              <Card 
                key={content.id} 
                className={`overflow-hidden cursor-pointer group tv-smooth-transitions rounded-2xl ${
                  focusedContent === content.id 
                    ? 'ring-4 ring-primary/50 shadow-2xl scale-105' 
                    : 'hover:shadow-xl hover:scale-105'
                }`}
                onMouseEnter={() => setFocusedContent(content.id)}
                onMouseLeave={() => setFocusedContent(null)}
              >
                <div className="relative h-64 bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-1489599512549-37540f6ba2d0?w=500&h=400&fit=crop&crop=center&sig=${content.id}`}
                    alt={content.title}
                    className="w-full h-full object-cover group-hover:scale-110 tv-smooth-transitions"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 tv-smooth-transitions flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 tv-smooth-transitions">
                      <Button 
                        className="bg-white/90 text-primary hover:bg-white px-8 py-4 rounded-xl shadow-lg"
                      >
                        <Play className="w-6 h-6 mr-2" />
                        Play Now
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-black/70 text-white px-3 py-1">
                      {content.quality}
                    </Badge>
                    <Badge variant="secondary" className="px-3 py-1">
                      {content.year}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="px-3 py-1">
                      {content.genre}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{content.rating}</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-xl">{content.title}</h4>
                  <p className="text-muted-foreground leading-relaxed line-clamp-2">
                    {content.description}
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{content.duration}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      className="hover:bg-primary hover:text-primary-foreground tv-smooth-transitions"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Play
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}