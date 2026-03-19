import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import ScrollRevealText from './ScrollRevealText';
import { supabase } from '@/integrations/supabase/client';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      const { data, error } = await supabase.functions.invoke('submit-form', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        },
      });

      if (error) throw error;
      
      setIsSubmitted(true);
      setSuccessMessage('Благодарим! Скоро менеджер вам позвонит');
      
      setTimeout(() => {
        setIsSubmitted(false);
        setSuccessMessage('');
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 4000);
    } catch {
      setErrorMessage('Не удалось отправить. Попробуйте ещё раз или напишите в Телеграм.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="font-mono text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
            Контакты
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
            <ScrollRevealText>Оставьте запрос</ScrollRevealText>
            <br />
            <span className="text-foreground/60">через контактную форму</span>
          </h2>
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

          {successMessage && (
            <p className="text-[hsl(142,76%,46%)] text-center text-sm" role="status">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-destructive text-center text-sm" role="alert">{errorMessage}</p>
          )}
          
          <motion.button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className={`btn-orange-glow w-full flex items-center justify-center gap-2 ${isSubmitted ? 'border-[hsl(142,76%,46%)] text-[hsl(142,76%,46%)] !bg-transparent !shadow-none' : ''}`}
            whileTap={{ scale: 0.97 }}
          >
            {isSubmitted ? (
              <Check className="w-5 h-5 animate-scale-in" />
            ) : isSubmitting ? (
              <span className="opacity-50">Отправка...</span>
            ) : (
              <span>Отправить</span>
            )}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
