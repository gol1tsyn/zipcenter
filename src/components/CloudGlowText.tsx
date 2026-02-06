import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CloudGlowTextProps {
  children: string;
  className?: string;
}

const CloudGlowText = ({ children, className = '' }: CloudGlowTextProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setGlowPosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <span
      ref={containerRef}
      className={`relative inline-block cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ padding: '0.15em 0', margin: '-0.15em 0' }}
    >
      {/* Base text layer */}
      <span className="relative z-10">{children}</span>
      
      {/* Colored overlay text - follows cursor */}
      <motion.span 
        className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
        style={{
          background: `radial-gradient(ellipse 60px 120px at ${glowPosition.x}px ${glowPosition.y}px, #EB6F05 0%, rgba(235, 111, 5, 0.6) 30%, rgba(235, 111, 5, 0.2) 50%, transparent 65%)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ 
          type: 'spring',
          stiffness: 300,
          damping: 20
        }}
        aria-hidden="true"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default CloudGlowText;
