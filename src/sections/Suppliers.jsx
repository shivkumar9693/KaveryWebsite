import { MapPin } from 'lucide-react';

const Suppliers = () => {
  const suppliers = [
    { name: "Heavy Metal & Tubes", loc: "Gujarat, India", type: "Raw Material" },
    { name: "Sun Mark Stainless Pvt. Ltd.", loc: "Maharashtra, India", type: "SS Coils" },
    { name: "Bhuleshwar Seamless", loc: "Maharashtra, India", type: "Billets" },
    { name: "Petroinox Pipes", loc: "Gujarat, India", type: "Mother Pipes" },
    { name: "Laxcon Steels Limited", loc: "Gujarat, India", type: "Ingots" },
  ];

  return (
    <section className="py-24 bg-brand-black border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Trusted <span className="text-brand-red">Raw Material</span> Suppliers</h2>
          <p className="text-gray-400">Quality begins at the source. We partner with the best.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {suppliers.map((sup, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-lg w-full md:w-[300px] hover:border-brand-red/50 transition-colors group">
              <div className="h-16 flex items-center mb-4">
                <div className="text-2xl font-bold text-gray-500 group-hover:text-white transition-colors">{sup.name}</div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                <MapPin size={14} className="text-brand-red" /> {sup.loc}
              </div>
              <div className="text-xs uppercase tracking-widest text-brand-red bg-brand-red/10 inline-block px-2 py-1 rounded mt-2">
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
