import React, { useState } from 'react';

import "./ProblemInput.css";
import Geolocation from "./data/CityGeolocation";
import CityIndex from "./data/CityIndex";
import Cities from "./data/Cities";

const TSP = () => {
    const [city, setCity] = useState("");

    const [arr, setArray] = useState([1]);

    const newCity = (event) => {
        let len = arr.length;
        let temp = arr;
        temp.push(len+1);
        console.log(temp);
        setArray(temp);
    }

    const cityChoosen = (event) => {
        
        console.log(event.target.value);
    }

    const [numDivs, setNumDivs] = useState(1);

    const handleAddDiv = () => {
        console.log("Number of prev options are: " + numDivs);
        setNumDivs(numDivs + 1);
        console.log("Number of select options are: " + numDivs);
    };

    return (
        <>
            <div className='container-fluid nav_bg' >
                <div className='row' >
                    <div className='col-8 mx-auto mt-5 mb-5' >
                        <div className="centerbox" style={containerStyle}>
                            <div className="mb-3" style={containerStyle}>
                                <label for="formGroupExampleInput" className="form-label" style={containerStyle}>Number of Vehicles: </label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="formGroupExampleInput" 
                                    placeholder="Example input placeholder" 
                                    onChange={cityChoosen}
                                />
                                <button onClick={newCity}>Add</button>
                            </div>
                            <div className="mb-3" style={containerStyle}>
                                <label for="formGroupExampleInput2" className="form-label" style={containerStyle}>Another label</label>
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
                            </div>
                            

                            {[...Array(numDivs)].map((_, index) => (
                                <div key={index} className="mb-3" style={containerStyle}>
                                <label htmlFor={`formGroupExampleInput${index}`} className="form-label" style={containerStyle}>
                                    City {index + 1}:
                                </label>
                                <select>
                                    <option value="#" disabled defaultValue>
                                    Choose a City
                                    </option>
                                    {Cities.map((val, ind) => (
                                    <option key={ind} value={val}>
                                        {val}
                                    </option>
                                    ))}
                                </select>
                                </div>
                            ))}
                            {/* Add button to add more divs */}
                            <button onClick={handleAddDiv}>Add City</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const containerStyle = {
    //   color: '#dc3545',
    backgroundColor: '#f7caab',
}

export default TSP;