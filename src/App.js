import Hero from "./Components/Hero";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Blog />
      <Footer />
    </div>
   );
}
 
export default App;