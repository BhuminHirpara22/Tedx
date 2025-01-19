import React from "react";
import TEDXIMG from "../assets/TEDx White_T 4.png";
import TLIMG from "../assets/Group 1437254103.png";
import COLLABIMG from "../assets/Group 1437254104.png";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between", // Use space-between for better spacing
        alignItems: "center",
        width: "90%", // Set width for full container width
        padding: "1vw", // Add padding for spacing around the content
        fontSize:"1vw",
        marginBottom:"2vw",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2vw",
          backgroundColor: "#1d1d1d",
          height:"4vw",
          padding:"0 1vw",
          borderRadius:"5px",
          fontWeight:"700",
        }}
      >
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={TEDXIMG} alt="TEDX image" />
        </a>
        <img src={COLLABIMG} alt="Collab image" />
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={TLIMG} alt="TL image" />
        </a>
      </div>

      <div
        style={{
          display: "flex",
          gap: "2vw", // Adjust gap for better spacing
          backgroundColor: "#1d1d1d",
          height:"4vw",
          alignItems:"center",
          padding:"0vw 1vw",
          borderRadius:"5px",

        }}
      >
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Committees
        </a>
      </div>

      <div
        style={{
          display: "flex",
          gap: "1vw",

        }}
      >
        <button
          style={{
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "#1d1d1d"
          }}
        >
          Contact
        </button>
        <button
          style={{
            backgroundColor: "#ff6600",
            color: "white",
            border: "none",
            padding: "1vw 2vw",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight:"900",
          }}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}

export default Header;