import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

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

  return (
    <span
      ref={containerRef}
      className={`relative inline-block cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ padding: '0.15em 0', margin: '-0.15em 0' }}
    >
      {/* Base text layer */}
      <span className="relative z-10">{children}</span>
      
      {/* Colored overlay text - follows cursor */}
      <span 
        className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center transition-opacity duration-200"
        style={{
          background: `radial-gradient(ellipse 70px 140px at ${glowPosition.x}px ${glowPosition.y}px, #EB6F05 0%, rgba(235, 111, 5, 0.5) 40%, transparent 70%)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          opacity: isHovered ? 1 : 0,
        }}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
};

export default CloudGlowText;
