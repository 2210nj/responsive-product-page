import React from "react";
import "./ProductOptions.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { IconButton } from "@material-ui/core";

function ProductOptions() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Handle UL click", e.target.id);
  };
  return (
    <div className="product__options">
      <div className="product__optionsVerticalText">Details</div>
      <div className="product__optionsLinksContainer">
        <div className="product__optionsLinks">
          <ul onClick={handleClick}>
            <li>
              <a href="" id="details">
                Details
              </a>
            </li>
            <li>
              <a href="" id="description">
                Description
              </a>
            </li>
            <li>
              <a href="" id="reviews">
                Reviews
              </a>
            </li>
            <li>
              <a href="" id="customTab">
                Custom Tab
              </a>
            </li>
          </ul>
        </div>
        <div className="product__OptionsSocialMediaLinks">
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <PinterestIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ProductOptions;
