import React, { useState } from "react";
import './App.css'; // Ensure you have the CSS imported for styling

let url = "http://localhost:8080/car";

function PutMappingCar() {
    const [id, setId] = useState(0);
    const [company, setCompany] = useState("");
    const [price, setPrice] = useState(0);
    const [validation, setValidation] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [bookingDate, setBookingDate] = useState("");
    const [preferece1, setPreference1] = useState("");
    const [preferece2, setPreference2] = useState("");
    const [preferece3, setPreference3] = useState("");

    let obj = () => {
        const deliveryArray = [
            { location: preferece1 },
            { location: preferece2 },
            { location: preferece3 }
        ];
        return {
            id: id,
            company: company,
            delivery: deliveryArray,
            price: price,
            deliveryDate: deliveryDate,
            bookingDate: bookingDate
        };
    }

    let updataData = async (e) => {
        e.preventDefault();
        try {
            let urlData = await fetch(`${url}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj())
            });
            if (urlData.ok) {
                setValidation("Given Car Details Updated Successfully");
                setTimeout(() => {
                    setValidation("");
                }, 3000);
            } else {
                console.log("Error occurs");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="put-component">
            <h1>Update Car Details</h1>
            <form onSubmit={updataData}>
                <label>Enter The Car Id: <br />
                    <input type="number" required onChange={(e) => { setId(e.target.value) }} />
                </label> <br />
                <label>Enter The Car Company: <br />
                    <input type="text" required onChange={(e) => { setCompany(e.target.value) }} />
                </label> <br />
                
                <label>Enter Car Location: <br />
                    <label>Delivery Location 1: <input type="text" onChange={(e) => { setPreference1(e.target.value) }} /></label> <br />
                    <label>Delivery Location 2: <input type="text" onChange={(e) => { setPreference2(e.target.value) }} /></label> <br />
                    <label>Delivery Location 3: <input type="text" onChange={(e) => { setPreference3(e.target.value) }} /></label> <br />
                </label> <br />

                <label>Enter The Car Price: <br />
                    <input type="number" required onChange={(e) => { setPrice(e.target.value) }} />
                </label> <br />
                <label>Update The Booking Date: <br />
                    <input type="date" required onChange={(e) => { setBookingDate(e.target.value) }} />
                </label> <br />
                <label>Update Delivery Date: <br />
                    <input type="date" required onChange={(e) => { setDeliveryDate(e.target.value) }} />
                </label> <br />
                <button type="submit">Submit</button>
            </form>
            <h3 className={validation.includes("Updated") ? "success" : "error"}>{validation}</h3>
        </div>
    );
}

export default PutMappingCar;





















































// import React, { useState } from "react";
// let url="http://localhost:8080/car"
// function PutMappingCar(){
//     const[id,setId]=useState(0);
//     const[company,setCompany]=useState("");
//     const[location,setLocation]=useState("");
//     const[price,setPrice]=useState(0);
//     const[validation,setValidation]=useState("");
//     const[deliveryDate,setDeliveryDate]=useState("");
//     const[bookingDate,setBookingDate]=useState("");
//     const[delivery,setDelivery]=useState([]);
//     const[preferece1,setPreference1]=useState("");
//     const[preferece2,setPreference2]=useState("");
//     const[preferece3,setPreference3]=useState("");
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
//             id:id,
//             company:company,
//             //location:location,
//             delivery:deliveryArray,
//             price:price,
//             deliveryDate:deliveryDate,
//             bookingDate:bookingDate
//         }
//     }
//     let updataData=async (e)=>{
//         e.preventDefault();
//         try{
//             let urlData=await fetch(`${url}/${id}`,{
//                 method:"PUT",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(obj())
//             })
//             if(urlData.ok){
//                 console.log(urlData.json());
//                 setValidation("Given Car Details Had Updated");
//                 setTimeout(()=>{
//                     setValidation("");
//                 },3000)
//             }
//             else{
//                 console.log("Error occurs");
//             }
//         }catch(error){
//             console.log(error);
//         }
//     }
//     return(
//         <div className="put-component">
//            <form onSubmit={updataData}>
//                 <label>Enter The Car Id: <br />
//                     <input type="number" required onChange={(e)=>{setId(e.target.value)}}/>
//                 </label> <br />
//                 <label>Enter The Car Company: <br />
//                     <input type="text" required onChange={(e)=>{setCompany(e.target.value)}}/>
//                 </label> <br />
//                 {/* <label>Enter The Car Location: <br />
//                     <input type="text" required onChange={(e)=>{setLocation(e.target.value)}}/>
//                 </label> <br /> */}

//                 <label>Enter Car Location: <br />
//                     <label >Enter the Delivery Location 1: <input type="text" onChange={(e)=>{setPreference1(e.target.value)}}/></label> <br />
//                     <label >Enter the Delivery Location 2: <input type="text" onChange={(e)=>{setPreference2(e.target.value)}}/></label> <br />
//                     <label >Enter the Delivery Location 3: <input type="text" onChange={(e)=>{setPreference3(e.target.value)}}/></label> <br />
//                 </label> <br />

//                 <label>Enter The Car Price: <br />
//                     <input type="number" required onChange={(e)=>{setPrice(e.target.value)}}/>
//                 </label> <br /> 
//                 <label>Update The Booking Date: <br />
//                     <input type="date" required onChange={(e)=>{setBookingDate(e.target.value)}}/>
//                 </label> <br />
//                 <label>Update Delivery Date: <br />
//                     <input type="date" required onChange={(e)=>{setDeliveryDate(e.target.value)}}/>
//                 </label> <br />
//                 <button type="submit">Submit</button>
//            </form>
//            <h3>{validation}</h3>
//         </div>
//     )
// }
// export default PutMappingCar;