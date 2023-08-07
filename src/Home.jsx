import React from 'react';

import { NavLink } from 'react-router-dom';
const Home = ()=>{
  return (
    <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className="container" >
                        <div className="content">
                            <h1>Welcome to the <strong>Vehicle Router</strong> Website</h1>
                            <p>One stop solution to travelling salesman problem and vehicle routing problem with capacity constraints and timing windows.</p>
                            <NavLink to="/problems" className="get-started-button">Get Started</NavLink>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </>
  );
}

export default Home;
