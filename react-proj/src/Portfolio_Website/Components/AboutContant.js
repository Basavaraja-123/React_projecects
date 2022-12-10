import "./AboutContentStyle.css";
import React from "react";
import { Link } from "react-router-dom";
import ReactContact1 from "../Components/Proj_Img/ReactContact1.jpg";
import ReactContact2 from "../Components/Proj_Img/ReactContact2.jpg";

const AboutContant = () => {
  return (
    <div className="about">
      <div className="left">
        <h1> Who Am I?</h1>
        <p>
          {" "}
          I am React front end Devloper, I creact responsive secure websites for
          my clints.
        </p>
        <Link to="/Contact">
          <button className="btn">Contact</button>{" "}
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={ReactContact1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={ReactContact2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContant;
