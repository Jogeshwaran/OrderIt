import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import {ImageUrl} from "../config"
import Shimmer from "./ShimmerUi";
import useRestaurant from "../utils/useRestaurant";
/*How to read the dynamic id to the component
-> By using the UseParams Hook
-> call the useParams const params  = useParams();
-> this will give us the dynamic ID in the url
*/
const RestaurantMenuPage = () =>{
    const params  = useParams();
    const restaurantInfo = useRestaurant(params.id)
    
    return (!restaurantInfo) ? <Shimmer/> : (
        <div className="menu">
            <div>
            <h1>Restaurant id : {params.id}</h1>
            <h2>{restaurantInfo?.name}</h2>
            <img src={ImageUrl + restaurantInfo?.cloudinaryImageId} />
            <h3>{restaurantInfo?.area}</h3>
            <h3>{restaurantInfo?.city}</h3>
            <h3>{restaurantInfo?.avgRating} stars</h3>
            <h3>{restaurantInfo?.costForTwoMsg}</h3>
            </div>
            <div >
                <h1>Menu</h1>
                {Object.values(restaurantInfo?.menu?.items).map(item => (
                    <li key={item?.id}>{item?.name}</li>
                ))}

            </div>
        </div>
    )
}

export default RestaurantMenuPage;