import ScrollRevealText from './ScrollRevealText';
import vollmerLogo from '@/assets/vollmer-logo.svg';
import gockelLogo from '@/assets/gockel-logo.svg';
import lorochLogo from '@/assets/loroch-logo.svg';

const About = () => {
  return (
    <section className="section-padding border-y border-border">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
              О компании
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-8">
              <ScrollRevealText>Бескомпромиссные</ScrollRevealText>
              <br />
              <span className="text-foreground/60">решения</span>
            </h2>
            
            {/* Partner Logos */}
            <div className="flex items-center gap-6 mt-6">
              <img src={vollmerLogo} alt="Vollmer" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity [filter:brightness(0)]" />
              <img src={gockelLogo} alt="Göckel" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity [filter:brightness(0)]" />
              <img src={lorochLogo} alt="Loroch" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity [filter:brightness(0)]" />
            </div>
          </div>
          
          <div>
            <p className="text-lg text-foreground/60 leading-relaxed mb-8">
              Мы&nbsp;поставляем оборудование и&nbsp;обеспечиваем его бесперебойность. 
              ЗИП-Центр специализируется на&nbsp;поддержке парка машин Vollmer, Göckel 
              и&nbsp;Loroch, предлагая гибкость в&nbsp;выборе: от&nbsp;новейших моделей до&nbsp;восстановленных станков с&nbsp;гарантией производителя.
            </p>
            
            <p className="text-lg text-foreground/60 leading-relaxed">
              Наши наладчики&nbsp;— эксперты европейского уровня. Они обеспечат 
              квалифицированный сервис и&nbsp;обучат ваших специалистов в&nbsp;любой 
              точке страны.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;