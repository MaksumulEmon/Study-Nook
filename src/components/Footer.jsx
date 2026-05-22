import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Background changed to a rich premium dark slate-teal base that complements #358f80
    <footer className="relative bg-[#162220] text-gray-300 font-sans overflow-hidden pt-20 pb-8">
      {/* Enhanced Contrast Glow using your primary color */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-[#358f80]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Brand Identity Pillar */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              {/* Custom Logo Icon Accent */}
              <div className="w-10 h-10 rounded-xl bg-[#358f80] flex items-center justify-center shadow-lg shadow-[#358f80]/30">
                <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5.46 13.04l6.54 3.57 6.54-3.57V15l-6.54 3.57-6.54-3.57v-1.96z"/>
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Study<span className="text-[#358f80]">Nook</span>
              </span>
            </div>
            
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Your dedicated sanctuary for focused learning. Crafting quiet spaces, curated tools, and environments engineered for productivity and deep academic success.
            </p>
          </div>

          {/* Useful Links Section */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#358f80] mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {['Home', 'Rooms', 'About'].map((link) => (
                <li key={link}>
                  <a 
                    href={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                    className="hover:text-[#358f80] transition-all duration-200 block py-0.5 hover:translate-x-1 transform"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#358f80]">
              Get In Touch
            </h4>
            
            <div className="space-y-3 text-sm">
              {/* Email Block */}
              <a 
                href="mailto:hello@studynook.com" 
                className="group flex items-center space-x-3 p-3 rounded-xl bg-black/15 border border-white/5 hover:border-[#358f80]/40 hover:bg-black/30 transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-[#358f80] transition-colors">
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-gray-400/60 font-semibold">Drop us a line</p>
                  <p className="text-gray-300 group-hover:text-white font-medium">hello@studynook.com</p>
                </div>
              </a>

              {/* Phone Block */}
              <a 
                href="tel:+18005556665" 
                className="group flex items-center space-x-3 p-3 rounded-xl bg-black/15 border border-white/5 hover:border-[#358f80]/40 hover:bg-black/30 transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-[#358f80] transition-colors">
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-gray-400/60 font-semibold">Call or text</p>
                  <p className="text-gray-300 group-hover:text-white font-medium">+1 (800) 555-6665</p>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Utility and Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-400/60">
          <div>
            &copy; {currentYear} <span className="text-gray-300 font-medium">Study Nook</span>. Engineered for focused minds. All rights reserved.
          </div>
          
          {/* Social Icons Container */}
          <div className="flex space-x-3">
            {[
              { label: 'Facebook', path: 'M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.9 0-5 1.55-5 4.5V8z', href: 'https://facebook.com' },
              { label: 'Twitter', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', href: 'https://twitter.com' },
              { label: 'LinkedIn', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', href: 'https://linkedin.com' },
              { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', href: 'https://instagram.com' }
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-black/20 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#358f80] hover:bg-[#358f80]/15 transition-all duration-300"
                aria-label={social.label}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d={social.path}/>
                </svg>
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
