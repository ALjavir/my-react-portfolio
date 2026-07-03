import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import "./hero-style.css";
export default function Hero() {
    return (
        <section className="hero-section">
           
            <div className="hero-content">
                <h6 className="hero-title">Hi I am</h6>
                <h2 className="hero-name">Al Javir</h2>

               
                <h1 className="hero-do logo-gradient">Full-Stack Developer</h1>

               
                <div className="hero-social-row">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
                        <FiFacebook size={18} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                        <FiLinkedin size={18} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="Github">
                        <FiGithub size={18} />
                    </a>
                </div>

              
                <div className="hero-btn-group">
                    <button type="button" className="hire-me-btn">
                        Hire Me
                    </button>
                    <button type="button" className="download-cv-btn">
                        Download CV
                    </button>
                </div>
            </div>

         
            <div className="hero-image-wrapper">
             
                <img src="path-to-your-photo.png" alt="Al Javir profile" className="hero-profile-img" />
            </div>
        </section>
    )
} 