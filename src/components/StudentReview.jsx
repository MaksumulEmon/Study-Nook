// import React from 'react';

// const StudentReview = () => {
//     return (
//         <section className="py-20 px-4 bg-linear-to-b from-white to-[#f8f2ff]">

//             <div className="max-w-7xl mx-auto">

//                 {/* Heading */}
//                 <div className="text-center mb-14">

//                     <span className="inline-block px-4 py-2 rounded-full bg-[#f3e8ff] text-[#7b2cbf] text-sm font-semibold mb-4">
//                         Student Reviews
//                     </span>

//                     <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
//                         What Students Are Saying
//                     </h2>

//                     <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-8">
//                         Thousands of students use StudyNook to find peaceful and productive study environments every day.
//                     </p>

//                 </div>

//                 {/* Reviews Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

//                     {/* Card 1 */}
//                     <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

//                         {/* Stars */}
//                         <div className="flex items-center gap-1 mb-5 text-yellow-400">
//                             ★ ★ ★ ★ ★
//                         </div>

//                         {/* Review */}
//                         <p className="text-gray-600 leading-7 mb-6">
//                             The rooms are super clean and quiet. Perfect for long study sessions before exams. Booking was incredibly smooth.
//                         </p>

//                         {/* User */}
//                         <div className="flex items-center gap-4">

//                             <div className="w-12 h-12 rounded-full bg-[#e0aaff] flex items-center justify-center text-[#240046] font-bold">
//                                 A
//                             </div>

//                             <div>
//                                 <h4 className="font-bold text-gray-900">
//                                     Arafat Rahman
//                                 </h4>

//                                 <p className="text-sm text-gray-500">
//                                     CSE Student
//                                 </p>
//                             </div>

//                         </div>

//                     </div>

//                     {/* Card 2 */}
//                     <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

//                         <div className="flex items-center gap-1 mb-5 text-yellow-400">
//                             ★ ★ ★ ★ ★
//                         </div>

//                         <p className="text-gray-600 leading-7 mb-6">
//                             I love the fast Wi-Fi and comfortable environment. It helped me stay productive during my assignment deadlines.
//                         </p>

//                         <div className="flex items-center gap-4">

//                             <div className="w-12 h-12 rounded-full bg-[#cdb4db] flex items-center justify-center text-[#240046] font-bold">
//                                 S
//                             </div>

//                             <div>
//                                 <h4 className="font-bold text-gray-900">
//                                     Sadia Islam
//                                 </h4>

//                                 <p className="text-sm text-gray-500">
//                                     Medical Student
//                                 </p>
//                             </div>

//                         </div>

//                     </div>

//                     {/* Card 3 */}
//                     <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

//                         <div className="flex items-center gap-1 mb-5 text-yellow-400">
//                             ★ ★ ★ ★ ★
//                         </div>

//                         <p className="text-gray-600 leading-7 mb-6">
//                             Affordable pricing and premium study spaces. Definitely one of the best platforms for students in the city.
//                         </p>

//                         <div className="flex items-center gap-4">

//                             <div className="w-12 h-12 rounded-full bg-[#ffc8dd] flex items-center justify-center text-[#240046] font-bold">
//                                 R
//                             </div>

//                             <div>
//                                 <h4 className="font-bold text-gray-900">
//                                     Rakib Hasan
//                                 </h4>

//                                 <p className="text-sm text-gray-500">
//                                     University Student
//                                 </p>
//                             </div>

//                         </div>

//                     </div>

//                 </div>

//             </div>

//         </section>
//     );
// };

// export default StudentReview;






"use client";

import Marquee from "react-fast-marquee";

const reviews = [
    {
        name: "Arafat Rahman",
        role: "CSE Student",
        text: "The rooms are super clean and quiet. Perfect for study sessions.",
        avatar: "A",
    },
    {
        name: "Sadia Islam",
        role: "Medical Student",
        text: "Fast Wi-Fi and peaceful environment. Loved it!",
        avatar: "S",
    },
    {
        name: "Rakib Hasan",
        role: "University Student",
        text: "Affordable and premium study spaces. Highly recommended.",
        avatar: "R",
    },
    {
        name: "Nusrat Jahan",
        role: "Law Student",
        text: "Very comfortable environment for long study hours.",
        avatar: "N",
    },
    {
        name: "Tanvir Ahmed",
        role: "Engineering Student",
        text: "Best place for group study and focus.",
        avatar: "T",
    },
    {
        name: "Mehedi Hasan",
        role: "CS Student",
        text: "Booking system is smooth and easy to use.",
        avatar: "M",
    },
    {
        name: "Rafiq Islam",
        role: "Student",
        text: "Clean, quiet and very productive environment.",
        avatar: "R2",
    },
    {
        name: "Fahim Khan",
        role: "Student",
        text: "Loved the UI and room availability system.",
        avatar: "F",
    },
    {
        name: "Shakil Ahmed",
        role: "Student",
        text: "Perfect for exam preparation and focus study.",
        avatar: "S",
    },
];

export default function StudentReview() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-[#f8f2ff]">
            <div className="">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900">
                        What Students Say
                    </h2>
                    <p className="text-gray-600 mt-3 max-w-xl mx-auto">
                        Real feedback from students using StudyNook every day.
                    </p>
                </div>

                {/* MARQUEE */}
                <Marquee
                    speed={50}
                    pauseOnHover={true}
                    gradient={false}
                >
                    {reviews.map((r, i) => (
                        <div
                            key={i}
                            className="mx-4 w-[300px] md:w-[340px] bg-white rounded-2xl p-6 
shadow-md hover:shadow-2xl 
transition-all duration-300 ease-out 
hover:-translate-y-2 hover:scale-[1.03]
cursor-pointer
border border-transparent hover:border-[#9d4edd]/20"
                        >
                            <div className="text-yellow-400 mb-3">★★★★★</div>

                            <p className="text-gray-600 mb-5">{r.text}</p>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#cdb4db] flex items-center justify-center font-bold text-[#240046]">
                                    {r.avatar}
                                </div>

                                <div>
                                    <p className="font-semibold text-gray-900">{r.name}</p>
                                    <p className="text-sm text-gray-500">{r.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}