import React, { useState } from "react";
import './App.css'; // Ensure to import your CSS file for styling

let url = "http://localhost:8080/car";

function DeleteMappingCar() {
    const [id, setId] = useState(0);
    const [validation, setValidation] = useState("");

    let deleteCar = async (e) => {
        e.preventDefault();
        let urlData = await fetch(`${url}/${id}`, {
            method: "DELETE"
        });
        if (urlData.ok) {
            setValidation(`Car Details Deleted Based On Given Id ${id}`);
            setTimeout(() => {
                setValidation("");
            }, 3000);
        }
        else {
            setValidation("No Car Found Based On Given Id");
            setTimeout(() => {
                setValidation("");
            }, 3000);
        }
    }

    return (
        <div className="delete-component">
            <h1>Delete Car</h1>
            <div className="delete-car">
                <form onSubmit={deleteCar}>
                    <label>Enter the Car Id to Delete: 
                        <input type="number" onChange={(e) => { setId(e.target.value) }} required />
                    </label>
                    <button type="submit">Delete</button>
                </form>
                <h3 className={validation.includes("No Car") ? "error" : "success"}>{validation}</h3>
            </div>
        </div>
    )
}

export default DeleteMappingCar;


































// import React, { useState } from "react";
// let url="http://localhost:8080/car";
// function DeleteMappingCar(){
//     const[id,setId]=useState(0);
//     const[validation,setValidation]=useState("");
//     let deleteCar=async (e)=>{
//         e.preventDefault();
//         let urlData=await fetch(`${url}/${id}`,{
//             method:"DELETE"
//         })
//         if(urlData.ok){
//             setValidation(`Car Details Deleted Based On Given Id ${id}`);
//             setTimeout(()=>{
//                 setValidation("");
//             },3000);
//         }
//         else{
//             setValidation("No Car Found Based On Given Id")
//             setTimeout(()=>{
//                 setValidation("");
//             },3000)
//         }
//     }
//     return(
//         <div className="delete-component">
//             <div className="delete-car">
//                 <form onSubmit={deleteCar}>
//                     <label >Enter the Car Id to Delete: <input type="number" onChange={(e)=>{setId(e.target.value)}} /></label>
//                     <button type="submit">Submit</button>
//                 </form>
//                 <h3>{validation}</h3>
//             </div>
//         </div>
//     )
// }
// export default DeleteMappingCar;