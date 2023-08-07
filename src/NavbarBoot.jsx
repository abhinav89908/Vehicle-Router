import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarBoot = () => {
  return (
    <>
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <a class="navbar-brand" href="/">Vehicle Router</a>
                <a class="navbar-brand2" href="/">VR</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <NavLink
                        exact
                        activeClassName="active-link" // Add a custom class for active NavLink
                        style={navLinkStyle} // Apply custom inline styles
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        exact
                        activeClassName="active-link"
                        style={navLinkStyle}
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        exact
                        activeClassName="active-link"
                        style={navLinkStyle}
                        to="/problems"
                      >
                        Problems
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        exact
                        activeClassName="active-link"
                        style={navLinkStyle}
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

// Define custom inline styles for NavLink
const navLinkStyle = {
  color: '#333', // Change the color
  textDecoration: 'none', // Remove underline
  padding: '0.5rem 1rem', // Add padding
  borderRadius: '5px', // Add rounded corners
};

export default NavbarBoot;
