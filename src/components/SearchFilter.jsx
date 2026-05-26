"use client";

import React from "react";

const SearchFilter = ({
    search,
    setSearch,
    selectedAmenities = [],
    setSelectedAmenities,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
}) => {

    const amenitiesList = [
        "Wi-Fi",
        "Projector",
        "Whiteboard",
        "Power Outlets",
        "Quiet Zone",
        "Air Conditioning",
    ];

    const handleAmenityChange = (amenity) => {
        if (selectedAmenities.includes(amenity)) {
            setSelectedAmenities(
                selectedAmenities.filter((item) => item !== amenity)
            );
        } else {
            setSelectedAmenities([...selectedAmenities, amenity]);
        }
    };

    const clearFilters = () => {
        setSearch("");
        setSelectedAmenities([]);
        setMinPrice("");
        setMaxPrice("");
    };

    return (
        <div className="p-4 border rounded-xl bg-white shadow-sm space-y-4">

  
            <div className="flex gap-2">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search rooms..."
                    className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
                />

                <button
                    onClick={clearFilters}
                    className="px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                    Clear
                </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
                {amenitiesList.map((item) => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={selectedAmenities.includes(item)}
                            onChange={() => handleAmenityChange(item)}
                        />
                        <span>{item}</span>
                    </label>
                ))}
            </div>

            <div className="flex gap-2">
                <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="Min Price"
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-400"
                />

                <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="Max Price"
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-400"
                />
            </div>

        </div>
    );
};

export default SearchFilter;