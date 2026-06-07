import { ShieldCheck, Award } from 'lucide-react';

const Suppliers = () => {
  return (
    <section className="py-24 bg-brand-black border-y border-white/5 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute left-0 bottom-0 w-72 h-72 bg-brand-red/5 rounded-full filter blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Trusted <span className="text-brand-red">Raw Material</span> Sourcing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Quality starts at the very beginning. We ensure our tubes are engineered to perfection by partnering only with top-tier producers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Square Box detailing sourcing standards */}
          <div className="glass-panel p-8 md:p-10 rounded-2xl border-t-4 border-t-brand-red shadow-2xl relative group overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-red/5 rounded-full filter blur-2xl pointer-events-none group-hover:bg-brand-red/10 transition-colors" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center border border-brand-red/20 text-brand-red">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold font-heading text-brand-white">Premium Sourcing Standards</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              We purchase all our raw materials, including stainless steel billets and mother hollow bars, exclusively from top-tier, certified global and domestic manufacturers. This strict selection ensures that our tubing solutions exhibit unmatched structural integrity, chemical consistency, and resistance to extreme pressures.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-brand-red w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">100% Certified</h4>
                  <p className="text-xs text-gray-400">Strict chemical and physical tests.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-brand-red w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Full Traceability</h4>
                  <p className="text-xs text-gray-400">Complete Mill Test Certificates (MTC).</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-brand-red w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Top-Tier Companies</h4>
                  <p className="text-xs text-gray-400">Sourced from industry-leading producers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-brand-red w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Standard Compliance</h4>
                  <p className="text-xs text-gray-400">Exceeding international specifications.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Factory Image Box */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group min-h-[350px] md:min-h-[400px] flex">
            {/* The image itself */}
            <img 
              src="/assets/ss_billet.png" 
              alt="Raw Materials Factory" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
            />
            {/* Dark gradient mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent pointer-events-none" />
            
            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 relative z-10 mt-auto">
              <div className="inline-block px-3 py-1 bg-brand-red/90 text-white text-[10px] tracking-wider uppercase font-semibold rounded mb-3">
                Raw Material Verification
              </div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">High-Grade Stainless Steel Billets</h4>
              <p className="text-xs md:text-sm text-gray-300">
                Verifying material grades and heat numbers at our factory before production starts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suppliers;
