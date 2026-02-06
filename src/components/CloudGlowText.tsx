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
      {/* Glow layer - behind text */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="absolute pointer-events-none z-0"
            style={{
              left: glowPosition.x,
              top: glowPosition.y,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ 
              width: 90, 
              height: 200, 
              opacity: 0 
            }}
            animate={{ 
              width: 110, 
              height: 220, 
              opacity: 0.7 
            }}
            exit={{ 
              width: 90, 
              height: 200, 
              opacity: 0 
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
              opacity: { duration: 0.2 }
            }}
          >
            <span 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(ellipse at center, #EB6F05 0%, rgba(235, 111, 5, 0.5) 30%, rgba(235, 111, 5, 0.2) 50%, transparent 70%)',
                filter: 'blur(50px)',
              }}
            />
          </motion.span>
        )}
      </AnimatePresence>

      {/* Base text layer */}
      <span className="relative z-10">{children}</span>
      
      {/* Colored overlay text - follows cursor */}
      <motion.span 
        className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
        style={{
          background: `radial-gradient(ellipse 80px 200px at ${glowPosition.x}px ${glowPosition.y}px, #EB6F05 0%, rgba(235, 111, 5, 0.7) 20%, rgba(235, 111, 5, 0.3) 40%, transparent 70%)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default CloudGlowText;
