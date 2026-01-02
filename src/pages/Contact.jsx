import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration
    // NOTE: User needs to replace these with their actual EmailJS credentials
    const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
    const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
    const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: 'ririda6680@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || 'N/A',
          phone: formData.phone,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="section-title font-heading text-3xl md:text-4xl lg:text-5xl font-light text-secondary mb-6">
            {t('contact.title')}
          </h1>
          <p className="font-body text-lg text-secondary/70 max-w-2xl mx-auto">
            Contactez-nous pour toute demande de devis ou information
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="card-premium p-8">
              <h2 className="font-heading text-xl md:text-2xl font-light text-secondary mb-6 md:mb-8 pb-3 md:pb-4 border-b border-gray-200">
                {t('contact.info.title')}
              </h2>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-tertiary/20 transition-colors"
                >
                  <div className="bg-gradient-to-br from-primary to-primary/90 rounded-xl p-4 shadow-lg flex-shrink-0">
                    <Phone className="text-tertiary" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-light text-secondary mb-2 text-sm md:text-base">
                      {t('contact.info.phone')}
                    </h3>
                    <a href="tel:+212637102373" className="font-body text-lg text-secondary/70 hover:text-primary transition-colors break-all">
                      +212 637 102 373
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-tertiary/20 transition-colors"
                >
                  <div className="bg-gradient-to-br from-primary to-primary/90 rounded-xl p-4 shadow-lg flex-shrink-0">
                    <Mail className="text-tertiary" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-light text-secondary mb-2 text-sm md:text-base">
                      {t('contact.info.email')}
                    </h3>
                    <a href="mailto:ririda6680@gmail.com" className="font-body text-lg text-secondary/70 hover:text-primary transition-colors break-all">
                      ririda6680@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-tertiary/20 transition-colors"
                >
                  <div className="bg-gradient-to-br from-primary to-primary/90 rounded-xl p-4 shadow-lg flex-shrink-0">
                    <MapPin className="text-tertiary" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-light text-secondary mb-2 text-sm md:text-base">
                      {t('contact.info.address')}
                    </h3>
                    <p className="font-body text-lg text-secondary/70">Maroc</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="card-premium h-64 flex items-center justify-center bg-gradient-to-br from-tertiary/30 to-tertiary/10">
              <p className="font-body text-secondary/70">Map placeholder</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            id="contact-form"
          >
            <div className="card-premium p-8 lg:p-10">
              <h2 className="font-heading text-xl md:text-2xl font-light text-secondary mb-6 md:mb-8 pb-3 md:pb-4 border-b border-gray-200">
                {t('contact.form.title')}
              </h2>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3"
                >
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <p className="font-body text-green-800">{t('contact.form.success')}</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3"
                >
                  <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                  <p className="font-body text-red-800">{t('contact.form.error')}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-body font-medium text-secondary mb-2"
                  >
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block font-body font-medium text-secondary mb-2"
                  >
                    {t('contact.form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-body font-medium text-secondary mb-2"
                  >
                    {t('contact.form.phone')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-body font-medium text-secondary mb-2"
                  >
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-body font-medium text-secondary mb-2"
                  >
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="btn-primary w-full text-lg py-5 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={22} className="flex-shrink-0" />
                  <span>{isSubmitting ? 'Sending...' : t('contact.form.submit')}</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

