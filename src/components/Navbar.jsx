import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation and rendering then scroll
      setTimeout(() => {
        if (targetId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(targetId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `/#${targetId}`);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-white/5 ${isScrolled ? 'bg-brand-black py-3 shadow-xl' : 'bg-brand-black py-5'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={(e) => handleNavClick(e, 'home')}>
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden rounded-full bg-white p-1.5 border-2 border-brand-red shadow-[0_0_15px_rgba(209,0,0,0.4)] transition-transform group-hover:scale-110">
              <img src="/assets/logo.png" alt="Kavery Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl tracking-wider leading-none">KAVERY</h1>
              <p className="text-[10px] tracking-widest text-gray-400">TUBING SOLUTIONS Pvt. Ltd. </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="/" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-brand-red transition-colors">Home</a>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-brand-red transition-colors">
                About <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-brand-black border border-white/10 rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 glass-panel">
                <a href="/vision" onClick={(e) => handleNavClick(e, 'vision')} className="block px-4 py-2 hover:bg-white/5 hover:text-brand-red">Vision & Mission</a>
                <a href="/leadership" onClick={(e) => handleNavClick(e, 'leadership')} className="block px-4 py-2 hover:bg-white/5 hover:text-brand-red">Leadership</a>
                <a href="/certifications" onClick={(e) => handleNavClick(e, 'certifications')} className="block px-4 py-2 hover:bg-white/5 hover:text-brand-red">Quality Policy</a>
              </div>
            </div>
            <a href="/products" onClick={(e) => handleNavClick(e, 'products')} className="hover:text-brand-red transition-colors">Products</a>
            <a href="/manufacturing" onClick={(e) => handleNavClick(e, 'manufacturing')} className="hover:text-brand-red transition-colors">Manufacturing</a>
            <a href="/industries" onClick={(e) => handleNavClick(e, 'industries')} className="hover:text-brand-red transition-colors">Industries</a>
            <a href="/certifications" onClick={(e) => handleNavClick(e, 'certifications')} className="hover:text-brand-red transition-colors">Certifications</a>
            <a href="/contact" onClick={(e) => handleNavClick(e, 'contact')} className="px-4 py-2 bg-brand-red text-white rounded hover:bg-brand-dark-red transition-all hover-glow-red font-bold">Get a Quote</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-black border-t border-white/10 glass-panel">
          <div className="flex flex-col py-4 px-4 space-y-4">
            <a href="/" onClick={(e) => handleNavClick(e, 'home')} className="text-white hover:text-brand-red">Home</a>
            <a href="/about" onClick={(e) => handleNavClick(e, 'about')} className="text-white hover:text-brand-red">About</a>
            <a href="/products" onClick={(e) => handleNavClick(e, 'products')} className="text-white hover:text-brand-red">Products</a>
            <a href="/manufacturing" onClick={(e) => handleNavClick(e, 'manufacturing')} className="text-white hover:text-brand-red">Manufacturing</a>
            <a href="/contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-white hover:text-brand-red">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
