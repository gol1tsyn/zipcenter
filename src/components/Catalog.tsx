import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollRevealText from './ScrollRevealText';
import { useScrollRevealRef } from '@/hooks/useScrollReveal';

import imgPodshipniki from '@/assets/catalog-podshipniki.webp';
import imgNapravlyayushchie from '@/assets/catalog-napravlyayushchie.webp';
import imgShlifovalnyjKrug from '@/assets/catalog-shlifovalnyj-krug.webp';
import imgServousilitel from '@/assets/catalog-servousilitel.webp';
import imgShlifovalnayaPinol from '@/assets/catalog-shlifovalnaya-pinol.webp';
import imgAlmaznyeKrugi from '@/assets/catalog-almaznye-krugi-said.webp';
import imgCp650 from '@/assets/catalog-cp650.webp';
import imgChc840 from '@/assets/catalog-chc840.webp';
import imgCpf650 from '@/assets/catalog-cpf650.webp';
import imgRestored from '@/assets/catalog-restored.webp';
import imgSurfaceGrinder from '@/assets/catalog-surface-grinder.webp';

const spareParts = [
  { title: 'Подшипники', image: imgPodshipniki },
  { title: 'Направляющие', image: imgNapravlyayushchie },
  { title: 'Шлифовальный круг', image: imgShlifovalnyjKrug },
  { title: 'Сервоусилитель ACS\u00A012010 Vollmer', image: imgServousilitel },
  { title: 'Шлифовальная пиноль', image: imgShlifovalnayaPinol },
  { title: 'Алмазные круги SAID', image: imgAlmaznyeKrugi },
];

const equipment = [
  { title: 'Заточной станок для дисковых пил CP650 VOLLMER', image: imgCp650 },
  { title: 'Заточной станок для дисковых пил CHC840', image: imgChc840 },
  { title: 'Станок для заточки боковых граней CPF650 VOLLMER', image: imgCpf650 },
  { title: 'Восстановленные заточные станки VOLLMER', image: imgRestored },
  { title: 'Плоскошлифовальные станки', image: imgSurfaceGrinder },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

interface ProductCardProps {
  title: string;
  image: string;
  altSuffix: string;
}

const ProductCard = ({ title, image, altSuffix }: ProductCardProps) => {
  const { ref, isVisible, isMobile } = useScrollRevealRef();

  return (
    <motion.div
      ref={ref}
      className="card-glow group cursor-pointer overflow-hidden"
      variants={cardVariants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="aspect-[4/3] overflow-hidden border-b border-border">
        <img
          src={image}
          alt={`${title} — ${altSuffix}`}
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-700 ${
            isMobile
              ? (isVisible ? 'grayscale-0' : 'grayscale')
              : 'grayscale group-hover:grayscale-0'
          }`}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium tracking-tight group-hover:text-foreground/80 transition-colors duration-300">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const StaggerGrid = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {children}
    </motion.div>
  );
};

const Catalog = () => {
  return (
    <section id="catalog" className="section-padding">
      <div className="container-custom">
        {/* Запасные части */}
        <div id="catalog-spare-parts" className="text-center mb-16 scroll-mt-24">
          <span className="font-mono text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
            Каталог
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            <ScrollRevealText>Запасные части и&nbsp;расходные материалы</ScrollRevealText>
          </h2>
        </div>

        <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spareParts.map((product) => (
            <ProductCard key={product.title} title={product.title} image={product.image} altSuffix="запасная часть для заточного оборудования" />
          ))}
        </StaggerGrid>

        {/* Оборудование */}
        <div id="catalog-equipment" className="text-center mt-24 mb-16 scroll-mt-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            <ScrollRevealText>Шлифовальная техника</ScrollRevealText>
          </h2>
        </div>

        <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((product) => (
            <ProductCard key={product.title} title={product.title} image={product.image} altSuffix="заточное оборудование" />
          ))}
        </StaggerGrid>

        <div className="text-center mt-12">
          <motion.a href="#contact" className="btn-orange-glow inline-block" whileTap={{ scale: 0.97 }}>
            Запросить каталог
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Catalog;

