import { ShieldCheck, FileCheck, Award, BadgeCheck, ExternalLink, FileText, Verified, Info } from 'lucide-react';

const Certifications = () => {
  const certs = [
    { 
      name: "ISO 9001:2015", 
      desc: "Quality Management System Certification", 
      file: "ISO -KAVERY.pdf",
      icon: ShieldCheck,
      header: "Quality Management Certificate",
      details: "Quality Systems Audit"
    },
    { 
      name: "BIS Testing", 
      desc: "Bureau of Indian Standards Quality Compliance", 
      file: "BIS_TESTING_KAVERY_TUBING.pdf",
      icon: FileCheck,
      header: "BIS Test Request",
      details: "Product Testing & Compliance"
    },
    { 
      name: "IEC Certificate", 
      desc: "Import Export Code Registration", 
      file: "IEC certificate (Updated).pdf",
      icon: Award,
      header: "IEC Registration Form",
      details: "Trade & Commerce Compliance"
    },
    { 
      name: "UDYAM Registration", 
      desc: "MSME Government of India Certification", 
      file: "KTS- UDYAM CERTIFICATE.pdf",
      icon: BadgeCheck,
      header: "UDYAM Enrollment",
      details: "Government MSME Sector"
    },
    { 
      name: "TradeMark Reg.", 
      desc: "Registered Intellectual Property Protection", 
      file: "TradeMark Reg..pdf",
      icon: Award,
      header: "Trademark Application",
      details: "Intellectual Property Rights"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-brand-black border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 mb-6">
            <Verified size={14} className="text-brand-red" />
            <span className="text-[10px] font-bold text-brand-red tracking-[0.2em] uppercase">Industry Compliance</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Our <span className="text-brand-red">Certifications</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed">Direct view of our official quality certifications and government registrations.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          {certs.map((cert, idx) => {
            return (
              <div key={idx} className="group flex flex-col">
                {/* Real PDF Embed Preview */}
                <div className="relative aspect-[1/1.414] bg-white rounded-lg overflow-hidden mb-6 group-hover:scale-[1.03] transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.6)] group-hover:shadow-[0_25px_80px_rgba(209,0,0,0.25)] border border-white/5 bg-[#f0f0f0]">
                  
                  {/* Actual PDF Iframe */}
                  <div className="w-full h-full pointer-events-none select-none">
                    <iframe 
                      src={`/assets/${cert.file}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`} 
                      className="w-[200%] h-[200%] border-none scale-50 origin-top-left"
                      title={cert.name}
                      scrolling="no"
                    />
                  </div>

                  {/* High-Interaction Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-black/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6">
                    <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(209,0,0,0.6)] transform scale-50 group-hover:scale-100 transition-all duration-500">
                      <FileText size={32} className="text-white" />
                    </div>
                    <h5 className="text-white font-heading font-bold mb-6 text-center text-sm">{cert.name}</h5>
                    <a 
                      href={`/assets/${cert.file}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/btn relative px-10 py-3 bg-white text-brand-black text-[11px] font-black rounded-full overflow-hidden transition-all hover:pr-14 hover:bg-brand-red hover:text-white"
                    >
                      <span className="relative z-10 uppercase tracking-[0.2em]">View Full PDF</span>
                      <ExternalLink size={14} className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover/btn:opacity-100 transition-all" />
                    </a>
                  </div>
                </div>

                {/* Information Below Card */}
                <div className="text-center px-2">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-brand-red transition-colors duration-300">{cert.name}</h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">{cert.desc.split(' ')[0]} REGISTERED</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
