'use client';

import React from 'react';
// import toast from 'react-hot-toast';
import {
    Building2,
    MapPin,
    DollarSign,
    Users,
    Clock3,
    Mail,
    ImageIcon,
    FileText,
} from 'lucide-react';

const AddRoomPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;

        const formData = new FormData(form);
        const room = Object.fromEntries(formData.entries());

        try {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(room),
                }
            );

            const data = await res.json();

            if (data?.insertedId || data?.success) {
                // toast.success('Room Added Successfully!');
                form.reset();
            }

        } catch (error) {
            // toast.error('Something went wrong!');
        }
    };

    return (
        <section className="min-h-screen bg-[#f5fbfa] py-16 px-4">

            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-14">

                    <div className="inline-flex items-center gap-2 bg-[#358f80]/10 border border-[#358f80]/20 px-5 py-2 rounded-full text-sm text-[#358f80] mb-5">
                        <Building2 size={18} />
                        Study Room Management
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                        Add New
                        <span className="text-[#358f80]">
                            {' '}Room
                        </span>
                    </h1>

                    <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-8 text-base md:text-lg">
                        Create professional study room listings with pricing,
                        location, available slots, and complete details.
                    </p>

                </div>

                {/* Form Card */}
                <div className="bg-white rounded-[36px] border border-[#358f80]/10 shadow-[0_10px_40px_rgba(53,143,128,0.10)] p-6 md:p-10">

                    <form
                        onSubmit={onSubmit}
                        className="space-y-8"
                    >

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

                            {/* Room Name */}
                            <div>
                                <label className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                    <Building2 size={18} className="text-[#358f80]" />
                                    Room Name
                                </label>

                                <input
                                    type="text"
                                    name="roomName"
                                    placeholder="Enter room name"
                                    className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#358f80]/30 focus:border-[#358f80]"
                                    required
                                />
                            </div>

                            {/* Room Type */}
                            <div>
                                <label className="text-gray-800 font-semibold mb-3 block">
                                    Room Type
                                </label>

                                <select
                                    name="roomType"
                                    defaultValue=""
                                    required
                                    className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#358f80]/30 focus:border-[#358f80]"
                                >
                                    <option value="" disabled>
                                        Select room type
                                    </option>

                                    <option value="Private Room">
                                        Private Room
                                    </option>

                                    <option value="Meeting Room">
                                        Meeting Room
                                    </option>

                                    <option value="Conference Room">
                                        Conference Room
                                    </option>

                                    <option value="Study Room">
                                        Study Room
                                    </option>

                                    <option value="Co-working Space">
                                        Co-working Space
                                    </option>

                                </select>
                            </div>

                            {/* Image */}
                            <div>
                                <label className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                    <ImageIcon size={18} className="text-[#358f80]" />
                                    Room Image URL
                                </label>

                                <input
                                    type="text"
                                    name="image"
                                    placeholder="Paste image URL"
                                    className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#358f80]/30 focus:border-[#358f80]"
                                    required
                                />
                            </div>

                            {/* Location */}
                            <div>
                                <label className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                    <MapPin size={18} className="text-[#358f80]" />
                                    Location
                                </label>

                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Enter room location"
                                    className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#358f80]/30 focus:border-[#358f80]"
                                    required
                                />
                            </div>

                            {/* Price */}
                            <div>
                                <label className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                    <DollarSign size={18} className="text-[#358f80]" />
                                    Price Per Hour
                                </label>

                                <input
                                    type="number"
                                    name="pricePerHour"
                                    placeholder="$20"
                                    className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#358f80]/30 focus:border-[#358f80]"
                                    required
                                />
                            </div>

                            {/* Capacity */}
                            <div>
                                <label className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                    <Users size={18} className="text-[#358f80]" />
                                    Capacity
                                </label>

                                <input
                                    type="number"
                                    name="capacity"
                                    placeholder="Maximum people"
                                    className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#358f80]/30 focus:border-[#358f80]"
                                    required
                                />
                            </div>

                            {/* Time Slots */}
                            <div className="md:col-span-2">
                                <label className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                    <Clock3 size={18} className="text-[#358f80]" />
                                    Available Time Slots
                                </label>

                                <input
                                    type="text"
                                    name="availableTimeSlots"
                                    placeholder="8AM - 10AM, 2PM - 5PM"
                                    className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#358f80]/30 focus:border-[#358f80]"
                                    required
                                />
                            </div>

                            {/* Owner Email */}
                            <div className="md:col-span-2">
                                <label className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                    <Mail size={18} className="text-[#358f80]" />
                                    Owner Email
                                </label>

                                <input
                                    type="email"
                                    name="ownerEmail"
                                    placeholder="Enter owner email"
                                    className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#358f80]/30 focus:border-[#358f80]"
                                    required
                                />
                            </div>

                            {/* Description */}
                            <div className="md:col-span-2">
                                <label className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                    <FileText size={18} className="text-[#358f80]" />
                                    Description
                                </label>

                                <textarea
                                    rows="6"
                                    name="description"
                                    placeholder="Write complete room details..."
                                    className="w-full rounded-3xl border border-gray-200 bg-white px-5 py-4 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#358f80]/30 focus:border-[#358f80]"
                                    required
                                ></textarea>
                            </div>

                        </div>

                        {/* Button */}
                        <div className="pt-2">

                            <button
                                type="submit"
                                className="w-full md:w-auto px-12 py-4 rounded-2xl bg-[#358f80] text-white font-bold text-lg shadow-[0_12px_30px_rgba(53,143,128,0.30)] hover:bg-[#2d7a6d] hover:scale-[1.02] transition-all duration-300"
                            >
                                Add Room
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </section>
    );
};

export default AddRoomPage;