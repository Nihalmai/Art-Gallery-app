import React from "react";
import "./Popular.css";
import artData from "../assets/artdata"; 
import Arts from "../Arts/Arts"; 

const Popular = () => {
    return (
        <div className="popular">
            <h1>Always Trending</h1>
            <hr />
            <div className="popular-item">
                {artData.map((art) => ( 
                    <Arts
                        key={art.id} 
                        name={art.name}
                        price={art.price}
                        rating={art.rating}
                        image={art.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Popular;
