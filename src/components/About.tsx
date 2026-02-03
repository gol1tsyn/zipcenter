const About = () => {
  return (
    <section className="section-padding border-y border-white/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-on-scroll">
            <span className="font-mono text-sm tracking-widest uppercase mb-4 block text-white/40">
              О компании
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter mb-8 text-white">
              Бескомпромиссные
              <br />
              <span className="text-secondary">решения</span>
            </h2>
          </div>
          
          <div className="reveal-on-scroll" style={{ animationDelay: '150ms' }}>
            <p className="text-lg leading-relaxed mb-8 text-secondary">
              Мы поставляем оборудование и обеспечиваем его бесперебойность. 
              ЗИП-Центр специализируется на поддержке парка машин Vollmer, Göckel 
              и Loroch, предлагая гибкость в выборе: от новейших моделей до 
              восстановленных станков с гарантией производителя.
            </p>
            
            <p className="text-lg leading-relaxed text-secondary">
              Наши наладчики — эксперты европейского уровня. Они обеспечат 
              квалифицированный сервис и обучат ваших специалистов в любой 
              точке страны.
            </p>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <span className="font-mono text-4xl font-medium tracking-tighter text-white">15+</span>
                <p className="text-sm mt-1 text-white/40">лет опыта</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <span className="font-mono text-4xl font-medium tracking-tighter text-white">500+</span>
                <p className="text-sm mt-1 text-white/40">станков обслужено</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <span className="font-mono text-4xl font-medium tracking-tighter text-white">24/7</span>
                <p className="text-sm mt-1 text-white/40">поддержка</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
