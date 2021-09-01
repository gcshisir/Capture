import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <Fragment>
      <section className="showcase d-flex align-items-center">
        <div class="container">
          <div className="row">
            <div className="col-md-6 col-10 d-flex flex-column justify-content-center ">
              <h1>{props.welcome} <span>{props.main}</span></h1>
              <p>{props.message}</p>
              <Link to="/" className="btn btn-dark">
                {props.btn}
              </Link>
            </div>
            <div className="col-md-6 col-10 column d-flex justify-content-center">
              <img src={props.img} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Home;
