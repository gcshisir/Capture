import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="col-md-4 col-xs-12">
      <div className="card">
        <div className="card-img-top">
          <img src={props.img} alt="img" className="img-card" />
          <div className="card-body">
            <h4 className="card-title text-center">{props.title}</h4>
            <p className="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
              impedit.
            </p>
            <div className="link">
              <Link to="/" className="btn btn-dark btn-read-more text-center">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
