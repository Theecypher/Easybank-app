import Buttons from "./Button";
import mookup from "../images/image-mockups.png"
import "../Styles/Hero.css"
 
const Hero = () => {
    return ( 
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
     );
}
 
export default Hero;