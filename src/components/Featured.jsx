import Link from 'next/link';
import React from 'react';
import RoomCard from './RoomCard';
import { ArrowRight, Building2, Sparkles } from 'lucide-react';

const FeaturedRoom = async () => {
    const res = await fetch("http://localhost:5000/featured")
    const rooms = await res.json();

    // const rooms = await res.json();

    return (
        <div className='max-w-7xl mx-auto '>


            <div className="flex items-center justify-between px-5 md:px-0 pt-8 pb-5">
                {/* LEFT TITLE */}
                <div>
                   

                    <h1 className="text-3xl font-black tracking-tight text-gray-900 md:text-5xl">
                        Featured{" "}
                        <span className="text-[#9d4edd]">
                            Rooms
                        </span>
                    </h1>

                    <p className="mt-2 text-sm text-gray-500 md:text-base">
                        Discover quiet and comfortable study environments near your campus.
                    </p>
                </div>


                {/* RIGHT BUTTON */}
                <Link href="/all-rooms" className="group">
                    <button className="relative overflow-hidden flex items-center gap-2 px-5 py-3 text-sm font-bold text-white transition-all duration-300 rounded-2xl bg-[#9d4edd] hover:bg-[#8a3ec9] shadow-lg shadow-[#9d4edd]/20 hover:shadow-[#9d4edd]/40 hover:-translate-y-1 active:scale-95">

                        {/* Glow Effect */}
                        <span className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-white/10 group-hover:opacity-100" />

                        <span className="relative z-10">
                            View All Rooms
                        </span>

                        <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </Link>
            </div>




            {
                rooms.length === 0 ? (

                    <div className="flex flex-col items-center justify-center py-24 text-center">

                        <div className="w-24 h-24 rounded-full bg-[#f3e8ff] flex items-center justify-center mb-6">

                            <Building2
                                size={40}
                                className="text-[#9d4edd]"
                            />

                        </div>

                        <h2 className="text-2xl font-bold text-gray-900">
                            No Rooms Found
                        </h2>

                        <p className="text-gray-500 mt-3 max-w-md leading-7">
                            Sorry, there are currently no study rooms available.
                            Please check again later or add a new room.
                        </p>

                        <Link href="/add-room">
                            <button className="px-5 py-3 rounded-xl bg-[#9d4edd] mt-3 text-white font-semibold text-sm md:text-base shadow-md hover:bg-[#7b2cbf] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                                + Add New Room
                            </button>
                        </Link>

                    </div>

                ) : (

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 md:mx-0">

                        {rooms.map((room) => (
                            <RoomCard
                                key={room._id}
                                room={room}
                            />
                        ))}

                    </div>

                )
            }
        </div>
    );
};

export default FeaturedRoom;