import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Wait a bit after reaching 100% before firing complete
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-brand-black flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="mb-8 flex flex-col items-center gap-6">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-3 border-2 border-brand-red shadow-[0_0_30px_rgba(209,0,0,0.6)] animate-pulse">
          <img src="/assets/logo.png" alt="Kavery Logo" className="w-full h-full object-contain" />
        </div>
        <div className="text-center">
          <h1 className="font-heading font-bold text-3xl md:text-4xl tracking-[0.2em] leading-none mb-3">KAVERY</h1>
          <p className="text-[10px] md:text-xs tracking-[0.5em] text-gray-400 uppercase font-bold">Tubing Solutions Pvt. Ltd.</p>
        </div>
      </div>
      
      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
        <div 
          className="absolute top-0 left-0 h-full bg-brand-red transition-all duration-200 ease-out shadow-[0_0_15px_#D10000]"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-4 text-brand-red text-sm font-bold font-mono tracking-widest">{progress}%</div>
    </div>
  );
};

export default LoadingScreen;
