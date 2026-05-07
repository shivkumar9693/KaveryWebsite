import { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';

const Products = () => {
  const [filter, setFilter] = useState('All');
  
  const productData = [
    { name: "Seamless Tubes", desc: "High-pressure applications, without any weld seam.", specs: "OD: 6mm to 219mm", img: "/assets/product_seamless.png" },
    { name: "Welded Tubes", desc: "Cost-effective solution for structural & general use.", specs: "OD: 9.5mm to 114.3mm", img: "/assets/product_welded.png" },
    { name: "Round Tubes", desc: "Standard round profile for fluid transport.", specs: "Thk: 0.5mm to 12mm", img: "/assets/about_factory.png" },
    { name: "Square Tubes", desc: "Structural support and architectural applications.", specs: "Size: 10x10 to 150x150", img: "/assets/hero_stainless_steel.png" },
    { name: "Rectangular Tubes", desc: "Versatile profile for construction and framing.", specs: "Size: 20x10 to 200x100", img: "/assets/product_seamless.png" },
    { name: "Heat Exchanger Tubes", desc: "Superior thermal conductivity and corrosion resistance.", specs: "Length: Up to 30 meters", img: "/assets/about_branded.png" },
  ];

  const filters = ['All', 'Seamless', 'Welded', 'Structural'];

  return (
    <section id="products" className="py-24 bg-brand-gray relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Our <span className="text-brand-red">Products</span></h2>
            <p className="text-gray-400">Comprehensive range of stainless steel tubing engineered to the highest global standards.</p>
          </div>
          
          <div className="w-full md:w-auto relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 group-focus-within:text-brand-red transition-colors" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full md:w-64 bg-brand-black border border-white/10 rounded px-10 py-3 text-sm focus:outline-none focus:border-brand-red/50 transition-all focus:glow-red"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded text-sm font-semibold transition-all ${filter === f ? 'bg-brand-red text-white' : 'bg-brand-black border border-white/10 text-gray-400 hover:text-white hover:border-brand-red/30'}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productData.map((item, idx) => (
            <div key={idx} className="glass-panel rounded-xl overflow-hidden group hover:border-brand-red/30 transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-all z-10" />
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-heading">{item.name}</h3>
                <p className="text-sm text-gray-400 mb-4 h-10">{item.desc}</p>
                <div className="text-xs text-brand-red font-mono bg-brand-red/10 inline-block px-2 py-1 rounded mb-6">
                  {item.specs}
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-white/5 hover:bg-white/10 py-2 rounded text-sm font-semibold transition-colors flex justify-center items-center gap-1">
                    Details <ChevronRight size={16} />
                  </button>
                  <a href="#contact" className="flex-1 bg-brand-red hover:bg-brand-dark-red py-2 rounded text-sm font-semibold transition-colors shadow-[0_0_10px_rgba(209,0,0,0.3)] flex justify-center items-center">
                    Inquiry
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 border border-white/20 rounded hover:bg-white/5 transition-colors font-semibold">
            Load More Products
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Products;
