import ScrollRevealText from './ScrollRevealText';

import imgPodshipniki from '@/assets/catalog-podshipniki.webp';
import imgNapravlyayushchie from '@/assets/catalog-napravlyayushchie.webp';
import imgShlifovalnyjKrug from '@/assets/catalog-shlifovalnyj-krug.webp';
import imgServousilitel from '@/assets/catalog-servousilitel.webp';
import imgShlifovalnayaPinol from '@/assets/catalog-shlifovalnaya-pinol.webp';
import imgAlmaznyeKrugi from '@/assets/catalog-almaznye-krugi-said.webp';

const products = [
  {
    title: 'Подшипники',
    image: imgPodshipniki,
  },
  {
    title: 'Направляющие',
    image: imgNapravlyayushchie,
  },
  {
    title: 'Шлифовальный круг',
    image: imgShlifovalnyjKrug,
  },
  {
    title: 'Сервоусилитель ACS\u00A012010 Vollmer',
    image: imgServousilitel,
  },
  {
    title: 'Шлифовальная пиноль',
    image: imgShlifovalnayaPinol,
  },
  {
    title: 'Алмазные круги SAID',
    image: imgAlmaznyeKrugi,
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
            <ScrollRevealText>Запасные части</ScrollRevealText>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="card-glow group cursor-pointer overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden border-b border-border">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium tracking-tight group-hover:text-foreground/80 transition-colors duration-300">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-orange-glow inline-block">
            Запросить каталог
          </a>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
