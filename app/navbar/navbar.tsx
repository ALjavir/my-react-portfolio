import { useState } from "react";
import { Link } from "react-router";
import { LuMenu, LuX } from "react-icons/lu";
import "./navbar-style.css";

export default function Navbar() {


    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);


    const navLinks = [
        { num: "01", text: "/ Home", path: "/" },
        { num: "02", text: "/ About", path: "/about" },
        { num: "03", text: "/ Projects", path: "/projects" },
        { num: "04", text: "/ Contact", path: "/contact" },
    ];


    return (

        <header className="main-header">
            <nav className="navbar">


                <Link to="/" className="logo">
                    AL JAVIR
                </Link>


                <div className="nav-desktop-menu">

                    {navLinks.map((link) => (
                        <Link key={link.num} to={link.path} className="nav-item-desktop">
                            <span className="nav-num">{link.num}</span>
                            <span className="nav-text">{link.text}</span>
                        </Link>
                    ))}
                </div>



                <button type="button" className="hire-me-btn">Hire Me
                </button>
                <button
                    type="button"
                    className="mobile-toggle-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >

                    {isMenuOpen ? <LuX size={32} color="#ffffff" /> : <LuMenu size={32} color="#ffffff" />}
                </button>



                <div className={`mobile-menu-drawer ${isMenuOpen ? "open" : ""}`}>
                    <div className="mobile-drawer-content">
                        {navLinks.map((link) => (
                            <Link
                                key={link.num}
                                to={link.path}
                                className="nav-item-mobile"

                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="nav-num">{link.num}</span>
                                <span className="nav-text">{link.text}</span>
                            </Link>
                        ))}
                    </div>
                </div>

            </nav>
        </header>
    );
}