import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <h1>Artify</h1>
                <p>Artify is a platform where you can find the best art pieces from around the world. We have a wide range of art collections from different artists. You can also find the best art pieces at the best prices. We also provide offers and discounts on our art pieces. Subscribe to our newsletter to get exclusive offers on your email.</p>
            </div>
            <div className="footer-right">
                <h2>Quick Links</h2>
                <ul>
                    <li>Home</li>
                    <li>Trending</li>
                    <li>Offers</li>
                    <li>New Collections</li>
                    <li>Newsletter</li>
                </ul>
            </div>
        </div>
    );
}
export default Footer;