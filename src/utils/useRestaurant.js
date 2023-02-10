import { useState, useEffect } from "react";
import {FETCH_MENU_URL} from '../config';
const useRestaurant = (resId) => {
    // get data from API
    const [restaurantInfo , setRestaurantInfo ] = useState(null)
    //null -> because at the intital render the values of the restaurant info are undefined

    useEffect(() => {
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo() {
        const data = await fetch(FETCH_MENU_URL+resId);
        const jsonData = await data.json();
        console.log(jsonData);
        setRestaurantInfo(jsonData.data)
    }
// return data of the restaurant
return restaurantInfo;
//so because if we use it as a hook and pass the resId it will return the data of the restaurants
}

export default useRestaurant;