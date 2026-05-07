import { motion } from 'framer-motion';
import { FileText, Scale, AlertCircle, CheckCircle2 } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center">
              <Scale className="text-brand-red" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-heading font-bold">Terms of <span className="text-brand-red">Service</span></h1>
              <p className="text-gray-400">Last updated: May 2024</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <FileText size={24} className="text-brand-red" /> 1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. When using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <CheckCircle2 size={24} className="text-brand-red" /> 2. Use of License
              </h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Kavery Tubing Solutions Pvt. Ltd.'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <AlertCircle size={24} className="text-brand-red" /> 3. Disclaimer
              </h2>
              <p>
                The materials on Kavery Tubing Solutions Pvt. Ltd.'s website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Scale size={24} className="text-brand-red" /> 4. Limitations
              </h2>
              <p>
                In no event shall Kavery Tubing Solutions Pvt. Ltd. or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <FileText size={24} className="text-brand-red" /> 5. Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.
              </p>
            </section>

            <div className="bg-brand-red/5 p-6 rounded-2xl border border-brand-red/20 mt-12 text-center">
              <p className="font-bold text-white mb-2">Questions about our Terms?</p>
              <p>Reach out to us at kaverytubingsolutions@gmail.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
