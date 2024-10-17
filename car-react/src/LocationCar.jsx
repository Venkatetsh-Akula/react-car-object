import React, { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  Marker,
} from "@vis.gl/react-google-maps";

import React, { useState } from "react";
import './App.css'; // Ensure the CSS file is imported

let url = "http://localhost:8080/car";

function LocationCar() {
    const [clocation, setClocation] = useState("");
    const [err, setErr] = useState("");
    const [locDetails, setLocDetails] = useState([]);
    const[locationlist,setLocationList]=useState([]);
      const pois = [
    { key: "poi1", location: { lat: 12.9716, lng: 77.5946 } }, // Bangalore
    { key: "poi2", location: { lat: 28.7041, lng: 77.1025 } }, // Delhi
    { key: "poi3", location: { lat: 19.076, lng: 72.8777 } },  // Mumbai
  ];

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
                                <p>Phone Number: {ele.phone}</p>
                                <p>Available Location: {clocation}</p>
                                <p>Car Price: {ele.price}</p>
                                <p>Car Booking Date: {ele.bookingDate}</p>
                                <p>Car Delivery Date: {ele.deliveryDate}</p>
                            </div>
                        )
                    })
                }
            </div>

            //       {/* Google Maps Integration */}
       <h1>Car Locations on Map</h1>
       <APIProvider
         apiKey={"AIzaSyDFTGxMNW8CoK0SaKy3h7zku2ITKPXgMWg"} // Replace with your actual API key
         onLoad={() => console.log("Google Maps API loaded")}
       >
         <Map
           defaultZoom={5}
           defaultCenter={{ lat: 20.5937, lng: 78.9629 }} // Center to India
           style={{ height: "500px", width: "100%" }}
           onCameraChanged={(ev) =>
             console.log("Camera changed:", ev.detail.center, ev.detail.zoom)
           }
         >
             {pois.map((poi) => {
                 console.log("Rendering marker at:", poi.location);
                 return (
                     <AdvancedMarker key={poi.key} position={poi.location}>
                         <Marker
                                 key={poi.key}
                                 position={poi.location}
                                 icon={{
                                 url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png", // Custom icon
                                 scaledSize: new window.google.maps.Size(40, 40), // Custom size
                                 }}
                             />
                     </AdvancedMarker>
                 );
             })}

         </Map>
       </APIProvider>
            
        </div>
    );
}

export default LocationCar;





















// import React, { useState } from "react";
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   Pin,
//   Marker,
// } from "@vis.gl/react-google-maps";
// import './App.css';

// let url = "http://localhost:8080/car";

// function LocationCar() {
//   const [clocation, setClocation] = useState("");
//   const [err, setErr] = useState("");
//   const [locDetails, setLocDetails] = useState([]);
//   const [locationlist, setLocationList] = useState([]);

//   // Fetch car details by preferred location
//   let locationDetails = async (e) => {
//     e.preventDefault();
//     let list = [];
//     setLocDetails([]);
//     setLocationList([]);
//     try {
//       let urldata = await fetch(url);
//       if (urldata.ok) {
//         let jsondata = await urldata.json();
//         jsondata.forEach((ele) => {
//           ele.delivery.forEach((loc) => {
//             if (loc.location === clocation && list.indexOf(ele) < 0) {
//               list.push(ele);
//             }
//           });
//         });
//         if (list.length > 0) {
//           setLocDetails(list);
//         } else {
//           setErr("No Cars Are Available At Preferred Location");
//           setTimeout(() => {
//             setErr("");
//           }, 5000);
//         }
//       } else {
//         console.log("Something went wrong");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Fetch all available locations
//   let availableLocation = async () => {
//     let locli = [];
//     let urldata = await fetch(url);
//     if (urldata.ok) {
//       let jsondata = await urldata.json();
//       jsondata.forEach((ele) => {
//         ele.delivery.forEach((loc) => {
//           if (locli.indexOf(loc.location) < 0) {
//             locli.push(loc.location);
//           }
//         });
//       });
//       setLocationList(locli);
//     }
//   };

//   // Example locations to show on the map
//   const pois = [
//     { key: "poi1", location: { lat: 12.9716, lng: 77.5946 } }, // Bangalore
//     { key: "poi2", location: { lat: 28.7041, lng: 77.1025 } }, // Delhi
//     { key: "poi3", location: { lat: 19.076, lng: 72.8777 } },  // Mumbai
//   ];

//   return (
//     <div className="location-component">
//       <h1>Cars Available Locations</h1>
//       <div className="location-list">
//         <h3>Available Locations:</h3>
//         <ul>
//           {locationlist.map((ele) => (
//             <li key={ele}>{ele}</li>
//           ))}
//         </ul>
//         <button type="button" onClick={availableLocation}>
//           Show Available Locations
//         </button>
//       </div>

//       <h1>Find Cars by Preferred Location</h1>
//       <div className="car-loc">
//         <form onSubmit={locationDetails}>
//           <label>
//             Enter Car Preferred Location:
//             <input
//               type="text"
//               onChange={(e) => setClocation(e.target.value)}
//               required
//             />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       </div>

//       <h3 className={err ? "error" : "success"}>{err}</h3>

//       <div className="car-data-container">
//         {locDetails.map((ele) => (
//           <div className="car-data" key={ele.id}>
//             <p>Car Id: {ele.id}</p>
//             <p>Car Company Name: {ele.company}</p>
//             <p>Phone Number: {ele.phone}</p>
//             <p>Available Location: {clocation}</p>
//             <p>Car Price: {ele.price}</p>
//             <p>Car Booking Date: {ele.bookingDate}</p>
//             <p>Car Delivery Date: {ele.deliveryDate}</p>
//           </div>
//         ))}
//       </div>

//       {/* Google Maps Integration */}
//       <h1>Car Locations on Map</h1>
//       <APIProvider
//         apiKey={"AIzaSyDFTGxMNW8CoK0SaKy3h7zku2ITKPXgMWg"} // Replace with your actual API key
//         onLoad={() => console.log("Google Maps API loaded")}
//       >
//         <Map
//           defaultZoom={5}
//           defaultCenter={{ lat: 20.5937, lng: 78.9629 }} // Center to India
//           style={{ height: "500px", width: "100%" }}
//           onCameraChanged={(ev) =>
//             console.log("Camera changed:", ev.detail.center, ev.detail.zoom)
//           }
//         >
//             {pois.map((poi) => {
//                 console.log("Rendering marker at:", poi.location);
//                 return (
//                     <AdvancedMarker key={poi.key} position={poi.location}>
//                         <Marker
//                                 key={poi.key}
//                                 position={poi.location}
//                                 icon={{
//                                 url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png", // Custom icon
//                                 scaledSize: new window.google.maps.Size(40, 40), // Custom size
//                                 }}
//                             />
//                     </AdvancedMarker>
//                 );
//             })}

//         </Map>
//       </APIProvider>
//     </div>
//   );
// }

// export default LocationCar;
