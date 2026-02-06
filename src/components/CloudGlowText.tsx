import { useRef, useState } from 'react';

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
      className={`cloud-glow-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        '--glow-x': `${glowPosition.x}px`,
        '--glow-y': `${glowPosition.y}px`,
        '--glow-opacity': isHovered ? 1 : 0,
      } as React.CSSProperties}
    >
      {/* Glow aura behind text */}
      <span 
        className="absolute pointer-events-none transition-opacity duration-200"
        style={{
          left: glowPosition.x,
          top: glowPosition.y,
          transform: 'translate(-50%, -50%)',
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(235, 111, 5, 0.6) 0%, rgba(235, 111, 5, 0.3) 40%, transparent 70%)',
          filter: 'blur(30px)',
          opacity: isHovered ? 0.8 : 0,
          zIndex: 5,
        }}
      />
      
      {/* Base text layer */}
      <span className="cloud-glow-base">{children}</span>
      
      {/* Colored text overlay */}
      <span className="cloud-glow-overlay" aria-hidden="true">{children}</span>
    </span>
  );
};

export default CloudGlowText;
