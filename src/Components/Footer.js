import { Link } from "react-router-dom";
import logo from "../images/logo2.svg"
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa"
import Buttons from "./Button";
import "../Styles/Footer.css"

const Footer = () => {
    return ( 
        <div className="footer">
         <div>

            <h2>
                <img src={logo} alt="" />
            </h2>
            <div className="socialMedia">
                <Link>
                   <FaFacebook />
                </Link>
                <Link>
                   <FaYoutube />
                </Link>
                <Link>
                   <FaTwitter />
                </Link>
                <Link>
                   <FaPinterest />
                </Link>
                <Link>
                   <FaInstagram />
                </Link>
            </div>
         </div>
         <div className="footerItem">
            <ul className="footerLinks">
                <li>About Us</li>
                <li>Contact</li>
                <li>Blog</li>
            </ul>
            <ul className="footerLinks">
                <li>Careers</li>
                <li>Support</li>
                <li>Privacy Policy</li>
            </ul>
         </div>

         <div>
            <Buttons />
            <p className="end">Easybank. All Right Reserved</p>
        </div>
      </div>
     );
}
 
export default Footer;