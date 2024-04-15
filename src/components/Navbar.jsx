import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav className="flex justify-between">
            <Link to='/'>Home</Link>
            <ul className="">
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/music'>Music</Link></li>
                <li><Link to='contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}