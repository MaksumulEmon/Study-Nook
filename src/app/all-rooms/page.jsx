import React from 'react';

const allRooms = async () => {
    const res = await fetch('http://localhost:5000/room')
    const rooms = await res.json();

    console.log(rooms)

    return (
        <div>
            
        </div>
    );
};

export default allRooms;