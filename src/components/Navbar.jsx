import { NavLink, Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center bg-slate-900 text-white p-5">
            <Link to='/' className="text-3xl">Home</Link>
            <ul className="flex gap-4 text-xl">
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/music'>Music</NavLink></li>
                <li><NavLink to='contact'>Contact</NavLink></li>
            </ul>
        </nav>
    )
}