import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CloudGlowText from './CloudGlowText';

const navItems = [
  { label: 'Шлифовальная техника', href: '#catalog-equipment' },
  { label: 'Запасные части', href: '#catalog-spare-parts' },
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
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(242, 242, 242, 0.35)',
      }}
    >
      {/* Bottom border */}
      <div 
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 30%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.08) 70%, transparent 100%)',
        }}
      />

      {/* Header Content */}
      <div className="container-custom relative z-10">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
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
            aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMobileMenuOpen}
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
