import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-tertiary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-tertiary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* About Section */}
          <div>
            <h3 className="font-heading text-xl md:text-2xl font-light mb-4 md:mb-6 text-white">
              {t('footer.about')}
            </h3>
            <p className="font-body text-base leading-relaxed text-tertiary/90 arabic-text">
              {t('footer.aboutText')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl md:text-2xl font-light mb-4 md:mb-6 text-white">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3 font-body text-base">
              {[
                { path: '/', label: t('nav.home') },
                { path: '/catalogue', label: t('nav.catalogue') },
                { path: '/quality', label: t('nav.quality') },
                { path: '/contact', label: t('nav.contact') },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors duration-300 inline-block hover:translate-x-1 transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl md:text-2xl font-light mb-4 md:mb-6 text-white">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-4 font-body text-base mb-6">
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={20} className="text-tertiary flex-shrink-0" />
                <a href="tel:+212637102373" className="text-tertiary/90 break-all">+212 637 102 373</a>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={20} className="text-tertiary flex-shrink-0" />
                <a href="mailto:ririda6680@gmail.com" className="text-tertiary/90 break-all">ririda6680@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-tertiary mt-1 flex-shrink-0" />
                <span className="text-tertiary/90">Maroc</span>
              </li>
            </ul>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="bg-tertiary/20 hover:bg-tertiary/30 rounded-lg p-3 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={22} className="text-tertiary" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-tertiary/30 pt-8 text-center">
          <p className="font-body text-sm text-tertiary/80">
            © {new Date().getFullYear()} Swaray. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

