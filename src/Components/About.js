import "../Styles/About.css"
import api from "../images/icon-api.svg"
import budget from "../images/icon-budgeting.svg"
import onboard from "../images/icon-onboarding.svg"
import online  from "../images/icon-online.svg"


const About = () => {
    return ( 
        <section className="about">
            <div className="aboutContent">
                <div className="mainAbout">
                    <h2>Why choose Easybank?</h2>
                    <p className="aboutText">
                        We leverage Open Banking to turn your bank account 
                        into your financial hub. Control your finances like never before.
                    </p>
                </div>
                <div className="aboutGrid">
                    <div className="row">
                        <img src={online} alt="" />
                        <h4>Online Banking</h4>
                        <p>Our mooern web and mobile applications
                            allow you to keep track of your finances wherever 
                            you are in the world.
                        </p>
                    </div>
                    <div className="row">
                        <img src={budget} alt="" />
                        <h4>Simple Budgeting</h4>
                        <p>See exactly where your money goes each month.
                             Receive notifications when you're close 
                             to hitting your limits
                        </p>
                    </div>
                    <div className="row">
                        <img src={onboard} alt="" />
                        <h4>Fast Onboarding</h4>
                        <p>
                        We don’t do branches. Open your account 
                        in minutes online and start taking control
                         of your finances right away
                        </p>
                    </div>
                    <div className="row">
                        <img src={api} alt="" />
                        <h4>Open API</h4>
                        <p>
                        Manage your savings, investments, pension, and 
                        much more from one account. Tracking your money 
                        has never been easier. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default About;