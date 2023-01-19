import React from "react";
import { ShimmerPostList } from "react-shimmer-effects";

const Shimmer = ({count}) =>{
    console.log(count);
    return (
        <div className="shimmer-cards">
            {Array(15).fill("").map((_,i) => (
                <div className="shimmer-effect">
                <div className="shimmer-image"></div>
                <div className="shimmer-text"></div>
                <p className="shimmer-cuisine"></p>
                <p className="shimmer-cuisine"></p>
                </div>
            ))
       
}  
        </div>

        


        )}


export default Shimmer;