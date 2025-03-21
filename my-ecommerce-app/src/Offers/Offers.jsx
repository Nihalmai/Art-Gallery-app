import react from "react";
import "./Offers.css";

const Offers = () => {
    return (
        <div className="offers">
           <div className="offers-left">
                <h2>Special Offers</h2>
                <p className="offers-description">
                     Get the best deals on your favorite products.
                </p>
                <button className="checknow-button">Check now</button>
           </div>
           <div className="offers-right">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg"
                    alt="Special Offers" 
                />
           </div>
        </div>
    );
}
export default Offers;