import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo at Extreme Left */}
      <Link to="/" className="logo-button">Artify</Link>

      {/* Search Bar */}
      <div className="search-bar" style={{ marginLeft: "1px" }}>
        <input
          type="text"
          placeholder="Search artworks..."
          className="search-input"
        />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <Link to="/artworks" className="btn-outline">Artworks</Link>
        <Link to="/signin" className="btn-outline">Sign In</Link>
        <Link to="/login" className="btn-outline">Log In</Link>
        <Link to="/logout" className="btn-destructive">Log Out</Link>
        <Link to="/cart" className="cart-button">
          <FaShoppingCart size={24} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
