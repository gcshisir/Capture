import React from "react";

const Contact = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 col-sm-12 mx-auto">
          <div className="form">
            <div className="form-group">
              <label htmlFor="name" className="my-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="my-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="my-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="form-control"
              ></textarea>
            </div>
            <div className="col-12 w-100 mx-auto d-flex my-4 submit-container">
              <button type="submit" className="btn btn-dark btn-submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
