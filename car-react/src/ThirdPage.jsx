import React from "react";
import FilterData from "./FilterData";
import LoactionCar from "./LocationCar";
import NavigationBar from "./NavigationBar";
function ThirdPage(){
    return(
        <div>
            <NavigationBar/>
            <h1>Filter Car Details Based On Delivery Data</h1>
            <FilterData/>
            <h1>Filter Car Based on Location</h1>
            <LoactionCar/>
        </div>
    )
}
export default ThirdPage;