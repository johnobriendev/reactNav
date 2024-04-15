import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav>
            <Link to='/'>Home</Link>
            <ul>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/music'>Music</Link></li>
                <li><Link to='contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}