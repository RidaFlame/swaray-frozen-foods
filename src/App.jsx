import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import ProductDetails from './pages/ProductDetails';
import Quality from './pages/Quality';
import Contact from './pages/Contact';
import './i18n/config';

function App() {
  const { i18n } = useTranslation();
  const [isLangChanging, setIsLangChanging] = useState(false);

  useEffect(() => {
    // Set language attribute only - NO layout direction changes
    const currentLang = i18n.language || 'fr';
    document.documentElement.lang = currentLang;
    
    // Add Arabic font support class
    if (currentLang === 'ar') {
      document.documentElement.classList.add('arabic-mode');
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.classList.remove('arabic-mode');
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChanged = () => {
      setIsLangChanging(true);
      setTimeout(() => setIsLangChanging(false), 500);
    };
    
    i18n.on('languageChanged', handleLanguageChanged);
    return () => i18n.off('languageChanged', handleLanguageChanged);
  }, [i18n]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

