import { restaurantsList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

// What is State?
// What is React Hooks
// what is useState

//filter algorithm for search

function filterData(searchTxt,restaurants){
    const data = restaurants.filter((res) => res.data.name.toLowerCase().includes(searchTxt))
    return data 
}

const Body = () =>{
    //Js way of creating a Variable
    // const searchTxt = "KFC"

    // consider state as a React way of Creating variables
    //searchTxt is a Local State Variable
    const [searchTxt,setSearchTxt] = useState(""); // To create a State Variable
    // The use state returns = [variable name, function to update the variable]
    const [restaurants, setRestaurants] = useState(restaurantsList);

    

    onChangeHandler = (e) =>{
        setSearchTxt(e.target.value)
    }

    return(
        /*Search Bar */
        <>
        <div className="search-box">
            <input type="text" value={searchTxt} onChange = {onChangeHandler} placeholder="Search" className="search-input" />
            <button className="search-btn" onClick={() => {
                // need to filter data once search is clicked
                const data = filterData(searchTxt,restaurants);
                //update the state once its filtered
                setRestaurants(data);
                

            }}>Search</button>


        </div>
        <div className="cards">
    {/* <RestaurantCard {...restaurantList[0].data}/>
    <RestaurantCard {...restaurantList[1].data}/>
    <RestaurantCard {...restaurantList[2].data}/> */}

    {restaurants.map((restaurantList) => {
        return(
            <RestaurantCard key={restaurantList.data.id} {...restaurantList.data}/>
        )
    })}
    </div>
    </>
    )
}

export default Body;