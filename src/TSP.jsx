import React, { useState } from 'react';

import "./ProblemInput.css";
import "./css/TSP.css";
import Geolocation from "./data/CityGeolocation";
import CityIndex from "./data/CityIndex";
import Cities from "./data/Cities";

const TSP = () => {

    const [numDivs, setNumDivs] = useState(1);
    const [result, setResult] = useState([1,3,2,3]);
    const [cityChoosen, setCity] = useState([]);

    const calculateDistance = (i, j) =>{
        var d = Math.abs(Geolocation[i].Latitude-Geolocation[i+1].Latitude) + Math.abs(Geolocation[i].Longitude-Geolocation[i+1].Longitude)
        return d.toFixed(2);
    }

    const handleoutput = (plan) =>{
        // console.log("Output handling....");
        // console.log(plan);
        deleteOutput();
        // console.log("Adding new paras..");
        var outputString = plan['plan output'];
        // console.log(outputString);
        const numbersAsStringArray = outputString[0].split(' ');
        const output = numbersAsStringArray.map(Number);
        var i=0;
        // console.log("City choosen: " + cityChoosen);
        while(i<output.length-1){
            var newp = document.createElement("p");
            newp.setAttribute("id", "cityname");
            var cityname = cityChoosen[output[i]];
            newp.textContent = "" + cityname;
            document.getElementById('cityoutput').appendChild(newp);

            var detail = document.createElement("p");
            detail.setAttribute("id", "plandetail");
            var d = calculateDistance(output[i], output[i+1]);
            detail.textContent = "From " + cityname + " go to city " + cityChoosen[output[i+1]] + " travelling a manhattan distance of " + d + " units";
            document.getElementById('cityoutput').appendChild(detail);
            i++;
        }
        if(i<output.length){
            var newp = document.createElement("p");
            newp.setAttribute("id", "cityname");
            var cityname = cityChoosen[output[i]];
            newp.textContent = "" + cityname;
            document.getElementById('cityoutput').appendChild(newp);

            // var detail = document.createElement("p");
            // detail.setAttribute("id", "plandetail");
            // var d = plan['total distance'];
            // detail.textContent = "Total Distance Travelled : " + d + " units.";
            // document.getElementById('cityoutput').appendChild(detail);
        }
    
    }
    const deleteOutput = () =>{
        // console.log('Deleting the paras');
        var container = document.getElementById('cityoutput');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    const handleAddDiv = () => {
        // console.log("Number of prev options are: " + numDivs);
        setNumDivs(numDivs + 1);
        // console.log("Number of select options are: " + numDivs);
    };
    
    const handleDelDiv = () => {
        if(numDivs>1) setNumDivs(numDivs - 1);
        // console.log("Number of select options are: " + numDivs);
    };

    const formSubmit = (event) =>{
        event.preventDefault();
        process();
    }

    const data = (str) =>{
        // const apiUrl = 'https://vehiclerouter.onrender.com/vrp';
        // const distanceParam = str;
        // const numVehiclesParam = '1';
        // const depotParam = '2';

        // // Create the URLSearchParams object and add the parameters
        // const params = new URLSearchParams({
        // distance: distanceParam,
        // num_vehicles: numVehiclesParam,
        // depot: depotParam,
        // });

        // Construct the complete URL with the query string
        // const completeUrl = `${apiUrl}?${params.toString()}`;
        // const completeUrl = 'https://vehiclerouter.onrender.com/vrp?distance=23.16453%2072.58107%2010.34059%2079.37905%2019.67203%2078.5359%2026.32255%2090.68526&num_vehicles=1&depot=2';

        const res = fetch(str)
            .then((response) => {
                // Check if the response is successful
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                // Parse the response body as JSON data
                return response.json();
            })
            .then((data) => {
                // Data is the parsed JSON object
                handleoutput(data);
                // console.log(data);
            })
            .catch((error) => {
                // console.error("Error fetching data:", error);
            });
    }

    const process = async (event) =>{
        // console.log("Number of cities choosen: " + numDivs);
        let p=1;
        let coordinates = [];
        var cities = [];
        while(p<=numDivs){
            var selectElement = document.getElementById(`city${p}`);
            var city = selectElement.value;
            let index = CityIndex.get(city);
            cities.push(city);
            // console.log(Geolocation[index].Latitude + " " + Geolocation[index].Longitude);
            coordinates.push([Geolocation[index].Latitude, Geolocation[index].Longitude]);
            p++;
        }
        
        // console.log(coordinates);
        let i=0, j=0;
        let str = "https://vehiclerouter.onrender.com/vrp?distance=";
        for(i=0; i<coordinates.length; i++){
            str = str + coordinates[i][0] + "%20" + coordinates[i][1] + "%20";
        }

        selectElement = document.getElementById('depot');
        city = selectElement.value;
        cities.push(city);
        // console.log(cities);
        setCity(cities);
        let index = CityIndex.get(city);
        
        var x = Geolocation[index].Latitude;
        var y = Geolocation[index].Longitude;
        
        str = str + x + "%20" + y + "&num_vehicles=1&depot=" + coordinates.length;
        try{
            const fetched = await data(str);
        }
        catch(err){
            // console.log("Can't fetch the request!")
        }

        let distMat=[];
        
        for(i=0; i<numDivs; i++){
            distMat.push([]);
            let arr = [];
            for(j=0; j<numDivs; j++){
                var d = Math.abs(coordinates[i][0]-coordinates[j][0]) + Math.abs(coordinates[i][1]-coordinates[j][1]);
                d = d.toFixed(2);
                arr.push(d);
            }
            distMat[i].push(arr);
        }

    }

    return (
        <>
            <div className='container-fluid nav_bg' >
                <div className='row' >
                    <div className='centerbox col-10 mx-auto mt-5 mb-5' >
                        <div>
                            <form action="" onSubmit={formSubmit} >
                                <h2 className='text-center'>Input Details</h2>
                                <hr />
                                <br />
                                <div className="mb-3" >
                                <label htmlFor={`formGroupExampleInputDepot`} className="form-label" >
                                    Location of Depot:
                                </label>
                                <select id="depot" required> 
                                    <option value="" disabled selected hidden>
                                    Choose a City
                                    </option>
                                    {Cities.map((val, ind) => (
                                    <option key={ind} value={val}>
                                        {val}
                                    </option>
                                    ))}
                                </select>
                                </div>
                                

                                {[...Array(numDivs)].map((_, index) => (
                                    <div key={index} className="mb-3" >
                                    <label htmlFor={`formGroupExampleInput${index}`} className="form-label" >
                                        City {index + 1}:
                                    </label>
                                    <select id={`city${index+1}`} required> 
                                        <option value="" disabled selected hidden>
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
                                <br />
                                <div className="buttons">
                                    <button id='addBut' onClick={handleAddDiv}>Add City</button>
                                    <button id='delBut' onClick={handleDelDiv}>Delete City</button>
                                    <button id='submitBut' type='submit'>Submit</button>
                                </div>
                                <p id='plandetail'>*Note: Please wait 2-4 seconds to calculate the result.</p>
                                <p id='plandetail'>*Note: If plan output is undefined the press submit button again.</p>
                            </form> 
                        </div>
                    </div>
                    <div className='centerbox col-10 mx-auto mt-5 mb-5' >
                        <h2 className='text-center'>Plan Output</h2>
                        <hr />
                        <br />
                        <div id="cityoutput">
                            <p id='plandetail'>*Note: Please wait 2-4 seconds to calculate the result.</p>
                            <p id='plandetail'>*Note: If plan output is undefined the press submit button again.</p>
                            
                            {/* <p id='cityname'>City where the depot is located</p>
                            <p id='pathdetail'>
                                The distance from the depot to the first intermediate city
                                will be displayed here...
                            </p>
                            <p id='cityname'>First Intermediate city</p>
                            <p id='pathdetail'>
                                Distance between the intermediate cities will be displayed here...
                            </p>
                            <p id='cityname'>Last Intermediate city</p>
                            <p id='pathdetail'>
                                The distance from the last intermediate city to the depot
                                will be displayed here...
                            </p>
                            <p id='cityname'>City where the depot is located</p>
                            <br /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default TSP;