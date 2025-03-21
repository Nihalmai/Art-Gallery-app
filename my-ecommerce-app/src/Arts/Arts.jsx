import React from "react";
import "./Arts.css";
const Arts = (props) => {
    return (
        <div className="arts">
            <img src={props.image} alt="Artistic Representation" />
            <h2>{props.name}</h2>
            <div className="art-prices">
                <p>{props.price}</p>
                <p>{props.rating}</p>
            </div>
        </div>
    );
}
export default Arts;