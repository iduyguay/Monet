
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background with soft painterly overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518131394553-c46755493f6b?auto=format&fit=crop&q=80&w=2000" 
          alt="Peaceful interior" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f5f0]/10 via-[#f8f5f0]/30 to-[#f8f5f0]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl">
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#8a8279] mb-4 block animate-pulse">
          Subtle Presence
        </span>
        <h1 className="text-5xl md:text-7xl font-normal text-[#5a544f] leading-tight mb-8">
          The Art of <br /> 
          <span className="italic">Quiet Living</span>
        </h1>
        <p className="text-lg text-[#8a8279] font-light leading-relaxed mb-10 tracking-wide">
          A collection of thoughtfully crafted objects designed to invite stillness into your daily ritual.
        </p>
        <button className="px-10 py-4 bg-[#5a544f] text-[#f8f5f0] text-xs uppercase tracking-[0.3em] font-light rounded-full hover:bg-[#4a443f] transition-all duration-500 shadow-xl shadow-[#5a544f]/10">
          Explore the Studio
        </button>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg className="w-5 h-5 text-[#5a544f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>
    </section>
  );
};

export default Hero;
