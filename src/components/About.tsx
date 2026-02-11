import ScrollRevealText from './ScrollRevealText';
import vollmerLogo from '@/assets/vollmer-logo-color.png';
import gockelLogo from '@/assets/gockel-logo-color.png';
import lorochLogo from '@/assets/loroch-logo-color.svg';

const logos = (
  <>
    <img src={vollmerLogo} alt="Логотип Vollmer — партнёр ЗИП-Центр" loading="lazy" className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-700" />
    <img src={gockelLogo} alt="Логотип Göckel — партнёр ЗИП-Центр" loading="lazy" className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-700" />
    <img src={lorochLogo} alt="Логотип Loroch — партнёр ЗИП-Центр" loading="lazy" className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-700" />
  </>
);

const About = () => {
  return (
    <section className="section-padding border-y border-border">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <span className="font-mono text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
              О компании
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-8">
              <ScrollRevealText>Бескомпромиссные</ScrollRevealText>
              <br />
              <span className="text-foreground/60">решения</span>
            </h2>
            
            {/* Partner Logos - desktop */}
            <div className="hidden lg:flex items-center flex-wrap gap-6 mt-6">
              {logos}
            </div>
          </div>
          
          <div>
            <p className="text-lg text-foreground/60 leading-relaxed mb-8">
              Мы&nbsp;поставляем оборудование и&nbsp;обеспечиваем его бесперебойную работу. 
              ЗИП-Центр специализируется на&nbsp;поддержке станков Vollmer, Göckel 
              и&nbsp;Loroch, предлагая гибкость в&nbsp;выборе: от&nbsp;новейших моделей до&nbsp;восстановленных станков с&nbsp;гарантией производителя.
            </p>
            
            <p className="text-lg text-foreground/60 leading-relaxed">
              Наши наладчики&nbsp;— эксперты европейского уровня. Они обеспечат 
              квалифицированный сервис и&nbsp;обучат ваших специалистов в&nbsp;любой 
              точке страны.
            </p>

            {/* Partner Logos - mobile */}
            <div className="flex lg:hidden items-center flex-wrap gap-6 mt-8">
              {logos}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
