import React from "react";
import GetMappingCar from "./GetMappingCar";
import GetCarById from "./GetCarById";
import NavigationBar from "./NavigationBar";
//import SecondPage from "./SecondPage";
function FirstPage(){
    return(
        <div>
            <NavigationBar/>
            <h1>Get All Car Details</h1>
            <GetMappingCar/>
            <h1>Get Car Details Based on Id</h1>
            <GetCarById />
        </div>
    )
}
export default FirstPage;