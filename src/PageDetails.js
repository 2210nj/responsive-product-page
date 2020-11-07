import React from "react";
import "./PageDetails.css";
import HomeIcon from "@material-ui/icons/Home";
import ProductOptions from "./ProductOptions";
import Products from "./Products";

function PageDetails() {
  return (
    <div className="page__details">
      <div className="page__detailsBreadCrumbs">
        <HomeIcon />
        <div className="page__detailsBreadCrumbsLinks">
          <ul>
            <li>
              <a href="">Catalog</a>
            </li>
            <li>
              <a href="">Sofas</a>
            </li>
            <li className="highlighted">
              <a href="">Beige Nudie Sofa</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="page__detailsInfo">
        <div className="page__detailsProductsOptions">
          <ProductOptions />
        </div>
        <div className="page__detailsProducts">
          <Products />
        </div>
      </div>
    </div>
  );
}

export default PageDetails;
