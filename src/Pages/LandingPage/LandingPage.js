import React from "react";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import ServiceSection from "./ServiceSection";
import Testimonial from "./Testimonial";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <ServiceSection />
      <AboutUs />
      <Counter />
      <Testimonial />

      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
