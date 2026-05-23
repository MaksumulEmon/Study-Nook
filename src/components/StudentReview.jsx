import React from 'react';

const StudentReview = () => {
    return (
        <section className="py-20 px-4 bg-linear-to-b from-white to-[#f8f2ff]">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-14">

                    <span className="inline-block px-4 py-2 rounded-full bg-[#f3e8ff] text-[#7b2cbf] text-sm font-semibold mb-4">
                        Student Reviews
                    </span>

                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                        What Students Are Saying
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-8">
                        Thousands of students use StudyNook to find peaceful and productive study environments every day.
                    </p>

                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

                    {/* Card 1 */}
                    <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

                        {/* Stars */}
                        <div className="flex items-center gap-1 mb-5 text-yellow-400">
                            ★ ★ ★ ★ ★
                        </div>

                        {/* Review */}
                        <p className="text-gray-600 leading-7 mb-6">
                            The rooms are super clean and quiet. Perfect for long study sessions before exams. Booking was incredibly smooth.
                        </p>

                        {/* User */}
                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-full bg-[#e0aaff] flex items-center justify-center text-[#240046] font-bold">
                                A
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-900">
                                    Arafat Rahman
                                </h4>

                                <p className="text-sm text-gray-500">
                                    CSE Student
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

                        <div className="flex items-center gap-1 mb-5 text-yellow-400">
                            ★ ★ ★ ★ ★
                        </div>

                        <p className="text-gray-600 leading-7 mb-6">
                            I love the fast Wi-Fi and comfortable environment. It helped me stay productive during my assignment deadlines.
                        </p>

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-full bg-[#cdb4db] flex items-center justify-center text-[#240046] font-bold">
                                S
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-900">
                                    Sadia Islam
                                </h4>

                                <p className="text-sm text-gray-500">
                                    Medical Student
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

                        <div className="flex items-center gap-1 mb-5 text-yellow-400">
                            ★ ★ ★ ★ ★
                        </div>

                        <p className="text-gray-600 leading-7 mb-6">
                            Affordable pricing and premium study spaces. Definitely one of the best platforms for students in the city.
                        </p>

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-full bg-[#ffc8dd] flex items-center justify-center text-[#240046] font-bold">
                                R
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-900">
                                    Rakib Hasan
                                </h4>

                                <p className="text-sm text-gray-500">
                                    University Student
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default StudentReview;