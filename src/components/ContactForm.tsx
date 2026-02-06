import { useState, useRef } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

// Special component combining scroll reveal + hover cloud glow
const ScrollRevealCloudText = ({ children }: { children: string }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setGlowPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.span
      ref={containerRef}
      className="relative inline-block cursor-pointer"
      style={{ padding: '0.15em 0', margin: '-0.15em 0' }}
      initial={{ color: 'rgba(255, 255, 255, 0.6)', textShadow: '0 0 0px rgba(235, 111, 5, 0)' }}
      whileInView={{ 
        color: '#EB6F05', 
        textShadow: '0 0 20px rgba(235, 111, 5, 0.2)' 
      }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base text */}
      <span className="relative z-10">{children}</span>
      
      {/* Hover color overlay */}
      <span 
        className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center transition-opacity duration-200"
        style={{
          backgroundImage: `radial-gradient(ellipse 70px 140px at ${glowPosition.x}px ${glowPosition.y}px, #EB6F05 0%, rgba(235, 111, 5, 0.5) 40%, transparent 70%)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          opacity: isHovered ? 1 : 0,
        }}
        aria-hidden="true"
      >
        {children}
      </span>
    </motion.span>
  );
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="font-mono text-sm text-white/40 tracking-widest uppercase mb-4 block">
            Контакты
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
            <ScrollRevealCloudText>Оставьте запрос</ScrollRevealCloudText>
            <br />
            <span className="text-white/60">через контактную форму</span>
          </h2>
          <p className="text-white/50">
            или сразу напишите менеджеру в телеграме
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Имя"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-dark"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-dark"
            />
          </div>
          
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
            className="input-dark"
          />
          
          <textarea
            name="message"
            placeholder="Дополнительная информация"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="input-dark resize-none"
          />
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`btn-outline-hero cloud-glow-button flex-1 flex items-center justify-center gap-2 ${isSubmitted ? 'border-[hsl(142,76%,46%)] text-[hsl(142,76%,46%)] !bg-transparent !shadow-none' : ''}`}
            >
              {isSubmitted ? (
                <Check className="w-5 h-5 animate-scale-in" />
              ) : isSubmitting ? (
                <span className="opacity-50">Отправка...</span>
              ) : (
                <span>Отправить</span>
              )}
            </button>
            
            <a
              href="https://t.me/zip_centr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-telegram flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
              </svg>
              <span>Написать</span>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
