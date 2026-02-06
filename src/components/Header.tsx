import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CloudGlowText from './CloudGlowText';

const navItems = [
  { label: 'Оборудование', href: '#directions' },
  { label: 'Запасные части', href: '#directions' },
  { label: 'Сервис', href: '#services' },
  { label: 'Контакты', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-2' : 'py-3'
      }`}
    >
      {/* Liquid Glass Background Container */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glassmorphism base */}
        <div 
          className="absolute inset-0 backdrop-blur-[20px] saturate-[160%]"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
          }}
        />
        {/* Noise Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Glass Edge Borders */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      {/* Header Content */}
      <div className="container-custom relative z-10">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-3"
          >
            <CloudGlowText className="text-xl font-semibold tracking-tight">ЗИП-Центр</CloudGlowText>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 py-2"
              >
                <CloudGlowText>{item.label}</CloudGlowText>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <CloudGlowText>{item.label}</CloudGlowText>
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
