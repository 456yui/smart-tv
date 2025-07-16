import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Play, 
  ChevronLeft,
  Clock,
  Calendar,
  Sparkles,
  SortAsc,
  Eye,
  Heart
} from 'lucide-react';
import { PageType } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ArchivePageProps {
  onNavigate: (page: PageType) => void;
}

export function ArchivePage({ onNavigate }: ArchivePageProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [focusedContent, setFocusedContent] = useState<number | null>(null);

  const genres = [
    { value: 'all', label: 'All Genres' },
    { value: 'action', label: 'Action' },
    { value: 'comedy', label: 'Comedy' },
    { value: 'drama', label: 'Drama' },
    { value: 'horror', label: 'Horror' },
    { value: 'sci-fi', label: 'Sci-Fi' },
    { value: 'documentary', label: 'Documentary' },
    { value: 'romance', label: 'Romance' },
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'title', label: 'A-Z' },
    { value: 'duration', label: 'Duration' },
  ];

  const contentLibrary = [
    {
      id: 1,
      title: "The Digital Frontier",
      description: "Experience the future of entertainment in stunning 4K resolution with groundbreaking visual effects and immersive storytelling.",
      rating: 4.8,
      duration: "2h 15m",
      genre: "Sci-Fi",
      year: 2024,
      type: "Movie",
      quality: "4K HDR",
      views: "2.4M"
    },
    {
      id: 2,
      title: "Ocean's Mystery",
      description: "Dive deep into the unknown depths of our planet's oceans and discover incredible marine life in this breathtaking documentary.",
      rating: 4.6,
      duration: "1h 45m",
      genre: "Documentary",
      year: 2023,
      type: "Documentary",
      quality: "4K",
      views: "1.8M"
    },
    {
      id: 3,
      title: "City Lights",
      description: "A romantic tale set in the heart of the metropolitan city during the golden hour, featuring stunning cinematography.",
      rating: 4.9,
      duration: "1h 58m",
      genre: "Romance",
      year: 2024,
      type: "Movie",
      quality: "HD",
      views: "3.2M"
    },
    {
      id: 4,
      title: "Tech Innovations",
      description: "Explore the latest technological breakthroughs shaping our future world in this comprehensive series.",
      rating: 4.7,
      duration: "3h 22m",
      genre: "Documentary",
      year: 2024,
      type: "Series",
      quality: "4K",
      views: "1.5M"
    },
    {
      id: 5,
      title: "Action Heroes",
      description: "High-octane adventure with spectacular stunts and non-stop excitement from start to finish.",
      rating: 4.4,
      duration: "2h 8m",
      genre: "Action",
      year: 2023,
      type: "Movie",
      quality: "4K HDR",
      views: "4.1M"
    },
    {
      id: 6,
      title: "Comedy Central",
      description: "Laugh out loud with the funniest comedians and sketches of the year in this special collection.",
      rating: 4.5,
      duration: "1h 32m",
      genre: "Comedy",
      year: 2024,
      type: "Special",
      quality: "HD",
      views: "2.8M"
    }
  ];

  const filteredContent = contentLibrary.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || 
                        item.genre.toLowerCase() === selectedGenre.toLowerCase();
    return matchesSearch && matchesGenre;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.year - a.year;
      case 'oldest':
        return a.year - b.year;
      case 'rating':
        return b.rating - a.rating;
      case 'title':
        return a.title.localeCompare(b.title);
      case 'duration':
        return a.duration.localeCompare(b.duration);
      default:
        return 0;
    }
  });

  const ContentCard = ({ content }: { content: typeof contentLibrary[0] }) => (
    <Card 
      className={`overflow-hidden cursor-pointer group tv-smooth-transitions rounded-2xl ${
        focusedContent === content.id 
          ? 'ring-4 ring-primary/50 shadow-2xl scale-105' 
          : 'hover:shadow-xl hover:scale-105'
      }`}
      onMouseEnter={() => setFocusedContent(content.id)}
      onMouseLeave={() => setFocusedContent(null)}
    >
      <div className="relative h-56 bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
        <ImageWithFallback
          src={`https://images.unsplash.com/photo-1489599512549-37540f6ba2d0?w=500&h=400&fit=crop&crop=center&sig=${content.id}`}
          alt={content.title}
          className="w-full h-full object-cover group-hover:scale-110 tv-smooth-transitions"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 tv-smooth-transitions flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 tv-smooth-transitions">
            <Button className="bg-white/90 text-primary hover:bg-white px-6 py-3 rounded-xl shadow-lg">
              <Play className="w-5 h-5 mr-2" />
              Play Now
            </Button>
          </div>
        </div>
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className="bg-primary/90 text-primary-foreground px-3 py-1">
            {content.type}
          </Badge>
          <Badge className="bg-black/70 text-white px-3 py-1">
            {content.quality}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Button variant="ghost" size="sm" className="bg-black/50 hover:bg-black/70 text-white rounded-full">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="px-3 py-1">
            {content.genre}
          </Badge>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-medium">{content.rating}</span>
          </div>
        </div>
        <h4 className="font-bold text-lg">{content.title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {content.description}
        </p>
        <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {content.duration}
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {content.year}
            </span>
            <span className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {content.views}
            </span>
          </div>
          <Button size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground tv-smooth-transitions">
            <Play className="w-4 h-4 mr-1" />
            Play
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const ContentListItem = ({ content }: { content: typeof contentLibrary[0] }) => (
    <Card className="mb-6 hover:shadow-lg tv-smooth-transitions cursor-pointer group rounded-2xl">
      <CardContent className="p-6">
        <div className="flex items-center space-x-8">
          <div className="relative w-40 h-24 bg-gradient-to-br from-muted to-muted/50 rounded-xl overflow-hidden">
            <ImageWithFallback
              src={`https://images.unsplash.com/photo-1489599512549-37540f6ba2d0?w=300&h=200&fit=crop&crop=center&sig=${content.id}`}
              alt={content.title}
              className="w-full h-full object-cover group-hover:scale-110 tv-smooth-transitions"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 tv-smooth-transitions flex items-center justify-center">
              <Play className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 tv-smooth-transitions" />
            </div>
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex items-center space-x-4">
              <h4 className="font-bold text-xl">{content.title}</h4>
              <Badge variant="secondary" className="px-3 py-1">{content.type}</Badge>
              <Badge variant="outline" className="px-3 py-1">{content.genre}</Badge>
              <Badge className="bg-black/10 text-foreground px-3 py-1">{content.quality}</Badge>
            </div>
            <p className="text-muted-foreground leading-relaxed">{content.description}</p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                {content.rating}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {content.duration}
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {content.year}
              </span>
              <span className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                {content.views}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="rounded-full tv-focus-ring">
              <Heart className="w-5 h-5" />
            </Button>
            <Button className="px-6 py-3 rounded-xl tv-focus-ring">
              <Play className="w-5 h-5 mr-2" />
              Play
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="size-full min-h-screen bg-background">
      {/* Enhanced Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 tv-glassmorphism">
        <div className="flex items-center justify-between px-8 py-6">
          <div className="flex items-center space-x-6">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('inner')}
              className="hover:bg-primary/10 px-4 py-2 rounded-xl tv-focus-ring tv-touch-target"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Content Archive</h1>
                <p className="text-sm text-muted-foreground">Browse our complete library</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="rounded-xl tv-focus-ring"
            >
              <Grid className="w-5 h-5" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="rounded-xl tv-focus-ring"
            >
              <List className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Enhanced Filters */}
      <div className="px-8 py-8 border-b border-border/50 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row gap-6 items-center justify-between">
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search movies, shows, documentaries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg rounded-2xl tv-focus-ring"
                />
              </div>
            </div>
            <div className="flex gap-6">
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="w-48 py-6 rounded-xl tv-focus-ring">
                  <Filter className="w-5 h-5 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {genres.map((genre) => (
                    <SelectItem key={genre.value} value={genre.value}>
                      {genre.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 py-6 rounded-xl tv-focus-ring">
                  <SortAsc className="w-5 h-5 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Content */}
      <main className="tv-container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {sortedContent.length} {sortedContent.length === 1 ? 'Title' : 'Titles'} Found
            </h2>
            <p className="text-muted-foreground text-lg">
              {selectedGenre !== 'all' && `Filtered by ${genres.find(g => g.value === selectedGenre)?.label} • `}
              {searchTerm && `Search: "${searchTerm}"`}
            </p>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 tv-card-spacing">
            {sortedContent.map((content) => (
              <ContentCard key={content.id} content={content} />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {sortedContent.map((content) => (
              <ContentListItem key={content.id} content={content} />
            ))}
          </div>
        )}

        {sortedContent.length === 0 && (
          <div className="text-center py-20">
            <Search className="w-20 h-20 text-muted-foreground mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">No content found</h3>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedGenre('all');
              }}
              className="mt-6 px-6 py-3 rounded-xl"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}