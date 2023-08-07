import React from "react";
import { NavLink } from "react-router-dom";
import web from "./images/animepic.png";
import TSP from "./TSP";


const ProblemCard = (props) =>{
    return (
        <>  
            <div className='col-md-4 col-10 mx-auto'>
                <div className="card" >
                <img src={web} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.about}</p>
                        <NavLink to={props.addr} className="btn btn-primary">Solve</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProblemCard;