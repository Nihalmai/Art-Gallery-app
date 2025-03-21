import React from "react";
import "./Artify.css"; 
import Popular from "../Popular/Popular"; 
import Offers from "../Offers/Offers";
import NewCollections from "../NewCollections/NewCollections";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";

const Artify = () => {
  return (
    <div>
      <div className="Artify">
        <div className="Artify-left">
          <h2>Art for Public Interaction</h2>
          <p className="art-description">
            Welcome to a vibrant art community where creativity thrives.
          </p>
        </div>
        <div className="Artify-right">
          <img 
            src="https://bookmypainting.com/wp-content/uploads/2019/06/starry-night-the-famous-painting-2.jpeg" 
            alt="Artistic Representation" 
          />
          <p className="artist-name">Vincent van Gogh</p> 
        </div>
      </div> 
      <Popular />
      <Offers/>
      <NewCollections/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Artify;
