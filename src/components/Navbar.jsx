import { NavLink, Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center bg-slate-900 text-white p-5 sticky top-0">
            <Link to='/' className="text-3xl">Home</Link>
            <ul className="flex gap-4 text-xl">
                <li><NavLink to='/about' className=' hover:bg-slate-700 p-2 rounded'>About</NavLink></li>
                <li><NavLink to='/music' className=' hover:bg-slate-700 p-2 rounded'>Music</NavLink></li>
                <li><NavLink to='contact' className=' hover:bg-slate-700 p-2 rounded'>Contact</NavLink></li>
            </ul>
        </nav>
    )
}