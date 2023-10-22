import Buttons from "./Button";
import mookup from "../images/image-mockups.png"
import "../Styles/Hero.css"
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
    from {
        opacity: 0;
        transform: translate3d(-200px, -100px, 0)
    }

    to {
        opacity: 1;
        transform: translate3d(0,0,0);
    }
`;
 
const Hero = () => {
    return ( 
       <Reveal keyframes={customAnimation}>
        <section className="heroSection">
            <div className="textSection">
                <h1>Next generation digital banking</h1>
                <p>
                    Take your financial life online.Your Easybank account 
                    will be a one-stop-shop for spending, saving, budgeting, 
                    investing,and much more.
               </p>
               <Buttons />
            </div>
            <div className="imageSection">
                <img src={mookup} alt="" />
            </div>
        </section>
       </Reveal>
     );
}
 
export default Hero;