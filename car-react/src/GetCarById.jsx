import React, { useState } from "react";
import "./App.css"

let url = "http://localhost:8080/car";

function GetCarById() {
    const [carNumber, setCarNumber] = useState(0);
    const [carData, setCarData] = useState({});
    const [validation, setValidation] = useState("");

    let carDetails = async (e) => {
        e.preventDefault();
        try {
            let DataUrlData = await fetch(`${url}/${carNumber}`);
            let jsonData = await DataUrlData.json();
            setCarData(jsonData);
            console.log(carData);

            if (jsonData.httpcode > 0) {
                console.log(jsonData.httpcode);
                setValidation("No Cars Found Based On ID");
                setTimeout(() => {
                    setValidation("");
                }, 3000);
            } else {
                console.log(jsonData);
            }
        } catch (error) {
            document.writeln(error);
        }
    };

    return (
        <div className="get-car-by-id-container">
            <h1 className="title">Search for Car by ID</h1>
            <form onSubmit={carDetails} className="search-form">
                <label>
                    Enter Car Id:{" "}
                    <input
                        type="number"
                        onChange={(e) => {
                            setCarNumber(e.target.value);
                        }}
                        className="input-field"
                    />
                </label>
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
            <h3 className="validation-message">{validation}</h3>
            
            {Object.keys(carData).length > 0 && (
                <div className="car-details">
                    <p><strong>Car Id:</strong> {carData.id}</p>
                    <p><strong>Company Name:</strong> {carData.company}</p>
                    <p>
                        <strong>Preferred Locations:</strong>{" "}
                        {carData.delivery && carData.delivery.length > 0 ? (
                            carData.delivery.map((ele, index) => (
                                <div key={index} className="location">
                                    Location {index + 1}: {ele.location}
                                </div>
                            ))
                        ) : (
                            <p>No delivery locations available</p>
                        )}
                    </p>
                    <p><strong>Car Price:</strong> ${carData.price}</p>
                    <p><strong>Booking Date:</strong> {carData.bookingDate}</p>
                    <p><strong>Delivery Date:</strong> {carData.deliveryDate}</p>
                </div>
            )}
        </div>
    );
}

export default GetCarById;














































// import React, { useState } from "react";
// let url="http://localhost:8080/car";
// function GetCarById(){
//     const[carNumber,setCarNumber]=useState(0);
//     const[carData,setCarData]=useState({});
//     const[validation,setValidation]=useState("");
//     let carDetails=async (e)=>{
//         e.preventDefault();
//        try{
//         let DataUrlData= await fetch(`${url}/${carNumber}`)
//         let jsonData=await DataUrlData.json();
//         setCarData(jsonData);
//         console.log(carData);
//         if(jsonData.httpcode>0){
//             console.log(jsonData.httpcode);
//             setValidation("No Cars Found Based On ID");
//             setTimeout(()=>{
//                 setValidation("");
//             },3000)
//         }else{
//             console.log(jsonData);
//         }
//        }catch(error){
//         document.writeln(error);
//        }
//     }

//     return(
//         <div>
//             <form onSubmit={carDetails}>
//             <label>Enter Car Id To Check <input type="number" onChange={(e)=>{setCarNumber(e.target.value)}}/></label>
//             <button type="submit">Submit</button>
//             </form> <br />
//             <h3 id="validation">{validation}</h3>
//             <div className="json-car-data">
//                     <div key={carData.id}>
//                         <p>Car Id: {carData.id}</p> <br />
//                         <p>Car Company Name: {carData.company}</p> <br />
//                         <p>
//                             Car Location:{" "}
//                             {carData.delivery && carData.delivery.length > 0 ? (
//                                 carData.delivery.map((ele, index) => (
//                                 <div key={index}>
//                                     Delivery Preferred Location {index + 1}: {ele.location}
//                                 </div>
//                                 ))
//                             ) : (
//                                 <p>No delivery locations available</p>
//                             )}
//                         </p>


//                         <p>Car Price: {carData.price}</p> <br /> 
//                         <p>Car Booking Date: {carData.bookingDate}</p> <br />
//                         <p>Car Delivery Date: {carData.deliveryDate}</p> <br />
//                     </div>
//             </div>
//         </div>
//     )
// }
// export default GetCarById;