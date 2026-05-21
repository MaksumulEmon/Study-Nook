import { BookOpen } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='px-15 py-3 flex justify-between items-center'>

                <div className='flex gap-2 items-center '>
                    <div className='bg-[#4f772d] rounded-xl p-1.5'>
                        <BookOpen className='text-black'/>
                    </div>

                    <Link href="/">
                        <div className='text-xl flex font-bold'>
                            <p className='text-black'>Study</p>
                            <p className='text-[#4f772d]'>Nook</p>
                        </div>
                    </Link>
                </div>



                <div className='flex gap-4'>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Room</Link>
                    <Link href='/'>Add Room</Link>
                    <Link href='/'>My Listing</Link>
                    <Link href='/'>My Booking</Link>
                </div>


                <div>
                <button className='bg-[#4f772d] text-white text-xl  px-5 py-2 rounded'>Login</button>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;