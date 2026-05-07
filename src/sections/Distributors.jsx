const Distributors = () => {
  const distributors = [
    { name: "Siddhi Vinayak Tubing Solutions", region: "North India" },
    { name: "Kaveri Impex", region: "Global Export" }
  ];

  return (
    <section className="py-24 bg-brand-gray relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-red/5 skew-x-12 transform origin-top" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our <span className="text-brand-red">Authorized</span> Distributors</h2>
            <p className="text-gray-400 mb-8">Partnering with leading distributors to ensure our premium products reach every corner of the globe efficiently.</p>
            
            <div className="space-y-6">
              {distributors.map((dist, idx) => (
                <div key={idx} className="flex items-center gap-6 p-6 glass-panel rounded-xl border-l-4 border-l-brand-red hover:bg-white/5 transition-all">
                  <div className="w-16 h-16 bg-brand-black rounded flex items-center justify-center font-bold text-xl border border-white/10">
                    {dist.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{dist.name}</h3>
                    <p className="text-sm text-brand-red">{dist.region}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="w-full aspect-square relative rounded-full border border-white/10 p-8">
              <div className="absolute inset-0 rounded-full border border-brand-red/30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]" />
              <img 
                src="/assets/contact_map.png" 
                alt="Global Network" 
                className="w-full h-full object-cover rounded-full grayscale opacity-50 mix-blend-screen"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distributors;
