import { Factory, Droplet, Zap, FlaskConical, Stethoscope, Building2, Utensils, Car, Wrench, HardHat } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      name: "Oil & Gas",
      icon: Droplet,
      image: "https://images.unsplash.com/photo-1540324155974-7523202daa3f?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Petrochemical",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Power Plant",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Chemical",
      icon: FlaskConical,
      image: "https://th.bing.com/th/id/OIP.Qn2oNRSkdUIYWQ21m0QHlAHaEK?w=305&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
    },
    {
      name: "Pharma",
      icon: Stethoscope,
      image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Construction",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Food Processing",
      icon: Utensils,
      image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Automotive",
      icon: Car,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Engineering",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Infrastructure",
      icon: HardHat,
      image: "https://th.bing.com/th/id/OIP.spnfqVj19NsB8U3FpJCnHQHaHa?w=173&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
    },
  ];

  return (
    <section id="industries" className="py-24 bg-brand-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Industries We <span className="text-brand-red">Serve</span></h2>
          <p className="text-gray-400">Providing critical infrastructure components to diverse sectors globally.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="group relative h-48 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.6), rgba(5, 5, 5, 0.9)), url(${ind.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                {/* Border Overlay */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-brand-red/50 transition-colors z-10 rounded-xl" />

                {/* Content */}
                <div className="relative z-20 h-full flex flex-col items-center justify-center text-center p-6 gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-black/50 border border-white/20 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 backdrop-blur-sm">
                    <Icon className="text-gray-300 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <h3 className="font-bold text-sm tracking-wider uppercase group-hover:text-brand-red transition-colors">
                    {ind.name}
                  </h3>
                </div>

                {/* Bottom Red Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-red group-hover:w-full transition-all duration-500 z-30" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
