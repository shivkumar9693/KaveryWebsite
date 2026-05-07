import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HighlightStats = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [stats, setStats] = useState([
    { label: "Years Experience", value: 0, target: 15, suffix: "+" },
    { label: "Global Clients", value: 0, target: 500, suffix: "+" },
    { label: "Products", value: 0, target: 50, suffix: "+" },
    { label: "Industries Served", value: 0, target: 20, suffix: "+" },
  ]);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 75%',
      onEnter: () => {
        if (!hasAnimated) {
          setHasAnimated(true);
          // Animate numbers
          stats.forEach((stat, index) => {
            gsap.to({ val: 0 }, {
              val: stat.target,
              duration: 2,
              ease: "power2.out",
              onUpdate: function() {
                setStats(prev => {
                  const newStats = [...prev];
                  newStats[index].value = Math.floor(this.targets()[0].val);
                  return newStats;
                });
              }
            });
          });
        }
      }
    });
  }, [hasAnimated, stats]);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 relative bg-fixed bg-center bg-cover"
      style={{ backgroundImage: 'url(/assets/hero_stainless_steel.png)' }}
    >
      <div className="absolute inset-0 bg-brand-black/90 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-6">
              <div className="text-5xl md:text-7xl font-heading font-bold text-brand-red mb-2 drop-shadow-[0_0_15px_rgba(209,0,0,0.5)]">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-300 font-medium tracking-wider uppercase text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightStats;
