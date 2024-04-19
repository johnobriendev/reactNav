import { NavLink, Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";

import React, { useState } from "react";

export default function Navbar(){
   const [menuOpen, setMenuOpen] = useState(false);
   
    return(
        <nav className="flex flex-col items-start gap-5 md:flex-row md:justify-between md:items-center bg-slate-900 text-white p-5 sticky top-0">
            <Link to='/' className="text-3xl hover:bg-slate-700 px-3 py-1 rounded" onClick={() => setMenuOpen(false)}>Home</Link>
            
                <div className="text-2xl md:hidden cursor-pointer absolute top-5 right-5" onClick={() => setMenuOpen(!menuOpen)}>
                    <RxHamburgerMenu />
                </div>
                <ul className={menuOpen ? "flex flex-col gap-5 w-screen h-screen " : "hidden md:flex"}>
                    <li><NavLink to='/about' className=' hover:bg-slate-700 p-2 rounded' onClick={() => setMenuOpen(false)}>About</NavLink></li>
                    <li><NavLink to='/music' className=' hover:bg-slate-700 p-2 rounded' onClick={() => setMenuOpen(false)}>Music</NavLink></li>
                    <li><NavLink to='contact' className=' hover:bg-slate-700 p-2 rounded' onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
                </ul>
           
            
        </nav>
    )
}