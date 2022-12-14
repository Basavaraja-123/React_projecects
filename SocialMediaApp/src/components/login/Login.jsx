import React from "react";
import "./LoginStyle.scss";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div className="login">
        <div className="card">
          <div className="left">
            <h1> Hello Word...! </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
              laudantium! Accusantium, rem quis. Nisi ratione consectetur quasi,
              corporis ipsa iure sit minus! Tempore modi, voluptates eos dolore
              nihil quos labore!
            </p>
            <span> Don't have an account?</span>
            <Link to="/Register"><button>Rigester</button></Link>
            
          </div>
          <div className="right">
            <h1>Login</h1>
            <form className="">
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
