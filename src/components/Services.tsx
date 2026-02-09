import ScrollRevealText from './ScrollRevealText';
import servicePhoto from '@/assets/service-photo.webp';

const services = [
  {
    index: '01',
    title: 'Капитальный ремонт',
    description: 'Восстановление ресурса узлов и\u00A0продление жизненного цикла оборудования.',
  },
  {
    index: '02',
    title: 'Технический сервис',
    description: 'Настройка ЧПУ-модулей, пусконаладка и\u00A0обучение операторов технологии, гарантирующей результат.',
  },
  {
    index: '03',
    title: 'Исключение простоев',
    description: 'Оперативный выезд инженеров и\u00A0поставка оригинальных запчастей для\u00A0устранения аварийных отказов.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding border-y border-border">
      <div className="container-custom">
        <div className="mb-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <span className="font-mono text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
              Сервис
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
              <ScrollRevealText>Сервисное обслуживание</ScrollRevealText>
            </h2>
          </div>
          <div className="lg:w-1/2 overflow-hidden rounded-lg group/img">
            <img
              src={servicePhoto}
              alt="Инструменты и оборудование для сервисного обслуживания"
              className="w-full h-auto object-cover grayscale group-hover/img:grayscale-0 transition-all duration-700"
            />
          </div>
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
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-foreground/0 via-foreground/10 to-foreground/0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
