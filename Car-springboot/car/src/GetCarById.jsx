import React, { useState } from "react";
let url="http://localhost:8080/car";
function GetCarById(){
    const[carNumber,setCarNumber]=useState(0);
    const[carData,setCarData]=useState([]);
    let carDetails=async (e)=>{
        e.preventDefault();
       try{
        let DataUrlData= await fetch(`${url}/${carNumber}`)
        let jsonData=await DataUrlData.json();
        setCarData(jsonData);
       }catch(error){
        document.writeln(error);
       }
    }

    return(
        <div>
            <form onSubmit={carDetails}>
            <label>Enter Car Id To Check <input type="number" onChange={(e)=>{setCarNumber(e.target.value)}}/></label>
            <button type="submit">Submit</button>
            </form> <br />
            <div className="json-car-data">
                    <div key={carData.id}>
                        <p>Car Id: {carData.id}</p> <br />
                        <p>Car Company Name: {carData.company}</p> <br />
                        <p>Car Location: {carData.loc}</p> <br />
                        <p>Car Price: {carData.price}</p> <br /> 
                    </div>
            </div>
        </div>
    )
}
export default GetCarById;