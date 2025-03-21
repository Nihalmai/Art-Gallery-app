import React from "react";
import "./Newsletter.css";
const Newsletter = () => {
    return (
        <div className="newsletter">
            <h1>Get exclusive offers on your email</h1>
            <input type="email" placeholder="Enter your email" />
            <p>Subscribe and stay updated</p>
            <button>Subscribe</button> 
        </div>
    );
}
export default Newsletter;