"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Building2, DollarSign, FileText, ImageIcon, MapPin, MessageSquare, Pencil, Users } from "lucide-react";
import toast from "react-hot-toast";

export function EditModal({ room }) {


    // const onSubmit = async (e) => {
    //     e.preventDefault();

    //     const form = e.currentTarget;

    //     const formData = new FormData(form);
    //     const room = Object.fromEntries(formData.entries());
    //     console.log(room)



    //     // const formData = new FormData(form);

    //     // const room = {
    //     //     roomName: formData.get("roomName"),
    //     //     image: formData.get("image"),
    //     //     floor: formData.get("floor"),
    //     //     pricePerHour: formData.get("pricePerHour"),
    //     //     capacity: formData.get("capacity"),
    //     //     description: formData.get("description"),

    //     //     amenities: formData.getAll("amenities"),
    //     // };

    //     // console.log(room)




    //     const res = await fetch(
    //         // `http://localhost:5000/room`,
    //         // {
    //         //     method: 'POST',
    //         //     headers: {
    //         //         'Content-Type': 'application/json',
    //         //     },
    //         //     body: JSON.stringify(room),
    //         // }
    //     );

    //     const data = await res.json();
    //     console.log(data)

    //     if (data) {
    //         toast.success('Room Added Successfully!');
    //         // form.reset();
    //         redirect('/all-rooms')

    //     }

    // };



    const onSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;

        const formData = new FormData(form);

        const updatedRoom = {
            roomName: formData.get("roomName"),
            image: formData.get("image"),
            floor: formData.get("floor"),
            pricePerHour: formData.get("pricePerHour"),
            capacity: formData.get("capacity"),
            description: formData.get("description"),

            amenities: formData.getAll("amenities"),
        };


        const{data:tokenData} = await authClient.token()
        console.log(tokenData)

        try {

            const res = await fetch(
                `http://localhost:5000/room/${room._id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${tokenData?.token}`
                    },
                    body: JSON.stringify(updatedRoom),
                }
            );

            const data = await res.json();

            console.log(data);

            if (data.modifiedCount > 0) {

                toast.success("Room Updated Successfully!");
                window.location.reload();

            }

        } catch (error) {

            // console.log(error);
            toast.error(error);

        }
    };


    return (
        <Modal>

            <Modal.Trigger>

                <button className="flex-1 flex items-center justify-center gap-1.5 border border-gray-200 hover:bg-gray-300 cursor-pointer text-gray-700 text-sm font-medium py-2.5 rounded-xl transition-colors duration-200 px-10">
                    <Pencil className='w-4 h-4' />
                    Edit
                </button>

            </Modal.Trigger>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-4xl">
                        <Modal.CloseTrigger />
                        {/* <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">

                            </Modal.Icon>
                            <Modal.Heading>Contact Us</Modal.Heading>

                        </Modal.Header> */}

                        <Modal.Header className="flex flex-col items-center justify-center  pb-6 text-center border-b border-muted/30">

                            {/* Icon container */}
                            <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9d4edd]/10 to-[#7b2cbf]/10 text-[#7b2cbf] shadow-sm ring-4 ring-[#9d4edd]/10 ">

                                <MessageSquare className=" stroke-[1.75]" />

                                {/* soft pulse dot */}
                                <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#9d4edd] rounded-full animate-ping opacity-60"></span>

                            </div>

                            {/* Heading */}
                            <Modal.Heading className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                                Edit Your Room !!
                            </Modal.Heading>


                        </Modal.Header>



                        <Modal.Body className="p-2 md:p-6">
                            <Surface variant="default">
                                <div className="rounded-[36px] lg:p-6 md:p-10">

                                    <form onSubmit={onSubmit}>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 bg-[#e0aaff]/7 lg:p-10 rounded-2xl">

                                            {/* Room Name */}
                                            <div>
                                                <label className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                                    <Building2 size={18} className="text-[#9d4edd]" />
                                                    Room Name
                                                </label>

                                                <input
                                                    type="text"
                                                    name="roomName"
                                                    placeholder="Enter room name"
                                                    className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d4edd]/30 focus:border-[#9d4edd]"
                                                    required
                                                    defaultValue={room.roomName}
                                                />
                                            </div>





                                            {/* Image */}
                                            <div>
                                                <label className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                                    <ImageIcon size={18} className="text-[#9d4edd]" />
                                                    Room Image URL
                                                </label>

                                                <input
                                                    type="text"
                                                    name="image"
                                                    placeholder="Paste image URL"
                                                    className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d4edd]/30 focus:border-[#9d4edd]"
                                                    required
                                                    defaultValue={room.image}
                                                />
                                            </div>

                                            {/* Floor */}
                                            <div>
                                                <label className=" font-semibold mb-3 flex items-center gap-2">
                                                    <MapPin size={18} className="text-[#9d4edd]" />
                                                    Floor
                                                </label>

                                                <input
                                                    type="text"
                                                    name="floor"
                                                    placeholder="Enter room Floor"
                                                    className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d4edd]/30 focus:border-[#9d4edd]"
                                                    required
                                                    defaultValue={room.floor}
                                                />
                                            </div>

                                            {/* Price */}
                                            <div>
                                                <label className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                                    <DollarSign size={18} className="text-[#9d4edd]" />
                                                    Price Per Hour
                                                </label>

                                                <input
                                                    type="number"
                                                    name="pricePerHour"
                                                    placeholder="$20"
                                                    className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d4edd]/30 focus:border-[#9d4edd]"
                                                    required
                                                    defaultValue={room.pricePerHour}
                                                />
                                            </div>

                                            {/* Capacity */}
                                            <div>
                                                <label className=" font-semibold mb-3 flex items-center gap-2">
                                                    <Users size={18} className="text-[#9d4edd]" />
                                                    Capacity
                                                </label>

                                                <input
                                                    type="number"
                                                    name="capacity"
                                                    placeholder="Maximum people"
                                                    className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5  placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d4edd]/30 focus:border-[#9d4edd]"
                                                    required
                                                    defaultValue={room.capacity}
                                                />
                                            </div>



                                            {/* Description */}
                                            <div className="md:col-span-2">
                                                <label className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
                                                    <FileText size={18} className="text-[#9d4edd]" />
                                                    Description
                                                </label>

                                                <textarea
                                                    rows="6"
                                                    name="description"
                                                    placeholder="Write complete room details..."
                                                    className="w-full rounded-3xl border border-gray-200 bg-white px-5 py-4 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d4edd]/30 focus:border-[#9d4edd]"
                                                    required
                                                    defaultValue={room.description}
                                                ></textarea>
                                            </div>


                                            {/* Amenities */}
                                            <div>
                                                <label className="text-gray-800 font-semibold mb-4 block">
                                                    Amenities
                                                </label>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                                    <label className="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-3 cursor-pointer hover:border-[#9d4edd] transition">
                                                        <input
                                                            type="checkbox"
                                                            name="amenities"
                                                            value="Whiteboard"
                                                            className="checkbox checkbox-sm border-[#9d4edd] checked:bg-[#9d4edd] checked:border-[#9d4edd]"
                                                            defaultChecked={room?.amenities?.includes("Whiteboard")}
                                                        />
                                                        <span className="text-gray-700">
                                                            Whiteboard
                                                        </span>
                                                    </label>

                                                    <label className="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-3 cursor-pointer hover:border-[#9d4edd] transition">
                                                        <input
                                                            type="checkbox"
                                                            name="amenities"
                                                            value="Projector"
                                                            className="checkbox checkbox-sm border-[#9d4edd] checked:bg-[#9d4edd] checked:border-[#9d4edd]"
                                                            defaultChecked={room?.amenities?.includes("Projector")}
                                                        />
                                                        <span className="text-gray-700">
                                                            Projector
                                                        </span>
                                                    </label>

                                                    <label className="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-3 cursor-pointer hover:border-[#9d4edd] transition">
                                                        <input
                                                            type="checkbox"
                                                            name="amenities"
                                                            value="Wi-Fi"
                                                            className="checkbox checkbox-sm border-[#9d4edd] checked:bg-[#9d4edd] checked:border-[#9d4edd]"
                                                            defaultChecked={room?.amenities?.includes("Wi-Fi")}
                                                        />
                                                        <span className="text-gray-700">
                                                            Wi-Fi
                                                        </span>
                                                    </label>

                                                    <label className="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-3 cursor-pointer hover:border-[#9d4edd] transition">
                                                        <input
                                                            type="checkbox"
                                                            name="amenities"
                                                            value="Power Outlets"
                                                            className="checkbox checkbox-sm border-[#9d4edd] checked:bg-[#9d4edd] checked:border-[#9d4edd]"
                                                            defaultChecked={room?.amenities?.includes("Power Outlets")}
                                                        />
                                                        <span className="text-gray-700">
                                                            Power Outlets
                                                        </span>
                                                    </label>

                                                    <label className="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-3 cursor-pointer hover:border-[#9d4edd] transition">
                                                        <input
                                                            type="checkbox"
                                                            name="amenities"
                                                            value="Quiet Zone"
                                                            className="checkbox checkbox-sm border-[#9d4edd] checked:bg-[#9d4edd] checked:border-[#9d4edd]"
                                                            defaultChecked={room?.amenities?.includes("Quiet Zone")}
                                                        />
                                                        <span className="text-gray-700">
                                                            Quiet Zone
                                                        </span>
                                                    </label>

                                                    <label className="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-3 cursor-pointer hover:border-[#9d4edd] transition">
                                                        <input
                                                            type="checkbox"
                                                            name="amenities"
                                                            value="Air Conditioning"
                                                            className="checkbox checkbox-sm border-[#9d4edd] checked:bg-[#9d4edd] checked:border-[#9d4edd]"
                                                            defaultChecked={room?.amenities?.includes("Air Conditioning")}
                                                        />
                                                        <span className="text-gray-700">
                                                            Air Conditioning
                                                        </span>
                                                    </label>

                                                </div>
                                            </div>





                                        </div>

                                        {/* Button */}
                                        <div className="pt-2">

                                            <button
                                                type="submit"
                                                className="w-full md:w-auto px-12 py-4 rounded-2xl bg-[#9d4edd] text-white font-bold text-lg shadow-[0_12px_30px_rgba(53,143,128,0.30)] hover:bg-[#240046] hover:scale-[1.02] transition-all duration-300"
                                            >
                                                Update Room
                                            </button>

                                        </div>

                                    </form>

                                </div>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}