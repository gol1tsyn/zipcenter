import ScrollRevealText from './ScrollRevealText';

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
  return (
    <section id="catalog" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
            Каталог
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            <ScrollRevealText>Оборудование</ScrollRevealText>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="card-glow group cursor-pointer overflow-hidden"
            >
              {/* Placeholder Image Area */}
              <div className="aspect-[4/3] bg-gradient-to-br from-foreground/5 to-foreground/0 flex items-center justify-center border-b border-border">
                <span className="font-mono text-6xl text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              
              <div className="p-6">
                <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                  {product.category}
                </span>
                <h3 className="text-xl font-medium mt-2 mb-3 tracking-tight group-hover:text-foreground/80 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {product.specs}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-outline-hero inline-block">
            Запросить каталог
          </a>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
