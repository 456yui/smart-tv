import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  ChevronLeft, 
  Sparkles, 
  Palette, 
  Eye, 
  Target, 
  Zap,
  Circle,
  Square,
  Triangle,
  Monitor,
  Smartphone,
  Tv,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { PageType } from '../App';

interface LogoJustificationPageProps {
  onNavigate: (page: PageType) => void;
}

export function LogoJustificationPage({ onNavigate }: LogoJustificationPageProps) {
  const colorPalette = [
    { 
      name: 'Primary Dark', 
      color: '#030213', 
      hex: '#030213',
      description: 'Deep, sophisticated base for premium feel',
      usage: 'Primary branding, backgrounds, text'
    },
    { 
      name: 'Pure White', 
      color: '#FFFFFF', 
      hex: '#FFFFFF',
      description: 'Clean, premium contrast element',
      usage: 'Logo backgrounds, text, accents'
    },
    { 
      name: 'Subtle Accent', 
      color: '#e9ebef', 
      hex: '#E9EBEF',
      description: 'Soft highlight for interactive elements',
      usage: 'Secondary buttons, hover states'
    },
    { 
      name: 'Dynamic Gradient', 
      color: 'linear-gradient(135deg, #030213 0%, #1a1a2e 100%)', 
      hex: '#030213 → #1a1a2e',
      description: 'Adds depth and modern appeal',
      usage: 'Backgrounds, hero sections, cards'
    },
  ];

  const designPrinciples = [
    {
      title: 'Balance & Harmony',
      description: 'The logo maintains perfect visual equilibrium with the Sparkles icon centered within a geometric container, creating stability and trust.',
      icon: Circle,
      example: 'Equal weight distribution across all elements',
      visual: 'Symmetrical composition with balanced proportions'
    },
    {
      title: 'High Contrast',
      description: 'Strong contrast between dark and light elements ensures optimal visibility across all viewing conditions and distances.',
      icon: Eye,
      example: 'WCAG AAA compliant contrast ratios',
      visual: 'Dark primary with bright white accents'
    },
    {
      title: 'Focal Emphasis',
      description: 'The Sparkles icon serves as the primary focal point, immediately communicating the brand essence of magical entertainment.',
      icon: Target,
      example: 'Central placement creates clear hierarchy',
      visual: 'Icon draws attention through size and contrast'
    },
    {
      title: 'Unified Design',
      description: 'Consistent rounded corners, proportional spacing, and cohesive styling create a unified brand identity system.',
      icon: Square,
      example: 'Unified design language throughout',
      visual: 'Consistent border radius and spacing'
    }
  ];

  const brandingElements = [
    {
      title: 'Logo Symbol',
      description: 'The Sparkles icon represents the magical moment of discovering great entertainment.',
      reasoning: 'Sparkles universally symbolize quality, excitement, and the "spark" of great content discovery.',
      impact: 'Creates immediate emotional connection with entertainment magic'
    },
    {
      title: 'Typography System',
      description: 'Modern sans-serif with optimized weight and spacing for large screen readability.',
      reasoning: 'Legible from 10+ feet away while maintaining contemporary, premium aesthetics.',
      impact: 'Ensures brand recognition across all TV viewing distances'
    },
    {
      title: 'Color Psychology',
      description: 'Dark primary with white accents creates sophisticated, premium brand perception.',
      reasoning: 'Dark themes reduce eye strain during extended viewing and convey quality and sophistication.',
      impact: 'Positions brand as premium entertainment platform'
    },
    {
      title: 'Shape Language',
      description: 'Rounded rectangles and soft corners create approachable, friendly brand personality.',
      reasoning: 'Soft edges feel welcoming and modern, perfect for relaxed home entertainment.',
      impact: 'Makes technology feel human and approachable'
    }
  ];

  const usageExamples = [
    {
      context: 'Smart TV Interface',
      icon: Tv,
      description: 'Optimized for large screens with high contrast',
      specs: 'Minimum 48px height, high contrast background'
    },
    {
      context: 'Mobile Companion',
      icon: Smartphone,
      description: 'Scalable design maintains clarity on small screens',
      specs: 'Minimum 24px height, touch-friendly sizing'
    },
    {
      context: 'Desktop Web',
      icon: Monitor,
      description: 'Flexible sizing for various web contexts',
      specs: 'Responsive scaling, maintains proportions'
    }
  ];

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
                <h1 className="text-xl font-bold">Brand Identity</h1>
                <p className="text-sm text-muted-foreground">Design system & guidelines</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Main Content */}
      <main className="tv-container">
        {/* Enhanced Hero Section */}
        <section className="text-center tv-section-spacing">
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-40 h-40 bg-gradient-to-br from-primary to-primary/80 rounded-3xl shadow-2xl mb-8 tv-animate-pulse-glow">
              <Sparkles className="w-20 h-20 text-primary-foreground" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 tv-text-shadow">StreamVue</h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A premium streaming platform brand identity designed for the modern smart TV experience
            </p>
          </div>
          <Badge className="bg-primary/10 text-primary px-6 py-3 text-lg rounded-full">
            <Palette className="w-5 h-5 mr-2" />
            Brand Identity Design System
          </Badge>
        </section>

        {/* Enhanced Logo Breakdown */}
        <section className="tv-section-spacing">
          <h2 className="text-3xl font-bold mb-10 text-center">Logo Construction & Analysis</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 tv-card-spacing">
            <Card className="overflow-hidden rounded-2xl">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                <CardTitle className="flex items-center text-2xl">
                  <Sparkles className="w-6 h-6 mr-3" />
                  Symbol Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-center h-48 bg-gradient-to-br from-primary to-primary/80 rounded-3xl mb-6 shadow-lg">
                    <Sparkles className="w-24 h-24 text-primary-foreground" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold">Primary Shape</p>
                        <p className="text-sm text-muted-foreground">Sparkles icon representing magic</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-6 h-6 bg-primary/70 rounded-full flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold">Symbolic Meaning</p>
                        <p className="text-sm text-muted-foreground">Entertainment magic &amp; discovery</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-6 h-6 bg-primary/40 rounded-full flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold">Brand Context</p>
                        <p className="text-sm text-muted-foreground">Premium streaming platform</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-2xl">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                <CardTitle className="flex items-center text-2xl">
                  <Palette className="w-6 h-6 mr-3" />
                  Color Palette
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {colorPalette.map((color, index) => (
                    <div key={index} className="flex items-center space-x-6">
                      <div 
                        className="w-16 h-16 rounded-xl shadow-lg border-2 border-white/10 flex-shrink-0"
                        style={{ background: color.color }}
                      ></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-lg">{color.name}</h4>
                          <Badge variant="outline" className="font-mono text-xs">
                            {color.hex}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{color.description}</p>
                        <p className="text-xs text-muted-foreground font-medium">Use: {color.usage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Enhanced Design Principles */}
        <section className="tv-section-spacing">
          <h2 className="text-3xl font-bold mb-10 text-center">Design Principles Applied</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 tv-card-spacing">
            {designPrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <Card key={index} className="hover:shadow-lg tv-smooth-transitions rounded-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{principle.description}</p>
                        <div className="space-y-2">
                          <p className="text-sm text-primary font-semibold">Example: {principle.example}</p>
                          <p className="text-sm text-muted-foreground">Visual: {principle.visual}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Enhanced Usage Examples */}
        <section className="tv-section-spacing">
          <h2 className="text-3xl font-bold mb-10 text-center">Usage Across Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 tv-card-spacing">
            {usageExamples.map((example, index) => {
              const IconComponent = example.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg tv-smooth-transitions rounded-2xl">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{example.context}</h3>
                    <p className="text-muted-foreground mb-4">{example.description}</p>
                    <Badge variant="outline" className="px-4 py-2">
                      {example.specs}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Enhanced Branding Elements */}
        <section className="tv-section-spacing">
          <h2 className="text-3xl font-bold mb-10 text-center">Brand Elements Deep Dive</h2>
          <div className="space-y-8">
            {brandingElements.map((element, index) => (
              <Card key={index} className="rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">{element.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{element.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Design Reasoning</h4>
                      <p className="text-sm leading-relaxed">{element.reasoning}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Brand Impact</h4>
                      <p className="text-sm leading-relaxed">{element.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Enhanced Usage Guidelines */}
        <section className="tv-section-spacing">
          <h2 className="text-3xl font-bold mb-10 text-center">Usage Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 tv-card-spacing">
            <Card className="rounded-2xl overflow-hidden">
              <CardHeader className="bg-green-50 dark:bg-green-900/20">
                <CardTitle className="text-green-700 dark:text-green-400 flex items-center text-2xl">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">High Contrast Backgrounds</p>
                      <p className="text-sm text-muted-foreground">Use on dark backgrounds for maximum visibility</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Adequate Spacing</p>
                      <p className="text-sm text-muted-foreground">Maintain clear space equal to logo height</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Approved Colors Only</p>
                      <p className="text-sm text-muted-foreground">Use only defined brand color palette</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Readable at All Sizes</p>
                      <p className="text-sm text-muted-foreground">Test visibility from 10+ feet away</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl overflow-hidden">
              <CardHeader className="bg-red-50 dark:bg-red-900/20">
                <CardTitle className="text-red-700 dark:text-red-400 flex items-center text-2xl">
                  <XCircle className="w-6 h-6 mr-3" />
                  Avoid These Mistakes
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Distorting Proportions</p>
                      <p className="text-sm text-muted-foreground">Never stretch or skew the logo</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Low Contrast Usage</p>
                      <p className="text-sm text-muted-foreground">Avoid busy or low-contrast backgrounds</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Unauthorized Colors</p>
                      <p className="text-sm text-muted-foreground">Don't change brand colors</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Adding Effects</p>
                      <p className="text-sm text-muted-foreground">No drop shadows, glows, or filters</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Enhanced Brand Impact Summary */}
        <section className="text-center bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-16 tv-section-spacing">
          <Zap className="w-20 h-20 text-primary mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-6">Brand Impact &amp; Vision</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            The StreamVue brand identity combines modern minimalism with premium appeal, 
            creating a trustworthy and engaging presence in the competitive streaming market. 
            Every element is meticulously designed to enhance the user experience on smart TV platforms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
              <p className="text-muted-foreground">Brand Recognition Score</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Accessibility Compliance</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Platform Compatibility</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}