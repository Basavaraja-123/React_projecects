import "./PricingCardStyle.css";
import React from "react";
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
    <div className="Pricing">
      <div className="card-container">
        <div className=" card">
          <h3>-Basic-</h3>
          <spam className="bar"></spam>
          <p className="btc">₹ 1999</p>
          <p> - 3 Days -</p>
          <p> - 3 Pages -</p>
          <p> - Featured -</p>
          <p> - Resposive Design -</p>
          <Link to="../Contact.jsx" className="btn">
            {" "}
            PURCHASE NOW
          </Link>
        </div>
        <div className=" card">
          <h3>-Premium-</h3>
          <spam className="bar"></spam>
          <p className="btc">₹ 2499</p>
          <p> - 2 Days -</p>
          <p> - 5 Pages -</p>
          <p> - Featured -</p>
          <p> - Resposive Design -</p>
          <Link to="../Contact.jsx" className="btn">
            {" "}
            PURCHASE NOW
          </Link>
        </div>
        <div className=" card">
          <h3>-Busines-</h3>
          <spam className="bar"></spam>
          <p className="btc">₹ 2999</p>
          <p> - 3 Days -</p>
          <p> - 10 Pages -</p>
          <p> - Featured -</p>
          <p> - Resposive Design -</p>
          <Link to="../Contact.jsx" className="btn">
            {" "}
            PURCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
