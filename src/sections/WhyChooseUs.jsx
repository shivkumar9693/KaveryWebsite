import { CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    { 
      title: "High Precision", 
      desc: "Micro-level dimensional accuracy for critical applications.",
      bgImg: "/assets/cold_drawing.png"
    },
    { 
      title: "Premium Raw Materials", 
      desc: "Sourced only from certified top-tier global suppliers.",
      bgImg: "/assets/ss_billet.png"
    },
    { 
      title: "Advanced Machinery", 
      desc: "State-of-the-art European drawing and welding lines.",
      bgImg: "/assets/about_factory.png"
    },
    { 
      title: "Fast Delivery", 
      desc: "Optimized supply chain for rapid global dispatch.",
      bgImg: "/assets/packing.png"
    },
    { 
      title: "Expert Engineers", 
      desc: "Decades of combined metallurgical expertise.",
      bgImg: "/assets/team_founder.png"
    },
    { 
      title: "Industry Standards", 
      desc: "Exceeding ASTM, ASME, and EN specifications.",
      bgImg: "/assets/inspection_testing.png"
    },
    { 
      title: "Customer Satisfaction", 
      desc: "Dedicated support team for bespoke requirements.",
      bgImg: "/assets/about_branded.png"
    },
    { 
      title: "Global Supply", 
      desc: "Exporting to over 20+ countries worldwide.",
      bgImg: "/assets/finished_ss_tubes.png"
    }
  ];

  return (
    <section className="py-24 bg-brand-gray relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Why Choose <span className="text-brand-red">Us</span></h2>
          <p className="text-gray-400">We don't just manufacture tubes; we engineer solutions that stand the test of time, pressure, and extreme environments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div 
              key={idx} 
              className="glass-panel p-6 rounded-xl hover:-translate-y-2 transition-all duration-300 group hover:border-brand-red/50 hover:bg-white/10 cursor-pointer relative overflow-hidden"
            >
              {/* Background Image with zoom & hover opacity */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out scale-100 group-hover:scale-105 opacity-10 group-hover:opacity-25 pointer-events-none" 
                style={{ backgroundImage: `url(${reason.bgImg})` }} 
              />
              {/* Dark Overlay Gradient to ensure contrast & readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/75 to-brand-black/50 group-hover:from-brand-black/80 group-hover:via-brand-black/60 group-hover:to-brand-black/40 transition-all duration-500 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-black/80 rounded-full flex items-center justify-center mb-4 group-hover:glow-red transition-all border border-white/5">
                  <CheckCircle className="text-brand-red w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-brand-red transition-colors duration-300">{reason.title}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
