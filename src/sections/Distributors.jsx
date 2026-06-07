import { Download, MapPin, Phone } from 'lucide-react';

const Distributors = () => {
  const distributors = [
    { 
      name: "Siddhi Vinayak Tubing Solutions", 
      address: "Ahmedabad, Gujarat",
      mobile: "+91 79842 29316",
      gst: "24CJTPC8052N1ZO",
      logo: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 filter drop-shadow-[0_0_8px_rgba(0,198,255,0.3)]">
          <defs>
            <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00c6ff" />
              <stop offset="100%" stopColor="#0072ff" />
            </linearGradient>
          </defs>
          <path d="M 50 12 A 38 38 0 0 1 88 50 A 38 38 0 0 1 50 88 A 38 38 0 0 1 12 50" fill="none" stroke="url(#blueGrad)" strokeWidth="6" strokeDasharray="10 5" strokeLinecap="round" />
          <path d="M 35 38 C 45 23, 55 38, 50 50 C 45 62, 55 77, 65 62" fill="none" stroke="url(#blueGrad)" strokeWidth="8" strokeLinecap="round" />
        </svg>
      ),
      downloadUrl: "/assets/siddhi_vinayak_card.png",
      downloadName: "Siddhi_Vinayak_Business_Card.png",
      buttonText: "Download Card"
    },
    { 
      name: "Kaveri Impex", 
      address: "Ahmedabad, Gujarat",
      mobile: "+91 98987 40495",
      gst: "24AAACK4545A1ZP",
      logo: (
        <img 
          src="/assets/logo_rounded.png" 
          alt="Kaveri Impex" 
          className="w-12 h-12 object-contain rounded-full border border-white/10 p-1 bg-white/5" 
        />
      ),
      downloadUrl: "/assets/catelog.pdf",
      downloadName: "Kavery_Catalog.pdf",
      buttonText: "Download Catalog"
    }
  ];

  return (
    <section className="py-24 bg-brand-gray relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-red/5 skew-x-12 transform origin-top" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our <span className="text-brand-red">Authorized</span> Distributors</h2>
            <p className="text-gray-400 mb-8">Partnering with leading distributors to ensure our premium products reach every corner of the globe efficiently.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {distributors.map((dist, idx) => (
                <div key={idx} className="w-full min-h-[320px] sm:aspect-square flex flex-col justify-between items-center p-5 glass-panel rounded-xl border-t-4 border-t-brand-red hover:border-brand-red/50 hover-glow-red transition-all duration-300 relative group">
                  <div className="flex-1 flex items-center justify-center mb-2">
                    {dist.logo}
                  </div>
                  <div className="text-center w-full flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold font-heading mb-2 leading-tight group-hover:text-brand-red transition-colors">{dist.name}</h3>
                    
                    <div className="space-y-1.5 text-xs text-gray-400">
                      <div className="flex items-center justify-center gap-1.5">
                        <MapPin size={12} className="text-brand-red" />
                        <span>{dist.address}</span>
                      </div>
                      <div className="flex items-center justify-center gap-1.5 text-white">
                        <Phone size={12} className="text-brand-red" />
                        <span>{dist.mobile}</span>
                      </div>
                      <div className="text-[10px] text-gray-500 font-mono mt-1">
                        GST: <span className="text-brand-red/90">{dist.gst}</span>
                      </div>
                    </div>
                  </div>
                  <a 
                    href={dist.downloadUrl} 
                    download={dist.downloadName} 
                    className="w-full py-2.5 mt-3 bg-brand-red hover:bg-brand-dark-red text-white text-xs font-bold rounded transition-colors flex items-center justify-center gap-1.5 shadow-[0_0_10px_rgba(209,0,0,0.2)] hover:shadow-[0_0_15px_rgba(209,0,0,0.4)]"
                  >
                    {dist.buttonText} <Download size={14} />
                  </a>
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
