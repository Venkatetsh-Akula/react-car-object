import React, { useState } from "react";
let url="http://localhost:8080/car"
function PutMappingCar(){
    const[id,setId]=useState(0);
    const[company,setCompany]=useState("");
    const[loc,setLoc]=useState("");
    const[price,setPrice]=useState(0);
    let obj=()=>{
        return{
            id:id,
            company:company,
            loc:loc,
            price:price
        }
    }
    let updataData=async (e)=>{
        e.preventDefault();
        try{
            let urlData=await fetch(url,{
                method:"PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj())
            })
        }catch(error){
            console.log(error);
        }
    }
    return(
        <div className="put-component">
           <form onSubmit={updataData}>
                <label>Enter The Car Id: <br />
                    <input type="number" onChange={(e)=>{setId(e.target.value)}}/>
                </label> <br />
                <label>Enter The Car Company: <br />
                    <input type="text" onChange={(e)=>{setCompany(e.target.value)}}/>
                </label> <br />
                <label>Enter The Car Location: <br />
                    <input type="text" onChange={(e)=>{setLoc(e.target.value)}}/>
                </label> <br />
                <label>Enter The Car Price: <br />
                    <input type="number" onChange={(e)=>{setPrice(e.target.value)}}/>
                </label> <br /> 
                <button type="submit">Submit</button>
           </form>
        </div>
    )
}
export default PutMappingCar;