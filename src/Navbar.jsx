import React from 'react';

const Navbar = ()=>{
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
            <a href="#" className="logo">Dial-a-ride</a>
        </div>
        
        <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div className="menu-icon">&#9776;</div>
    </nav>
    </>
  );
}

export default Navbar;
