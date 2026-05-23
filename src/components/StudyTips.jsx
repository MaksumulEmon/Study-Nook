import Image from 'next/image';
import React from 'react';

const StudyTips = () => {
    return (
        <section className="py-20 px-4 bg-linear-to-br from-[#faf7ff] to-white">

            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">

                    <span className="inline-block px-4 py-2 rounded-full bg-[#f3e8ff] text-[#7b2cbf] text-sm font-semibold mb-4">
                        Study Tips Blog
                    </span>

                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                        Learn Smarter, Not Harder
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto leading-8">
                        Quick study insights and productivity tips to help students stay consistent and focused.
                    </p>

                </div>

                {/* Blog List (Not Cards) */}
                <div className="space-y-5">

                    {/* Item 1 */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition">

                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-900">
                                📌 How to Focus for Long Study Sessions
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                                Use the Pomodoro technique and remove distractions to stay productive for hours.
                            </p>
                        </div>

                        <span className="text-sm text-[#7b2cbf] font-semibold whitespace-nowrap">
                            2 min read
                        </span>

                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition">

                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-900">
                                📌 Best Time Table for Students
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                                A balanced routine improves memory retention and reduces exam stress.
                            </p>
                        </div>

                        <span className="text-sm text-[#7b2cbf] font-semibold whitespace-nowrap">
                            3 min read
                        </span>

                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition">

                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-900">
                                📌 How to Prepare for Exams Effectively
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                                Focus on revision techniques instead of just reading repeatedly.
                            </p>
                        </div>

                        <span className="text-sm text-[#7b2cbf] font-semibold whitespace-nowrap">
                            4 min read
                        </span>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default StudyTips;