import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

const Home = () => {
  const { t, i18n } = useTranslation();
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const currentLang = i18n.language;

  useEffect(() => {
    // Get first 3 products
    setFeaturedProducts(productsData.slice(0, 3));
  }, []);

  const values = [
    {
      title: t('home.values.hygiene.title'),
      description: t('home.values.hygiene.description'),
    },
    {
      title: t('home.values.sourcing.title'),
      description: t('home.values.sourcing.description'),
    },
    {
      title: t('home.values.delivery.title'),
      description: t('home.values.delivery.description'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary gradient-animated"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Background Image with Parallax Effect */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-15 md:opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1920')",
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        
        {/* Animated Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-10 left-5 md:top-20 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-tertiary/15 rounded-full blur-3xl"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-10 right-5 md:bottom-20 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-tertiary/15 rounded-full blur-3xl"
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-white/5 rounded-full blur-2xl"
            animate={{
              y: [0, -40, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        {/* Animated Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-tertiary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 md:px-6 max-w-5xl mx-auto w-full"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6 md:mb-8"
          >
            <motion.div
              className="px-4 py-2 md:px-6 md:py-3 bg-tertiary/20 backdrop-blur-sm rounded-full border border-tertiary/30"
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-body text-xs md:text-sm text-tertiary font-light tracking-wider uppercase">
                Produits Premium
              </span>
            </motion.div>
          </motion.div>

          {/* Main Title with Word-by-Word Animation */}
          <div className="mb-4 md:mb-6">
            {t('home.hero.title').split(' ').map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="inline-block mr-2 md:mr-3"
              >
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-tight drop-shadow-2xl inline-block arabic-text">
                  {word}
                </h1>
              </motion.span>
            ))}
          </div>

          {/* Subtitle with Fade In */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-tertiary/90 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            {t('home.hero.subtitle')}
          </motion.p>

          {/* CTA Button with Pulse Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/catalogue"
              className="relative inline-block overflow-hidden rounded-full group"
            >
              <motion.div
                className="absolute inset-0 bg-tertiary/20 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="relative z-10 inline-block bg-tertiary text-primary font-heading font-light text-sm md:text-base px-8 md:px-12 py-3 md:py-4 rounded-full transition-all duration-300 group-hover:bg-tertiary/90">
                {t('home.hero.cta')}
              </span>
            </Link>
          </motion.div>

          {/* Stats Row - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-12 md:mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: '100%', label: 'Qualité' },
              { number: '24/7', label: 'Support' },
              { number: '500+', label: 'Clients' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="font-heading text-xl md:text-2xl lg:text-3xl font-light text-white mb-1">
                  {stat.number}
                </div>
                <div className="font-body text-xs md:text-sm text-tertiary/80 font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="font-body text-xs text-tertiary/70 font-light">Scroll</span>
            <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-tertiary/50 rounded-full flex items-start justify-center p-1.5 md:p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-2 md:w-1 md:h-3 bg-tertiary rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Values Section - Redesigned */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 md:mb-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="font-body text-xs md:text-sm text-primary/60 font-light tracking-[0.2em] uppercase arabic-text">
                {t('home.values.badge')}
              </span>
            </motion.div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-secondary mb-6 md:mb-8 arabic-text leading-tight">
              {t('home.values.title')}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"
            />
            <p className="font-body text-base md:text-lg lg:text-xl text-secondary/50 max-w-3xl mx-auto font-light arabic-text leading-relaxed">
              {t('home.values.subtitle')}
            </p>
          </motion.div>

          {/* Values Grid - Modern Layout */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
              {values.map((value, index) => {
                const xOffset = index % 2 === 0 ? -30 : 30;
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60, x: xOffset }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 80,
                    damping: 15
                  }}
                  whileHover={{ y: -8 }}
                  className="relative group"
                >
                  {/* Decorative Number */}
                  <div className="absolute -top-4 md:-top-6 z-0 -left-4 md:-left-6">
                    <motion.div
                      className="text-8xl md:text-9xl font-heading font-light text-primary/5 select-none"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                      whileHover={{ scale: 1.1, opacity: 0.1 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-100/50 shadow-sm hover:shadow-xl transition-all duration-500 group-hover:border-primary/20 h-full">
                    {/* Decorative Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "60px" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.4 }}
                      className="h-0.5 mb-6 md:mb-8 bg-gradient-to-r from-primary to-transparent"
                    />

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                      className="font-heading text-2xl md:text-3xl font-light text-secondary mb-4 md:mb-6 group-hover:text-primary transition-colors duration-300 arabic-text leading-tight"
                    >
                      {value.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                      className="font-body text-sm md:text-base text-secondary/50 leading-relaxed font-light arabic-text"
                    >
                      {value.description}
                    </motion.p>

                    {/* Hover Effect Gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      initial={false}
                    />
                  </div>
                </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 md:mt-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="section-title font-heading text-3xl md:text-4xl lg:text-5xl font-light text-secondary mb-3 md:mb-4 arabic-text">
              {t('home.featured.title')}
            </h2>
            <p className="font-body text-sm md:text-base lg:text-lg text-secondary/60 max-w-2xl mx-auto font-light arabic-text">
              {t('home.featured.subtitle')}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-primary/95 to-secondary relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')] opacity-20" />
        </motion.div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 md:mb-6 drop-shadow-lg arabic-text">
              {t('home.cta.title')}
            </h2>
            <p className="font-body text-base md:text-lg lg:text-xl text-tertiary/90 mb-8 md:mb-10 max-w-2xl mx-auto font-light arabic-text">
              {t('home.cta.subtitle')}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-white text-primary font-heading font-light text-sm md:text-base px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-tertiary transition-all duration-300 shadow-lg"
              >
                {t('home.cta.button')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

