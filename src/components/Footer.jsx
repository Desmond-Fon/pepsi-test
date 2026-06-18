import logo from "../assets/logo.png"
import { LuFacebook, LuTwitter, LuInstagram, LuLinkedin } from "react-icons/lu";
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="bg-[#f0f8ff] font-body">
            <footer className="flex flex-col items-center gap-[50px] w-4/5 mx-auto py-10">
                <div className="flex justify-between w-full items-start">
                    <div className="flex items-center gap-[5px]">
                        <img src={logo} className="w-[50px] h-[50px] object-contain" alt="logo" />
                        <p className="font-heading font-bold uppercase text-brand-blue">Portfolio</p>
                    </div>
                    <ul className="flex flex-col gap-2.5 items-center text-lg font-medium list-none">
                        <li><Link className="no-underline text-brand-blue hover:text-brand-red" to="/">Home</Link></li>
                        <li><Link className="no-underline text-brand-blue hover:text-brand-red" to="/about">About</Link></li>
                        <li><Link className="no-underline text-brand-blue hover:text-brand-red" to="/projects">Projects</Link></li>
                        <li><Link className="no-underline text-brand-blue hover:text-brand-red" to="/contact">Contact</Link></li>
                    </ul>
                    <ul className="flex gap-2.5 items-center list-none">
                        <li><Link className="no-underline text-brand-blue hover:text-brand-red" to="https://www.facebook.com" target="_blank" rel="noreferrer"><LuFacebook size={22} />
                        </Link></li>
                        <li><Link className="no-underline text-brand-blue hover:text-brand-red" to="https://www.twitter.com" target="_blank" rel="noreferrer"><LuTwitter size={22} /></Link></li>
                        <li><Link className="no-underline text-brand-blue hover:text-brand-red" to="https://www.instagram.com" target="_blank" rel="noreferrer"><LuInstagram size={22} /></Link></li>
                        <li><Link className="no-underline text-brand-blue hover:text-brand-red" to="https://www.linkedin.com" target="_blank" rel="noreferrer"><LuLinkedin size={22} /></Link></li>
                    </ul>
                </div>
                <p className="text-brand-blue text-sm font-medium">&copy; 2026 Portfolio. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer
