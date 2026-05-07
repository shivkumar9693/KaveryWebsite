import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import LoadingScreen from './components/LoadingScreen';

// Sections
import Hero from './sections/Hero';
import MovingProductStrip from './sections/MovingProductStrip';
import About from './sections/About';
import WhyChooseUs from './sections/WhyChooseUs';
import HighlightStats from './sections/HighlightStats';
import AdvancedManufacturingProcess from './sections/AdvancedManufacturingProcess';
import Products from './sections/Products';
import Suppliers from './sections/Suppliers';
import Distributors from './sections/Distributors';
import Industries from './sections/Industries';
import MaterialExpertise from './sections/MaterialExpertise';
import Team from './sections/Team';
import Certifications from './sections/Certifications';
import Clients from './sections/Clients';
import Contact from './sections/Contact';

// Pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Scroll to Top Component to handle route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <main>
    <Hero />
    <div className="h-12 md:h-20" />
    <MovingProductStrip />
    <About />
    <WhyChooseUs />
    <HighlightStats />
    <AdvancedManufacturingProcess />
    <Products />
    <Suppliers />
    <Distributors />
    <Industries />
    <MaterialExpertise />
    <Team />
    <Certifications />
    <Clients />
    <Contact />
  </main>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-black text-white selection:bg-brand-red selection:text-white font-sans">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>

        <Footer />
        <FloatingWhatsApp />

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-24 right-6 w-12 h-12 bg-brand-black border border-white/20 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 z-50 hover:bg-brand-red hover:border-brand-red hover-glow-red ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </Router>
  );
}

export default App;
