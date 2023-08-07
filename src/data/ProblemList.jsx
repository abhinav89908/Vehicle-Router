import web1 from  "../images/tsp.jpg";
import web2 from  "../images/svrp.jpg";

const ProblemList = [
    {
        title: "Travelling Salesman Problem (TSP)",
        about: "In the Vehicle Routing Problem (VRP), the goal is to find optimal routes for multiple vehicles visiting a set of locations." ,
        addr: "/problems/TSP",
        imgsrc: web2
    },
    {
        title: "Vehicle Routing Problem (Standard)",
        about: "In the Vehicle Routing Problem (VRP), the goal is to find optimal routes for multiple vehicles visiting a set of locations.",
        addr: "/problems/SVRP",
        imgsrc: web2
    }
]    
/*
,
    {
        title: "Vehicle Routing Problem with Capacity Constraints",
        about: "The capacitated vehicle routing problem (CVRP) is a VRP in which vehicles with limited carrying capacity need to pick up or deliver items at various locations.",
        addr: "/problems/TSP"
    },
    {
        title: "Vehicle Routing Problem: Pickup and Delivery",
        about: "In this section we describe a VRP in which each vehicle picks up items at various locations and drops them off at others.",
        addr: "/problems/TSP"
    },
    {
        title: "Vehicle Routing Problem: Time Window",
        about: "Many vehicle routing problems involve scheduling visits to customers who are only available during specific time windows.",
        addr: "/problems/TSP"
    },
    {
        title: "Dial-a-ride Problem (DARP)",
        about: "Many vehicle routing problems involve scheduling visits to customers who are only available during specific time windows.",
        addr: "/problems/TSP"
    },
]
*/
export default ProblemList;