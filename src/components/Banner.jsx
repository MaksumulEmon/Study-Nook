import Image from 'next/image';
import React from 'react';
import banner from '@/assets/banner.jpg'
import Link from 'next/link';

const Banner = () => {
    return (
        <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-teal-50/20 to-teal-100/40 flex items-center px-6 md:px-24  overflow-hidden relative font-sans">

            {/* Ambient Background Glow with Primary Brand Color */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#358f80] opacity-5 pointer-events-none blur-3xl" />

            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-12 relative z-10">

    
                <div className="flex-1 max-w-lg text-center lg:text-left">

                    {/* Academic Community Trust Badge */}
                    <span className="inline-block bg-[#358f80]/10 text-[#2b7569] border border-[#358f80]/20 rounded-full text-xs font-semibold px-4 py-1.5 mb-6 tracking-wide">
                        #1 Campus Workspace Network
                    </span>

                    <h1 className="text-4xl sm:text-6xl font-black leading-tight mb-5 text-slate-900">
                        Find Your<br />
                        <span className="text-[#358f80]">Perfect Study</span><br />
                        <span className="text-[#358f80]">Room</span>
                    </h1>

                    {/* UX Strategy Description */}
                    <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                        Browse and book quiet, private study rooms in your library.
                        List your own room and earn.
                    </p>

                
                    <Link
                        href="/rooms"
                        className="inline-flex items-center gap-2 bg-[#358f80] hover:bg-[#2b7569] text-white text-sm font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#358f80]/20 group w-full sm:w-auto justify-center"
                    >
                        <span>Explore Rooms</span>
                        <svg
                            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                            viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5"
                            strokeLinecap="round" strokeLinejoin="round"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* RIGHT: Architecture Plan / Spatial Nook Grid Vector */}
                <div className="flex-1 w-full max-w-xl relative mt-8 lg:mt-0">

                    {/* Structured Floor Plan Architectural Grid SVG */}
                    <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-[#162220] flex items-center justify-center border border-white/5">
                        <Image src={banner} fill alt='Banner The web' className='rounded-2xl' >

                        </Image>
                    </div>

                    {/* Floating Trust Metric Component */}
                    <div className="absolute  top-4 lg:-left-17 bg-white rounded-2xl px-5 py-4 shadow-xl border border-slate-100 min-w-[180px]">
                        <p className="text-2xl font-black text-slate-900 leading-none mb-1">1,200+</p>
                        <p className="text-xs text-slate-500 font-medium tracking-wide">Verified Quiet Spaces</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;
