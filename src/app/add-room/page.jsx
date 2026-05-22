// 'use client';

// import React from 'react';
// // import toast from 'react-hot-toast';
// import {
//     Building2,
//     MapPin,
//     DollarSign,
//     Users,
//     Clock3,
//     Mail,
//     ImageIcon,
//     FileText,
// } from 'lucide-react';

// const AddRoomPage = () => {

const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    // const formData = new FormData(form);
    // const room = Object.fromEntries(formData.entries());
    // console.log(room)



    const formData = new FormData(form);

    const room = {
        roomName: formData.get("roomName"),
        image: formData.get("image"),
        location: formData.get("location"),
        pricePerHour: formData.get("pricePerHour"),
        capacity: formData.get("capacity"),
        description: formData.get("description"),

        amenities: formData.getAll("amenities"),
    };

    console.log(room)


    try {

        const res = await fetch(
            `http://localhost:5000/room`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(room),
            }
        );

        const data = await res.json();
        console.log(data)

        if (data?.insertedId || data?.success) {
            // toast.success('Room Added Successfully!');
            form.reset();
        }

    } catch (error) {
        // toast.error('Something went wrong!');
    }
};

//     return (
//         <section className="min-h-screen  py-16 px-4">

//             <div className="max-w-6xl mx-auto">

{/* Heading */ }
{/* <div className="text-center mb-14">

    <div className="inline-flex items-center gap-2 border border-[#9d4edd]/20 px-5 py-2 rounded-full text-sm text-[#9d4edd] mb-5">
        <Building2 size={18} />
        Study Room Management
    </div>

    <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
        Add New
        <span className="text-[#9d4edd]">
            {' '}Room
        </span>
    </h1>

    <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-8 text-base md:text-lg">
        Share your study room with students and earn money.
    </p>

</div> */}

//                 {/* Form Card */}
//                 <div className="bg-white rounded-[36px] p-6 md:p-10">

//                     <form
//                         onSubmit={onSubmit}
//                         className="space-y-8"
//                     >

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

//                             {/* Room Name */}
//                             <div>
//                                 <label className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
//                                     <Building2 size={18} className="text-[#9d4edd]" />
//                                     Room Name
//                                 </label>

//                                 <input
//                                     type="text"
//                                     name="roomName"
//                                     placeholder="Enter room name"
//                                     className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d4edd]/30 focus:border-[#9d4edd]"
//                                     required
//                                 />
//                             </div>





//                             {/* Image */}
//                             <div>
//                                 <label className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
//                                     <ImageIcon size={18} className="text-[#9d4edd]" />
//                                     Room Image URL
//                                 </label>

//                                 <input
//                                     type="text"
//                                     name="image"
//                                     placeholder="Paste image URL"
//                                     className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d4edd]/30 focus:border-[#9d4edd]"
//                                     required
//                                 />
//                             </div>

//                             {/* Floor */}
//                             <div>
//                                 <label className=" font-semibold mb-3 flex items-center gap-2">
//                                     <MapPin size={18} className="text-[#9d4edd]" />
//                                     Floor
//                                 </label>

//                                 <input
//                                     type="text"
//                                     name="location"
//                                     placeholder="Enter room location"
//                                     className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d4edd]/30 focus:border-[#9d4edd]"
//                                     required
//                                 />
//                             </div>

//                             {/* Price */}
//                             <div>
//                                 <label className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
//                                     <DollarSign size={18} className="text-[#9d4edd]" />
//                                     Price Per Hour
//                                 </label>

//                                 <input
//                                     type="number"
//                                     name="pricePerHour"
//                                     placeholder="$20"
//                                     className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d4edd]/30 focus:border-[#9d4edd]"
//                                     required
//                                 />
//                             </div>

//                             {/* Capacity */}
//                             <div>
//                                 <label className=" font-semibold mb-3 flex items-center gap-2">
//                                     <Users size={18} className="text-[#9d4edd]" />
//                                     Capacity
//                                 </label>

//                                 <input
//                                     type="number"
//                                     name="capacity"
//                                     placeholder="Maximum people"
//                                     className="w-full h-14 rounded-2xl border border-gray-200 bg-white px-5  placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d4edd]/30 focus:border-[#9d4edd]"
//                                     required
//                                 />
//                             </div>



//                             {/* Description */}
//                             <div className="md:col-span-2">
//                                 <label className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
//                                     <FileText size={18} className="text-[#9d4edd]" />
//                                     Description
//                                 </label>

//                                 <textarea
//                                     rows="6"
//                                     name="description"
//                                     placeholder="Write complete room details..."
//                                     className="w-full rounded-3xl border border-gray-200 bg-white px-5 py-4 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d4edd]/30 focus:border-[#9d4edd]"
//                                     required
//                                 ></textarea>
//                             </div>


//                             {/* Amenities */}
//                             <div>
//                                 <label className="text-gray-800 font-semibold mb-4 block">
//                                     Amenities
//                                 </label>

//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//                                     <label className="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-3 cursor-pointer hover:border-[#9d4edd] transition">
//                                         <input
//                                             type="checkbox"
//                                             name="amenities"
//                                             value="Whiteboard"
//                                             className="checkbox checkbox-sm border-[#9d4edd] checked:bg-[#9d4edd] checked:border-[#9d4edd]"
//                                         />
//                                         <span className="text-gray-700">
//                                             Whiteboard
//                                         </span>
//                                     </label>

//                                     <label className="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-3 cursor-pointer hover:border-[#9d4edd] transition">
//                                         <input
//                                             type="checkbox"
//                                             name="amenities"
//                                             value="Projector"
//                                             className="checkbox checkbox-sm border-[#9d4edd] checked:bg-[#9d4edd] checked:border-[#9d4edd]"
//                                         />
//                                         <span className="text-gray-700">
//                                             Projector
//                                         </span>
//                                     </label>

//                                     <label className="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-3 cursor-pointer hover:border-[#9d4edd] transition">
//                                         <input
//                                             type="checkbox"
//                                             name="amenities"
//                                             value="Wi-Fi"
//                                             className="checkbox checkbox-sm border-[#9d4edd] checked:bg-[#9d4edd] checked:border-[#9d4edd]"
//                                         />
//                                         <span className="text-gray-700">
//                                             Wi-Fi
//                                         </span>
//                                     </label>

//                                     <label className="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-3 cursor-pointer hover:border-[#9d4edd] transition">
//                                         <input
//                                             type="checkbox"
//                                             name="amenities"
//                                             value="Power Outlets"
//                                             className="checkbox checkbox-sm border-[#9d4edd] checked:bg-[#9d4edd] checked:border-[#9d4edd]"
//                                         />
//                                         <span className="text-gray-700">
//                                             Power Outlets
//                                         </span>
//                                     </label>

//                                     <label className="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-3 cursor-pointer hover:border-[#9d4edd] transition">
//                                         <input
//                                             type="checkbox"
//                                             name="amenities"
//                                             value="Quiet Zone"
//                                             className="checkbox checkbox-sm border-[#9d4edd] checked:bg-[#9d4edd] checked:border-[#9d4edd]"
//                                         />
//                                         <span className="text-gray-700">
//                                             Quiet Zone
//                                         </span>
//                                     </label>

//                                     <label className="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-3 cursor-pointer hover:border-[#9d4edd] transition">
//                                         <input
//                                             type="checkbox"
//                                             name="amenities"
//                                             value="Air Conditioning"
//                                             className="checkbox checkbox-sm border-[#9d4edd] checked:bg-[#9d4edd] checked:border-[#9d4edd]"
//                                         />
//                                         <span className="text-gray-700">
//                                             Air Conditioning
//                                         </span>
//                                     </label>

//                                 </div>
//                             </div>





//                         </div>

//                         {/* Button */}
//                         <div className="pt-2">

//                             <button
//                                 type="submit"
//                                 className="w-full md:w-auto px-12 py-4 rounded-2xl bg-[#9d4edd] text-white font-bold text-lg shadow-[0_12px_30px_rgba(53,143,128,0.30)] hover:bg-[#2d7a6d] hover:scale-[1.02] transition-all duration-300"
//                             >
//                                 Add Room
//                             </button>

//                         </div>

//                     </form>

//                 </div>

//             </div>

//         </section>
//     );
// };

// export default AddRoomPage;













// -----------------------------------------------------------



import Addroomform from "@/components/Addroomform";
import { Building2 } from "lucide-react";

const AddRoomPage = () => {
    return (
        <section className="min-h-screen py-16 px-4">

            <div className="max-w-6xl mx-auto">


                {/* Heading */}
                <div className="text-center mb-14">

                    <div className="inline-flex items-center gap-2 border border-[#9d4edd]/20 px-5 py-2 rounded-full text-sm text-[#9d4edd] mb-5">
                        <Building2 size={18} />
                        Study Room Management
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                        Add New
                        <span className="text-[#9d4edd]">
                            {' '}Room
                        </span>
                    </h1>

                    <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-8 text-base md:text-lg">
                        Share your study room with students and earn money.
                    </p>

                </div>

                {/* Client Form */}
                <Addroomform />

            </div>

        </section>
    );
};

export default AddRoomPage;