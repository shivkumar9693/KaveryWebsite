import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
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
              <Shield className="text-brand-red" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-heading font-bold">Privacy <span className="text-brand-red">Policy</span></h1>
              <p className="text-gray-400">Last updated: May 2024</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Eye size={24} className="text-brand-red" /> 1. Information We Collect
              </h2>
              <p>
                Kavery Tubing Solutions Pvt. Ltd. ("we", "us", or "our") collects information that you provide directly to us when you fill out our contact form or subscribe to our newsletter. This includes your name, email address, phone number, company name, and any other details you share regarding your business requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Lock size={24} className="text-brand-red" /> 2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and respond to your inquiries.</li>
                <li>Provide you with information about our products and services.</li>
                <li>Improve our website and customer service experience.</li>
                <li>Send periodic newsletters (if subscribed).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Shield size={24} className="text-brand-red" /> 3. Data Protection
              </h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to provide products or services you have requested.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <FileText size={24} className="text-brand-red" /> 4. Cookies
              </h2>
              <p>
                Our website may use "cookies" to enhance user experience. A cookie is a small piece of data sent from a website and stored on the user's computer. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.
              </p>
            </section>

            <section className="bg-brand-red/5 p-6 rounded-2xl border border-brand-red/20">
              <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <strong>Email:</strong> kaverytubingsolutions@gmail.com
                <br />
                <strong>Address:</strong> Plot No. 45, Industrial Area, Phase II, GIDC, Ahmedabad, Gujarat, India - 380015
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
