import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    // Primary brand color #358f80 applied cleanly across the entire canvas background
    <main className="min-h-screen bg-[#358f80] text-white font-sans flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* Structural Layer: Organic geometric overlay to add high-end depth */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Clean Centered Content Container */}
      <div className="relative z-10 max-w-md w-full bg-black/10 backdrop-blur-md border border-white/10 rounded-3xl p-10 text-center space-y-8 shadow-2xl">
        
        {/* Large Crisp Status Layout */}
        <div className="space-y-1">
          <h1 className="text-7xl font-black tracking-tighter text-white select-none">
            404
          </h1>
          <h2 className="text-lg font-bold uppercase tracking-wider text-white/90">
            Room Unreachable
          </h2>
        </div>

        {/* Short Strategic Explanation */}
        <p className="text-sm text-white/80 leading-relaxed font-medium max-w-xs mx-auto">
          The path you took has shifted. Let's redirect your focus back to where you can get some work done.
        </p>

        {/* Clear Exit Targets */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/" 
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-gray-100 text-[#358f80] font-bold text-sm transition-all duration-200 text-center shadow-lg shadow-black/10"
          >
            Go to Home
          </Link>
          
          <a 
            href="/rooms" 
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/10 border border-white/30 text-white font-semibold text-sm transition-all duration-200 text-center"
          >
            Browse Rooms
          </a>
        </div>

        {/* Subtle Identity Anchor */}
        <div className="text-[10px] tracking-widest uppercase text-white/50 font-bold select-none pt-4">
          Study Nook Sanctuary
        </div>

      </div>
    </main>
  );
};

export default NotFoundPage;
