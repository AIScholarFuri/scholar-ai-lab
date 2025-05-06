
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhoIsItForSection from '@/components/WhoIsItForSection';
import CoursesSection from '@/components/CoursesSection';
import ToolsSection from '@/components/ToolsSection';
import QuoteCarousel from '@/components/QuoteCarousel';
import CommunitySection from '@/components/CommunitySection';
import BlogSection from '@/components/BlogSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    document.querySelectorAll('.reveal').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="antialiased">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhoIsItForSection />
      <CoursesSection />
      <ToolsSection />
      <QuoteCarousel />
      <CommunitySection />
      <BlogSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
