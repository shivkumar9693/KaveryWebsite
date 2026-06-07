const Team = () => {
  return (
    <section id="leadership" className="py-24 bg-brand-gray">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">OUR <span className="text-brand-red">LEADER</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our founder's dedicated vision shapes our high standards of engineering quality and global trust.<br />
            Guided by strategic leadership, we remain committed to driving industrial innovation and customer trust.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-panel rounded-2xl overflow-hidden flex flex-col md:flex-row">

          <div className="md:w-2/5">
            <img
              src="/assets/team_founder.png"
              alt="Founder"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative">
            <div className="absolute top-8 right-8 text-6xl text-brand-red/20 font-serif leading-none">"</div>

            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-1">P J CHAUDHARI</h2>
            <p className="text-brand-red text-sm font-bold tracking-widest uppercase mb-6">Founder & Managing Director</p>

            <p className="text-gray-300 italic mb-8 relative z-10">
              "At Kavery Tubing Solutions Pvt. Ltd., we believe that true engineering excellence is born from an uncompromising commitment to quality. For over 15 years, we have poured our expertise into every single tube that leaves our facility, knowing that it will become a critical artery in some of the world's most demanding industrial applications. Our journey is one of continuous innovation, and our destination is customer trust."
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;
