import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import TropicalParadiseSection from '../components/TropicalParadiseSection';
import ProductsSection from '../components/ProductsSection';
import LotsSection from '../components/LotsSection';
import GallerySection from '../components/GallerySection';
import LatestInsightsSection from '../components/LatestInsightsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling to all anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Initialize scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));

    return () => {
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TropicalParadiseSection />
      <ProductsSection />
      <LotsSection />
      <GallerySection />
      <LatestInsightsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
