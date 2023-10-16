import "../Styles/Blog.css"
import money from "../images/image-currency.jpg"
import resturant from "../images/image-restaurant.jpg"
import plane  from "../images/image-plane.jpg"
import confetti  from "../images/image-confetti.jpg"

const Blog = () => {
    return ( 
        <section className="blog" id="blog">
            <div className="blogContent">
                <h2>Latest Articles</h2>
                <div className="blogGrid">
                    <div className="row">
                        <img src={money} alt="" />
                        <span>By Clarie Brown</span>
                        <h4>Receive money in any world currency with no fees</h4>
                        <p>The world is getting smaller and we’re becoming 
                            more mobile. So why should you be forced to only 
                            receive money in a single … 
                        </p>
                    </div>
                    <div className="row">
                        <img src={resturant} alt="" />
                        <span>By Shawn Murphy</span>
                        <h4>Treat yourself without worrying about money</h4>
                        <p>Our simple budgeting feature allows you to separate 
                            out your spending and set realistic limits each month. 
                            That means you …
                        </p>
                    </div>
                    <div className="row">
                        <img src={plane} alt="" />
                        <span>By Alex Park</span>
                        <h4>Take your Easybank card wherever you go </h4>
                        <p>
                        We want you to enjoy your travels. This is why we don’t charge 
                        any fees on purchases while you’re abroad. We’ll even show you … 
                        </p>
                    </div>
                    <div className="row">
                        <img src={confetti} alt="" />
                        <span>By Morgan Resnekic</span>
                        <h4>Our invite-only Beta accounts are now live!</h4>
                        <p>
                        After a lot of hard work by the whole team, we’re excited to launch 
                        our closed beta. It’s easy to request an invite through the site ...
                        </p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Blog;