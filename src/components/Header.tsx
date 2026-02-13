import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
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
  const headerRef = useRef<HTMLElement>(null);
  
  // Scroll-based blur oscillation
  const { scrollY } = useScroll();
  const rawBlur = useTransform(scrollY, [0, 100, 200, 300, 400], [20, 28, 22, 30, 25]);
  const blurValue = useSpring(rawBlur, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* SVG Displacement Filter Definition */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="liquidDisplacement" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.015" 
              numOctaves="3" 
              result="noise"
              seed="5"
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale="3" 
              xChannelSelector="R" 
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <motion.header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-2' : 'py-3'
        }`}
        style={{
          // @ts-ignore - CSS custom property for dynamic blur
          '--dynamic-blur': blurValue,
        }}
      >
        {/* Refractive Liquid Glass Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary Liquid Glass Layer */}
          <motion.div 
            className="absolute inset-0"
            style={{
              backdropFilter: useTransform(blurValue, (v) => `blur(${v}px) saturate(200%) contrast(110%)`),
              WebkitBackdropFilter: useTransform(blurValue, (v) => `blur(${v}px) saturate(200%) contrast(110%)`),
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
            }}
          />
          
          {/* Displacement/Refraction Layer - Creates lens distortion */}
          <div 
            className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30"
            style={{
              filter: 'url(#liquidDisplacement)',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
            }}
          />

          {/* Specular Highlight - Top edge reflection */}
          <div 
            className="absolute inset-x-0 top-0 h-[2px]"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 80%, transparent 100%)',
            }}
          />
          
          {/* Secondary specular - softer glow beneath */}
          <div 
            className="absolute inset-x-0 top-0 h-8 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%)',
            }}
          />

          {/* Noise Texture Overlay - Physical grain */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
            }}
          />

          {/* Bottom Border - Variable opacity glass edge */}
          <div 
            className="absolute inset-x-0 bottom-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.3) 70%, transparent 100%)',
            }}
          />
          
          {/* Subtle dark tint for text legibility */}
          <div className="absolute inset-0 bg-foreground/[0.02] pointer-events-none" />
        </div>

        {/* Header Content */}
        <div className="container-custom relative z-10">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <a 
              href="#" 
              className="flex items-center gap-3"
              style={{
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
              }}
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
                  style={{
                    textShadow: '0 1px 2px rgba(0,0,0,0.08)',
                  }}
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
              style={{
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
              }}
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
                  style={{
                    textShadow: '0 1px 2px rgba(0,0,0,0.08)',
                  }}
                >
                  <CloudGlowText>{item.label}</CloudGlowText>
                </a>
              ))}
            </nav>
          )}
        </div>
      </motion.header>
    </>
  );
};

export default Header;
