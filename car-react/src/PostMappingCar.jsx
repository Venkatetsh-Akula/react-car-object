import React, { useState } from "react";
import './App.css'; // Ensure to import your CSS file for styling

let url = "http://localhost:8080/car";

function PostMappingCar() {
    const [company, setCompany] = useState("");
    const [price, setPrice] = useState(0);
    const [bookingDate, setBookingDate] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [preferece1, setPreference1] = useState("");
    const [preferece2, setPreference2] = useState("");
    const [preferece3, setPreference3] = useState("");
    const [valid, setValid] = useState("");

    let obj = () => {
        const deliveryArray = [
            { location: preferece1 },
            { location: preferece2 },
            { location: preferece3 }
        ];
        return {
            company: company,
            delivery: deliveryArray,
            price: price,
            bookingDate: bookingDate,
            deliveryDate: deliveryDate,
        };
    };

    let submitCar = async (e) => {
        e.preventDefault();
        try {
            let urlData = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj())
            });
            if (urlData.ok) {
                let datajson = await urlData.json(); // Corrected to await
                console.log("Data saved In Data Base");
                setValid("Data saved in Data base");
                setTimeout(() => {
                    setValid("");
                }, 3000);
            } else {
                console.log("Got Error");
                setValid("Data Not Saved In Data Base");
            }
        }
        catch (error) {
            document.writeln(error);
        }
    }

    return (
        <div className="saveCar">
            <h1>Post Car Details</h1>
            <form onSubmit={submitCar}>
                <label>Enter Car Company: <br />
                    <input type="text" required onChange={(e) => { setCompany(e.target.value) }} />
                </label> <br />
                <label>Enter Car Location: <br />
                    <label>Enter the Delivery Location 1: <input type="text" onChange={(e) => { setPreference1(e.target.value) }} /></label> <br />
                    <label>Enter the Delivery Location 2: <input type="text" onChange={(e) => { setPreference2(e.target.value) }} /></label> <br />
                    <label>Enter the Delivery Location 3: <input type="text" onChange={(e) => { setPreference3(e.target.value) }} /></label> <br />
                </label> <br />
                <label>Enter Car price: <br />
                    <input type="number" required onChange={(e) => { setPrice(e.target.value) }} />
                </label> <br />
                <label>Enter The Booking Date: <br />
                    <input type="date" required onChange={(e) => { setBookingDate(e.target.value) }} />
                </label> <br />
                <label>Enter Delivery Date: <br />
                    <input type="date" required onChange={(e) => { setDeliveryDate(e.target.value) }} />
                </label> <br />
                <button type="submit">Submit</button>
            </form>
            <h2>{valid}</h2>
        </div>
    )
}

export default PostMappingCar;




























































// import React, { useState } from "react";
// let url="http://localhost:8080/car";
// function PostMappingCar(){
//     const[company,setCompany]=useState("");
//     //const[location,setLocation]=useState("");
//     const[price,setPrice]=useState(0);
//     const[bookingDate,setBookingDate]=useState("");
//     const[deliveryDate,setDeliveryDate]=useState("");
//     const[preferece1,setPreference1]=useState("");
//     const[preferece2,setPreference2]=useState("");
//     const[preferece3,setPreference3]=useState("");
//     const[delivery,setDelivery]=useState([]);
//     const[valid,setValid]=useState("");
//     let obj=()=>{
//         const deliveryArray=
//             [
//                 {
//                     location:preferece1
//                 },
//                 {
//                     location:preferece2
//                 },
//                 {
//                     location:preferece3
//                 }
//             ]
//         return{
//             company:company,
//             // location:location,
//             delivery:deliveryArray,
//             price:price,
//             bookingDate:bookingDate,
//             deliveryDate:deliveryDate,
//         }
//     }
//     let submitCar= async (e)=>{
//         e.preventDefault();
//         try{
//             let urlData=await fetch(url,{
//                 method:"POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(obj())
//             });
//             if(urlData.ok){
//                 let datajson=urlData.json();
//                 console.log("Data saved In Data Base");
//                 setValid("Data saved in Data base");
//                 setTimeout(()=>{
//                     setValid("");
//                 },3000)
//             }else{
//                 console.log("Got Error");
//                 setValid("Data Not Saved In Data Base");
//             }
//         }
//         catch(error){
//             document.writeln(error);
//         }
//     }
//     return(
//         <div className="saveCar">
//             <form onSubmit={submitCar}>
//                 <label>Enter Car Company: <br />
//                     <input type="text" required onChange={(e)=>{setCompany(e.target.value)}}/>
//                 </label> <br />
//                 <label>Enter Car Location: <br />
//                     {/* <input type="text" required onChange={(e)=>{setLocation(e.target.value)}}/> */} 
//                     <label >Enter the Delivery Location 1: <input type="text" onChange={(e)=>{setPreference1(e.target.value)}}/></label> <br />
//                     <label >Enter the Delivery Location 2: <input type="text" onChange={(e)=>{setPreference2(e.target.value)}}/></label> <br />
//                     <label >Enter the Delivery Location 3: <input type="text" onChange={(e)=>{setPreference3(e.target.value)}}/></label> <br />
//                 </label> <br />
//                 <label>Enter Car price: <br />
//                     <input type="number" required onChange={(e)=>{setPrice(e.target.value)}}/>
//                 </label> <br />
//                 <label>Enter The Booking Date: <br />
//                     <input type="date" required onChange={(e)=>{setBookingDate(e.target.value)}}/>
//                 </label> <br />
//                 <label>Enter Delivery Date: <br />
//                     <input type="date" required onChange={(e)=>{setDeliveryDate(e.target.value)}}/>
//                 </label> <br />
//                 <button type="submit">Submit</button>
//             </form>
//             <h2>{valid}</h2>
//         </div>
//     )
// }
// export default PostMappingCar;