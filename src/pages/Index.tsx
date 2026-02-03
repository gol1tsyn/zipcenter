import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Directions from '@/components/Directions';
import About from '@/components/About';
import Catalog from '@/components/Catalog';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
