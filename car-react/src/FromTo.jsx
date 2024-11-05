import React from "react";
import NavigationBar from "./NavigationBar";
import { useState } from "react";
let url = "http://localhost:8080/car/fromto";

export default function FromTo(){
    const[from,setFrom]=useState("");
    const[to,setTo]=useState("");
    const[arr,setArr]=useState([]);



    let fromInput=(e)=>{
        setFrom(e);
    }
    let toInput=(e)=>{
        setTo(e);
    }
    let Station=async ()=>{
      let airport=await fetch(url);
      let jsondata=await airport.json();
      if(jsondata.length>0){
        console.log(jsondata);
        setArr(jsondata);
      }else{
        console.log("No Location in the list");
      }
    }



    return(
        <div>
            <NavigationBar/>
            <h1>From Location</h1>
            <input type="text" value={from} placeholder="From Location" onChange={(e)=>{setFrom(e.target.value)}} onClick={Station}/>
            {
                arr.filter((items)=>{
                    return from.toLowerCase() && (items.name.toLowerCase().indexOf(from)>=0 || items.city.toLowerCase().indexOf(from)>=0 ||
                    items.iata_code.toLowerCase().indexOf(from)>=0) && items.city.toLowerCase()!==from.toLowerCase() && items.city.toLowerCase()!==to.toLowerCase(); 
                }).map((ele)=>{
                    return(
                        <div onClick={()=>fromInput(ele.city)}>
                            Name: {ele.name},
                            City: {ele.city},
                            IATA: {ele.iata_code} <br /><br /><br />
                        </div>
                    )
                })
            }
            <h1>To Location</h1>
            <input type="text" value={to} placeholder="To Location" onChange={(e)=>{setTo(e.target.value)}} onClick={Station} />
            {
                arr.filter((items)=>{
                    return to.toLowerCase() && (items.name.toLowerCase().indexOf(to)>=0 || items.city.toLowerCase().indexOf(to)>=0 ||
                        items.iata_code.toLowerCase().indexOf(to)>=0) && items.city.toLowerCase()!==to.toLowerCase() && items.city.toLowerCase()!==from.toLowerCase();
                }).map((ele)=>{
                    return(
                        <div onClick={()=>toInput(ele.city)}>
                            Name: {ele.name},
                            City: {ele.city},
                            IATA: {ele.iata_code} <br /><br /><br />
                        </div>
                    )
                })
            }
        </div>
    )
}