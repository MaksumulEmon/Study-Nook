// import Link from 'next/link';
// import Image from 'next/image';
// import banner from '@/assets/banner.jpg'; // Update path based on your directory structure
// import { ArrowRight, Navigation } from 'lucide-react';

// export default function HeroSection() {
//     return (
//         <section className="relative flex items-center px-6 py-16 overflow-hidden font-sans pt-20 bg-gradient-to-br from-slate-50  md:px-24">
//             {/* Ambient Background Glow */}
//             <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full  pointer-events-none blur-3xl" />

//             <div className="relative z-10 flex flex-col items-center justify-between w-full gap-12 mx-auto lg:flex-row max-w-7xl">


//                 <div className="flex-1 max-w-lg text-center lg:text-left">

//                     <div className='w-fit flex items-center text-[#9d4edd] border border-[#9d4edd]/20 rounded-full text-xs font-semibold px-4 py-1.5 mb-6 tracking-wide'>
//                         <Navigation className='w-5 h-5'/>
//                         <p>Campus Workspace Network</p>
//                     </div>

//                     <h1 className="mb-5 text-4xl font-black leading-tight sm:text-6xl text-slate-900">
//                         Find Your<br />
//                         <span className="text-[#9d4edd]">Perfect Study</span><br />
//                         <span className="text-[#9d4edd]">Room</span>
//                     </h1>

//                     <p className="max-w-md mx-auto mb-8 text-base leading-relaxed lg:mx-0 text-slate-600">
//                         Browse and book quiet, private study rooms in your library. List your own room and earn money.
//                     </p>

//                     <Link
//                         href="/all-rooms"
//                         className="inline-flex items-center justify-center w-full gap-2 px-8 py-4 text-sm font-bold text-white transition-all duration-200 bg-[#9d4edd] rounded-xl hover:bg-[#8a3ec9] hover:-translate-y-0.5 shadow-lg shadow-[#9d4edd]/30 group sm:w-auto"
//                     >
//                         <span>Explore Rooms</span>
//                         <ArrowRight className='w-4 h-4' />
//                     </Link>
//                 </div>


//                 <div className="relative flex-1 w-full max-w-xl mt-8 lg:mt-0">
//                     {/* Main Visual Container */}
//                     <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-950 border border-slate-900/10">
//                         <Image
//                             src={banner}
//                             fill
//                             alt="Campus Study Room UI Preview"
//                             className="object-cover"
//                             priority
//                         />
//                     </div>

//                     <div className="absolute top-6 -left-15 bg-white rounded-2xl px-6 py-4 shadow-xl border border-slate-100 min-w-46 hidden sm:block transform hover:scale-105 transition-transform duration-300">
//                         <p className="mb-0.5 text-2xl font-black leading-none text-slate-900">1,200+</p>
//                         <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">Quiet Spaces</p>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }










"use client";

import Link from 'next/link';
import Image from 'next/image';
import banner from '@/assets/banner.jpg';
import { ArrowRight, Navigation, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {

    const fadeLeft = {
        hidden: { opacity: 0, x: -80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="relative flex items-center px-6 py-16 overflow-hidden font-sans pt-20 bg-gradient-to-br from-slate-50 md:px-24">
            {/* Ambient Background Glow */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none blur-3xl" />

            <div className="relative z-10 flex flex-col items-center justify-between w-full gap-12 mx-auto lg:flex-row max-w-7xl">

                {/* LEFT CONTENT */}
                <motion.div
                    variants={fadeLeft}
                    initial="hidden"
                    animate="visible"
                    className="flex-1 max-w-lg text-center lg:text-left"
                >

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className='w-fit flex items-center text-[#9d4edd] border border-[#9d4edd]/20 rounded-full text-xs font-semibold px-4 py-1.5 mb-6 tracking-wide'
                    >
                        <Sparkles  className='w-5 h-5 pr-2' />
                        <p> Popular Spaces</p>
                    </motion.div>


                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="mb-5 text-4xl font-black leading-tight sm:text-6xl text-slate-900"
                    >
                        Find Your<br />
                        <span className="text-[#9d4edd]">Perfect Study</span><br />
                        <span className="text-[#9d4edd]">Room</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="max-w-md mx-auto mb-8 text-base leading-relaxed lg:mx-0 text-slate-600"
                    >
                        Browse and book quiet, private study rooms in your library. List your own room and earn money.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        <Link
                            href="/all-rooms"
                            className="inline-flex items-center justify-center w-full gap-2 px-8 py-4 text-sm font-bold text-white transition-all duration-200 bg-[#9d4edd] rounded-xl hover:bg-[#8a3ec9] hover:-translate-y-0.5 shadow-lg shadow-[#9d4edd]/30 group sm:w-auto"
                        >
                            <span>Explore Rooms</span>

                            <motion.div
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <ArrowRight className='w-4 h-4' />
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>


                {/* RIGHT IMAGE */}
                <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    animate="visible"
                    className="relative flex-1 w-full max-w-xl mt-8 lg:mt-0"
                >
                    {/* Main Visual Container */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-950 border border-slate-900/10"
                    >
                        <Image
                            src={banner}
                            fill
                            alt="Campus Study Room UI Preview"
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            delay: 0.8,
                            duration: 0.6,
                            type: "spring",
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="absolute top-6 -left-15 bg-white rounded-2xl px-6 py-4 shadow-xl border border-slate-100 min-w-46 hidden sm:block transform transition-transform duration-300"
                    >
                        <p className="mb-0.5 text-2xl font-black leading-none text-slate-900">1,200+</p>
                        <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">Quiet Spaces</p>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}