import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="lg:pt-5">
            <div className="lg:container w-full lg:w-3/4 md:mx-auto px-20 py-3 flex justify-between items-center bg-slate-800 text-white shadow-md md:rounded shadow"> 
                <Link to="/" className="text-2xl font-bold">
                    <span className="">Pandurasa Kharisma</span>
                </Link>
 
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link to="/" className="hover:text-sky-400 transition">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-sky-400 transition">About</Link>
                    </li>
                    <li>
                        <Link to="/services" className="hover:text-sky-400 transition">Services</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-sky-400 transition">Contact</Link>
                    </li>
                </ul>
 
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                </button>
            </div>
 
            {isOpen && (
                <ul className="md:hidden bg-slate-800 space-y-3 p-4">
                    <li>
                        <Link to="/" className="block py-2 hover:text-sky-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="block py-2 hover:text-sky-400 transition" onClick={() => setIsOpen(false)}>About</Link>
                    </li>
                    <li>
                        <Link to="/services" className="block py-2 hover:text-sky-400 transition" onClick={() => setIsOpen(false)}>Services</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="block py-2 hover:text-sky-400 transition" onClick={() => setIsOpen(false)}>Contact</Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
