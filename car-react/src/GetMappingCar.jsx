import React from "react";
import { useState } from "react";
import './App.css'; 

let url = "http://localhost:8080/car";

function GetMappingCar() {
    let [carObj, setCarObj] = useState([]);
    let [validation, setValidation] = useState("");

    let allDetails = async () => {
        let urldata = await fetch(url);
        let datajson = await urldata.json();
        console.log(datajson);
        if (datajson.length === 0) {
            setValidation("No Cars Found");
            setTimeout(() => {
                setValidation("");
            }, 3000);
        }
        setCarObj(datajson);
    };

    return (
        <div className="getmapping-container">
            <h1 className="title">Available Cars</h1>

            {
                carObj.map((ele) => {
                    return (
                        <div className="car-details" key={ele.id}>
                            <p><strong>Car Id:</strong> {ele.id}</p>
                            <p><strong>Company Name:</strong> {ele.company}</p>
                            <p><strong>Preferred Locations:</strong> 
                                {ele.delivery.map((loc, index) => {
                                    return (
                                        <div key={index} className="location">
                                            Location {index + 1}: {loc.location}
                                        </div>
                                    );
                                })}
                            </p>
                            <p><strong>Booking Date:</strong> {ele.bookingDate}</p>
                            <p><strong>Delivery Date:</strong> {ele.deliveryDate}</p>
                            <p><strong>Price:</strong> ${ele.price}</p>
                        </div>
                    );
                })
            }

            <div className="button-section">
                <button type="button" className="fetch-button" onClick={allDetails}>Get List of Cars</button>
                <h3 className="validation">{validation}</h3>
            </div>
        </div>
    );
}

export default GetMappingCar;






























































// import React from "react";
// import { useState,useEffect } from "react";
// let url="http://localhost:8080/car";
// function GetMappingCar(){
//     let [carObj,setCarObj]=useState([]);
//     let [validation,setValidation]=useState("");
//     let allDetails=async ()=>{
//         let urldata=await fetch(url);
//         let datajson=await urldata.json();
//         console.log(datajson);
//         if(datajson.length===0){
//             setValidation("No Cars Found");
//             setTimeout(()=>{
//                 setValidation("");
//             },3000)
//         }
//         setCarObj(datajson);
//     }
//     return(
//         <div className="getmapping-component">
//             {
//                 carObj.map((ele)=>{
//                     return(
//                         <div className="car-details" key={ele.id}>
//                         <p>Car Id: {ele.id}</p> <br />
//                         <p>Car Company Name: {ele.company}</p> <br />
//                         <p>Car Location: 
//                             {ele.delivery.map((loc,index)=>{
//                                 return(
//                                     <div>
//                                         Prefered Locations {index+1}: {loc.location}
//                                     </div>
//                                 )
//                             })}
//                         </p> <br />
//                         <p>Car Booking Date:{ele.bookingDate}</p> <br />
//                         <p>Car Delivery Date:{ele.deliveryDate}</p>
//                         <p>Car Price: {ele.price}</p> <br />
//                     </div>   
//                     )    
//                 })
//             } <br />
//             <p>Click Here To Get List Of Cars <br /><button type="button" onClick={allDetails}> Click Here</button></p>
//             <h3>{validation}</h3>
//         </div>
//     )
// }
// export default GetMappingCar;