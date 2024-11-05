
import React, { useState } from "react";
import './App.css'; // Ensure the CSS file is imported
import {APIProvider,Map,Marker} from '@vis.gl/react-google-maps';

let url = "http://localhost:8080/car";
let air="http://localhost:8080/car/fromto"

function LocationCar() {
    const [clocation, setClocation] = useState("");
    const [err, setErr] = useState("");
    const [locDetails, setLocDetails] = useState([]);
    const[locationlist,setLocationList]=useState([]);
    const[arr,setArr]=useState([]);

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

    let airLocation=async ()=>{
        let airdata=await fetch(air);
        let airjson=await airdata.json();
        console.log(airjson);
        setArr(airjson);

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
            <h1>Google Maps</h1>
            <div>
                <APIProvider apiKey={"AIzaSyDFTGxMNW8CoK0SaKy3h7zku2ITKPXgMWg"} onLoad={airLocation}>
                    <Map defaultZoom={5} defaultCenter={{lat:20.5937,lng:78.9629}} style={{height:"500px" ,wdith:"100%"}}>
                        {
                            arr.map((ele)=>{
                                return(
                                    <Marker position={{lat:ele.lat,lng:ele.lng}}>
                                        
                                    </Marker>
                                )
                            })
                        }
                    </Map>
                </APIProvider>
            </div>
        </div>
    );
}

export default LocationCar;

{/* <Marker position={{lat:28.5562,lng:77.1000}}>

</Marker> */}