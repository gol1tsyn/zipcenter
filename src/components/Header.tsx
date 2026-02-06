import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import CloudGlowText from './CloudGlowText';

const navItems = [
  { label: 'Оборудование', href: '#directions' },
  { label: 'Запасные части', href: '#directions' },
  { label: 'Сервис', href: '#services' },
  { label: 'Контакты', href: '#contact' },
];

interface LiquidBlobProps {
  color: string;
  size: string;
  position: { left?: string; right?: string; top: string };
  opacity: number;
  duration: number;
  xMovement: number[];
  yMovement: number[];
  scaleMovement: number[];
}

const LiquidBlob = ({ color, size, position, opacity, duration, xMovement, yMovement, scaleMovement }: LiquidBlobProps) => (
  <motion.div
    className={`absolute ${size} rounded-full`}
    style={{
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      mixBlendMode: 'screen',
      opacity,
      ...position,
    }}
    animate={{
      x: xMovement,
      y: yMovement,
      scale: scaleMovement,
    }}
    transition={{
      duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  />
);

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
        
        {/* Animated Liquid Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Pink Blob */}
          <LiquidBlob
            color="rgba(236, 72, 153, 0.6)"
            size="w-32 h-32"
            position={{ left: '10%', top: '-20%' }}
            opacity={0.4}
            duration={8}
            xMovement={[0, 30, -20, 0]}
            yMovement={[0, 20, -10, 0]}
            scaleMovement={[1, 1.3, 0.9, 1]}
          />
          
          {/* Electric Blue Blob */}
          <LiquidBlob
            color="rgba(59, 130, 246, 0.5)"
            size="w-40 h-40"
            position={{ left: '40%', top: '-30%' }}
            opacity={0.35}
            duration={10}
            xMovement={[0, -40, 30, 0]}
            yMovement={[0, 15, -20, 0]}
            scaleMovement={[1, 0.8, 1.2, 1]}
          />
          
          {/* Deep Purple Blob */}
          <LiquidBlob
            color="rgba(139, 92, 246, 0.5)"
            size="w-36 h-36"
            position={{ right: '15%', top: '-25%' }}
            opacity={0.4}
            duration={12}
            xMovement={[0, 25, -35, 0]}
            yMovement={[0, -15, 25, 0]}
            scaleMovement={[1, 1.1, 0.85, 1]}
          />
          
          {/* Orange Accent Blob */}
          <LiquidBlob
            color="rgba(235, 111, 5, 0.5)"
            size="w-28 h-28"
            position={{ right: '35%', top: '-15%' }}
            opacity={0.3}
            duration={9}
            xMovement={[0, -20, 40, 0]}
            yMovement={[0, 25, -15, 0]}
            scaleMovement={[1, 1.25, 0.95, 1]}
          />
        </div>

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
          <motion.a 
            href="#" 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <CloudGlowText className="text-xl font-semibold tracking-tight">ЗИП-Центр</CloudGlowText>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a 
                key={item.label} 
                href={item.href} 
                className="relative text-base font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 py-2 group"
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <CloudGlowText>{item.label}</CloudGlowText>
                {/* Hover underline glow */}
                <span
                  className="absolute -bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-accent/0 via-brand-accent to-brand-accent/0 rounded-full scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-300"
                />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button - Glass Style */}
          <motion.a
            href="#contact"
            className="hidden md:flex items-center px-5 py-2.5 text-sm font-medium rounded-full relative overflow-hidden group"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Button hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(235, 111, 5, 0.2) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(59, 130, 246, 0.2) 100%)',
              }}
            />
            <span className="relative z-10 text-foreground">Связаться</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <nav className="flex flex-col gap-3 py-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={isMobileMenuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <CloudGlowText>{item.label}</CloudGlowText>
              </motion.a>
            ))}
            {/* Mobile CTA */}
            <motion.a
              href="#contact"
              className="mt-2 px-5 py-3 text-center text-sm font-medium rounded-full"
              style={{
                background: 'rgba(235, 111, 5, 0.15)',
                border: '1px solid rgba(235, 111, 5, 0.3)',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ x: -20, opacity: 0 }}
              animate={isMobileMenuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ delay: navItems.length * 0.05, duration: 0.3 }}
            >
              Связаться
            </motion.a>
          </nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
