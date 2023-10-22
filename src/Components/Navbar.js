import { FaReact, FaHouseUser  } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import "../Styles/Navbar.css"
import { useState } from 'react';
import logo from "../images/logo.svg"
import Navitems from './Navitems';
import Reveal from 'react-awesome-reveal';


const NavBar = () => {
    const [isClick, setIsClick] = useState(false); 
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { items } = Navitems();
    const [current, setCurrent] = useState(0);

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
            {items.map((item, index) => (
                    <li key={index} className='navItem'>
                        <NavLink to={item.to} className="navLinks">{item.link}</NavLink>
                    </li>

))}
        </ul>

            <Link className='btn2'>CONTACT</Link>


        </nav>
     );
}
 
export default NavBar;