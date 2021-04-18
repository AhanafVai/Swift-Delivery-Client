import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact mt-5 py-5">
      <div className="container">
        <div className="section-header text-center text-white mb-5">
          <h5 className="text-danger">Contact us</h5>
          <h1>Experience fast service.</h1>
        </div>
        <div className="col-md-9 mx-auto">
          <form action="">
            {/* this */}
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
            </div>
            {/* this */}
            <div className="form-group my-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email Address :"
              />
            </div>

            <div className="form-group my-3">
              <textarea
                name=""
                className="form-control"
                id=""
                cols="30"
                rows="10"
                placeholder="Message :"
              ></textarea>
            </div>
            <div className="form-group text-center">
              <button type="button" className="btn btn-dark">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
