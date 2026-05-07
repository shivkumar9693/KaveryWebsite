import { motion } from 'framer-motion';

const MovingProductStrip = () => {
  const products = [
    "SS Seamless Tubes",
    "Welded Tubes",
    "Boiler Tubes",
    "Heat Exchanger Tubes",
    "Instrumentation Tubes",
    "Hydraulic Tubes",
    "High Precision Tubes",
    "Condenser Tubes",
    "U-Bend Tubes",
    "Coiled Tubes"
  ];

  // We duplicate the list to ensure a seamless infinite scroll
  const duplicatedProducts = [...products, ...products, ...products];

  return (
    <div className="w-full brushed-metal py-4 relative z-30 overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.8)] border-y-2 border-black/80 flex items-center h-16">
      <motion.div 
        className="flex whitespace-nowrap gap-16 items-center"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        {duplicatedProducts.map((product, index) => (
          <div key={index} className="flex items-center gap-8">
             <span className="embossed-text font-bold text-lg md:text-xl tracking-widest uppercase">
                {product}
              </span>
              <div className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_8px_rgba(255,0,0,0.8)]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MovingProductStrip;
