import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AdvancedManufacturingProcess = () => {
  const containerRef = useRef(null);

  const steps = [
    { title: "RAW MATERIAL INSPECTION", desc: "Premium stainless steel raw materials are carefully inspected for chemical composition and physical properties.", img: "/assets/manufacturing_process.png" },
    { title: "CUTTING & FORMING", desc: "Advanced machinery is used to cut and shape the raw material into precise dimensions.", img: "/assets/hero_stainless_steel.png" },
    { title: "SEAMLESS / WELDING PROCESS", desc: "State-of-the-art seamless and welding technologies ensure structural integrity.", img: "/assets/product_welded.png" },
    { title: "HEAT TREATMENT", desc: "Controlled heat treatment improves mechanical properties and relieves internal stresses.", img: "/assets/about_factory.png" },
    { title: "STRAIGHTENING & SIZING", desc: "Precision processes guarantee dimensional accuracy and perfect straightness.", img: "/assets/product_seamless.png" },
    { title: "POLISHING & FINISHING", desc: "Multiple polishing techniques provide superior surface finish for aesthetic and functional needs.", img: "/assets/manufacturing_process.png" },
    { title: "QUALITY TESTING", desc: "Every product undergoes rigorous quality checks including Hydrostatic, Eddy Current, and Ultrasonic tests.", img: "/assets/about_branded.png" },
    { title: "PACKAGING & DISPATCH", desc: "Products are securely packaged in seaworthy wooden cases and dispatched globally.", img: "/assets/hero_stainless_steel.png" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const line = document.querySelector('.timeline-progress');
      
      gsap.to(line, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top center',
          end: 'bottom center',
          scrub: true
        }
      });

      gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="manufacturing" className="py-24 bg-brand-black relative" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Advanced <span className="text-brand-red">Manufacturing</span> Process</h2>
          <p className="text-gray-400">Our state-of-the-art facility utilizes cutting-edge technology to transform premium raw materials into world-class tubing solutions.</p>
        </div>

        <div className="relative timeline-container max-w-6xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2">
            <div className="timeline-progress w-full bg-brand-red h-0 glow-red"></div>
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className={`timeline-item relative flex flex-col md:flex-row gap-8 mb-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-brand-black border-2 border-brand-red top-6 -translate-x-1/2 z-10 shadow-[0_0_10px_#D10000]"></div>
              
              <div className="w-full md:w-1/2 pl-12 md:pl-0">
                <div className={`glass-panel p-6 rounded-xl hover:border-brand-red/50 hover-glow-red transition-all duration-300 ${idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="text-brand-red font-bold text-xl mb-2 font-heading">0{idx + 1}.</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 pl-12 md:pl-0">
                <div className={`h-48 md:h-full rounded-xl overflow-hidden border border-white/10 ${idx % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              </div>

            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="#contact" className="inline-block px-10 py-4 bg-brand-red text-white font-bold rounded hover:bg-brand-dark-red transition-all hover-glow-red text-lg">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdvancedManufacturingProcess;
