"use client"

import { Button, Card, Chip } from '@heroui/react';
import { MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";









const cardVariant = {
  hidden: { 
    opacity: 0, 
    x: -60, // Slightly deeper starting point to appreciate the longer glide
    scale: 0.97 
  },
  show: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: i * 0.12, // Slower, more intentional stagger wave (120ms)
      duration: 0.85,  // Increased from 0.45s to 0.85s for a rich, cinematic crawl
      ease: [0.22, 1, 0.36, 1], // A majestic cubic-bezier that stays smooth at slow speeds
    },
  }),
};




const RoomCard = ({ room }) => {


    return (
        <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
                scale: 1.03,
                y: -5,
                transition: { duration: 0.2 }
            }}
        >
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
                    <div className="absolute top-3 right-3 bg-[#f3e8ff] text-black px-3 py-1.5 rounded-xl shadow-md">

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
                                <span>Floor {room.floor}</span>
                            </div>

                            <div className="flex items-center gap-1 text-gray-500">
                                <Users size={14} />
                                <span>{room.capacity} People</span>
                            </div>

                        </div>

                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-6 line-clamp-1">
                        {room.description}
                    </p>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2">

                        {room.amenities
                            ?.slice(0, 3)
                            .map((item, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 rounded-full bg-[#f3e8ff] text-[#7b2cbf] text-xs font-medium"
                                >
                                    {item}
                                </span>
                            ))}

                        {room.amenities?.length > 3 && (
                            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                                +{room.amenities.length - 3} more
                            </span>
                        )}

                    </div>

                    {/* Button */}
                    <Link href={`/all-rooms/${room._id}`}>
                        <Button className="w-full h-11 rounded-xl bg-[#9d4edd] hover:bg-[#7b2cbf] text-white font-semibold text-sm transition-all duration-300">
                            View Details
                        </Button>
                    </Link>

                </div>

            </Card>
        </motion.div>
    );
};

export default RoomCard;