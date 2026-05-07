const MaterialExpertise = () => {
  const grades = ["SS 304", "SS 304L", "SS 316", "SS 316L", "Duplex Steel", "Super Duplex"];

  return (
    <section className="py-16 bg-brand-red relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/product_seamless.png')] opacity-10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="text-3xl font-heading font-bold mb-2">Material <span className="text-brand-black">Expertise</span></h2>
            <p className="text-white/80 text-sm">We process a wide range of premium stainless steel grades.</p>
          </div>
          
          <div className="md:w-2/3 flex flex-wrap justify-center md:justify-end gap-4">
            {grades.map((grade, idx) => (
              <div 
                key={idx} 
                className="px-6 py-3 bg-brand-black/40 backdrop-blur-sm border border-white/20 rounded font-bold tracking-wider hover:bg-brand-black transition-colors"
              >
                {grade}
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MaterialExpertise;
