

"use client";

import { useMemo, useState } from "react";
import { Modal } from "@heroui/react";
import { BookOpen, Clock3, CalendarDays, StickyNote, Book } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function BookingModal({ room }) {

    const router = useRouter();


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

            // roomId: room?._id,
            roomName: room?.roomName,
            roomImage: room?.image,

            date,
            startTime,
            endTime,
            totalCost,
            note,


        };

        console.log(bookingData)


        //  console.log(data)

        try {
            
            const { data: tokenData } = await authClient.token()

            const res = await fetch("http://localhost:5000/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${tokenData?.token}`
                },
                body: JSON.stringify(bookingData),
            });

            const data = await res.json();
            console.log(data)

            if (!res.ok) {
                toast.error(data.message || "Booking failed");
                return;
            }

            if (data) {
                toast.success("Room booked successfully!");
                router.push("/my-booking")

            }

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
                <button className="w-full flex mx-10 items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:bg-[#3c096c] text-white text-sm font-semibold py-3 rounded-xl transition-colors duration-200 mb-3">
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



