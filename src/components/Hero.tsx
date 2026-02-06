import heroBg from '@/assets/hero-bg.png';
import CloudGlowText from './CloudGlowText';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/60 to-background" />
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-tight mb-8 animate-slide-up">
            <CloudGlowText>Прецизионные технологии</CloudGlowText>
            <br />
            <span className="text-foreground/80">заточки и шлифования</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up [animation-delay:200ms] opacity-0">
            ЗИП-Центр — технологический партнер ведущих немецких машиностроителей: 
            Vollmer, Göckel и Loroch. Мы внедряем экосистему для обслуживания инструмента, 
            которая работает десятилетиями: от поставок станков с ЧПУ до прямого снабжения 
            оригинальными компонентами и глубокой инженерной поддержки по всей России.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up [animation-delay:400ms] opacity-0">
            <a href="#catalog" className="btn-outline-hero">
              Каталог
            </a>
            <a href="#contact" className="btn-outline-hero cloud-glow-button">
              <CloudGlowText>Консультация</CloudGlowText>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-foreground/0 via-foreground/30 to-foreground/0" />
      </div>
    </section>
  );
};

export default Hero;
