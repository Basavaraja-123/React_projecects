import "./FooterStyle.css";
import {
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
          </div>
          <h4>
            <div>
              <p> Mahadevpura Bangalore</p>
              <p>  Karnataka- 560048</p>
            </div>
          </h4>
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              +91 8892224959
            </h4>
          </div>
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              Basavarajnm70@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h3>About me</h3>
          <p>
          Looking for new opportunities and challenges to upgrade my skills and knowledge, I am always highly enthused about my work and
tasks ahead. Proficient in HTML, JAVASCRIPT, REACT JS,REDUX,PYTHON and MONGO DB. I have always done my work with full
dedication. I can grasp new responsibilities and new things very quickly. Also, I am a Graduate 2019 batch BCA with specialization (Computer application), so I have some knowledge
about the latest industry. ... I will give my maximum for completing my work. "Honestly, I possess all the skills and experience that
you're looking for. I'm pretty confident that I am the best candidate for this job role. It's not just my background in the past projects,
 but also my people skills, which will be applicable in this position.
          </p>
      </div>

          <div className="social " >
            <Link to=""> 
            <FaInstagram
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            </Link>
            <Link to=""> 
            <FaTwitter
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            </Link>
            <Link to="https://www.linkedin.com/in/basavaraja-nm" >
            <FaLinkedin 
              size={30}
              style={{ color: "white", marginRight: "1rem" }} 
            />
            </Link> 
            <Link to="https://github.com/Basavaraja-123" >
            <FaGithub 
              size={30}
              style={{ color: "white", marginRight: "1rem" }} 
            />
            </Link>
          </div>
      </div><br/> <br/> <br/>
    </div>
  );
};

export default Footer;
