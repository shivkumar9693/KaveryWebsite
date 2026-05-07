import { Download, FileCheck, ShieldCheck, Award, GraduationCap, BadgeCheck } from 'lucide-react';

const Certifications = () => {
  const certs = [
    { 
      name: "ISO 9001:2015", 
      desc: "Quality Management System Certification", 
      file: "ISO -KAVERY.pdf",
      icon: ShieldCheck
    },
    { 
      name: "BIS Testing", 
      desc: "Bureau of Indian Standards Quality Compliance", 
      file: "BIS_TESTING_KAVERY_TUBING.pdf",
      icon: FileCheck
    },
    { 
      name: "IEC Certificate", 
      desc: "Import Export Code Registration", 
      file: "IEC certificate (Updated).pdf",
      icon: Award
    },
    { 
      name: "UDYAM Registration", 
      desc: "MSME Government of India Certification", 
      file: "KTS- UDYAM CERTIFICATE.pdf",
      icon: BadgeCheck
    },
    { 
      name: "TradeMark Reg.", 
      desc: "Registered Intellectual Property Protection", 
      file: "TradeMark Reg..pdf",
      icon: Award
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-brand-black border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Our <span className="text-brand-red">Certifications</span></h2>
          <p className="text-gray-400">Committed to maintaining the highest global quality standards and regulatory compliance.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {certs.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div key={idx} className="glass-panel p-6 rounded-xl text-center group hover:border-brand-red/50 transition-all flex flex-col items-center justify-between">
                <div>
                  <div className="w-16 h-16 mx-auto bg-brand-black border-2 border-brand-red/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-brand-red transition-all shadow-[0_0_15px_rgba(209,0,0,0.1)] group-hover:shadow-[0_0_20px_rgba(209,0,0,0.4)]">
                    <Icon className="text-brand-red w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-brand-red transition-colors">{cert.name}</h3>
                  <p className="text-xs text-gray-500 mb-6 line-clamp-2">{cert.desc}</p>
                </div>
                
                <a 
                  href={`/assets/${cert.file}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 rounded border border-white/10 hover:bg-brand-red hover:border-brand-red transition-all text-sm font-bold group-hover:glow-red"
                >
                  <Download size={16} /> View Certificate
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
