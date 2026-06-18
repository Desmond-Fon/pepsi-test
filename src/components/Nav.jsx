import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

function Nav() {
    return (
        <div className="bg-[#f0f8ff] font-body">
            <nav className="flex justify-between items-center w-4/5 mx-auto py-2.5">
                <div className="flex items-center gap-[5px]">
                    <img src={logo} className="w-[50px] h-[50px] object-contain" alt="logo" />
                    <p className="font-heading font-bold uppercase text-brand-blue">Portfolio</p>
                </div>
                <ul className="flex gap-5 list-none">
                    <li><Link className="no-underline font-medium text-brand-blue hover:text-brand-red" to="/">Home</Link></li>
                    <li><Link className="no-underline font-medium text-brand-blue hover:text-brand-red" to="/about">About</Link></li>
                    <li><Link className="no-underline font-medium text-brand-blue hover:text-brand-red" to="/projects">Projects</Link></li>
                    <li><Link className="no-underline font-medium text-brand-blue hover:text-brand-red" to="/contact">Contact</Link></li>
                </ul>
                <div className="flex gap-2.5">
                    <button className="font-body px-5 py-2.5 rounded-[30px] bg-brand-blue text-white border-none cursor-pointer">Login</button>
                    <button className="font-body px-5 py-2.5 rounded-[30px] bg-brand-blue text-white border-none cursor-pointer">Register</button>
                </div>
            </nav>
        </div>
    )
}

export default Nav
