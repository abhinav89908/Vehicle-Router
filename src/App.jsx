import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Home from "./Home";
import About from "./About";
import Contact from './Contact';
import Dashboard from './Dashboard';
import Problems from './Problems';
import NavbarBoot from './NavbarBoot';
import TSP from './TSP';
import SVRP from './SVRP';
import BasicExample from './BasicExample';
import { Routes, Route} from 'react-router-dom';


const App = ()=>{
  return (
    <>
      <NavbarBoot/>
      <Routes>
        {/* Navbar Path */}
        <Route exact path ="/" Component={Home} />
        <Route exact path ="/home" Component={Home} />
        <Route exact path ="/about" Component={About} />
        <Route exact path ="/problems" Component={Problems} />
        <Route exact path ="/contact" Component={Contact} />
        <Route exact path ="/dashboard" Component={Dashboard} />
        {/* Problems Path */}
        <Route exact path ="/problems/TSP" Component={TSP} />
        <Route exact path ="/problems/SVRP" Component={SVRP} />
        <Route exact path ="/basicexample" Component={BasicExample} />
      </Routes>
      
    </>
  );
}

export default App;
