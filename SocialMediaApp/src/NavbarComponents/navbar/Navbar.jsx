import React from 'react'
import './NavbarStyle.scss'
import { Link } from 'react-router-dom'
import {} from '@fortawesome/free-solid-svg-icons'
import {
  FaHome,FaMoon,FaSearch,FaThLarge,FaUserAlt,FaRegBell,FaRegEnvelope,
} from "react-icons/fa";

const navbar = () => {
  return (
    <div className='navbar'>
        <div className='left'>
            <Link to="/" style={{textDecoration:"none"}}> 
            <span>Prostack Social</span> </Link>

            
              <FaHome size={20} style={{ color: "black", marginRight: "1rem" }} />
              <FaMoon  size={20} style={{ color: "black", marginRight: "1rem" }}/>
              <FaThLarge size={20} style={{ color: "black", marginRight: "1rem" }} />
                
                <div className='search'>
                  <FaSearch size={20} style={{ color: "red", marginRight: "1rem" }} />
                <input type="text" placeholder='Serch...'/>
                </div>     
                 </div>
                <div className='right'>
                <FaUserAlt size={20} style={{ color: "black", marginRight: "1rem" }}/>
                <FaRegEnvelope size={20} style={{ color: "black", marginRight: "1rem" }}/>
                <FaRegBell size={20} style={{ color: "black", marginRight: "1rem" }}/>
                 
                <div className='user'>
                  <img  alt="" src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png" ></img>
                  <span >Chaali</span>
                </div>
        </div>
    </div>
  )
}

export default navbar