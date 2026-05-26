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

    const res = await fetch(`http://localhost:5000/booking/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        },
    })

    const bookings = await res.json()
    console.log(bookings)

    return (
        // <div>
        //     {bookings.map((booking) => (
        //         <div key={booking._id}>
        //             <Image src={booking.roomImage} alt="Booking" width='200' height='200' />

        //             <p>date{booking.roomName}</p>
        //             <p>date{booking.date}</p>
        //             <div className='flex'>
        //                 <p>date{booking.startTime}</p>
        //                 <p>{booking.endTime}</p>
        //             </div>

        //             <p>Totalcost{booking.totalCost}</p>
        //             <span>Status</span>
        //         </div>
        //     ))}
        // </div>




        // <div className="max-w-7xl mx-auto overflow-x-auto rounded-2xl border border-[#d8d1c7] bg-[#f7f5f1]">
        //     <table className="">

        //         {/* Table Header */}
        //         <thead className="border-b border-[#d8d1c7]">
        //             <tr className="text-left text-sm uppercase tracking-wide text-[#5f665d]">
        //                 <th className="px-6 py-5 font-semibold">Room</th>
        //                 <th className="px-6 py-5 font-semibold">Date</th>
        //                 <th className="px-6 py-5 font-semibold">Time</th>
        //                 <th className="px-6 py-5 font-semibold">Cost</th>
        //                 <th className="px-6 py-5 font-semibold">Status</th>
        //                 <th className="px-6 py-5 font-semibold text-right">Action</th>
        //             </tr>
        //         </thead>

        //         {/* Table Body */}
        //         <tbody>

        //             {bookings.map((booking) => (

        //                 <tr
        //                     key={booking._id}
        //                     className="border-b border-[#d8d1c7] last:border-none"
        //                 >

        //                     {/* Room */}
        //                     <td className="px-6 py-5">
        //                         <div className="flex items-center gap-4">

        //                             <Image
        //                                 src={booking.roomImage}
        //                                 alt="Booking"
        //                                 width={70}
        //                                 height={70}
        //                                 className="h-16 w-16 rounded-xl object-cover"
        //                             />

        //                             <h3 className="text-lg font-medium text-[#1f2937]">
        //                                 {booking.roomName}
        //                             </h3>

        //                         </div>
        //                     </td>

        //                     {/* Date */}
        //                     <td className="px-6 py-5 text-[#1f2937]">
        //                         {booking.date}
        //                     </td>

        //                     {/* Time */}
        //                     <td className="px-6 py-5 text-[#1f2937]">
        //                         {booking.startTime} - {booking.endTime}
        //                     </td>

        //                     {/* Cost */}
        //                     <td className="px-6 py-5 font-medium text-[#1f2937]">
        //                         ${booking.totalCost}
        //                     </td>

        //                     {/* Status */}
        //                     <td className="px-6 py-5">

        //                         <span
        //                             className={`rounded-full px-4 py-1.5 text-sm font-medium

        //                         ${booking.status === "confirmed"
        //                                     ? "bg-green-100 text-green-700"
        //                                     : "bg-red-100 text-red-600"
        //                                 }

        //                     `}
        //                         >
        //                             {booking.status}
        //                         </span>

        //                     </td>

        //                     {/* Action */}
        //                     <td className="px-6 py-5 text-right">

        //                         {booking.status === "confirmed" ? (

        //                             <button className="rounded-xl border border-[#d8d1c7] px-5 py-2 text-sm font-medium text-[#1f2937] transition hover:bg-[#ece7df]">
        //                                 Cancel
        //                             </button>

        //                         ) : (

        //                             <span className="text-2xl text-[#7b8077]">
        //                                 —
        //                             </span>

        //                         )}

        //                     </td>

        //                 </tr>

        //             ))}

        //         </tbody>
        //     </table>
        // </div>







        // <div className="max-w-7xl mx-auto overflow-hidden rounded-2xl border  border-black mb-12  mt-12">

        //     {/* Empty State */}
        //     {bookings.length === 0 ? (

        //         <div className="flex flex-col items-center justify-center py-24 px-6 text-center">

        //             <div className="w-24 h-24 rounded-full  flex items-center justify-center mb-6">

        //                 <svg
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     className="w-12 h-12 text-[#7b8077]"
        //                     fill="none"
        //                     viewBox="0 0 24 24"
        //                     stroke="currentColor"
        //                     strokeWidth={1.7}
        //                 >
        //                     <path
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                         d="M9 17v-2a4 4 0 014-4h4m0 0l-3-3m3 3l-3 3"
        //                     />
        //                 </svg>

        //             </div>

        //             <h2 className="text-2xl font-semibold text-[#1f2937] mb-2">
        //                 No bookings found
        //             </h2>

        //             <p className="text-[#6b7280] max-w-md leading-7 mb-8">
        //                 You haven’t booked any study room yet.
        //                 Browse available rooms and reserve your perfect study space.
        //             </p>

        //             <Link href="/all-rooms">

        //                 <button className="rounded-2xl bg-[#9d4edd] hover:bg-[#7b2cbf] px-8 py-3 text-white font-medium transition-all duration-300 shadow-md hover:shadow-xl">

        //                     Booking Rooms

        //                 </button>

        //             </Link>

        //         </div>

        //     ) : (

        //         <div className="overflow-x-auto">

        //             <table className="w-full min-w-[900px]">

        //                 {/* Table Header */}
        //                 <thead className="border-b  ">

        //                     <tr className="text-left text-sm uppercase tracking-wide text-[#5f665d]">

        //                         <th className="px-6 py-5 font-semibold">
        //                             Room
        //                         </th>

        //                         <th className="px-6 py-5 font-semibold">
        //                             Date
        //                         </th>

        //                         <th className="px-6 py-5 font-semibold">
        //                             Time
        //                         </th>

        //                         <th className="px-6 py-5 font-semibold">
        //                             Cost
        //                         </th>

        //                         <th className="px-6 py-5 font-semibold">
        //                             Status
        //                         </th>

        //                         <th className="px-6 py-5 font-semibold text-right">
        //                             Action
        //                         </th>

        //                     </tr>

        //                 </thead>

        //                 {/* Table Body */}
        //                 <tbody>

        //                     {bookings.map((booking) => (

        //                         <tr
        //                             key={booking._id}
        //                             className="border-b border-[#d8d1c7] last:border-none hover:bg-purple-50 transition-colors duration-200"
        //                         >

        //                             {/* Room */}
        //                             <td className="px-6 py-5 ">

        //                                 <div className="flex items-center gap-4">

        //                                     <Image
        //                                         src={booking.roomImage}
        //                                         alt="Booking"
        //                                         width={70}
        //                                         height={70}
        //                                         className="h-16 w-16 rounded-2xl object-cover border border-[#ddd6cb]"
        //                                     />

        //                                     <div>

        //                                         <h3 className="text-lg font-semibold text-[#1f2937] line-clamp-1">

        //                                             {booking.roomName}

        //                                         </h3>



        //                                     </div>

        //                                 </div>

        //                             </td>

        //                             {/* Date */}
        //                             <td className="px-6 py-5">

        //                                 <p className="font-medium text-[#1f2937]">
        //                                     {booking.date}
        //                                 </p>

        //                             </td>

        //                             {/* Time */}
        //                             <td className="px-6 py-5">

        //                                 <div className="text-[#1f2937] font-medium">

        //                                     {booking.startTime} - {booking.endTime}

        //                                 </div>

        //                             </td>

        //                             {/* Cost */}
        //                             <td className="px-6 py-5">

        //                                 <span className="text-lg font-bold text-[#7b2cbf]">

        //                                     ${booking.totalCost}

        //                                 </span>

        //                             </td>

        //                             {/* Status */}
        //                             <td className="px-6 py-5">

        //                                 <span
        //                                     className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold border

        //                                 ${booking.status === "confirmed"
        //                                             ? "bg-green-100 text-green-700 border-green-200"
        //                                             : "bg-green-100 text-green-600 border-green-200"
        //                                         }
        //                             `}
        //                                 >

        //                                     {booking.status === "confirmed"
        //                                         ? "Confirmed"
        //                                         : "Cancelled"
        //                                     }

        //                                 </span>

        //                             </td>

        //                             {/* Action */}
        //                             <td className="px-6 py-5 text-right">



        //                                 <BookingCancel booking={booking}  bookingId={booking._id}/>


        //                             </td>

        //                             <td>

        //                             </td>

        //                         </tr>

        //                     ))}

        //                 </tbody>

        //             </table>

        //         </div>

        //     )}

        // </div>



        <div className="max-w-7xl mx-auto overflow-hidden rounded-2xl md:border border-black mb-12 mt-12">

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

                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border
                                ${booking.status === "confirmed"
                                            ? "bg-green-100 text-green-700 border-green-200"
                                            : "bg-green-100 text-green-600 border-green-200"
                                        }
                            `}>
                                        {booking.status === "confirmed" ? "Confirmed" : "Cancelled"}
                                    </span>

                                    <BookingCancel booking={booking} bookingId={booking._id} />

                                </div>

                            </div>
                        ))}

                    </div>

                    {/* ================= DESKTOP TABLE VIEW ================= */}
                    <div className="hidden md:block overflow-x-auto">

                        <table className="w-full min-w-[900px]">

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

                                            <span className={`px-4 py-2 rounded-full text-sm font-semibold border
                                        ${booking.status === "confirmed"
                                                    ? "bg-green-100 text-green-700 border-green-200"
                                                    : "bg-green-100 text-green-600 border-green-200"
                                                }
                                    `}>
                                                {booking.status === "confirmed"
                                                    ? "Confirmed"
                                                    : "Cancelled"}
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




        // <div className="max-w-7xl mx-auto overflow-hidden rounded-2xl border border-black mb-12 mt-12">

        //     {/* Empty State */}
        //     {bookings.length === 0 ? (

        //         <div className="flex flex-col items-center justify-center py-24 px-6 text-center">

        //             <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6">

        //                 <svg
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     className="w-12 h-12 text-[#7b8077]"
        //                     fill="none"
        //                     viewBox="0 0 24 24"
        //                     stroke="currentColor"
        //                     strokeWidth={1.7}
        //                 >
        //                     <path
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                         d="M9 17v-2a4 4 0 014-4h4m0 0l-3-3m3 3l-3 3"
        //                     />
        //                 </svg>

        //             </div>

        //             <h2 className="text-2xl font-semibold text-[#1f2937] mb-2">
        //                 No bookings found
        //             </h2>

        //             <p className="text-[#6b7280] max-w-md leading-7 mb-8">
        //                 You haven’t booked any study room yet.
        //                 Browse available rooms and reserve your perfect study space.
        //             </p>

        //             <Link href="/all-rooms">
        //                 <button className="rounded-2xl bg-[#9d4edd] hover:bg-[#7b2cbf] px-8 py-3 text-white font-medium transition-all duration-300 shadow-md hover:shadow-xl">
        //                     Booking Rooms
        //                 </button>
        //             </Link>

        //         </div>

        //     ) : (

        //         <div className="overflow-x-auto">

        //             {/* TABLE (Desktop) */}
        //             <table className="w-full min-w-[900px] hidden md:table">

        //                 <thead className="border-b">
        //                     <tr className="text-left text-sm uppercase tracking-wide text-[#5f665d]">

        //                         <th className="px-6 py-5 font-semibold">Room</th>
        //                         <th className="px-6 py-5 font-semibold">Date</th>
        //                         <th className="px-6 py-5 font-semibold">Time</th>
        //                         <th className="px-6 py-5 font-semibold">Cost</th>
        //                         <th className="px-6 py-5 font-semibold">Status</th>
        //                         <th className="px-6 py-5 font-semibold text-right">Action</th>

        //                     </tr>
        //                 </thead>

        //                 <tbody>

        //                     {bookings.map((booking) => (

        //                         <tr
        //                             key={booking._id}
        //                             className="border-b border-[#d8d1c7] last:border-none hover:bg-purple-50 transition-colors duration-200"
        //                         >

        //                             {/* Room */}
        //                             <td className="px-6 py-5">
        //                                 <div className="flex items-center gap-4">

        //                                     <Image
        //                                         src={booking.roomImage}
        //                                         alt="Booking"
        //                                         width={70}
        //                                         height={70}
        //                                         className="h-16 w-16 rounded-2xl object-cover border border-[#ddd6cb]"
        //                                     />

        //                                     <div>
        //                                         <h3 className="text-lg font-semibold text-[#1f2937] line-clamp-1">
        //                                             {booking.roomName}
        //                                         </h3>
        //                                         <p className="text-sm text-[#7b8077] mt-1">
        //                                             Study Room Booking
        //                                         </p>
        //                                     </div>

        //                                 </div>
        //                             </td>

        //                             <td className="px-6 py-5">{booking.date}</td>

        //                             <td className="px-6 py-5">
        //                                 {booking.startTime} - {booking.endTime}
        //                             </td>

        //                             <td className="px-6 py-5">
        //                                 <span className="text-lg font-bold text-[#7b2cbf]">
        //                                     ${booking.totalCost}
        //                                 </span>
        //                             </td>

        //                             <td className="px-6 py-5">
        //                                 <span className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold border
        //                             ${booking.status === "confirmed"
        //                                         ? "bg-green-100 text-green-700 border-green-200"
        //                                         : "bg-red-100 text-red-600 border-red-200"
        //                                     }`}>

        //                                     {booking.status === "confirmed"
        //                                         ? "Confirmed"
        //                                         : "Cancelled"
        //                                     }

        //                                 </span>
        //                             </td>

        //                             <td className="px-6 py-5 text-right">
        //                                 <BookingCancel booking={booking} bookingId={booking._id} />
        //                             </td>

        //                         </tr>

        //                     ))}

        //                 </tbody>

        //             </table>

        //             {/* CARD VIEW (Mobile) */}
        //             <div className="md:hidden space-y-4 p-4">

        //                 {bookings.map((booking) => (

        //                     <div
        //                         key={booking._id}
        //                         className="border rounded-2xl p-4 shadow-sm bg-white hover:shadow-md transition"
        //                     >

        //                         <div className="flex items-center gap-4 mb-3">

        //                             <Image
        //                                 src={booking.roomImage}
        //                                 alt="Booking"
        //                                 width={60}
        //                                 height={60}
        //                                 className="rounded-xl object-cover"
        //                             />

        //                             <div>
        //                                 <h3 className="font-semibold text-[#1f2937]">
        //                                     {booking.roomName}
        //                                 </h3>

        //                                 <p className="text-xs text-[#7b8077]">
        //                                     Study Room Booking
        //                                 </p>
        //                             </div>

        //                         </div>

        //                         <div className="text-sm text-gray-600 space-y-1">
        //                             <p><b>Date:</b> {booking.date}</p>
        //                             <p><b>Time:</b> {booking.startTime} - {booking.endTime}</p>
        //                             <p><b>Cost:</b> ${booking.totalCost}</p>
        //                         </div>

        //                         <div className="flex items-center justify-between mt-3">

        //                             <span className={`px-3 py-1 text-xs rounded-full border
        //                         ${booking.status === "confirmed"
        //                                     ? "bg-green-100 text-green-700 border-green-200"
        //                                     : "bg-red-100 text-red-600 border-red-200"
        //                                 }`}>

        //                                 {booking.status === "confirmed"
        //                                     ? "Confirmed"
        //                                     : "Cancelled"
        //                                 }

        //                             </span>

        //                             <BookingCancel booking={booking} bookingId={booking._id} />

        //                         </div>

        //                     </div>

        //                 ))}

        //             </div>

        //         </div>

        //     )}

        // </div>


    );
};

export default MyBookings;