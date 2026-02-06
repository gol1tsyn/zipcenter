import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CloudGlowText from './CloudGlowText';
import vollmerLogo from '@/assets/vollmer-logo.svg';
import gockelLogo from '@/assets/gockel-logo.svg';
import lorochLogo from '@/assets/loroch-logo.svg';

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
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <CloudGlowText className="text-xl font-semibold tracking-tight">ЗИП-Центр</CloudGlowText>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link text-base">
                <CloudGlowText>{item.label}</CloudGlowText>
              </a>
            ))}
          </nav>

          {/* Partner Logos */}
          <div className="hidden lg:flex items-center gap-5">
            <img src={vollmerLogo} alt="Vollmer" className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity" />
            <img src={gockelLogo} alt="Göckel" className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity" />
            <img src={lorochLogo} alt="Loroch" className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <CloudGlowText>{item.label}</CloudGlowText>
                </a>
              ))}
              <div className="flex items-center gap-4 mt-4">
                <img src={vollmerLogo} alt="Vollmer" className="h-6 w-auto opacity-60" />
                <img src={gockelLogo} alt="Göckel" className="h-6 w-auto opacity-60" />
                <img src={lorochLogo} alt="Loroch" className="h-6 w-auto opacity-60" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
