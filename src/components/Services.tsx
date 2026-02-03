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
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-white/40 tracking-widest uppercase mb-4 block">
            Сервис
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            Сервисное обслуживание
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service) => (
            <div key={service.index} className="relative group">
              <span className="tech-index block mb-6 group-hover:opacity-40 transition-opacity duration-500">
                {service.index}
              </span>
              
              <h3 className="text-2xl font-medium mb-4 tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-white/50 leading-relaxed">
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
