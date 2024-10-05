import React from "react";
import FilterData from "./FilterData";
import LoactionCar from "./LocationCar";
function ThirdPage(){
    return(
        <div>
            <h1>Filter Car Details Based On Delivery Data</h1>
            <FilterData/>
            <h1>Filter Car Based on Location</h1>
            <LoactionCar/>
        </div>
    )
}
export default ThirdPage;