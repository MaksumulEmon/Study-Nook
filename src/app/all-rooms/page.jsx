// import RoomCard from '@/components/RoomCard';
// import SearchFilter from '@/components/SearchFilter';
// import { Building2 } from 'lucide-react';
// import Link from 'next/link';
// import React from 'react';




// export const metadata = {
//     title: "StudyNook – Available Rooms",
// };



// const AllRooms = async () => {
//     const res = await fetch('http://localhost:5000/room')
//     const rooms = await res.json();

//     console.log(rooms)

//     // const { data: session } = authClient.useSession();
//     // const user = session?.user;


//     return (
//         <div className='max-w-7xl mx-auto'>
//             <h1 className="text-3xl pb-5 text-center pt-8 md:text-4xl font-black text-gray-900 tracking-tight">
//                 All Rooms
//             </h1>


//             {
//                 rooms.length === 0 ? (

//                     <div className="flex flex-col items-center justify-center py-24 text-center">

//                         <div className="w-24 h-24 rounded-full bg-[#f3e8ff] flex items-center justify-center mb-6">

//                             <Building2
//                                 size={40}
//                                 className="text-[#9d4edd]"
//                             />

//                         </div>

//                         <h2 className="text-2xl font-bold text-gray-900">
//                             No Rooms Found
//                         </h2>

//                         <p className="text-gray-500 mt-3 max-w-md leading-7">
//                             Sorry, there are currently no study rooms available.
//                             Please check again later or add a new room.
//                         </p>

//                         <Link href="/add-room">
//                             <button className="px-5 py-3 rounded-xl bg-[#9d4edd] mt-3 text-white font-semibold text-sm md:text-base shadow-md hover:bg-[#7b2cbf] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
//                                 + Add New Room
//                             </button>
//                         </Link>

//                     </div>

//                 ) : (

//                     <div>
//                         <SearchFilter search={search}
//                             setSearch={setSearch}
//                             selectedAmenities={selectedAmenities}
//                             setSelectedAmenities={setSelectedAmenities}
//                             minPrice={minPrice}
//                             setMinPrice={setMinPrice}
//                             maxPrice={maxPrice}
//                             setMaxPrice={setMaxPrice} />


//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 md:mx-0">

//                             {rooms.map((room) => (
//                                 <RoomCard
//                                     key={room._id}
//                                     room={room}
//                                 />
//                             ))}

//                         </div>
//                     </div>

//                 )
//             }
//         </div>
//     );
// };

// export default AllRooms;













"use client";

import RoomCard from '@/components/RoomCard';
import SearchFilter from '@/components/SearchFilter';
import { Building2 } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const AllRooms = () => {

    const [rooms, setRooms] = useState([]);

    const [search, setSearch] = useState('');
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    //  DATA FROM BACKEND
    useEffect(() => {
        const fetchRooms = async () => {

            const params = new URLSearchParams();

            if (search) params.append("search", search);
            if (selectedAmenities.length > 0)
                params.append("amenities", selectedAmenities.join(","));
            if (minPrice) params.append("minPrice", minPrice);
            if (maxPrice) params.append("maxPrice", maxPrice);

            const res = await fetch(`http://localhost:5000/room?${params.toString()}`);
            const data = await res.json();

            setRooms(data);
        };

        fetchRooms();

    }, [search, selectedAmenities, minPrice, maxPrice]);

    return (
        <div className="max-w-7xl mx-auto px-4">

            {/* TITLE */}
            <h1 className="text-3xl pb-5 text-center pt-8 md:text-4xl font-black text-gray-900 tracking-tight">
                All Rooms
            </h1>



           
            <p className="text-gray-500 mb-6 text-sm md:text-base">
                {rooms.length} rooms found
            </p>



            <div className='flex flex-col lg:flex-row gap-8 '>

      

                <div className="w-full lg:w-[280px] shrink-0">

                    <div className="sticky top-30">
                        <SearchFilter
                            search={search}
                            setSearch={setSearch}
                            selectedAmenities={selectedAmenities}
                            setSelectedAmenities={setSelectedAmenities}
                            minPrice={minPrice}
                            setMinPrice={setMinPrice}
                            maxPrice={maxPrice}
                            setMaxPrice={setMaxPrice}
                        />
                    </div>

                </div>


                <div>

                    {
                        rooms.length === 0 ? (

                            <div className="flex flex-col items-center justify-center py-20 text-center">

                                <div className="w-24 h-24 rounded-full bg-[#f3e8ff] flex items-center justify-center mb-6">
                                    <Building2 size={40} className="text-[#9d4edd]" />
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900">
                                    No Matching Rooms Found
                                </h2>

                                <p className="text-gray-500 mt-3 max-w-md leading-7">
                                    Try changing your search or filters to find available rooms.
                                </p>

                            </div>

                        ) : (

                            <div className="flex flex-col lg:flex-row gap-6 mb-12">

                                {/* OPTIONAL SIDEBAR SPACE */}
                                <div className="w-full">

                                    {/* ROOM GRID */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                                        {rooms.map((room) => (
                                            <RoomCard
                                                key={room._id}
                                                room={room}
                                            />
                                        ))}

                                    </div>

                                </div>

                            </div>

                        )
                    }
                </div>


            </div>

        </div>
    );
};

export default AllRooms;






