import Skeleton from "react-loading-skeleton";
import { ImageUrl } from "../config";
import {useContext} from "react"
import userContext from "../utils/userContext"

const RestaurantCard = ({cloudinaryImageId,name,cuisines,avgRating}) => {
    const {user} = useContext(userContext)
    return(
        <div className="restaurant-card">
            <img alt = "Hotel-Image" src={ImageUrl+cloudinaryImageId }  />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <span>{avgRating + "⭐"}</span>
            <h5>{user.name}</h5>
            <h5>{user.email}</h5>

        </div>
    )
}

export default RestaurantCard;