import { useRef, MouseEvent } from 'react';

const products = [
  {
    title: 'VOLLMER CHD 270',
    category: 'Заточка дисковых пил',
    specs: 'Ø 80–800 мм',
  },
  {
    title: 'VOLLMER CP 650',
    category: 'Производство дисковых пил',
    specs: 'Ø 200–650 мм',
  },
  {
    title: 'GÖCKEL G50',
    category: 'Плоскошлифовальный станок',
    specs: 'до 500 мм',
  },
  {
    title: 'LOROCH K850',
    category: 'Заточка ленточных пил',
    specs: 'Ширина 20–250 мм',
  },
  {
    title: 'VOLLMER QWD 760',
    category: 'Обработка PCD',
    specs: 'Эрозионная обработка',
  },
  {
    title: 'GÖCKEL G70',
    category: 'Плоскошлифовальный станок',
    specs: 'до 700 мм',
  },
];

const Catalog = () => {
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
    <section id="catalog" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="font-mono text-sm tracking-widest uppercase mb-4 block text-white/40">
            Каталог
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-white">
            Оборудование
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.title}
              ref={(el) => (cardsRef.current[index] = el)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              className="card-glow group cursor-pointer overflow-hidden reveal-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Placeholder Image Area */}
              <div className="aspect-[4/3] bg-gradient-to-br from-white/[0.03] to-transparent flex items-center justify-center border-b border-white/5">
                <span className="font-mono text-7xl font-medium tracking-tighter text-white/40 group-hover:text-white/50 transition-colors duration-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              
              <div className="p-6">
                <span className="font-mono text-xs tracking-wider uppercase text-white/40">
                  {product.category}
                </span>
                <h3 className="text-xl font-medium mt-2 mb-3 tracking-tighter text-white group-hover:text-white/90 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-sm text-secondary">
                  {product.specs}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal-on-scroll">
          <a href="#contact" className="btn-ghost inline-block">
            Запросить каталог
          </a>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
