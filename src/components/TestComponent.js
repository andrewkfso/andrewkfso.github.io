import React from "react";
import MySVGBackground from '../assets/PolygonLuminary.svg';
import './Test.css';

function YourComponent() {
    return (
      <div
        className="background-container" // Apply any other classes or styles you need
        style={{ backgroundImage: `url(${MySVGBackground})` }}
      >
        {/* Your content */}
      </div>
    );
  }
  
  export default YourComponent;