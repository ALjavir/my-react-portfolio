import { FiGithub, FiLinkedin, FiFacebook, FiPhone, FiMessageSquare, FiVoicemail } from "react-icons/fi";
import "./footer-style.css";
import { SiGmail } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="main-footer">

            <span className="logoFooter">JAVIR</span>
            <span className="subText">Creating modern, intuitive, and user-centered digital experiences.</span>



            <div className="social-container">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
                    <FiFacebook size={20} />
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                    <FiLinkedin size={20} />
                </a>

                <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="Dribbble">
                    <FiGithub size={20} />
                </a>
            </div>


            <div className="contact-container">
                <span className="email">

                    <SiGmail size={22} />
                    AlJavir.official@gmail.com
                </span>

                <span className="contract">

                    <FiPhone size={22}/> 01621204599
                </span>
            </div>
<hr className="footer-divider" />
            <p className="copyRight">&copy; 2024 Al Javir. All rights reserved.</p>

        </footer>
    );
}