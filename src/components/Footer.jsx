import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const YoutubeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>;

const Footer = () => {
  const handleNavClick = (e, targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `/${targetId}`);
    }
  };

  return (
    <footer className="bg-[#050505] pt-16 pb-8 border-t border-brand-red/20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6 cursor-pointer group" onClick={(e) => handleNavClick(e, 'home')}>
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full bg-white p-1 border border-white/20 transition-all">
                <img src="/assets/logo.png" alt="Kavery Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="font-heading font-bold text-lg tracking-wider leading-none">KAVERY</h1>
                <p className="text-[8px] tracking-widest text-gray-400">TUBING SOLUTIONS Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Premium manufacturers of high-grade stainless steel seamless and welded tubes, delivering engineering excellence globally.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/kaverytubing" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors text-gray-400" title="Twitter/X"><XIcon /></a>
              <a href="https://www.linkedin.com/in/kaverytubingsolutions/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors text-gray-400" title="LinkedIn"><LinkedinIcon /></a>
              <a href="https://www.instagram.com/kaverytubing/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors text-gray-400" title="Instagram"><InstagramIcon /></a>
              <a href="https://www.youtube.com/@Kaverytubingsolutions" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors text-gray-400" title="YouTube"><YoutubeIcon /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-400 hover:text-brand-red transition-colors text-sm flex items-center gap-2"><ArrowRight size={12} /> About Us</a></li>
              <li><a href="/manufacturing" onClick={(e) => handleNavClick(e, 'manufacturing')} className="text-gray-400 hover:text-brand-red transition-colors text-sm flex items-center gap-2"><ArrowRight size={12} /> Manufacturing</a></li>
              <li><a href="/certifications" onClick={(e) => handleNavClick(e, 'certifications')} className="text-gray-400 hover:text-brand-red transition-colors text-sm flex items-center gap-2"><ArrowRight size={12} /> Certifications</a></li>
              <li><a href="/quality" onClick={(e) => handleNavClick(e, 'certifications')} className="text-gray-400 hover:text-brand-red transition-colors text-sm flex items-center gap-2"><ArrowRight size={12} /> Quality Policy</a></li>
              <li><a href="/contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-gray-400 hover:text-brand-red transition-colors text-sm flex items-center gap-2"><ArrowRight size={12} /> Contact Us</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Products</h4>
            <ul className="space-y-3">
              <li><a href="#products" className="text-gray-400 hover:text-brand-red transition-colors text-sm flex items-center gap-2"><ArrowRight size={12} /> Seamless Tubes</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-brand-red transition-colors text-sm flex items-center gap-2"><ArrowRight size={12} /> Welded Tubes</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-brand-red transition-colors text-sm flex items-center gap-2"><ArrowRight size={12} /> Boiler Tubes</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-brand-red transition-colors text-sm flex items-center gap-2"><ArrowRight size={12} /> Heat Exchanger Tubes</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-brand-red transition-colors text-sm flex items-center gap-2"><ArrowRight size={12} /> Instrumentation Tubes</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter to receive latest updates and industry news.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email" className="bg-brand-black border border-white/10 rounded-l px-4 py-2 w-full text-sm focus:outline-none focus:border-brand-red" required />
              <button type="submit" className="bg-brand-red px-4 py-2 rounded-r hover:bg-brand-dark-red transition-colors">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Kavery Tubing Solutions Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
