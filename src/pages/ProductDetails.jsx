import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, MessageCircle, Thermometer, Package, MapPin, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import productsData from '../data/products.json';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const currentLang = i18n.language;

  useEffect(() => {
    const foundProduct = productsData.find((p) => p.id === id);
    setProduct(foundProduct);
    if (foundProduct) {
      setSelectedImage(0);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="font-body text-xl text-secondary mb-4">Product not found</p>
          <Link to="/catalogue" className="text-primary hover:underline">
            Back to Catalogue
          </Link>
        </div>
      </div>
    );
  }

  const translation = product.translations[currentLang] || product.translations.fr;
  const phoneNumber = '212637102373';
  const whatsappMessage = encodeURIComponent(
    `I am interested in ${translation.name}`
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  const scrollToContact = () => {
    navigate('/contact');
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-secondary hover:text-primary mb-8 transition-all duration-300 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform flex-shrink-0" />
          <span className="font-body font-light text-sm md:text-base">{t('product.back')}</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="card-premium overflow-hidden group">
              <div className="relative h-96 lg:h-[500px] overflow-hidden bg-gradient-to-br from-tertiary/20 to-tertiary/10">
                <img
                  src={product.images[selectedImage] || product.images[0] || '/placeholder-food.jpg'}
                  alt={translation.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? 'border-primary shadow-lg ring-2 ring-primary/20'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${translation.name} ${index + 1}`}
                      className="w-full h-24 object-cover"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=150&fit=crop';
                      }}
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-secondary mb-4 md:mb-6 leading-tight">
                {translation.name}
              </h1>
              <p className="font-body text-lg lg:text-xl text-secondary/70 leading-relaxed">
                {translation.description}
              </p>
            </div>

            {/* Specifications */}
            <div className="card-premium p-8 space-y-6">
              <h3 className="font-heading text-xl md:text-2xl font-light text-secondary mb-4 md:mb-6 pb-3 md:pb-4 border-b border-gray-200">
                {t('product.description')}
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-tertiary/20 hover:bg-tertiary/30 transition-colors">
                  <div className="bg-primary rounded-lg p-3 flex-shrink-0">
                    <Package className="text-tertiary" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-body font-light text-secondary block mb-1 text-sm md:text-base">
                      {t('product.packaging')}
                    </span>
                    <p className="font-body text-secondary/70">{translation.packaging}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-tertiary/20 hover:bg-tertiary/30 transition-colors">
                  <div className="bg-primary rounded-lg p-3 flex-shrink-0">
                    <MapPin className="text-tertiary" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-body font-light text-secondary block mb-1 text-sm md:text-base">
                      {t('product.origin')}
                    </span>
                    <p className="font-body text-secondary/70">{translation.origin}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-tertiary/20 hover:bg-tertiary/30 transition-colors">
                  <div className="bg-primary rounded-lg p-3 flex-shrink-0">
                    <Thermometer className="text-tertiary" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-body font-light text-secondary block mb-1 text-sm md:text-base">
                      {t('product.storage')}
                    </span>
                    <p className="font-body text-secondary/70">{product.specs.temperature}</p>
                  </div>
                </div>

                {product.specs.certifications && (
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-tertiary/20 hover:bg-tertiary/30 transition-colors">
                    <div className="bg-primary rounded-lg p-3 flex-shrink-0">
                      <Award className="text-tertiary" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-body font-light text-secondary block mb-1 text-sm md:text-base">
                        {t('product.certifications')}
                      </span>
                      <p className="font-body text-secondary/70">
                        {product.specs.certifications.join(', ')}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full text-lg py-5 flex items-center justify-center gap-3"
              >
                <Mail size={22} className="flex-shrink-0" />
                <span>{t('product.requestQuote')}</span>
              </motion.button>
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:from-[#20BA5A] hover:to-[#1DA851] text-white font-heading font-light py-4 md:py-5 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-base md:text-lg"
              >
                <MessageCircle size={22} className="flex-shrink-0" />
                <span>{t('product.orderWhatsApp')}</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

