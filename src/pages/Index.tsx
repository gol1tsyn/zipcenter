import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Directions from '@/components/Directions';
import About from '@/components/About';
import Catalog from '@/components/Catalog';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scroll-reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Grain overlay for cinematic feel */}
      <div className="grain-overlay" />
      
      <Header />
      <main>
        <Hero />
        <Directions />
        <About />
        <Catalog />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
