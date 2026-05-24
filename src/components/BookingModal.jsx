// "use client";

// import { useMemo, useState } from "react";
// import { Modal } from "@heroui/react";
// import { BookOpen, Clock3, CalendarDays, StickyNote, Book } from "lucide-react";

// export default function BookingModal({ room }) {

//     const timeSlots = [
//         "08:00",
//         "09:00",
//         "10:00",
//         "11:00",
//         "12:00",
//         "13:00",
//         "14:00",
//         "15:00",
//         "16:00",
//         "17:00",
//         "18:00",
//         "19:00",
//         "20:00",
//     ];

//     const [date, setDate] = useState("");
//     const [startTime, setStartTime] = useState("");
//     const [endTime, setEndTime] = useState("");
//     const [note, setNote] = useState("");

//     // End time filtering
//     const availableEndTimes = useMemo(() => {

//         if (!startTime) return [];

//         const startIndex = timeSlots.indexOf(startTime);

//         return timeSlots.slice(startIndex + 1);

//     }, [startTime]);



//     // Total Cost Calculation
//     const totalCost = useMemo(() => {

//         if (!startTime || !endTime) return 0;

//         const startHour = parseInt(startTime.split(":")[0]);

//         const endHour = parseInt(endTime.split(":")[0]);

//         return (endHour - startHour) * Number(room.pricePerHour);

//     }, [startTime, endTime, room.pricePerHour]);



//     const handleBooking = async (e) => {

//         e.preventDefault();

//         const bookingData = {
//             roomId: room._id,
//             roomName: room.roomName,
//             date,
//             startTime,
//             endTime,
//             totalCost,
//             note,
//         };

//         console.log(bookingData);

//         // এখানে পরে POST API call দিবা
//     };



//     return (
//         <Modal>

//             {/* Trigger Button */}
//             <Modal.Trigger>
//                 <button className="w-full flex mx-10 items-center justify-center gap-2 bg-[#9d4edd] hover:bg-[#3c096c] text-white text-sm font-semibold py-3 rounded-xl transition-colors duration-200 mb-3">
//                     <Book className='w-4 h-4' />
//                     Book Now
//                 </button>
//             </Modal.Trigger>



//             <Modal.Backdrop>

//                 <Modal.Container placement="center">

//                     <Modal.Dialog className="sm:max-w-xl rounded-3xl">

//                         <Modal.CloseTrigger />



//                         {/* Header */}
//                         <Modal.Header className="flex flex-col items-center justify-center text-center pt-8 pb-4 border-b border-gray-100">

//                             <div className="w-14 h-14 rounded-full bg-[#f3e8ff] flex items-center justify-center mb-4">

//                                 <BookOpen className="w-6 h-6 text-[#9d4edd]" />

//                             </div>

//                             <Modal.Heading className="text-2xl font-bold text-gray-900">

//                                 Book Study Room

//                             </Modal.Heading>

//                             <p className="text-sm text-gray-500 mt-1">

//                                 Complete your booking details below

//                             </p>

//                         </Modal.Header>



//                         {/* Body */}
//                         <Modal.Body className="p-6">

//                             <form
//                                 onSubmit={handleBooking}
//                                 className="space-y-5"
//                             >

//                                 {/* Date */}
//                                 <div>

//                                     <label className="font-semibold text-sm mb-2 flex items-center gap-2">

//                                         <CalendarDays className="w-4 h-4 text-[#9d4edd]" />

//                                         Booking Date

//                                     </label>

//                                     <input
//                                         type="date"
//                                         required
//                                         min={new Date().toISOString().split("T")[0]}
//                                         value={date}
//                                         onChange={(e) => setDate(e.target.value)}
//                                         className="w-full h-12 rounded-2xl border border-gray-200 px-4 outline-none focus:ring-2 focus:ring-[#9d4edd]/30"
//                                     />

//                                 </div>



//                                 {/* Time */}
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                                     {/* Start Time */}
//                                     <div>

//                                         <label className="font-semibold text-sm mb-2 flex items-center gap-2">

//                                             <Clock3 className="w-4 h-4 text-[#9d4edd]" />

//                                             Start Time

//                                         </label>

//                                         <select
//                                             required
//                                             value={startTime}
//                                             onChange={(e) => {
//                                                 setStartTime(e.target.value);
//                                                 setEndTime("");
//                                             }}
//                                             className="w-full h-12 rounded-2xl border border-gray-200 px-4 outline-none focus:ring-2 focus:ring-[#9d4edd]/30"
//                                         >

//                                             <option value="">
//                                                 Select Start Time
//                                             </option>

//                                             {timeSlots.map((slot) => (

//                                                 <option
//                                                     key={slot}
//                                                     value={slot}
//                                                 >
//                                                     {slot}
//                                                 </option>

//                                             ))}

//                                         </select>

//                                     </div>



//                                     {/* End Time */}
//                                     <div>

//                                         <label className="font-semibold text-sm mb-2 flex items-center gap-2">

//                                             <Clock3 className="w-4 h-4 text-[#9d4edd]" />

//                                             End Time

//                                         </label>

//                                         <select
//                                             required
//                                             value={endTime}
//                                             onChange={(e) => setEndTime(e.target.value)}
//                                             className="w-full h-12 rounded-2xl border border-gray-200 px-4 outline-none focus:ring-2 focus:ring-[#9d4edd]/30"
//                                         >

//                                             <option value="">
//                                                 Select End Time
//                                             </option>

//                                             {availableEndTimes.map((slot) => (

//                                                 <option
//                                                     key={slot}
//                                                     value={slot}
//                                                 >
//                                                     {slot}
//                                                 </option>

//                                             ))}

//                                         </select>

//                                     </div>

//                                 </div>



//                                 {/* Total Cost */}
//                                 <div className="bg-[#f8f5ff] border border-[#e9d8fd] rounded-2xl p-5 flex items-center justify-between">

//                                     <div>

//                                         <p className="text-sm text-gray-500">
//                                             Total Cost
//                                         </p>

//                                         <h2 className="text-3xl font-bold text-[#7b2cbf]">

//                                             ${totalCost}

//                                         </h2>

//                                     </div>

//                                     <div className="text-right text-sm text-gray-500">

//                                         ${room.pricePerHour}/hour

//                                     </div>

//                                 </div>



//                                 {/* Note */}
//                                 <div>

//                                     <label className="font-semibold text-sm mb-2 flex items-center gap-2">

//                                         <StickyNote className="w-4 h-4 text-[#9d4edd]" />

//                                         Special Note

//                                     </label>

//                                     <textarea
//                                         rows={4}
//                                         value={note}
//                                         onChange={(e) => setNote(e.target.value)}
//                                         placeholder="Optional note..."
//                                         className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#9d4edd]/30"
//                                     />

//                                 </div>



//                                 {/* Button */}
//                                 <button
//                                     type="submit"
//                                     className="w-full h-12 rounded-2xl bg-[#9d4edd] hover:bg-[#7b2cbf] text-white font-semibold transition-all duration-300"
//                                 >

//                                     Confirm Booking

//                                 </button>

//                             </form>

//                         </Modal.Body>

//                     </Modal.Dialog>

//                 </Modal.Container>

//             </Modal.Backdrop>

//         </Modal>
//     );
// }











"use client";

import { useMemo, useState } from "react";
import { Modal } from "@heroui/react";
import { BookOpen, Clock3, CalendarDays, StickyNote, Book } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function BookingModal({ room }) {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [isOpen, setIsOpen] = useState(false);

    const timeSlots = [
        "08:00", "09:00", "10:00", "11:00", "12:00", "13:00",
        "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
    ];

    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [note, setNote] = useState("");

    // end time filter
    const availableEndTimes = useMemo(() => {
        if (!startTime) return [];
        const startIndex = timeSlots.indexOf(startTime);
        return timeSlots.slice(startIndex + 1);
    }, [startTime]);

    // cost
    const totalCost = useMemo(() => {
        if (!startTime || !endTime) return 0;

        const startHour = parseInt(startTime.split(":")[0]);
        const endHour = parseInt(endTime.split(":")[0]);

        return (endHour - startHour) * Number(room.pricePerHour);
    }, [startTime, endTime, room.pricePerHour]);

    const handleBooking = async (e) => {
        e.preventDefault();

        if (!user) {
            toast.error("Please login first");
            return;
        }

        const bookingData = {
            roomId: room._id,

            userId: user.id,
            userName: user.name,
            userEmail: user.email,
            userImage: user.image,

            date,
            startTime,
            endTime,
            totalCost,
            note,
        };
        
        console.log(bookingData)

        try {
            const res = await fetch("http://localhost:5000/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookingData),
            });

            const data = await res.json();
            console.log(data)

            if (!res.ok) {
                toast.error(data.message || "Booking failed");
                return;
            }

            toast.success("Room booked successfully!");

            // reset
            setDate("");
            setStartTime("");
            setEndTime("");
            setNote("");

            // close modal
            setIsOpen(false);

        } catch (error) {
            toast.error("Something went wrong!");
        }
    };

    return (
        <Modal open={isOpen} onOpenChange={setIsOpen}>

            {/* Trigger */}
            <Modal.Trigger>
                <button className="w-full flex mx-10 items-center justify-center gap-2 bg-[#9d4edd] hover:bg-[#3c096c] text-white text-sm font-semibold py-3 rounded-xl transition-colors duration-200 mb-3">
                    <Book className='w-4 h-4' />
                    Book Now
                </button>
            </Modal.Trigger>

            <Modal.Backdrop>
                <Modal.Container placement="center">

                    <Modal.Dialog className="sm:max-w-xl rounded-3xl">

                        <Modal.CloseTrigger />

                        {/* Header */}
                        <Modal.Header className="text-center pt-8 pb-4 border-b border-gray-100">

                            <div className="w-14 h-14 rounded-full bg-[#f3e8ff] flex items-center justify-center mb-4 mx-auto">
                                <BookOpen className="w-6 h-6 text-[#9d4edd]" />
                            </div>

                            <Modal.Heading className="text-2xl font-bold">
                                Book Study Room
                            </Modal.Heading>

                        </Modal.Header>

                        {/* Body */}
                        <Modal.Body className="p-6">

                            <form onSubmit={handleBooking} className="space-y-5">

                                {/* Date */}
                                <input
                                    type="date"
                                    min={new Date().toISOString().split("T")[0]}
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="w-full h-12 border rounded-xl px-4"
                                    required
                                />

                                {/* Times */}
                                <div className="grid grid-cols-2 gap-4">

                                    <select
                                        value={startTime}
                                        onChange={(e) => {
                                            setStartTime(e.target.value);
                                            setEndTime("");
                                        }}
                                        className="h-12 border rounded-xl px-4"
                                        required
                                    >
                                        <option value="">Start</option>
                                        {timeSlots.map(t => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </select>

                                    <select
                                        value={endTime}
                                        onChange={(e) => setEndTime(e.target.value)}
                                        className="h-12 border rounded-xl px-4"
                                        required
                                    >
                                        <option value="">End</option>
                                        {availableEndTimes.map(t => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </select>

                                </div>

                                {/* Cost */}
                                <div className="p-4 bg-purple-50 rounded-xl">
                                    Total: ${totalCost}
                                </div>

                                {/* Note */}
                                <textarea
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                    className="w-full border rounded-xl p-3"
                                    placeholder="Note (optional)"
                                />

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full h-12 bg-[#9d4edd] text-white rounded-xl font-semibold"
                                >
                                    Confirm Booking
                                </button>

                            </form>

                        </Modal.Body>

                    </Modal.Dialog>

                </Modal.Container>
            </Modal.Backdrop>

        </Modal>
    );
}



