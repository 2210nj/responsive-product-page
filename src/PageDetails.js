import React from "react";
import "./PageDetails.css";
import HomeIcon from "@material-ui/icons/Home";

function PageDetails() {
  return (
    <div className="page__details">
        <HomeIcon />
        <div className="page__detailsBreadCrumbs">
          <ul>
            <li>
              <a href=""></a>CATALOG
            </li>
            <li>
              <a href=""></a>SOFAS
            </li>
            <li className="highlighted">
              <a href=""></a>BEIGE NUDIE SOFA
            </li>
          </ul>
        </div>
    </div>
  );
}

export default PageDetails;
