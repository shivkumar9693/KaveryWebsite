import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });
      
      gsap.from('.about-image', {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-brand-black relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="about-text mb-2 text-brand-red font-bold tracking-widest uppercase text-sm">
              About Kavery Tubing Solutions Pvt. Ltd.
            </div>
            <h2 className="about-text text-4xl md:text-5xl font-heading font-bold mb-6">
              Forging the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Industrial Steel</span>
            </h2>
            
            <p className="about-text text-gray-400 mb-6 leading-relaxed">
Kavery Tubing Solutions Pvt. Ltd. is a trusted manufacturer of premium quality 
Stainless Steel Tubes with over 15 years of industry experience in the stainless steel 
and tubing sector. We specialize in manufacturing precision-engineered SS tubes 
designed to meet the highest standards of strength, durability, corrosion resistance, 
and performance for various industrial applications.            </p>
            
            <div id="vision" className="grid sm:grid-cols-2 gap-6 mt-10">
              <div className="about-text glass-panel p-6 rounded-lg border-t-2 border-t-brand-red">
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-sm text-gray-400">To become a leading and globally trusted stainless steel tube manufacturing company by 
delivering superior quality products, adopting advanced technologies, and building long-term 
relationships based on trust, innovation, and excellence.</p>
              </div>
              <div className="about-text glass-panel p-6 rounded-lg border-t-2 border-t-brand-red">
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-sm text-gray-400">Our mission is to manufacture premium-quality stainless steel tubes with precision, 
consistency, and advanced technology while maintaining the highest standards of customer 
satisfaction, timely delivery, and sustainable growth.</p>
              </div>
            </div>
          </div>
          
          <div className="about-image relative h-[600px] w-full">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden border border-white/10 glass-panel">
              <img 
                src="/assets/about_branded.png" 
                alt="Branded Kavery Tubes" 
                className="w-full h-full object-cover opacity-100 transition-all duration-700"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-2/3 h-1/2 rounded-2xl overflow-hidden border-4 border-brand-black shadow-2xl z-10 glow-red">
              <img 
                src="/assets/product_seamless.png" 
                alt="Steel Tubes" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
