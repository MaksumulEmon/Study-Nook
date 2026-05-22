import Link from 'next/link';
import Image from 'next/image';
import banner from '@/assets/banner.jpg'; // Update path based on your directory structure
import { ArrowRight, Navigation } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative flex items-center px-6 py-16 overflow-hidden font-sans pt-20 bg-gradient-to-br from-slate-50  md:px-24">
            {/* Ambient Background Glow */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full  pointer-events-none blur-3xl" />

            <div className="relative z-10 flex flex-col items-center justify-between w-full gap-12 mx-auto lg:flex-row max-w-7xl">


                <div className="flex-1 max-w-lg text-center lg:text-left">

                    <div className='w-fit flex items-center text-[#9d4edd] border border-[#9d4edd]/20 rounded-full text-xs font-semibold px-4 py-1.5 mb-6 tracking-wide'>
                        <Navigation className='w-5 h-5'/>
                        <p>Campus Workspace Network</p>
                    </div>

                    <h1 className="mb-5 text-4xl font-black leading-tight sm:text-6xl text-slate-900">
                        Find Your<br />
                        <span className="text-[#9d4edd]">Perfect Study</span><br />
                        <span className="text-[#9d4edd]">Room</span>
                    </h1>

                    <p className="max-w-md mx-auto mb-8 text-base leading-relaxed lg:mx-0 text-slate-600">
                        Browse and book quiet, private study rooms in your library. List your own room and earn money.
                    </p>

                    <Link
                        href="/rooms"
                        className="inline-flex items-center justify-center w-full gap-2 px-8 py-4 text-sm font-bold text-white transition-all duration-200 bg-[#9d4edd] rounded-xl hover:bg-[#8a3ec9] hover:-translate-y-0.5 shadow-lg shadow-[#9d4edd]/30 group sm:w-auto"
                    >
                        <span>Explore Rooms</span>
                        <ArrowRight className='w-4 h-4' />
                    </Link>
                </div>


                <div className="relative flex-1 w-full max-w-xl mt-8 lg:mt-0">
                    {/* Main Visual Container */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-950 border border-slate-900/10">
                        <Image
                            src={banner}
                            fill
                            alt="Campus Study Room UI Preview"
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="absolute top-6 -left-15 bg-white rounded-2xl px-6 py-4 shadow-xl border border-slate-100 min-w-46 hidden sm:block transform hover:scale-105 transition-transform duration-300">
                        <p className="mb-0.5 text-2xl font-black leading-none text-slate-900">1,200+</p>
                        <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">Quiet Spaces</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
