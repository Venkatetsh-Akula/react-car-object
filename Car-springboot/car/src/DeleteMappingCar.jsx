import React, { useState } from "react";
let url="http://localhost:8080/car";
function DeleteMappingCar(){
    const[id,setId]=useState(0);
    let deleteCar=async (e)=>{
        e.preventDefault();
        try{
            let urlData=await fetch(`${url}/${id}`,{
                method:"DELETE"
            })
            if(urlData.ok){
                let jsonData=urlData.json();
                console.log(jsonData);
            }
            else{
                document.writeln("error");
            }
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <div className="delete-component">
            <div className="delete-car">
                <form onSubmit={deleteCar}>
                    <label >Enter the Car Id to Delete: <input type="number" onChange={(e)=>{setId(e.target.value)}} /></label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default DeleteMappingCar;