import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=" bg-slate-950 text-slate-400 font-sans border-t border-slate-900/60 selection:bg-[#9d4edd]/20 selection:text-white">
      <div className=" px-8 md:px-16 lg:px-24 py-16 lg:py-20">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16">
          
         
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link href="/" className="inline-block w-fit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9d4edd] rounded">
              <span className="text-lg font-black text-white tracking-tight">
                Study<span className="text-[#9d4edd]">Room</span>
              </span>
            </Link>
            <p className="text-[13.5px] leading-relaxed text-slate-400 max-w-sm font-normal tracking-wide">
              The premium enterprise workspace network for higher education. We orchestrate structural space allocation software to streamline campus library management and boost student operational productivity.
            </p>
          </div>

          {/* Column 2: Platform Links */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-widest">Platform</h3>
            <nav className="flex flex-col gap-3.5 text-[13.5px] font-medium">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors duration-200 w-fit">
                Home
              </Link>
              <Link href="/rooms" className="text-slate-400 hover:text-white transition-colors duration-200 w-fit">
                Rooms
              </Link>
              <Link href="/about" className="text-slate-400 hover:text-white transition-colors duration-200 w-fit">
                About
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact & Support */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-widest">Contact Info</h3>
            <div className="flex flex-col gap-3.5 text-[13.5px] font-medium">
              <a href="mailto:support@studyroom.com" className="text-slate-400 hover:text-[#9d4edd] transition-colors duration-200 w-fit flex items-center gap-2">
                support@studyroom.com
              </a>
              <a href="tel:+15550199" className="text-slate-400 hover:text-[#9d4edd] transition-colors duration-200 w-fit">
                +1 (555) 0199
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-10 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-8">
          
          {/* Copyright Text */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 order-2 sm:order-1 text-[12px] font-medium text-slate-500">
            <p>&copy; {new Date().getFullYear()} StudyRoom Network. All rights reserved.</p>
          </div>

          {/* Corrected Social SVGs with Standard Sizing */}
          <div className="flex items-center gap-6 order-1 sm:order-2 text-slate-500">
            {/* Facebook */}
            <a href="#" className="hover:text-white transition-colors duration-150 transform hover:-translate-y-0.5" aria-label="Facebook">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* X Logo */}
            <a href="#" className="hover:text-white transition-colors duration-150 transform hover:-translate-y-0.5" aria-label="X">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" className="hover:text-white transition-colors duration-150 transform hover:-translate-y-0.5" aria-label="LinkedIn">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="hover:text-white transition-colors duration-150 transform hover:-translate-y-0.5" aria-label="Instagram">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
