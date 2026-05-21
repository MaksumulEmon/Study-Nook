
"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeChanger = () => {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex items-center gap-4">

    

            {/* Toggle Button */}
            <button
                onClick={() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                }
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md hover:scale-105 transition-all duration-300"
            >
                {theme === "dark" ? (
                    <>
                        <Sun size={18} />
                      
                    </>
                ) : (
                    <>
                        <Moon size={18} />
                       
                    </>
                )}
            </button>
        </div>
    );
};

export default ThemeChanger;








