

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, BookOpen } from "lucide-react";
import { redirect, usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Mynavlink from "./Mynavlink";
import { Avatar } from "@heroui/react";
import toast from "react-hot-toast";


const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const [open, setOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const pathname = usePathname();


    useEffect(() => {
        setOpen(false);
        setIsProfileOpen(false);
    }, [pathname]);

    const navLinks = user
        ? [
            { name: "Home", href: "/" },
            { name: "Rooms", href: "/all-rooms" },
            { name: "Add Room", href: "/add-room" },
            { name: "My Listing", href: "/my-listing" },
            { name: "My Booking", href: "/my-booking" },
        ]
        : [
            { name: "Home", href: "/" },
            { name: "Rooms", href: "/all-rooms" },
        ];


    // const handleSignOut = async () => {
    //     try {
    //         await authClient.signOut();
    //         toast.error("Logout")
    //         setIsProfileOpen(false);
    //         window.location.href = "/";
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };


    const handleSignOut = async () => {
        try {

            await authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        window.location.href = "/";
                    }
                }
            });

        } catch (error) {
            console.log(error);
        }
    };



    // router.push('/')
    // router.refresh()




    return (
        <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg-purple-600 p-2 rounded-xl text-white">
                        <BookOpen size={20} />
                    </div>
                    <span className="text-xl font-bold">
                        Study<span className="text-purple-600">Nook</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 font-medium text-gray-700">
                    {navLinks.map((link) => (
                        <Mynavlink key={link.href} href={link.href}>
                            {link.name}
                        </Mynavlink>
                    ))}
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-3 relative">

                    {/* <ThemeChanger /> */}

                    {/* Auth */}
                    {isPending ? (
                        <div className="h-8 w-20 bg-gray-200 animate-pulse rounded-md" />
                    ) : user ? (
                        <div className="flex items-center gap-3">

                            {/* Desktop Avatar */}
                            <div
                                className="hidden md:flex cursor-pointer"
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                            >
                                <Avatar>
                                    <Avatar.Image
                                        src={user?.image}
                                        alt={user?.name || "User"}
                                        referrerPolicy="no-referrer"
                                    />
                                    <Avatar.Fallback>
                                        {user?.name?.charAt(0)}
                                    </Avatar.Fallback>
                                </Avatar>
                            </div>

                            {/* Profile Dropdown */}
                            {isProfileOpen && (
                                <div className="absolute right-0 top-12 w-64 bg-white rounded-2xl shadow-xl border p-4 z-50">

                                    <div className="border-b pb-3 mb-3">
                                        <p className="font-semibold">{user?.name}</p>
                                        <p className="text-sm text-gray-500 break-all">
                                            {user?.email}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-2">

                                        <Link
                                            href="/my-listing"
                                            onClick={() => setIsProfileOpen(false)}
                                            className="px-3 py-2 rounded-xl hover:bg-gray-100"
                                        >
                                            My Listings
                                        </Link>

                                        <Link
                                            href="/my-booking"
                                            onClick={() => setIsProfileOpen(false)}
                                            className="px-3 py-2 rounded-xl hover:bg-gray-100"
                                        >
                                            My Bookings
                                        </Link>

                                        <button
                                            onClick={handleSignOut}
                                            className="px-3 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="hidden md:flex items-center gap-3">
                            <Link href="/signin" className="text-gray-600 hover:text-black">
                                Login
                            </Link>
                            <Link
                                href="/signup"
                                className="bg-purple-600 text-white px-4 py-2 rounded-lg"
                            >
                                Register
                            </Link>
                        </div>
                    )}

                    {/* Mobile Avatar (IMPORTANT FIX) */}
                    {user && (
                        <div
                            className="md:hidden cursor-pointer"
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                        >
                            <Avatar>
                                <Avatar.Image
                                    src={user?.image}
                                    alt={user?.name}
                                    referrerPolicy="no-referrer"
                                />
                                <Avatar.Fallback>
                                    {user?.name?.charAt(0)}
                                </Avatar.Fallback>
                            </Avatar>
                        </div>
                    )}

                    {/* Hamburger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2"
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden fixed left-0 right-0 top-[64px] z-50 px-4">

                    {/* Overlay (blur same as you want) */}
                    <div
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                    />

                    {/* Menu Card */}
                    <div className="relative bg-white/95 shadow-2xl rounded-2xl p-4 mt-2 border animate-in slide-in-from-top-2 duration-200">

                        <div className="flex flex-col gap-2">

                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;

                                return (
                                    <Mynavlink
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                                
                                ${isActive
                                                ? "bg-purple-600 text-white shadow-md"
                                                : "bg-white hover:bg-purple-50 text-gray-700"
                                            }
                            `}
                                    >
                                        <span
                                            className={`w-2 h-2 rounded-full transition
                                    ${isActive ? "bg-white" : "bg-purple-400"}
                                `}
                                        />

                                        <span className="font-medium">
                                            {link.name}
                                        </span>
                                    </Mynavlink>
                                );
                            })}

                        </div>

                        {/* Auth Section */}
                        {!user && (
                            <div className="pt-4 mt-4 border-t flex flex-col gap-2">

                                <Link
                                    href="/signin"
                                    onClick={() => setOpen(false)}
                                    className="text-center py-3 rounded-xl border hover:bg-gray-50"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/signup"
                                    onClick={() => setOpen(false)}
                                    className="text-center py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700"
                                >
                                    Register
                                </Link>

                            </div>
                        )}

                    </div>
                </div>
            )}

        </header>
    );
};

export default Navbar;
