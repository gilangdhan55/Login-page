import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
    const [isOpen, setIsOpen]       = useState(false);
    const [darkMode, setDarkMode]   = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });
     useEffect(() => {
        const isDark = darkMode === false; 
        document.documentElement.classList.toggle("dark", !isDark); 
        localStorage.setItem("theme", `${!isDark ? "dark" : "light"}`); 
    }, [darkMode]);
     
    return (
        <nav className="w-full sticky top-0 z-50 h-20">
            <div className="px-4 md:px-20 py-5 flex justify-between items-center dark:text-white text-slate-700 shadow backdrop-blur opacity-80 rounded shadow-slate-400 bg-slate-200 dark:bg-slate-900 dark:shadow-slate-600"> 
                <Link to="/" className="md:text-2xl font-bold">
                    <h3 className='uppercase md:text-md sm:text-sm font-bold bg-gradient-to-tr from-red-900 to-red-700 text-transparent bg-clip-text ml-2 lg:text-2xl font-inter hidden md:block dark:bg-gradient-to-tr dark:from-slate-300 dark:to-slate-200'>Pandurasa Kharisma</h3>
                    {/* <span className="uppercase hidden md:block">Pandurasa Kharisma</span> */}
                    <span className="uppercase md:hidden lg:hidden text-2xl"><img src="./public/images/logopk.png" alt="logo-pk" className="rounded-full w-10 shadow-lg shadow-slate-400" /></span>
                </Link>
 
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <a href="#home" className="hover:text-sky-400 transition">Home</a>
                    </li>
                    <li>
                        <a href="#application" className="hover:text-sky-400 transition">Aplication</a>
                    </li> 
                    <li>
                         <input type="checkbox" className="hidden" id="toggleDark"/>
                         <label htmlFor="toggleDark" className="hover:cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
                            <div className="flex items-center p-1 cursor-pointer" >
                                {darkMode ? (
                                    <SunIcon className="h-5 w-5 text-slate-300"   />
                                ) : (
                                    <MoonIcon className="h-5 w-5 text-slate-500" />
                                )}
                            </div>
                         </label>
                    </li> 
                </ul>
 
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                </button>
            </div>
 
            {isOpen && (
                <ul className="md:hidden backdrop-blur space-y-3 p-4 shadow-lg text-white sticky w-full top-20">
                    <li>
                        <Link to="/landing" className="block py-2 hover:text-sky-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/aplication" className="block py-2 hover:text-sky-400 transition" onClick={() => setIsOpen(false)}>About</Link>
                    </li> 
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
