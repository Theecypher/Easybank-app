import { FaReact, FaHouseUser  } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import "../Styles/Navbar.css"
import { useState } from 'react';
import logo from "../images/logo.svg"


const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return ( 
        <nav className="NavbarItems">
            <h2>
                <img src={logo} alt="" />
            </h2>
            <div className="menu-icons">
                <button className="toggle"
                onClick={() => setNavbarOpen((prev) => !prev)}
                >
                    {navbarOpen ? (
                    <FaTimes style={{display: "block"}} />
                    ) : (
                        <FaBars  style={{
                            display: "block"
                        }}
                        />
                    )}
                </button>
            </div>
            <ul className={navbarOpen ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link className='navLinks'>HOME</Link>
                </li>
                <li>
                    <Link className='navLinks'>ABOUTME</Link>
                </li>
                <li>
                    <Link className='navLinks'>PROJECTS</Link>
                </li>
                <li>
                    <Link className='navLinks'>SERVICES</Link>
                </li>
                <li>
                    <Link className='navLinks'>EXPRIENCE</Link>
                </li>
            </ul>

            <Link className='navLinks btn1'>
               CONTACT
            </Link>
        </nav>
     );
}
 
export default NavBar;