import React from "react";
import PostMappingCar from "./PostMappingCar";
import DeleteMappingCar from "./DeleteMappingCar";
import PutMappingCar from "./PutMappingCar";
import { Link } from "react-router-dom";
function SecondPage(){
    return(
        <div>
            <h1>Save Car Details</h1>
            <PostMappingCar/>
            <h1>Delete Car Details based on Id</h1>
            <DeleteMappingCar/>
            <h1>Update Car Details Here</h1>
            <PutMappingCar/> 
        </div>
    )
}
export default SecondPage;