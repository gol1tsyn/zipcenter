import ScrollRevealText from './ScrollRevealText';
import { useScrollRevealRef } from '@/hooks/useScrollReveal';
import equipmentImg from '@/assets/equipment.jpg';
import sparePartsImg from '@/assets/spare-parts.jpg';
import consumablesImg from '@/assets/consumables.jpg';
import serviceImg from '@/assets/service.jpg';

const directions = [
  {
    title: 'Шлифовальная техника',
    description: 'Технологические правильные станки для\u00A0заточки и\u00A0производства дисковых пил, плоских ножей и\u00A0PCD-инструмента.',
    image: equipmentImg,
    href: '#catalog-equipment',
  },
  {
    title: 'Запасные части',
    description: 'Прямой доступ к\u00A0оригинальным узлам и\u00A0компонентам Vollmer, Göckel, Loroch. Гарантия полной совместимости и\u00A0ресурса.',
    image: sparePartsImg,
    href: '#catalog-spare-parts',
  },
  {
    title: 'Расходные материалы',
    description: 'Профессиональный подбор шлифовальных кругов, электродов и\u00A0концентратов СОЖ для\u00A0оптимизации процессов шлифования.',
    image: consumablesImg,
    href: '#catalog-spare-parts',
  },
  {
    title: 'Сервисный инжиниринг',
    description: 'Комплексное сопровождение: от\u00A0пусконаладки и\u00A0обучения персонала до\u00A0аудита технологических процессов.',
    image: serviceImg,
    href: '#services',
  },
];

const DirectionCard = ({ item, index }: { item: typeof directions[number]; index: number }) => {
  const { ref, isVisible, isMobile } = useScrollRevealRef<HTMLAnchorElement>();

  return (
    <a
      ref={ref}
      key={item.title}
      href={item.href}
      className="card-glow group overflow-hidden block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={`${item.title} — ЗИП-Центр`}
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-500 ${
            isMobile
              ? (isVisible ? 'grayscale-0 scale-105' : 'grayscale scale-100')
              : 'grayscale group-hover:grayscale-0 group-hover:scale-105'
          }`}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium mb-3 tracking-tight">
          {item.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {item.description}
        </p>
      </div>
    </a>
  );
};

const Directions = () => {
  return (
    <section id="directions" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
            Направления
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            <ScrollRevealText>Что мы предлагаем</ScrollRevealText>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {directions.map((item, index) => (
            <DirectionCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directions;
