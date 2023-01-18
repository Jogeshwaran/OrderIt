import { restaurantsList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUi";
import { Link } from "react-router-dom";



// What is State?
// What is React Hooks
// what is useState

//filter algorithm for search

function filterData(searchTxt,restaurants){
    const data = restaurants.filter((res) => res?.data?.name?.toLowerCase()?.includes(searchTxt))
    return data 
}

const Body = () =>{
    //Js way of creating a Variable
    // const searchTxt = "KFC"

    // consider state as a React way of Creating variables
    //searchTxt is a Local State Variable
    const [allRestaurants, setAllRestaurants] =  useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchTxt,setSearchTxt] = useState(""); // To create a State Variable
    // The use state returns = [variable name, function to update the variable]

    // empty dependency array => once after initial render
    // dep array [searchText] => once after initial render + everytime after rerender(i.e everytime searchText changes)

    useEffect(() => {
        //make api call
        getRestaurantsData();

    },[])
    //async await for fetch data from api

    async function getRestaurantsData() {
        const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.945300942134098&lng=79.16578397154808&page_type=DESKTOP_WEB_LISTING");
        // convert the fetched data to the readable json format
        const jsonData = await data.json();
        console.log(jsonData);
        setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards)
       

    }
    console.log(allRestaurants)
    console.log(filteredRestaurants);
    onChangeHandler = (e) =>{
        setSearchTxt(e.target.value)
    }
    
    //conditional rendering
    // -> if restaurant is empty => shimmerUi
    // -> if restaurant has data => actual data Ui

    //not render component if empty(Early returns)
    if(!allRestaurants) return null;
    
    return allRestaurants?.length === 0 ? <Shimmer /> : (
        /*Search Bar */
        <>
        <div className="search-box">
            <input type="text" value={searchTxt} onChange = {onChangeHandler} placeholder="Search" className="search-input" />
            <button className="search-btn" onClick={() => {
                // need to filter data once search is clicked
                const data = filterData(searchTxt, allRestaurants);
                //update the state once its filtered
                setFilteredRestaurants(data);
                

            }}>Search</button>


        </div>
        <div className="cards">
    {/* <RestaurantCard {...restaurantList[0].data}/>
    <RestaurantCard {...restaurantList[1].data}/>
    <RestaurantCard {...restaurantList[2].data}/> */}
    { filteredRestaurants.length === 0 ? <h1>Restaurant Not found</h1> :
    filteredRestaurants.map((restaurantList) => {
        return(
            <Link to={"/restaurant/" + restaurantList.data.id} key={restaurantList.data.id}>
            <RestaurantCard  {...restaurantList.data}/>
            </Link>
        )
    })}
    </div>
    </>
    )
}

export default Body;