import { CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    { title: "High Precision", desc: "Micro-level dimensional accuracy for critical applications." },
    { title: "Premium Raw Materials", desc: "Sourced only from certified top-tier global suppliers." },
    { title: "Advanced Machinery", desc: "State-of-the-art European drawing and welding lines." },
    { title: "Fast Delivery", desc: "Optimized supply chain for rapid global dispatch." },
    { title: "Expert Engineers", desc: "Decades of combined metallurgical expertise." },
    { title: "Industry Standards", desc: "Exceeding ASTM, ASME, and EN specifications." },
    { title: "Customer Satisfaction", desc: "Dedicated support team for bespoke requirements." },
    { title: "Global Supply", desc: "Exporting to over 20+ countries worldwide." }
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
              className="glass-panel p-6 rounded-xl hover:-translate-y-2 transition-all duration-300 group hover:border-brand-red/50 hover:bg-white/10 cursor-pointer"
            >
              <div className="w-12 h-12 bg-brand-black rounded-full flex items-center justify-center mb-4 group-hover:glow-red transition-all">
                <CheckCircle className="text-brand-red w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-400">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
