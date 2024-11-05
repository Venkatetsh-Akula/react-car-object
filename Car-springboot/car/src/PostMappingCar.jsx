import React, { useState } from "react";
let url="http://localhost:8080/car";
function PostMappingCar(){
    const[company,setCompany]=useState("");
    const[loc,setLoc]=useState("");
    const[price,setPrice]=useState(0);
    let obj=()=>{
        return{
            company:company,
            loc:loc,
            price:price
        }
    }
    let submitCar= async (e)=>{
        e.preventDefault();
        try{
            let urlData=await fetch(url,{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj())
            });
            if(urlData.ok){
                let datajson=urlData.json();
                console.log("Data saved In Data Base");
            }else{
                console.log("Got Error");
            }
        }
        catch(error){
            document.writeln(error);
        }
    }
    return(
        <div className="saveCar" onSubmit={submitCar}>
            <form>
                <label>Enter Car Company: <br />
                    <input type="text" onChange={(e)=>{setCompany(e.target.value)}}/>
                </label> <br />
                <label>Enter Car Location: <br />
                    <input type="text" onChange={(e)=>{setLoc(e.target.value)}}/>
                </label> <br />
                <label>Enter Car price: <br />
                    <input type="number" onChange={(e)=>{setPrice(e.target.value)}}/>
                </label> <br />
                <button type="subbmit">Submit</button>
            </form>
        </div>
    )
}
export default PostMappingCar;