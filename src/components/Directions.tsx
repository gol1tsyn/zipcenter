import CloudGlowText from './CloudGlowText';

const directions = [
  {
    title: 'Оборудование',
    description: 'Технологические правильные станки для заточки и производства дисковых пил, плоских ножей и PCD-инструмента.',
    image: '/placeholder.svg', // Замените на реальное фото
  },
  {
    title: 'Запасные части',
    description: 'Прямой доступ к оригинальным узлам и компонентам Vollmer, Göckel, Loroch. Гарантия полной совместимости и ресурса.',
    image: '/placeholder.svg', // Замените на реальное фото
  },
  {
    title: 'Расходные материалы',
    description: 'Профессиональный подбор шлифовальных кругов, электродов и концентратов СОЖ для оптимизации процессов шлифования.',
    image: '/placeholder.svg', // Замените на реальное фото
  },
  {
    title: 'Сервисный инжиниринг',
    description: 'Комплексное сопровождение: от пусконаладки и обучения персонала до аудита технологических процессов.',
    image: '/placeholder.svg', // Замените на реальное фото
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
            <CloudGlowText>Что мы предлагаем</CloudGlowText>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {directions.map((item, index) => (
            <div
              key={item.title}
              className="card-glow group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Photo container */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              
              {/* Text content */}
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3 tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-white/50 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directions;
