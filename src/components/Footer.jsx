import logo from "../assets/logo.png"
import { LuFacebook, LuTwitter, LuInstagram, LuLinkedin } from "react-icons/lu";
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="footer paragraph">
            <footer>
                <div className="footer-container">
                    <div className="logo-container">
                        <img src={logo} className="logo" alt="logo" />
                        <p className="logo-text heading">Portfolio</p>
                    </div>
                    <ul className="footer-links-container">
                        <li><Link className="footer-links" to="/">Home</Link></li>
                        <li><Link className="footer-links" to="/about">About</Link></li>
                        <li><Link className="footer-links" to="/projects">Projects</Link></li>
                        <li><Link className="footer-links" to="/contact">Contact</Link></li>
                    </ul>
                    <ul className="footer-social-container">
                        <li><Link className="footer-links" to="https://www.facebook.com" target="_blank" rel="noreferrer"><LuFacebook size={22} />
                        </Link></li>
                        <li><Link className="footer-links" to="https://www.twitter.com" target="_blank" rel="noreferrer"><LuTwitter size={22} /></Link></li>
                        <li><Link className="footer-links" to="https://www.instagram.com" target="_blank" rel="noreferrer"><LuInstagram size={22} /></Link></li>
                        <li><Link className="footer-links" to="https://www.linkedin.com" target="_blank" rel="noreferrer"><LuLinkedin size={22} /></Link></li>
                    </ul>
                </div>
                <p className="copyright">&copy; 2026 Portfolio. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer