import { Verified } from 'lucide-react';

const Certifications = () => {
  const certs = [
    { 
      name: "ISO 9001:2015", 
      desc: "Quality Management System Certification", 
      file: "ISO -KAVERY.pdf"
    },
    { 
      name: "BIS Testing", 
      desc: "Bureau of Indian Standards Quality Compliance", 
      file: "BIS_TESTING_KAVERY_TUBING.pdf"
    },
    { 
      name: "IEC Certificate", 
      desc: "Import Export Code Registration", 
      file: "IEC certificate (Updated).pdf"
    },
    { 
      name: "UDYAM Registration", 
      desc: "MSME Government of India Certification", 
      file: "KTS- UDYAM CERTIFICATE.pdf"
    },
    { 
      name: "TradeMark Reg.", 
      desc: "Registered Intellectual Property Protection", 
      file: "TradeMark Reg..pdf"
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
              <a 
                key={idx} 
                href={`/assets/${cert.file}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col cursor-pointer"
              >
                {/* Real PDF Embed acting purely as an image */}
                <div className="relative aspect-[1/1.414] bg-[#f0f0f0] rounded-lg overflow-hidden mb-6 group-hover:scale-[1.03] transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.6)] group-hover:shadow-[0_25px_80px_rgba(209,0,0,0.25)] border border-white/5 pointer-events-none">
                  
                  {/* PDF Iframe (scaled up to hide scrollbars, styled as image preview) */}
                  <div className="w-full h-full select-none">
                    <iframe 
                      src={`/assets/${cert.file}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`} 
                      className="w-[200%] h-[200%] border-none scale-50 origin-top-left"
                      title={cert.name}
                      scrolling="no"
                    />
                  </div>
                  
                  {/* Subtle red tint overlay on hover */}
                  <div className="absolute inset-0 bg-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Information Below Card */}
                <div className="text-center px-2">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-brand-red transition-colors duration-300">{cert.name}</h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">{cert.desc.split(' ')[0]} REGISTERED</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
