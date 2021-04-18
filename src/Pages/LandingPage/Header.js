import React, { useContext } from "react";
import "./Header.css";
import Swift from "../../images/swift-delivery.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div style={{ height: "100vh", width: "100%" }} className="background">
      <div className="layer ">
        <header>
          <nav className=" container navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src={Swift} className="img-fluid" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon "></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto ">
                  <li className="nav-item mx-3">
                    <a
                      className="nav-link text-light"
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>

                  <li className="nav-item mx-3">
                    {loggedInUser ? (
                      <Link className="nav-link text-light" to="/dashboard">
                        Dashboard
                      </Link>
                    ) : (
                      <Link className="nav-link text-light" to="/login">
                        User/Admin
                      </Link>
                    )}
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link text-light" href="#aboutUs">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link text-light" href="#">
                      Review
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link text-light" href="#">
                      Contact Us
                    </a>
                  </li>
                  <Link to="/login" className="btn btn-danger" type="submit">
                    Login
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main style={{ height: "600px" }} className="d-flex align-items-center">
          <div className=" col-md-8 mx-auto text-md-start text-light">
            <h5 style={{ color: "red" }} className="fw-light">
              Real time tracking
            </h5>
            <h1 className="fs-1 fw-bold">
              Swift Transportation <br /> & Delivery services
            </h1>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quae
              obcaecati, error earum est vero aperiam dolores odit, modi
              reiciendis corporis, laudantium ipsam rerum maiores!
            </h5>

            <button type="button" className="mt-4 btn btn-success  ">
              Read More
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Header;
