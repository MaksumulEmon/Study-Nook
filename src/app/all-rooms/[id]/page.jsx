
import BookingModal from '@/components/BookingModal';
import { DeleteAlert } from '@/components/DeleteAlert';
import { EditModal } from '@/components/EditModal';
import { auth } from '@/lib/auth';
import { authClient } from '@/lib/auth-client';
import { AlignEndHorizontal, Book, Lasso, Pencil, Trash, UsersRound } from 'lucide-react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';


const RoomDetailsBookPage = async ({ params }) => {
    const { id } = await params;

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    // console.log(token);

    const res = await fetch(`http://localhost:5000/room/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const room = await res.json()
    console.log(room)

    const session = await auth.api.getSession({
        headers: await headers()
    });

    // const userId = session?.user?.id;

    // Ownwe Ship Cheak
    const isOwner = room.userId === session?.user?.id;





    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 font-sans">
            {/* Main Content */}
            <div className="px-4 sm:px-6 lg:px-10 py-4 max-w-6xl mx-auto">
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

                        <p className="text-sm text-gray-400 mb-4">Publish Date: {new Date(room.createdAt).toLocaleDateString()}</p>

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
                        
                            <div className="bg-white rounded-2xl p-5 shadow-sm border mt-5  border-gray-100">
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
                                <BookingModal room={room} />

                                {/* Edit & Delete Buttons */}
                                <div className="flex gap-2">


                                    {/* <EditModal room={room} />
                                <DeleteAlert room={room} /> */}


                                    {isOwner && (
                                        <>
                                            <EditModal room={room} />
                                            <DeleteAlert room={room} />
                                        </>
                                    )}


                                </div>
                            </div>
                 

                        {/* Listed By Card */}


                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-3">Listed By</p>
                            <div className="flex items-center gap-3">

                                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 relative">
                                    {room.userImage ? (
                                        <Image
                                            src={room.userImage}
                                            alt="User profile"
                                            fill
                                            sizes="40px"
                                            className="object-cover"
                                            priority={false}
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-gray-600">
                                            {/* Fallback initials if userImage is a placeholder string */}
                                            {room.userImage}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">{room.userName}</p>
                                    <p className="text-xs text-gray-400">  {room.userEmail}</p>
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