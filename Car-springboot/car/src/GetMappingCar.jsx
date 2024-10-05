import React from "react";
import { useState,useEffect } from "react";
let url="http://localhost:8080/car";
function GetMappingCar(){
    let [carObj,setCarObj]=useState([]);
    let allDetails=async ()=>{
        let urldata=await fetch(url);
        let datajson=await urldata.json();
        console.log(datajson);
        setCarObj(datajson);
    }
    return(
        <div className="getmapping-component">
            {
                carObj.map((ele)=>{
                    return(
                        <div className="car-details" key={ele.id}>
                        <p>Car Id: {ele.id}</p> <br />
                        <p>Car Company Name: {ele.company}</p> <br />
                        <p>Car Location: {ele.loc}</p> <br />
                        <p>Car Price: {ele.price}</p> <br />
                    </div>   
                    )    
                })
            } <br />
            <p>Click Here To Get List Of Cars <br /><button type="button" onClick={allDetails}> Click Here</button></p>
        </div>
    )
}
export default GetMappingCar;