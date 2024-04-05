import React, { useCallback, lazy } from "react";
import "./App.css";
// import Main from './pages/Main';
import Banner from "./pages/Banner";
// const Banner = lazy(() => import("./pages/Banner.js"));
import About from "./pages/About";
// const About = lazy(() => import("./pages/About"));
import Services from "./pages/Services";
// const Services = lazy(() => import("./pages/Services.js"));

import Testimonials from "./pages/Testimonials";
// const Testimonials = lazy(() => import("./pages/Testimonials.js"));
import Contact from "./pages/Contact";
// const Contact = lazy(() => import("./pages/Contact.js"));
import Footer from "./pages/Footer";
// const Footer = lazy(() => import("./pages/Footer.js"));
function App() {
  return (
    <>
      {/* <Banner/> */}
      {/* <BrowserRouter> */}
      {/* <Main/> */}
      {/* </BrowserRouter> */}
      <Banner />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
