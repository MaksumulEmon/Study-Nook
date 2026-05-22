import { Button, Card, Chip } from '@heroui/react';
import { MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RoomCard = ({ room }) => {
    return (
        <Card className="group overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden">

                <Image
                    src={room.image}
                    alt={room.roomName}
                    fill
                    className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />

                {/* Price */}
                <div className="absolute top-3 right-3 bg-[#9d4edd] text-white px-3 py-1.5 rounded-xl shadow-md">

                    <p className="text-[10px] font-medium leading-none opacity-90">
                        Per Hour
                    </p>

                    <h2 className="text-sm font-bold">
                        ${room.pricePerHour}
                    </h2>

                </div>

            </div>

            {/* Content */}
            <div className="p-4 space-y-4">

                {/* Title */}
                <div>

                    <h2 className="text-lg font-bold text-gray-900 line-clamp-1">
                        {room.roomName}
                    </h2>

                    <div className="flex items-center justify-between mt-2 text-sm">

                        <div className="flex items-center gap-1 text-gray-500">

                            <MapPin size={14} />

                            <span>
                                Floor {room.floor}
                            </span>

                        </div>

                        <div className="flex items-center gap-1 text-gray-500">

                            <Users size={14} />

                            <span>
                                {room.capacity} People
                            </span>

                        </div>

                    </div>

                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-6 line-clamp-1">
                    {room.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2">

                    {(Array.isArray(room?.amenities)
                        ? room.amenities
                        : [room?.amenities]
                    )
                        .slice(0, 3)
                        .map((item, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 rounded-full bg-[#f3e8ff] text-[#7b2cbf] text-xs font-medium"
                            >
                                {item}
                            </span>
                        ))}

                    {room?.amenities?.length > 3 && (
                        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-medium">
                            ...
                        </span>
                    )}

                </div>

                {/* Button */}
                <Link href={`/all-rooms/${room._id}`}>

                    <Button
                        className="w-full h-11 rounded-xl bg-[#9d4edd] hover:bg-[#7b2cbf] text-white font-semibold text-sm transition-all duration-300"
                    >
                        View Details
                    </Button>

                </Link>

            </div>

        </Card>
    );
};

export default RoomCard;