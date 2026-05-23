"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Mynavlink = ({ href, children, onClick }) => {
    const pathName = usePathname();
    console.log(pathName)
    const isActive = href === pathName


    return (
        <Link href={href}
            onClick={onClick}
            className={`${isActive ? " text-purple-500 pb-1" : ""}`}> {children} </Link>

    );
};

export default Mynavlink;