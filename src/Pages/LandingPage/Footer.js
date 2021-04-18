import React from "react";
import "./Footer.css";
import FooterInfo from "./FooterInfo";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import Swift from "../../images/swift-delivery.png";

const Footer = () => {
  const noNamed = [
    { icon: Swift },
    { name: <i> Swift delivery services</i> },

    {
      name:
        "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae aut, numquam harum doloribus minus nihil.",
    },
  ];
  const ourAddress = [{ name: "148 GreenRoad,Dhaka-1205" }, { name: "Dhaka" }];
  const Company = [
    { name: "Home" },
    { name: "About" },
    { name: "Blog" },
    { name: "Contacts" },
    { name: "Portfolio" },
  ];
  const solutions = [
    { name: "Marketing" },
    { name: "Analytics" },
    { name: "E-commerce" },
    { name: "Insights" },
  ];
  return (
    <footer className="footer-area ">
      <div className="container pt-5">
        <div className="row py-5">
          <FooterInfo key={1} menuItems={noNamed} />

          <FooterInfo key={2} menuTitle="Solutions" menuItems={solutions} />
          <FooterInfo key={3} menuTitle="Company" menuItems={Company} />
          <FooterInfo key={4} menuTitle="Our Address" menuItems={ourAddress}>
            <ul className="icons list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FaFacebook />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FaGoogle />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FaInstagram />
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h6>Call now</h6>
              <button className="btn btn-brand">+2025550295</button>
            </div>
          </FooterInfo>
        </div>
        <div className="copyRight text-center">
          <p className="text-secondary py-4">
            Copyright {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
