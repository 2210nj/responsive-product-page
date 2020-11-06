import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__option bedroom">
        <span>BEDROOM</span>
      </div>
      <div className="navigation__option">
        <span>LIVING ROOM</span>
      </div>
      <div className="navigation__option">
        <span>OFFICE</span>
      </div>
      <div className="navigation__option">
        <span>KITCHEN</span>
      </div>
      <div className="navigation__option">
        <span>BATHROOM</span>
      </div>
    </div>
  );
}

export default Navigation;
