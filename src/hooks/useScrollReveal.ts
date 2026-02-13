import { useRef, useState, useEffect } from 'react';
import { useIsMobile } from './use-mobile';

export function useScrollRevealRef<T extends HTMLElement = HTMLDivElement>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isMobile || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isMobile, threshold]);

  return { ref, isVisible: isMobile && isVisible, isMobile };
}
