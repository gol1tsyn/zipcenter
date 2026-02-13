import heroBg from '@/assets/hero-bg.webp';
import ScrollRevealText from './ScrollRevealText';
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/60 to-background" />
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-tight mb-8 animate-slide-up">
            <ScrollRevealText>Прецизионные технологии</ScrollRevealText>
            <br />
            <span className="text-foreground/80">заточки и&nbsp;шлифования</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up [animation-delay:200ms] opacity-0">
            ЗИП-Центр&nbsp;— поставщик оборудования и&nbsp;запасных частей мировых лидеров 
            в&nbsp;области машиностроения Vollmer, Loroch, Gerling, Reform, Göckel 
            и&nbsp;других европейских и&nbsp;китайских производителей. Мы&nbsp;внедряем экосистему для&nbsp;обслуживания инструмента, 
            которая работает десятилетиями: от&nbsp;поставок станков с&nbsp;ЧПУ до&nbsp;прямого снабжения 
            оригинальными компонентами и&nbsp;глубокой инженерной поддержки по&nbsp;всей России.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up [animation-delay:400ms] opacity-0">
            <a href="#catalog" className="btn-outline-hero">
              Каталог
            </a>
            <a href="#contact" className="btn-orange-glow">
              Консультация
            </a>
          </div>
        </div>
      </div>
      
    </section>;
};
export default Hero;