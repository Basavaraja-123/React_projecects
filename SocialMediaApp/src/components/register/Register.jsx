import React from 'react'
import './RegisterStyle.scss'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <div className="Register">
        <div className="card">
          <div className="left">
            <h1> ProStack Social...! </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
              laudantium! Accusantium, rem quis. Nisi ratione consectetur quasi,
              corporis ipsa iure sit minus! Tempore modi, voluptates eos dolore
              nihil quos labore!
            </p>
            <span> Don have an account?</span>
            <Link to ="/Login"><button>Login</button></Link>
            
          </div>
          <div className="right">
            <h1>Register</h1>
            <form className="">
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Password" /> 
              <input type="text " placeholder="Name" />
              <button>Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register ;