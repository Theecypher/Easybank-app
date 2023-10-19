import { FaReact, FaHouseUser  } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import "../Styles/Navbar.css"
import { useState } from 'react';
import logo from "../images/logo.svg"
import Navitems from './Navitems';


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
                       <Link className='navLinks'>{item.link}</Link>
                    </li>

           ))}
        </ul>

            <Link className='btn2'>CONTACT</Link>


        </nav>
     );
}
 
export default NavBar;


        //     <ul className={navbarOpen ? "nav-menu active" : "nav-menu"}>
        //         <li>
        //             <Link className='navLinks'>HOME</Link>
        //         </li>
        //         <li>
        //             <Link className='navLinks'>ABOUTME</Link>
        //         </li>
        //         <li>
        //             <Link className='navLinks'>PROJECTS</Link>
        //         </li>
        //         <li>
        //             <Link className='navLinks'>SERVICES</Link>
        //         </li>
        //         <li>
        //             <NavLink

        //             onClick={() => setIsClick((prev) => !prev)}

        //             className={isClick ? "active" : "inactive"}
        //             >
        //                 Experience
        //             </NavLink>
        //         </li>

        //     <Link className='btn2'>
        //        CONTACT
        //     </Link>

        //     {/* <NavLink ></NavLink> */}
        // </ul>