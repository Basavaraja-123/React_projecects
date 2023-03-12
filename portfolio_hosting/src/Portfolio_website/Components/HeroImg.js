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
        <h1> Hi.. I am BASAVARAJA N M</h1>
        <h1> REACT DEVELOPER</h1>
        <p> I am a Full Stack Web Developer</p>

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
