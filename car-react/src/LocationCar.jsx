
import React, { useState } from "react";
import './App.css'; // Ensure the CSS file is imported

let url = "http://localhost:8080/car";

function LocationCar() {
    const [clocation, setClocation] = useState("");
    const [err, setErr] = useState("");
    const [locDetails, setLocDetails] = useState([]);
    const[locationlist,setLocationList]=useState([]);

    let locationDetails = async (e) => {
        e.preventDefault();
        let list = [];
        setLocationList([]);
        setLocDetails([]);
        try {
            let urldata = await fetch(url);
            if (urldata.ok) {
                let jsondata = await urldata.json();
                jsondata.map((ele) => {
                    ele.delivery.map((loc) => {
                        if (loc.location === clocation && list.indexOf(ele)<0 ) {
                            list.push(ele);
                        }
                    });
                });
                if(list.length > 0) {
                    setLocDetails(list);
                }else{
                    setErr("No Car Are Available On Preferred Location");
                    setTimeout(() => {
                        setErr("");
                    }, 5000);
                }
            } else {
                console.log("Something went wrong");
            }
        } catch (error) {
            console.log(error);
        }
    };

    let avaliableLocation=async ()=>{
        let locli=[];
        let urldata=await fetch(url);
        if(urldata.ok){
            let jsondata=await urldata.json();
            jsondata.map((ele)=>{
                ele.delivery.map((loc)=>{
                    if(locli.indexOf(loc.location)<0){
                        locli.push(loc.location);
                    }
                })
            })
            setLocationList(locli);
            console.log(locli);
        }
    }


    
    return (
        <div className="location-component">
            <h1>Cars Avaliable Locations</h1>
            <div class="location-list">
            <h3>Available Locations:</h3>
            <ul>
                {locationlist.map((ele) => {
                    return (
                        <li key={ele}>{ele}</li>
                    );
                })}
            </ul>
            </div>
            <div>
                <button type="button" onClick={avaliableLocation}>Click Here</button>
            </div>
            <h1>Find Cars by Preferred Location</h1>
            <div className="car-loc">
                <form onSubmit={locationDetails}>
                    <label>Enter Car Preferred Location:
                        <input
                            type="text"
                            onChange={(e) => { setClocation(e.target.value) }}
                            required
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>

            <h3 className={err ? "error" : "success"}>{err}</h3>

            <div className="car-data-container">
                {
                    locDetails.map((ele) => {
                        return (
                            <div className="car-data" key={ele.id}>
                                <p>Car Id: {ele.id}</p>
                                <p>Car Company Name: {ele.company}</p>
                                <p>Available Location: {clocation}</p>
                                <p>Car Price: {ele.price}</p>
                                <p>Car Booking Date: {ele.bookingDate}</p>
                                <p>Car Delivery Date: {ele.deliveryDate}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default LocationCar;



















// import React from "react";
// import { useState } from "react";
// let url="http://localhost:8080/car";
// function LoactionCar(){
//     const[clocation,setClocation]=useState("");
//     const[err,setErr]=useState("")
//     const [locDetails,setLocDetails]=useState([]);
//     let locationDetails=async (e)=>{
//         e.preventDefault();
//         let list=[];
//         setLocDetails([]);
//         try{
//             let urldata=await fetch(url);
//            if(urldata.ok){
//                 let jsondata=await urldata.json();
//                 jsondata.map((ele)=>{
//                     ele.delivery.map((loc)=>{
//                         if(loc.location===clocation){
//                             list.push(ele);
//                         }
//                     })
//                 })
//                 if(list.length>0){
//                     setLocDetails(list);
//                 }else{
//                     setErr("No Data Avaliable On Prefered Location");
//                     setTimeout(()=>{
//                         setErr("");
//                     },5000);
//                 }
//                 console.log(locDetails);
//            }else{
//                 console.log("Something got error");
//            }
//         }
//         catch(error){
//             console.log(error);
//         }
//     }
//     return(
//         <div>
//             <div className="car-loc">
//                 <form onSubmit={locationDetails}>
//                     <label>Enter Car Prefered Location:
//                         <input type="text" onChange={(e)=>{setClocation(e.target.value)}}/>
//                     </label>
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>

//             <h3>{err}</h3>
             
//             <div>
//                 {
                    
//                     locDetails.map((ele)=>{
//                         return(
//                             <div>
//                                 <p>Car Id: {ele.id}</p> <br />
//                                 <p>Car Company Name: {ele.company}</p> <br />
//                                 <p>Avaliable Location Are: {clocation}</p>
//                                 <p>Car Price: {ele.price}</p> <br /> 
//                                 <p>Car Booking Date: {ele.bookingDate}</p> <br />
//                                 <p>Car Delivery Date: {ele.deliveryDate}</p> <br /> 
//                             </div>
//                         )  
//                     })
//                 }
//             </div>
//         </div>
//     )
// }
// export default LoactionCar;