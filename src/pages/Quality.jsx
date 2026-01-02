import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Snowflake, Award, CheckCircle2, FileCheck } from 'lucide-react';

const Quality = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const sections = [
    {
      icon: Shield,
      title: t('quality.hygiene.title'),
      description: t('quality.hygiene.description'),
      number: '01',
      gradient: 'from-blue-500/10 via-primary/5 to-transparent',
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-600',
    },
    {
      icon: Snowflake,
      title: t('quality.coldChain.title'),
      description: t('quality.coldChain.description'),
      number: '02',
      gradient: 'from-cyan-500/10 via-primary/5 to-transparent',
      iconBg: 'bg-cyan-500/10',
      iconColor: 'text-cyan-600',
    },
    {
      icon: Award,
      title: t('quality.certifications.title'),
      description: t('quality.certifications.description'),
      number: '03',
      gradient: 'from-amber-500/10 via-primary/5 to-transparent',
      iconBg: 'bg-amber-500/10',
      iconColor: 'text-amber-600',
    },
  ];

  const certifications = [
    { name: 'ONSSA', label: t('quality.certifications.onssa'), icon: FileCheck, color: 'from-blue-500/20 to-primary/10' },
    { name: 'ISO 22000', label: t('quality.certifications.iso'), icon: CheckCircle2, color: 'from-green-500/20 to-primary/10' },
    { name: 'HALAL', label: t('quality.certifications.halal'), icon: Award, color: 'from-amber-500/20 to-primary/10' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
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

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="font-body text-xs md:text-sm text-primary/60 font-light tracking-[0.2em] uppercase arabic-text">
              {t('quality.title')}
            </span>
          </motion.div>
          <h1 className="section-title font-heading text-4xl md:text-5xl lg:text-6xl font-light text-secondary mb-6 md:mb-8 arabic-text leading-tight">
            {t('quality.title')}
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"
          />
          <p className="font-body text-lg md:text-xl text-secondary/70 max-w-3xl mx-auto arabic-text leading-relaxed">
            {t('quality.subtitle')}
          </p>
        </motion.div>

        {/* Quality Sections - Modern Grid */}
        <div className="max-w-6xl mx-auto mb-20 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, x: index % 2 === 0 ? -30 : 30 }}
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
                    {section.number}
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`relative z-10 bg-gradient-to-br ${section.gradient} backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-100/50 shadow-sm hover:shadow-xl transition-all duration-500 group-hover:border-primary/20 h-full`}>
                  {/* Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`${section.iconBg} rounded-xl p-4 w-fit mb-6 transition-all duration-300`}
                  >
                    <section.icon size={32} className={section.iconColor} />
                  </motion.div>

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
                    {section.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                    className="font-body text-sm md:text-base text-secondary/50 leading-relaxed font-light arabic-text"
                  >
                    {section.description}
                  </motion.p>

                  {/* Hover Effect Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    initial={false}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-primary/5 via-tertiary/20 to-primary/5 rounded-3xl p-8 md:p-12 lg:p-16 border border-primary/10 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235f3a47' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }} />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12 md:mb-16"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-block mb-4"
                >
                  <Award className="text-primary mx-auto" size={48} />
                </motion.div>
                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-secondary mb-4 md:mb-6 arabic-text">
                  {t('quality.certifications.title')}
                </h3>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100px" }}
                  viewport={{ once: true }}
                  className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className={`bg-gradient-to-br ${cert.color} backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-100/50 shadow-lg hover:shadow-xl transition-all duration-300 group text-center`}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-4 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                    >
                      <cert.icon className="text-tertiary" size={32} />
                    </motion.div>
                    <div className="font-heading text-2xl md:text-3xl font-light text-primary mb-3 group-hover:text-secondary transition-colors arabic-text">
                      {cert.name}
                    </div>
                    <p className="font-body text-sm md:text-base text-secondary/60 font-light arabic-text">
                      {cert.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Quality;

