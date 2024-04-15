import { NavLink, Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";

import React, { useState } from "react";

export default function Navbar(){
   const [menuOpen, setMenuOpen] = useState(false);
   
    return(
        <nav className="flex justify-between items-center bg-slate-900 text-white p-5 sticky top-0">
            <Link to='/' className="text-3xl">Home</Link>
            <div>
                <div className="text-2xl md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    <RxHamburgerMenu />
                </div>
                <ul className={menuOpen ? "flex" : ""}>
                    <li><NavLink to='/about' className=' hover:bg-slate-700 p-2 rounded'>About</NavLink></li>
                    <li><NavLink to='/music' className=' hover:bg-slate-700 p-2 rounded'>Music</NavLink></li>
                    <li><NavLink to='contact' className=' hover:bg-slate-700 p-2 rounded'>Contact</NavLink></li>
                </ul>
            </div>
            
        </nav>
    )
}