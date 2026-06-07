import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle2, Ruler, Shield, Layers } from 'lucide-react';
import { productsData } from '../data/productsData';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Find the product by its ID slug
  const product = productsData.find((p) => p.id === productId);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-3xl font-bold mb-4 font-heading">Product Not Found</h1>
        <p className="text-gray-400 mb-8 text-center">The product you are looking for does not exist or has been moved.</p>
        <Link to="/" className="px-6 py-3 bg-brand-red hover:bg-brand-dark-red text-white font-bold rounded transition-colors flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  const handleBackToProducts = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-brand-black text-white pt-28 pb-20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Navigation & Back Button */}
        <div className="mb-8">
          <a
            href="/#products"
            onClick={handleBackToProducts}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-red transition-colors group"
          >
            <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </a>
        </div>

        {/* Product Intro Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start">
          
          {/* Product Image */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 glass-panel shadow-[0_15px_30px_rgba(0,0,0,0.5)] group">
            <div className="aspect-[4/3] w-full overflow-hidden relative">
              <img
                src={product.detailImg}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-black/90 to-transparent p-4">
                <span className="text-xs font-mono text-brand-red bg-brand-red/10 border border-brand-red/20 rounded px-2.5 py-1 uppercase tracking-wider font-semibold">
                  Indian Industrial Operations
                </span>
              </div>
            </div>
          </div>

          {/* Product Basic Info */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-brand-red bg-brand-red/10 border border-brand-red/20 px-3 py-1 rounded-full font-semibold">
                {product.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
              {product.name}
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {product.fullDesc}
            </p>

            {/* Micro value props */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-white/5 border border-white/5 flex flex-col gap-2">
                <Shield className="text-brand-red" size={20} />
                <h4 className="font-bold text-sm">Premium Quality</h4>
                <p className="text-xs text-gray-400">Strictly inspected and international standard compliant.</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/5 flex flex-col gap-2">
                <Ruler className="text-brand-red" size={20} />
                <h4 className="font-bold text-sm">Custom Sizes</h4>
                <p className="text-xs text-gray-400">Manufactured in custom lengths and precise wall dimensions.</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/5 flex flex-col gap-2">
                <Layers className="text-brand-red" size={20} />
                <h4 className="font-bold text-sm">Ready Stock</h4>
                <p className="text-xs text-gray-400">Ready availability in all major grades and schedules.</p>
              </div>
            </div>

            <a
              href="#inquiry"
              onClick={(e) => {
                e.preventDefault();
                const contact = document.getElementById('contact');
                if (contact) {
                  contact.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/#contact');
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red text-white font-bold rounded hover:bg-brand-dark-red transition-all hover-glow-red shadow-[0_4px_15px_rgba(209,0,0,0.3)]"
            >
              Get a Free Quote <Send size={16} />
            </a>
          </div>

        </div>

        {/* Grades / Types Specifications Section */}
        <div className="border-t border-white/10 pt-16">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Available Grades &amp; Technical Specifications
            </h2>
            <p className="text-gray-400 text-sm">
              We supply the following configurations manufactured under strict quality controls to meet your dimensional and structural requirements.
            </p>
          </div>

          <div className="space-y-6">
            {product.grades.map((grade, index) => (
              <div
                key={index}
                className="glass-panel p-6 md:p-8 rounded-xl border border-white/10 hover:border-brand-red/30 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red/30 group-hover:bg-brand-red transition-colors" />

                <div className="grid md:grid-cols-12 gap-6 items-start">
                  {/* Left Column: Grade Name and Description */}
                  <div className="md:col-span-6 lg:col-span-7">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 size={16} className="text-brand-red" />
                      <h3 className="text-xl font-bold font-heading">{grade.name}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {grade.description}
                    </p>
                  </div>

                  {/* Right Column: Size Table */}
                  <div className="md:col-span-6 lg:col-span-5 w-full">
                    <div className="bg-brand-black/40 rounded-lg border border-white/5 overflow-hidden">
                      <table className="w-full text-left text-xs text-gray-400">
                        <tbody>
                          <tr className="border-b border-white/5">
                            <td className="px-4 py-3 font-semibold text-white/70 w-1/3">Outer Diameter / Size</td>
                            <td className="px-4 py-3 text-white font-mono">{grade.od}</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="px-4 py-3 font-semibold text-white/70">Thickness Range</td>
                            <td className="px-4 py-3 text-white font-mono">{grade.thickness}</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-semibold text-white/70">Standard Length</td>
                            <td className="px-4 py-3 text-white font-mono">{grade.length}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
