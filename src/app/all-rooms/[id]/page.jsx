
import { EditModal } from '@/components/EditModal';
import { AlignEndHorizontal, Book, Lasso, Pencil, Trash, UsersRound } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const RoomDetailsBookPage = async ({ params }) => {
    const { id } = await params
    const res = await fetch(`http://localhost:5000/room/${id}`)
    const room = await res.json()
    console.log(room)


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 font-sans">
            {/* Back Button */}
            <div className="px-10 pt-8 pb-2">
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 5l-7 7 7 7" />
                    </svg>
                    Back
                </button>
            </div>

            {/* Main Content */}
            <div className="px-10 py-4 max-w-6xl mx-auto">
                <div className="lg:flex  gap-8 items-start">

                    {/* LEFT COLUMN */}
                    <div className="flex-1">
                        {/* Room Image */}
                        <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[16/10] bg-gray-100 shadow-md group">
                            <Image
                                src={room.image}
                                alt={room.roomName}
                                fill
                                sizes="(max-w-7xl) 33vw, (max-w-md) 100vw, 50vw"
                                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                priority={false}
                            />
                        </div>


                        {/* Room Title & Bookings Badge */}
                        <div className="flex items-start justify-between mb-1">
                            <h1 className="text-3xl font-bold text-gray-900">{room.name}</h1>
                            <span className="flex items-center gap-1.5 bg-white border border-[#9d4edd] text-[#9d4edd] text-xs font-medium px-3 py-1.5 rounded-full mt-1">
                                <svg className="w-3.5 h-3.5 text-[#9d4edd]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M9 12l2 2 4-4" />
                                </svg>
                                {room.bookingsCount} bookings
                            </span>
                        </div>

                        {/* Listed Date */}
                        <p className="text-2xl font-bold mb-4"> {room.roomName}</p>

                        <p className="text-sm text-gray-400 mb-4">Listed {room.listedDate}</p>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">{room.description}</p>

                        {/* Amenities */}
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-3">Amenities</h2>
                            <div className="flex flex-wrap gap-2">
                                {room.amenities.map((item) => (
                                    <span
                                        key={item}
                                        className="bg-[#f3e8ff] text-[#7b2cbf] border border-[#9d4edd] text-sm px-4 py-1.5 rounded-full"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="w-80 flex flex-col gap-4 sticky top-6">

                        {/* Booking Card */}
                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                            {/* Price */}
                            <div className="flex items-baseline justify-between mb-5">
                                <span className="text-3xl font-bold text-gray-900">${room.pricePerHour}</span>
                                <span className="text-sm ">per hour</span>
                            </div>

                            {/* Details */}
                            <div className="flex flex-col gap-3 mb-5">
                                {/* Floor */}
                                <div className="flex items-center gap-2.5 text-sm text-gray-600">
                                    <AlignEndHorizontal className='w-4 h-4' />
                                    {room.floor}
                                </div>
                                {/* Capacity */}
                                <div className="flex items-center gap-2.5 text-sm text-gray-600">
                                    <UsersRound className='w-4 h-4' />
                                    Up to {room.capacity}
                                </div>
                                {/* Bookings */}
                                <div className="flex items-center gap-2.5 text-sm text-gray-600">
                                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 6v6l4 2" />
                                    </svg>
                                    {room.totalBookings}
                                </div>
                            </div>

                            {/* Book Now Button */}
                            <button className="w-full flex items-center justify-center gap-2 bg-[#9d4edd] hover:bg-[#3c096c] text-white text-sm font-semibold py-3 rounded-xl transition-colors duration-200 mb-3">
                                <Book className='w-4 h-4' />
                                Book Now
                            </button>

                            {/* Edit & Delete Buttons */}
                            <div className="flex gap-2">


                                <EditModal room={room} />


                                <button className="flex-1 flex items-center justify-center gap-1.5 border border-gray-200 hover:bg-red-50 text-red-500 text-sm font-medium py-2.5 rounded-xl transition-colors duration-200">
                                    <Trash className='w-4 h-4' />
                                    Delete
                                </button>
                            </div>
                        </div>

                        {/* Listed By Card */}
                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">Listed By</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-600 flex-shrink-0">
                                    {/* {room.listedBy.initial} */}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">{ }</p>
                                    <p className="text-xs text-gray-400">{ }</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetailsBookPage;