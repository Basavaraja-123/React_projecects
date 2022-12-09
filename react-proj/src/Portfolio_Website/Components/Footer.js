import "./FooterStyle.css";
import {
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import React from "react";

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
              <p> #25 , 1st 3rd Cross , Gangamma temple road  Mahadevpura</p>
              <p>Bangalore - 560037</p>
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
              Info@gmail@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
          This is me Prasana CEO & Founder of Re re-Devloper. I Enjoy the
            devloping projects and although I enjoy discossing and new projects
            disigning.
          </p>
          <div className="social">
            <FaInstagram
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
