import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const handleNavClick = (e, targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `/${targetId}`);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black py-20 md:py-0">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero_stainless_steel.png"
          alt="Industrial Steel Factory"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-black to-transparent z-10" />

        {/* Animated Grid */}
        <div className="absolute inset-0 z-10 opacity-20"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)' }}>
        </div>

        {/* Glowing Red Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-brand-red rounded-full blur-[120px] z-10 pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-red rounded-full blur-[150px] z-10 pointer-events-none"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 z-20 relative pt-10 md:pt-0 pb-16 md:pb-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Left Content */}
          <div className="max-w-3xl lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-6"
            >
              <div className="w-12 h-[2px] bg-brand-red shadow-[0_0_10px_#D10000]"></div>

            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold font-heading mb-6 leading-[1.1]"
            >
              Precision <br />
              <span className="text-stainless-steel relative overflow-hidden inline-block pb-2 px-1 -mx-1">
                Stainless Steel
                <motion.span
                  animate={{ opacity: [0, 1, 0], left: ['-10%', '110%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                  className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 blur-sm skew-x-[-20deg]"
                />
              </span>
              <br /> Tubes
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed lg:border-l-2 lg:border-brand-red/30 lg:pl-6 mx-auto lg:mx-0"
            >
              We manufacture high-grade seamless and welded tubes that withstand extreme pressures, delivering unparalleled strength for global critical applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap justify-center lg:justify-start gap-6"
            >
              <a href="/products" onClick={(e) => handleNavClick(e, 'products')} className="group relative px-8 py-4 bg-brand-red text-white font-bold rounded overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red via-red-500 to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2">Explore Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 shadow-[0_0_20px_rgba(209,0,0,0.4)] group-hover:shadow-[0_0_30px_rgba(209,0,0,0.6)] transition-shadow duration-500" />
              </a>
              <a href="/contact" onClick={(e) => handleNavClick(e, 'contact')} className="group px-8 py-4 bg-brand-black/50 border border-white/20 text-white font-bold rounded hover:bg-white/10 hover:border-brand-red/50 transition-all flex items-center gap-2 backdrop-blur-md">
                Get a Quote
              </a>
              <a
                href="/assets/catelog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white/5 border border-white/20 text-white font-bold rounded hover:bg-brand-red hover:border-brand-red transition-all flex items-center gap-2 backdrop-blur-md group-hover:glow-red"
              >
                <FileText size={18} /> Download Brochure
              </a>
            </motion.div>
          </div>

          {/* Right Floating Elements (3D abstract representation) */}
          <motion.div
            style={{ y: y1 }}
            className="hidden lg:block w-2/5 relative h-[600px] [perspective:1000px]"
          >
            {/* Center glowing tube abstract */}
            <motion.div
              animate={{ rotateY: 360, rotateX: [10, -10, 10] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-[15px] border-transparent shadow-[0_0_30px_rgba(209,0,0,0.3)] flex items-center justify-center [transform-style:preserve-3d] brushed-metal"
            >
              <div className="absolute inset-0 rounded-full border-[8px] border-brand-red/80 z-20 shadow-[0_0_20px_rgba(209,0,0,0.5)]" />
              <div className="w-48 h-48 rounded-full border-2 border-white/50 border-dashed animate-[spin_10s_linear_infinite_reverse] z-10" />
              <div className="absolute inset-0 rounded-full bg-brand-black/90 m-6 shadow-[inset_0_0_30px_rgba(0,0,0,1)] z-10" />
            </motion.div>

            {/* Floating Glass Cards */}
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-0 glass-panel p-4 rounded-xl border border-white/20 shadow-2xl backdrop-blur-md w-48 z-20 bg-black/60"
            >
              <div className="text-stainless-steel font-bold text-3xl font-heading mb-1 inline-block">0%</div>
              <div className="text-xs text-gray-300 font-medium tracking-widest uppercase">Defect Rate</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-32 -left-10 glass-panel p-5 rounded-xl border border-white/20 shadow-2xl backdrop-blur-md w-64 z-20 bg-black/60"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_#22c55e]" />
                <div className="text-xs text-stainless-steel font-bold tracking-widest uppercase">Global Delivery</div>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full bg-brand-red shadow-[0_0_10px_#D10000]"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={(e) => handleNavClick(e, 'about')}
      >
        <span className="text-[10px] text-gray-400 tracking-[0.3em] uppercase group-hover:text-brand-red transition-colors">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-12 border border-white/20 rounded-full flex justify-center p-1 bg-black/20 backdrop-blur-sm group-hover:border-brand-red/50 transition-colors"
        >
          <motion.div className="w-1 h-3 bg-brand-red rounded-full shadow-[0_0_8px_#D10000]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
