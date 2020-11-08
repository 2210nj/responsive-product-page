import React, { useState } from "react";
import "./Products.css";
import blackSofa from "./images/sofa6.webp";
import StarRatingComponent from "react-star-rating-component";
import { Button, IconButton } from "@material-ui/core";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import SyncIcon from "@material-ui/icons/Sync";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { CirclePicker } from "react-color";

function Products() {
  const [rating, setRating] = useState(4);
  const onStarClick = () => {
    setRating(5);
  };
  const colors = ["#DAD5AB", "#000", "#f5f5f5"];
  return (
    <div className="products">
      <div className="products__firstProduct">
        <div className="product__leftContent">
          <img src={blackSofa} alt="" className="image" />
        </div>
        <div className="product__rightContent">
          <div className="product__rightContentContainer">
            <h2 className="product__name">Nudie Extendable Sofa for 3 persons.</h2>
            <div className="rating">
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={rating}
                onStarClick={onStarClick}
              />
              <span className="ratingTotal">(23)</span>
            </div>
            <div className="product__price">
              {/* <h4 className="products__oldPrice">$169</h4>
              <h4>$149</h4> */}
              <div className="products__oldPrice">$169</div>
              <div>$149</div>
            </div>
            <div className="product__info">
              <ul>
                <li>
                  <strong>Assembly</strong>: Carpenter Assembly
                </li>
                <li>
                  <strong>Warranty</strong>: 12 Month's Warranty
                </li>
              </ul>
            </div>
            <div className="product__deliveryInfo">
              <div className="products__dispatchIcon">
                <IconButton>
                  <LocalTaxiIcon />
                </IconButton>
                <div className="products__iconText">Same Day Dispatch</div>
              </div>
              <div className="products__returnIcon">
                <IconButton>
                  <SyncIcon />
                </IconButton>
                <div className="products__iconText">
                  Easy 30-Day return policy
                </div>
              </div>
            </div>
            <div className="product__color">
              Color:
              <CirclePicker colors={colors} circleSize={20} />
            </div>
            <div className="products__addRemoveButtons">
              <div className="cart-quantity">
                <input type="button" value="-" className="qtyminus" />
                <input
                  type="button"
                  name="updates[]"
                  className="quantity"
                  value="1"
                />
                <input type="button" value="+" className="qtyplus" />
              </div>
              <Button variant="contained" color="primary">
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
