"use client";

import React, { useState } from "react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import toast from "react-hot-toast";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");

    // --- DESIGN CONFIGURATION ---
    const brandTextColor = "text-[#9d4edd]";
    const brandBgColor = "bg-[#9d4edd]";

    // ----------------------------

    // Real-time or submit-time Password Validation
    const validatePassword = (password) => {
        if (password.length < 6) {
            return "Password must be at least 6 characters long.";
        }
        if (!/[A-Z]/.test(password)) {
            return "Password must contain at least one uppercase letter.";
        }
        if (!/[a-z]/.test(password)) {
            return "Password must contain at least one lowercase letter.";
        }
        return ""; // Clear error if all pass
    };

    // 1. Email/Password Submission Flow
    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     setPasswordError("");

    //     const formData = new FormData(e.currentTarget);
    //     const user = Object.fromEntries(formData.entries());

    //     const {data, error} =await authClient.signUp.email({
    //         email: user.email,
    //         password: user.password,
    //         name: user.name,
    //         image: user.image

    //     })

    //     console.log({data,error})

    //     if(data){
    //         redirect('/signin')
    //     }

    //    if (error) {
    //         toast.error(error.message)
    //     }

    //     // Validate password before submission
    //     // const errorMsg = validatePassword(password);
    //     // if (errorMsg) {
    //     //     setPasswordError(errorMsg);
    //     //     return; // Stop submission
    //     // }

    //     // const newUser = { name, email, photoUrl, password };

    //     // try {
    //     //     const res = await fetch(`http://localhost:5000/user/signup`, {
    //     //         method: "POST",
    //     //         headers: {
    //     //             "content-type": "application/json",
    //     //         },
    //     //         body: JSON.stringify(newUser),
    //     //     });

    //     //     const data = await res.json();

    //     //     if (res.ok) {
    //     //         toast.success("Registration successful! Please login.");
    //     //         e.target.reset();
    //     //         router.push("/login"); // Redirect to login page
    //     //     } else {
    //     //         toast.error(data.message || "Registration failed. Try again.");
    //     //     }
    //     // } catch (error) {
    //     //     console.error(error);
    //     //     toast.error("Database connection failed.");
    //     // }
    // };






    const onSubmit = async (e) => {
        e.preventDefault();
        setPasswordError("");

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        // Password Validation
        const errorMsg = validatePassword(user.password);

        if (errorMsg) {
            setPasswordError(errorMsg);
            return;
        }

        const { data, error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.photoUrl,
        });

        console.log({ data, error });

        if (data) {
            await authClient.signOut();
            toast.success("Registration successful ! Please login.");
            router.push("/signin");
        }

        if (error) {
            toast.error(error.message);
        }
    };



    const handleGoogleSignup = async () => {

        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="max-w-xl mx-auto p-5 my-6">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10">

                {/* Header */}
                <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
                <p className="text-gray-500 mt-2 mb-8">
                    Join <span className={`font-semibold ${brandTextColor}`}>STUDYNOOK</span> to explore your next study space.
                </p>

                {/* Form elements */}
                <form onSubmit={onSubmit} className="space-y-5">

                    {/* Name */}
                    <div>
                        <label className="block mb-1.5 font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            required
                            className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 outline-none transition-colors focus:border-[#c77dff]"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1.5 font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            required
                            className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 outline-none transition-colors focus:border-[#c77dff]"
                        />
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="block mb-1.5 font-medium text-gray-700">Photo URL</label>
                        <input
                            type="url"
                            name="photoUrl"
                            placeholder="https://example.com"
                            required
                            className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 outline-none transition-colors focus:border-[#c77dff]"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label onClick={validatePassword} className="block mb-1.5 font-medium text-gray-700">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="••••••••"
                                required
                                onChange={() => setPasswordError("")} // Clear error message when user re-types
                                className={`w-full border-2 rounded-2xl pl-4 pr-12 py-3 outline-none transition-colors ${passwordError ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-[#c77dff]"
                                    }`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {/* {showPassword ?   <Eye className="text-xl"/> : <EyeOff className="text-xl" />} */}
                            </button>
                        </div>

                        {/* Inline Error Message */}
                        {passwordError && (
                            <p className="text-red-500 text-xs font-medium mt-2 pl-1 animate-pulse">
                                {passwordError}
                            </p>
                        )}
                    </div>


                    <button
                        type="submit"
                        className={`w-full ${brandBgColor} text-white py-3.5 rounded-2xl  font-semibold transition-all duration-200 active:bg-[#c77dff] shadow-md shadow-[#0096c7]/10 mt-2`}
                    >
                        Register
                    </button>

                    <div className="relative flex py-2 items-center text-gray-400">
                        <div className="flex-grow border-t border-gray-200"></div>
                        <span className="flex-shrink mx-4 text-xs font-medium uppercase tracking-wider">Or</span>
                        <div className="flex-grow border-t border-gray-200"></div>
                    </div>




                </form>


                <button
                    type="button"
                    onClick={handleGoogleSignup}
                    className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 py-3.5 rounded-2xl font-semibold transition-all duration-200 active:scale-[0.99]"
                >

                    <FcGoogle className="text-2xl" />
                    Continue with Google
                </button>





                <p className="text-center text-gray-600 text-sm mt-6">
                    Already have an account?{" "}
                    <Link href="/signin" className={`font-semibold ${brandTextColor} hover:underline`}>
                        Login
                    </Link>
                </p>


            </div>
        </div>
    );
};

export default Signup;
