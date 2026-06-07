import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AdvancedManufacturingProcess = () => {
  const containerRef = useRef(null);

  const steps = [
    {
      title: "SS Billet",
      desc: "The manufacturing process begins with high-quality stainless steel billets. These solid cylindrical steel bars are selected according to the required grade, chemical composition, and dimensions to ensure superior tube quality and performance.",
      img: "/assets/ss_billet.png"
    },
    {
      title: "Billet Heating",
      desc: "The stainless steel billets are heated in a high-temperature furnace under controlled conditions. Proper heating improves the plasticity of the material and prepares it for the piercing process without causing cracks or deformation.",
      img: "/assets/billet_heating.png"
    },
    {
      title: "Piercing",
      desc: "The heated billet is pierced using a piercing mill to create a hollow shell. This is one of the most important stages in seamless tube manufacturing, where the solid billet is transformed into a hollow tube structure.",
      img: "/assets/piercing.png"
    },
    {
      title: "Elongation",
      desc: "The hollow shell is elongated using mandrel mills or plug mills to reduce wall thickness and increase tube length. This process helps achieve the required tube dimensions and improves structural uniformity.",
      img: "/assets/elongation.png"
    },
    {
      title: "Cold Drawing / Cold Rolling",
      desc: "The tubes undergo cold drawing or cold rolling to achieve accurate diameter, wall thickness, smooth surface finish, and improved mechanical properties. This process enhances dimensional precision and strength.",
      img: "/assets/cold_drawing.png"
    },
    {
      title: "Annealing (Solution Treatment)",
      desc: "The tubes are heat-treated in an annealing furnace to relieve internal stress generated during rolling and drawing operations. Annealing improves ductility, corrosion resistance, and overall material performance.",
      img: "/assets/annealing.png"
    },
    {
      title: "Pickling",
      desc: "Pickling is a chemical cleaning process used to remove oxide scale, surface impurities, and discoloration formed during heat treatment. This process restores the stainless steel’s clean and corrosion-resistant surface.",
      img: "/assets/pickling.png"
    },
    {
      title: "Straightening",
      desc: "The tubes are passed through straightening machines to eliminate bending or deformation and achieve perfect straightness, roundness, and dimensional accuracy.",
      img: "/assets/straightening.png"
    },
    {
      title: "Cutting to Length",
      desc: "The stainless steel tubes are cut into required lengths using high-precision cutting machines. Accurate cutting ensures clean edges and proper sizing according to customer specifications.",
      img: "/assets/cutting_to_length.png"
    },
    {
      title: "End Facing & Chamfering",
      desc: "Tube ends are machined through facing and chamfering operations to produce smooth edges and proper bevels. This improves fitting, welding quality, and application performance.",
      img: "/assets/end_facing_chamfering.png"
    },
    {
      title: "Inspection & Testing",
      desc: (
        <div>
          <p className="mb-2">We perform strict quality inspection and testing of stainless steel tubes to ensure accurate dimensions, superior surface finish, strength, corrosion resistance, and defect-free performance. Every tube is thoroughly checked using advanced testing methods to meet international quality standards and customer requirements:</p>
          <ul className="list-disc pl-5 mb-2 space-y-1 text-gray-400 text-sm">
            <li>Dimensional Inspection</li>
            <li>Visual Inspection</li>
            <li>Hydrostatic Testing</li>
            <li>Eddy Current Testing</li>
            <li>PMI Testing</li>
            <li>Surface Finish Inspection</li>
          </ul>
          <p>These tests ensure compliance with international quality standards.</p>
        </div>
      ),
      img: "/assets/inspection_testing.png"
    },
    {
      title: "Finished SS Tubes",
      desc: "The final stainless steel tubes are polished, inspected, packed, and made ready for industrial applications. The finished products offer high strength, corrosion resistance, dimensional accuracy, and superior surface finish.",
      img: "/assets/finished_ss_tubes.png"
    },
    {
      title: "Packing",
      desc: "After final inspection, the stainless steel tubes are carefully packed using protective materials such as woven bags, wooden boxes, or bundle packaging to prevent scratches, moisture damage, and deformation during storage and transportation. We use absolutely zero plastic wrapping—ensuring only eco-friendly, plastic-free protection is used to maintain the surface finish and quality of our stainless steel products until they reach the customer.",
      img: "/assets/packing.png"
    }
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
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">From Billet to <span className="text-brand-red">Finished SS Tubes</span></h2>
          <p className="text-gray-400">Our state-of-the-art facility utilizes cutting-edge technology to transform premium stainless steel billets into world-class finished tubes.</p>
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
                  <div className="text-brand-red font-bold text-xl mb-2 font-heading">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}.
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <div className="text-gray-400 text-sm leading-relaxed">{step.desc}</div>
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
