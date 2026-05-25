import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 py-16 overflow-hidden font-sans bg-slate-950 selection:bg-[#9d4edd]/20 selection:text-white">
      {/* Background Visual Enhancements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#9d4edd] opacity-5 pointer-events-none blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      <div className="relative z-10 max-w-xl w-full text-center flex flex-col items-center">
        
        {/* Error Status Indicator */}
        <span className="inline-block bg-[#9d4edd]/10 text-[#9d4edd] border border-[#9d4edd]/20 rounded-full text-xs font-semibold px-4 py-1.5 mb-6 tracking-widest uppercase">
          Error Code 404
        </span>

        {/* Abstract 404 Visual Header */}
        <h1 className="text-[120px] sm:text-[160px] font-black leading-none tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-white via-slate-200 to-slate-500 select-none">
          404
        </h1>

        {/* Messaging Hierarchy */}
        <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-white tracking-tight">
          This study space does not exist.
        </h2>
        
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400 max-w-md">
          The page you are looking for might have been moved, deleted, or the booking link has expired. Lets get you back on track.
        </p>

        {/* Action Controls */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary Action Button */}
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 bg-[#9d4edd] rounded-xl hover:bg-[#8a3ec9] hover:-translate-y-0.5 shadow-lg shadow-[#9d4edd]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9d4edd]"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 19-7-7 7-7M5 12h14" />
            </svg>
            <span>Return to Home</span>
          </Link>

          {/* Secondary Action Link */}
          <Link
            href="/rooms"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 bg-slate-900/50 rounded-xl transition-all duration-200"
          >
            Browse Available Rooms
          </Link>
        </div>

      </div>
    </main>
  );
}
