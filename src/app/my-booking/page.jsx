import { BookingCancel } from '@/components/BookingCancel';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export const metadata = {
    title: "StudyNook – My Booking",
};



const MyBookings = async () => {

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    const { token } = await auth.api.getToken({
        headers: await headers()
    })


    const user = session?.user

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URl}/booking/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        },
    })

    const bookings = await res.json()
    console.log(bookings)

    return (

        <div className="max-w-7xl mx-auto overflow-hidden rounded-2xl md:border-2 border-black mb-12 mt-12">

            {/* Empty State */}
            {bookings.length === 0 ? (

                <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
                    <h2 className="text-2xl font-semibold text-[#1f2937] mb-2">
                        No bookings found
                    </h2>

                    <p className="text-[#6b7280] max-w-md leading-7 mb-8">
                        You haven’t booked any study room yet.
                    </p>

                    <Link href="/all-rooms">
                        <button className="rounded-2xl bg-[#9d4edd] px-8 py-3 text-white">
                            Booking Rooms
                        </button>
                    </Link>
                </div>

            ) : (

                <>

                    {/* ================= MOBILE VIEW ================= */}
                    <div className="block md:hidden space-y-4 p-4">

                        {bookings.map((booking) => (
                            <div
                                key={booking._id}
                                className="border rounded-2xl p-4 shadow-sm bg-white"
                            >

                                <div className="flex items-center gap-3 mb-3">
                                    <Image
                                        src={booking.roomImage}
                                        alt="room"
                                        width={60}
                                        height={60}
                                        className="rounded-xl object-cover"
                                    />

                                    <div>
                                        <h3 className="font-semibold text-[#1f2937]">
                                            {booking.roomName}
                                        </h3>
                                        <p className="text-xs text-gray-500">
                                            Study Room Booking
                                        </p>
                                    </div>
                                </div>

                                <div className="text-sm space-y-1 text-gray-700">
                                    <p><b>Date:</b> {booking.date}</p>
                                    <p><b>Time:</b> {booking.startTime} - {booking.endTime}</p>
                                    <p><b>Cost:</b> ${booking.totalCost}</p>
                                </div>

                                <div className="flex justify-between items-center mt-3">

                                    <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-green-100 text-green-700 border-green-200">
                                        Confirmed
                                    </span>

                                    <BookingCancel booking={booking} bookingId={booking._id} />

                                </div>

                            </div>
                        ))}

                    </div>

                    {/* ================= DESKTOP TABLE VIEW ================= */}
                    <div className="hidden md:block overflow-x-auto">

                        <table className="w-full ">

                            <thead className="border-b">
                                <tr className="text-left text-sm uppercase tracking-wide text-[#5f665d]">
                                    <th className="px-6 py-5 font-semibold">Room</th>
                                    <th className="px-6 py-5 font-semibold">Date</th>
                                    <th className="px-6 py-5 font-semibold">Time</th>
                                    <th className="px-6 py-5 font-semibold">Cost</th>
                                    <th className="px-6 py-5 font-semibold">Status</th>
                                    <th className="px-6 py-5 font-semibold text-right">Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {bookings.map((booking) => (
                                    <tr
                                        key={booking._id}
                                        className="border-b hover:bg-purple-50 transition-colors"
                                    >

                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-4">
                                                <Image
                                                    src={booking.roomImage}
                                                    alt="Booking"
                                                    width={70}
                                                    height={70}
                                                    className="h-16 w-16 rounded-2xl object-cover"
                                                />

                                                <h3 className="text-lg font-semibold">
                                                    {booking.roomName}
                                                </h3>
                                            </div>
                                        </td>

                                        <td className="px-6 py-5">{booking.date}</td>

                                        <td className="px-6 py-5">
                                            {booking.startTime} - {booking.endTime}
                                        </td>

                                        <td className="px-6 py-5 font-bold text-[#7b2cbf]">
                                            ${booking.totalCost}
                                        </td>

                                        <td className="px-6 py-5">


                                            <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-green-100 text-green-700 border-green-200">
                                                Confirmed
                                            </span>

                                        </td>

                                        <td className="px-6 py-5 text-right">
                                            <BookingCancel
                                                booking={booking}
                                                bookingId={booking._id}
                                            />
                                        </td>

                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>

                </>

            )}

        </div>


    );
};

export default MyBookings;