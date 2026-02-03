import { Settings, Cpu, Droplets, Wrench } from 'lucide-react';

const directions = [
  {
    icon: Settings,
    title: 'Оборудование',
    description: 'Технологические правильные станки для заточки и производства дисковых пил, плоских ножей и PCD-инструмента.',
  },
  {
    icon: Cpu,
    title: 'Запасные части',
    description: 'Прямой доступ к оригинальным узлам и компонентам Vollmer, Göckel, Loroch. Гарантия полной совместимости и ресурса.',
  },
  {
    icon: Droplets,
    title: 'Расходные материалы',
    description: 'Профессиональный подбор шлифовальных кругов, электродов и концентратов СОЖ для оптимизации процессов шлифования.',
  },
  {
    icon: Wrench,
    title: 'Сервисный инжиниринг',
    description: 'Комплексное сопровождение: от пусконаладки и обучения персонала до аудита технологических процессов.',
  },
];

const Directions = () => {
  return (
    <section id="directions" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-white/40 tracking-widest uppercase mb-4 block">
            Направления
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            Что мы предлагаем
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {directions.map((item, index) => (
            <div
              key={item.title}
              className="card-glow p-8 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 p-3 border border-white/10 w-fit transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/5">
                <item.icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors duration-500" />
              </div>
              
              <h3 className="text-xl font-medium mb-4 tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-white/50 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directions;
