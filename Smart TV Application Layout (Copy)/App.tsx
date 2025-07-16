import React, { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { InnerPage } from './components/InnerPage';
import { ArchivePage } from './components/ArchivePage';
import { LogoJustificationPage } from './components/LogoJustificationPage';

export type PageType = 'splash' | 'inner' | 'archive' | 'logo';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('splash');

  const renderPage = () => {
    switch (currentPage) {
      case 'splash':
        return <SplashScreen onNavigate={setCurrentPage} />;
      case 'inner':
        return <InnerPage onNavigate={setCurrentPage} />;
      case 'archive':
        return <ArchivePage onNavigate={setCurrentPage} />;
      case 'logo':
        return <LogoJustificationPage onNavigate={setCurrentPage} />;
      default:
        return <SplashScreen onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="size-full min-h-screen bg-background text-foreground">
      {renderPage()}
    </div>
  );
}