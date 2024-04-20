import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";




export default function Footer() {
    return(
        <div className=" flex items-center justify-center gap-20 w-full h-[100px] bg-slate-800 bottom-0 text-white text-3xl">
            <FaInstagram className="hover:scale-125 duration-150"/>
            <FaYoutube className="hover:scale-125 duration-150" />
            <FaSpotify className="hover:scale-125 duration-150" />
        </div>
    )
}