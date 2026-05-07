const Clients = () => {
  const clients = [
    "Dilip Pipes & Tubes",
    "MP Jain Tubing Solutions LLP",
    "Chaudhary Engineering Solutions",
    "A Squared Tubes"
  ];

  return (
    <section className="py-16 bg-brand-gray border-b border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h4 className="text-sm text-gray-500 font-bold tracking-widest uppercase">Trusted By Industry Leaders</h4>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {clients.map((client, idx) => (
            <div key={idx} className="flex items-center">
              <span className="text-xl md:text-2xl font-heading font-bold text-gray-600 hover:text-white transition-colors cursor-default">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
