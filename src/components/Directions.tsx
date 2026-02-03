import { useRef, MouseEvent } from 'react';
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
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section id="directions" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="font-mono text-sm tracking-widest uppercase mb-4 block text-white/40">
            Направления
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-white">
            Что мы предлагаем
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {directions.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => (cardsRef.current[index] = el)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              className="card-glow p-8 group reveal-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 p-3 w-fit glass-panel">
                <item.icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors duration-500" />
              </div>
              
              <h3 className="text-xl font-medium mb-4 tracking-tighter text-white">
                {item.title}
              </h3>
              
              <p className="leading-relaxed text-sm text-secondary">
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
