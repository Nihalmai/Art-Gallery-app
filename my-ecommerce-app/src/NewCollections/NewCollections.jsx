import React from "react";
import "./NewCollections.css";
import newCollections from "../assets/newcollections";

const NewCollections = () => {
    return (
        <div className="new-collections">
            <h1>New Collections</h1>
            <hr />
            <div className="collections">
                {newCollections.map((collection) => (
                    <div className="collection" key={collection.id}>
                        <img src={collection.image} alt={collection.name} />
                        <h3>{collection.name}</h3>
                        <p>{collection.artist}</p>
                        <p>{collection.price}</p>
                        <p>{collection.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default NewCollections; 