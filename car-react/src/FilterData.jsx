import React, { useState } from "react";
import './App.css'; // Ensure the CSS file is imported

let url = "http://localhost:8080/car/filter";

function FilterData() {
    const [cardata, setCarData] = useState([]);
    const [fdate, setFdate] = useState("");
    const [validation, setValidation] = useState("");

    let searchData = async (e) => {
        e.preventDefault();
        try {
            let urlData = await fetch(`${url}/${fdate}`);
            if (urlData.ok) {
                let jsonData = await urlData.json();
                setCarData([]);
                if (jsonData.length === 0) {
                    setValidation(`No Deliveries Found On Given Date: ${fdate}`);
                    setTimeout(() => {
                        setValidation("");
                    }, 5000);
                    console.log(jsonData);   
                } else {
                    setCarData(jsonData);
                }
            } else {
                console.log("Error Contains");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="filter-component">
            <h1>Filter Car Deliveries</h1>
            <form onSubmit={searchData}>
                <label>Enter Date: 
                    <input type="date" onChange={(e) => { setFdate(e.target.value) }} />
                </label>
                <button type="submit">Submit</button>
            </form>
            <h3 className={validation.includes("No Deliveries") ? "error" : "success"}>{validation}</h3>
            <div className="car-data-container">
                {cardata.map((ele) => {
                    return (
                        <div className="filter-data" key={ele.id}>
                            <p>Car Id: {ele.id}</p>
                            <p>Car Company Name: {ele.company}</p>
                            <p>Car Location: 
                                {ele.delivery.map((loc, index) => {
                                    return (
                                        <div key={index}>
                                            Delivery Preferred Location {index + 1}: {loc.location}
                                        </div>
                                    )
                                })}
                            </p>
                            <p>Car Booking Date: {ele.bookingDate}</p>
                            <p>Car Delivery Date: {ele.deliveryDate}</p>
                            <p>Car Price: {ele.price}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FilterData;


























// import React, { useState } from "react";
// let url="http://localhost:8080/car/filter"
// function FilterData(){
//     const[cardata,setCarData]=useState([]);
//     const[fdate,setFdate]=useState("");
//     const[validation,setValidation]=useState("");
//     let searchData=async(e)=>{
//         e.preventDefault();
//         try{
//             let urlData=await fetch(`${url}/${fdate}`);
//             if(urlData.ok){
//                 let jsonData=await urlData.json()
//                 console.log(jsonData.length);
//                 if(jsonData.length===0){
//                     setValidation(`No Delivary Are Not Found On Given Date:${fdate}`)
//                     setTimeout(()=>{
//                         setValidation("");
//                     },5000)
//                 }else{
//                     setCarData(jsonData);
//                 }
//             }else{
//                 console.log("Error Contains");
//             }
//         }catch(error){
//             console.log(error);
//         }
//     }
//     return(
//         <div className="filter-component">
//             <form onSubmit={searchData}>
//                 <label>Enter Date <input type="date" onChange={(e)=>{setFdate(e.target.value)}}/></label>
//                 <button type="submit">Submit</button>
//             </form>
//             <h3>{validation}</h3>
//             <div>
//                 {cardata.map((ele)=>{
//                     return(
//                         <div className="filter-data" key={ele.id}>
//                             <p>Car Id: {ele.id}</p> <br />
//                             <p>Car Company Name: {ele.company}</p> <br />
//                             <p>Car Location: 
//                                 {ele.delivery.map((loc,index)=>{
//                                     return(
//                                         <div>
//                                             Delivery Prefered Location {index+1}:{loc.location}
//                                         </div>
//                                     )
//                                 })
//                                 }
//                             </p> <br />
//                             <p>Car Booking Date:{ele.bookingDate}</p> <br />
//                             <p>Car Delivery Date:{ele.deliveryDate}</p> <br />
//                             <p>Car Price: {ele.price}</p> <br />
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }
// export default FilterData;