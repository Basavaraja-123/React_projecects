import React from 'react'


function Bootstrap1(){
  
  return <nav className='navbar navbar-dark bg-dark '>

    <h1><a href="/">Bootstrap Example</a></h1>
    <div>
        <ul className="nav justify-content">
            <li><a className='navbar text-success ' href="/home">Home</a></li>
            <li><a className='navbar text-success' href="/about">About</a></li>
            <li><a className='navbar text-success' href="/login">Login</a></li>
            <li><a className='navbar text-success' href="/More">More information</a></li>
            <label htmlFor="Serch"></label>
        <input type="text" placeholder='Serch' />
        </ul>
        
        
    </div>
  </nav>
}

export default Bootstrap1;