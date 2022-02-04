import "./App.css";
import Nav from "./componets/layout/Nav";
// import Home from "./componets/pages/Home";
import About from "./componets/pages/About";
import Portfolio from "./componets/pages/Portfolio";
import Testimonials from "./componets/pages/Testimonials";
import Contact from "./componets/pages/Contact";
import Services from "./componets/pages/Services";
import Pricing from "./componets/pages/Pricing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./componets/pages/Footer";
import Slider from "./componets/Slider/Slider";
import Intro from "./componets/pages/Intro";
import ImgSlider from "./componets/imageSlider/ImgSlider";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Nav className="" />
                <Slider />
                <About />
                <Intro />
              </>
            }></Route>
          <Route
            exact
            path="/about"
            element={
              <>
                <About />
                {/* <ImgSlider /> */}
              </>
            }></Route>
          <Route exact path="/testimonials" element={<Testimonials />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/portfolio" element={<Portfolio />}></Route>
          <Route exact path="/pricing" element={<Pricing />}></Route>
        </Routes>
        <ImgSlider />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
