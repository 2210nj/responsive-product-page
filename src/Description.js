import React from "react";
import "./Description.css";

function Description({ id, title, subtitle, image }) {
  console.log("This is id", id);
  return (
    <div className="section description">
      <div className="section-content" id={id}>
        <img src={image} alt="" className="image" />
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default Description;
