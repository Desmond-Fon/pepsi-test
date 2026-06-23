import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom"

function Nav() {
    return (
        <div className="bg-[#f0f8ff] font-body">
            <nav className="flex justify-between items-center w-4/5 mx-auto py-2.5">
                <div className="flex items-center gap-[5px]">
                    <img src={logo} className="w-[50px] h-[50px] object-contain" alt="logo" />
                    <p className="font-heading font-bold uppercase text-brand-blue">Portfolio</p>
                </div>
                <ul className="flex gap-5 list-none">
                    <li><NavLink className={({isActive}) => isActive ? "text-brand-red" : "text-brand-blue"} to="/">Home</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "text-brand-red" : "text-brand-blue"} to="/about">About</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "text-brand-red" : "text-brand-blue"} to="/projects">Projects</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "text-brand-red" : "text-brand-blue"} to="/contact">Contact</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "text-brand-red" : "text-brand-blue"} to="/users">Users</NavLink></li>
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
