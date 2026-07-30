import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {link} from "react-scroll"

function NavBar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setnavActive(!navActive)
    }

    const closeMenu= () => {
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu
            }
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        if(window.innerWidth <= 1200){
            closeMenu;
        }
    }, []);

    return(
        <nav className={`navbar ${navActive? "active" : ""}`}>
            <div>
                <img src="./img/logo.svg" alt="Logo" />
            </div>
            <a className={`nav_hamburger ${navActive? "active" : ""}`} onClick={toggleNav}>
                <span className="nav_hamburger_line"></span>
                <span className="nav_hamburger_line"></span>
                <span className="nav_hamburger_line"></span>
            </a>
            <div className={`nav_items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu}
                        activeClass="nav_active_content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="HeroSection"
                        className="nav_content" 
                        >home</Link>
                    </li>

                    <li>
                        <Link onClick={closeMenu}
                        activeClass="nav_active_content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="MyPortfolio"
                        className="nav_content" 
                        >portfolio</Link>
                    </li>

                    <li>
                        <Link onClick={closeMenu}
                        activeClass="nav_active_content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="AboutMe"
                        className="nav_content" 
                        >about me</Link>
                    </li>

                    <li>
                        <Link onClick={closeMenu}
                        activeClass="nav_active_content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Testimonials"
                        className="nav_content" 
                        >testimonials</Link>
                    </li>
                </ul>

            </div>
        <Link onClick={closeMenu}
                        activeClass="nav_active_content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Contact"
                        className="btn btn-outline-primary" > 
                        
                        contact me
        </Link>

        </nav>
    );   
}

export default NavBar; 