const About = () => {
  return (
    <section className="section-padding border-y border-white/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-sm text-white/40 tracking-widest uppercase mb-4 block">
              О компании
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-8">
              Бескомпромиссные
              <br />
              <span className="text-white/60">решения</span>
            </h2>
          </div>
          
          <div>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              Мы поставляем оборудование и обеспечиваем его бесперебойность. 
              ЗИП-Центр специализируется на поддержке парка машин Vollmer, Göckel 
              и Loroch, предлагая гибкость в выборе: от новейших моделей до 
              восстановленных станков с гарантией производителя.
            </p>
            
            <p className="text-lg text-white/60 leading-relaxed">
              Наши наладчики — эксперты европейского уровня. Они обеспечат 
              квалифицированный сервис и обучат ваших специалистов в любой 
              точке страны.
            </p>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <span className="font-mono text-4xl font-medium text-white">15+</span>
                <p className="text-sm text-white/40 mt-1">лет опыта</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <span className="font-mono text-4xl font-medium text-white">500+</span>
                <p className="text-sm text-white/40 mt-1">станков обслужено</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <span className="font-mono text-4xl font-medium text-white">24/7</span>
                <p className="text-sm text-white/40 mt-1">поддержка</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
