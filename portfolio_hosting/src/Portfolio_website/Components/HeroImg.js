import "./HeroStyle.css";
import React from "react";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img
          className="into-img"
          src="https://www.redbeachadvisors.com/wp-content/uploads/2021/11/digital-transform.jpg"
          alt="introImg"
        ></img>
      </div>
      <div className="content">
        <p> HI, I AM A FULLSTACK DEVLOPER</p>
        <h1>REACT DEVLOPER</h1>

        <div className="btun">
          <Link to="/Projects" className="btn">
            Projects
          </Link>
          <Link to="/Contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
