import React from "react";

const Navbar = () => {
    return (
        <div className="container-none relative">
            <nav className="flex flex-row flex-wrap justify-between bg-stone-50 w-full p-2 fixed top-0 left-0 right-0">
                <a href="#" className="p-2">
                    <h3 className="text-2xl font-medium">Budidarma Programming Club</h3>
                </a>
                <div className="flex flex-row flex-wrap max-sm:hidden">
                    <a href="#home" className="p-2">Home</a>
                    <a href="#services" className="p-2">Services</a>
                    <a href="#about" className="p-2">About</a>
                    <a href="#contact" className="p-2">Contact</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;