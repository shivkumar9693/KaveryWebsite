import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, loading, success
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirement: 'Seamless Tubes',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');

    // WhatsApp Configuration
    const whatsappNumber = "919898740495";
    const text = `*New Inquiry from Kavery Tubing Website*%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Company:* ${formData.company || 'N/A'}%0A` +
                 `*Email:* ${formData.email}%0A` +
                 `*Phone:* ${formData.phone}%0A` +
                 `*Requirement:* ${formData.requirement}%0A` +
                 `*Message:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

    // Simulate animation delay then redirect
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setFormState('idle');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          requirement: 'Seamless Tubes',
          message: ''
        });
      }, 2000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-brand-black relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Contact <span className="text-brand-red">Us</span></h2>
          <p className="text-gray-400">Get in touch for custom requirements, bulk orders, or technical inquiries.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-brand-red">
              <h3 className="text-2xl font-bold mb-6">Head Office & Works</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-red/10 rounded flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-gray-400 text-sm">Plot No. 45, Industrial Area, Phase II,<br/>GIDC, Ahmedabad, Gujarat, India - 380015</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-red/10 rounded flex items-center justify-center shrink-0">
                    <Phone className="text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-400 text-sm">+91 98987 40495</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-red/10 rounded flex items-center justify-center shrink-0">
                    <Mail className="text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-400 text-sm">kaverytubingsolutions@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Integration */}
            <div className="h-64 rounded-2xl overflow-hidden border border-white/10 relative group shadow-2xl">
              <iframe 
                src="https://www.google.com/maps?q=Plot%20No.%2045,%20Industrial%20Area,%20Phase%20II,%20GIDC,%20Ahmedabad,%20Gujarat,%20India%20-%20380015&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location"
                className="w-full h-full"
              ></iframe>
              <div className="absolute inset-0 bg-brand-red/5 pointer-events-none group-hover:bg-transparent transition-all"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-brand-black/95 z-20 text-center p-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200 }}
                  >
                    <CheckCircle2 size={80} className="text-green-500 mb-6" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4 font-heading">Thank You!</h3>
                  <p className="text-gray-400 mb-8">Your inquiry has been processed. We are redirecting you to WhatsApp to complete the message...</p>
                  <div className="w-12 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ x: "-100%" }}
                      animate={{ x: "0%" }}
                      transition={{ duration: 2, ease: "linear" }}
                      className="h-full bg-brand-red"
                    />
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <h3 className="text-2xl font-bold mb-6">Send an Inquiry</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Name *</label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    className="w-full bg-brand-black border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-red/50 transition-colors" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Company</label>
                  <input 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    type="text" 
                    className="w-full bg-brand-black border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-red/50 transition-colors" 
                    placeholder="Company Ltd." 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Email *</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    className="w-full bg-brand-black border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-red/50 transition-colors" 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Phone *</label>
                  <input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel" 
                    className="w-full bg-brand-black border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-red/50 transition-colors" 
                    placeholder="+91 98765 43210" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1">Requirement</label>
                <select 
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  className="w-full bg-brand-black border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-red/50 transition-colors text-white"
                >
                  <option>Seamless Tubes</option>
                  <option>Welded Tubes</option>
                  <option>Heat Exchanger Tubes</option>
                  <option>Other Requirements</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1">Message *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  className="w-full bg-brand-black border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-red/50 transition-colors resize-none" 
                  placeholder="Please describe your requirements..." 
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className="w-full bg-brand-red text-white font-bold py-4 rounded hover:bg-brand-dark-red transition-all hover-glow-red flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formState === 'loading' ? (
                  <>Processing... <Loader2 className="animate-spin" size={18} /></>
                ) : (
                  <>Submit Inquiry <Send size={18} /></>
                )}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
