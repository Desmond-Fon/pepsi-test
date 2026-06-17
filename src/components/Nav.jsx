import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

function Nav() {
    return (
        <div className="nav paragraph">
            <nav>
                <div className="logo-container">
                    <img src={logo} className="logo" alt="logo" />
                    <p className="logo-text heading">Portfolio</p>
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="nav-buttons">
                    <button className="paragraph">Login</button>
                    <button className="paragraph">Register</button>
                </div>
            </nav>
        </div>
    )
}

export default Nav