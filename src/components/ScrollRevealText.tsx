import { motion } from 'framer-motion';

const BRAND_ORANGE = '#EB6F05';

interface ScrollRevealTextProps {
  children: string;
  className?: string;
}

const ScrollRevealText = ({ children, className = '' }: ScrollRevealTextProps) => {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ 
        color: 'hsl(0 0% 10%)', 
        textShadow: '0 0 0px rgba(235, 111, 5, 0)',
      }}
      whileInView={{ 
        color: BRAND_ORANGE,
        textShadow: '0 0 40px rgba(235, 111, 5, 0.5)',
      }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ 
        duration: 3, 
        ease: [0.22, 1, 0.36, 1],
        color: { duration: 2.5, delay: 0.3 },
        textShadow: { duration: 3, delay: 0.8 },
      }}
    >
      {children}
    </motion.span>
  );
};

export default ScrollRevealText;
