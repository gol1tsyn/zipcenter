const services = [
  {
    index: '01',
    title: 'Капитальный ремонт',
    description: 'Восстановление ресурса узлов и продление жизненного цикла оборудования.',
  },
  {
    index: '02',
    title: 'Технический сервис',
    description: 'Настройка ЧПУ-модулей, пусконаладка и обучение операторов технологии, гарантирующей результат.',
  },
  {
    index: '03',
    title: 'Исключение простоев',
    description: 'Оперативный выезд инженеров и поставка оригинальных запчастей для устранения аварийных отказов.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding border-y border-white/5">
      <div className="container-custom">
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="font-mono text-sm tracking-widest uppercase mb-4 block text-white/40">
            Сервис
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-white">
            Сервисное обслуживание
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={service.index} 
              className="relative group reveal-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <span className="tech-index block mb-6 group-hover:text-white/50 transition-all duration-500">
                {service.index}
              </span>
              
              <h3 className="text-2xl font-medium mb-4 tracking-tighter text-white">
                {service.title}
              </h3>
              
              <p className="leading-relaxed text-secondary">
                {service.description}
              </p>
              
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
