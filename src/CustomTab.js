import React from "react";
import "./CustomTab.css";

function CustomTab({ id, verticalText, imageLarge, imageSmall }) {
  return (
    <div className="section customtab">
      <div className="section-content" id={id}>
        <img src={imageLarge} alt="" className="image" />
        <div>{verticalText}</div>
      </div>
    </div>
  );
}

export default CustomTab;
