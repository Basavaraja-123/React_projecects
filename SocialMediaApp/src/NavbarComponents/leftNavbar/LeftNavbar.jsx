import React from "react";

import "./leftNavbarStyle.scss";
import {
  FaUserFriends,
  FaMailBulk,
  FaVideo,
  FaImage,
  FaCalendarAlt,
  FaGamepad,
  FaUsers,
  FaHospitalAlt,
  FaStopwatch,
  FaFileVideo,
  FaBookReader,
  FaBook,
  FaDollarSign   
} from "react-icons/fa";

import DP from "../imgs/solo3.jpeg";

const leftNavbar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img alt="" src={DP} />
            <span>Chaali</span>
          </div>
          <div className="item">
            <FaUserFriends
              size={20}
              style={{ color: "green", marginRight: "1rem" }}
              className="img"
            />
            <span> Friends</span>
          </div>
          <div className="item">
            <FaUsers
              size={20}
              style={{ color: "red", marginRight: "1rem" }}
              className="img"
            />
            <span>Group</span>
          </div>
          <div className="item">
            <FaHospitalAlt
              size={20}
              style={{ color: "blue", marginRight: "1rem" }}
              className="img"
            />
            <span>Market</span>
          </div>
          <div className="item">
            <FaFileVideo
              size={20}
              style={{ color: "orange", marginRight: "1rem" }}
              className="img"
            />
            <span>Watch</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts </span>
       
        <div className="item">
          <FaCalendarAlt
            size={20}
            style={{ color: "red", marginRight: "1rem" }}
            className="img"
          />
          <span>Events</span>
        </div>
        <div className="item">
          <FaGamepad
            size={20}
            style={{ color: "green", marginRight: "1rem" }}
            className="img"
          />
          <span>Games</span>
        </div>
        <div className="item">
          <FaImage
            size={20}
            style={{ color: "black", marginRight: "1rem" }}
            className="img"
          />
          <span>Gallary</span>
        </div>
        <div className="item">
          <FaVideo
            size={20}
            style={{ color: "red", marginRight: "1rem" }}
            className="img"
          />
          <span>Videos</span>
        </div>
        <div className="item">
          <FaMailBulk
            size={20}
            style={{ color: "blue", marginRight: "1rem" }}
            className="img"
          />
          <span>Messages</span>
        </div>
        <div className="item">
          <FaStopwatch
            size={20}
            style={{ color: "pink", marginRight: "1rem" }}
            className="img"
          />
          <span>Memory</span>
        </div>
        <hr/>
        <div className="menu">
        </div>
          <span>Others</span>
        
        <div className="item">
          <FaDollarSign
            size={20}
            style={{ color: "green", marginRight: "1rem" }}
            className="img"
          />
          <span>Foundraise</span>
        </div>
        <div className="item">
          <FaBook
            size={20}
            style={{ color: "black", marginRight: "1rem" }}
            className="img"
          />
          <span>Tutorials</span>
        </div>
        <div className="item">
          <FaBookReader
            size={20}
            style={{ color: "red", marginRight: "1rem" }}
            className="img"
          />
          <span>Courses</span>
        </div>
        </div>

      </div>
    </div>
  );
};

export default leftNavbar;
