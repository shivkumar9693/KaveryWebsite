import { MapPin } from 'lucide-react';

const Suppliers = () => {
  const suppliers = [
    { 
      name: "Heavy Metal & Tubes", 
      loc: "Gujarat, India", 
      type: "RAW MATERIAL / MOTHER HOLLOW BAR",
      logo: null
    },
    { 
      name: "Sun Mark Stainless Pvt. Ltd.", 
      loc: "Maharashtra, India", 
      type: "RAW MATERIAL / MOTHER HOLLOW BAR",
      logo: "/assets/logo_sunmark.png"
    },
    { 
      name: "Bhuleshwar Seamless", 
      loc: "Maharashtra, India", 
      type: "RAW MATERIAL / MOTHER HOLLOW BAR",
      logo: "/assets/logo_bhuleshwar.png"
    },
    { 
      name: "Laxcon Steels Limited", 
      loc: "Gujarat, India", 
      type: "RAW MATERIAL / MOTHER HOLLOW BAR",
      logo: "/assets/logo_laxcon.png"
    },
  ];

  return (
    <section className="py-24 bg-brand-black border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Trusted <span className="text-brand-red">Raw Material</span> Suppliers</h2>
          <p className="text-gray-400">Quality begins at the source. We partner with the best.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {suppliers.map((sup, idx) => (
            <div key={idx} className="glass-panel p-4 rounded-lg w-full md:w-[230px] hover:border-brand-red/50 transition-colors group">
              <div className="h-12 flex items-center mb-3">
                {sup.logo ? (
                  <div className="w-full h-full bg-white/95 rounded-md p-1.5 flex items-center justify-center shadow-inner group-hover:bg-white transition-colors">
                    <img 
                      src={sup.logo} 
                      alt={sup.name} 
                      className="max-h-full max-w-full object-contain" 
                    />
                  </div>
                ) : (
                  <div className="text-base font-bold text-gray-500 group-hover:text-white transition-colors leading-tight">
                    {sup.name}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                <MapPin size={12} className="text-brand-red" /> {sup.loc}
              </div>
              <div className="text-[9px] uppercase tracking-wider text-brand-red bg-brand-red/10 inline-block px-2 py-0.5 rounded mt-1 font-mono font-semibold">
                {sup.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Suppliers;
