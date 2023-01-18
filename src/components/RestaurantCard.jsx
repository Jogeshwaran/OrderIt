import Skeleton from "react-loading-skeleton";
import { ImageUrl } from "../config";

const RestaurantCard = ({cloudinaryImageId,name,cuisines,avgRating}) => {
    return(
        <div className="restaurant-card">
            <img alt = "Hotel-Image" src={ImageUrl+cloudinaryImageId }  />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <span>{avgRating + "⭐"}</span>

        </div>
    )
}

export default RestaurantCard;