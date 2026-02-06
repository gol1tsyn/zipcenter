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

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <span
      ref={containerRef}
      className={`cloud-glow-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        '--glow-x': `${glowPosition.x}px`,
        '--glow-y': `${glowPosition.y}px`,
        '--glow-opacity': isHovered ? 1 : 0,
      } as React.CSSProperties}
    >
      <span className="cloud-glow-base">{children}</span>
      <span className="cloud-glow-overlay" aria-hidden="true">{children}</span>
    </span>
  );
};

export default CloudGlowText;
