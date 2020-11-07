import React, { useState } from "react";
import "./Products.css";
import blackSofa from "./images/black_sofa.JPG";
import StarRatingComponent from "react-star-rating-component";
import { Button, IconButton } from "@material-ui/core";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import SyncIcon from "@material-ui/icons/Sync";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function Products() {
  const [rating, setRating] = useState(4);
  const onStarClick = () => {
    setRating(5);
  };
  return (
    <div className="products">
      <div className="products__firstProduct">
        <div className="product__leftContent">
          <img src={blackSofa} alt="" className="image" />
        </div>
        <div className="product__rightContent">
          <div className="product__rightContentContainer">
            <h1>Nudie Extendable Sofa for 3 persons.</h1>
            <div className="rating">
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={rating}
                onStarClick={onStarClick}
              />
              <span>(23)</span>
            </div>
            <div className="product__price">
              <h2 className="products__oldPrice">$169</h2>
              <h2>149</h2>
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
                <div>Same Day Dispatch</div>
              </div>
              <div className="products__returnIcon">
                <IconButton>
                  <SyncIcon />
                </IconButton>
                <span>Easy 30-Day return policy</span>
              </div>
            </div>
            <div className="product__color"></div>
            <div className="products__addRemoveButtons">
              <AddIcon />
              1
              <RemoveIcon />
              <Button variant="contained" color="primary">
                Add to cart
              </Button>
              {/* <Button className='products__addToCartBtn' raised={true}backgroundColor='#fed442'>Add to cart</Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
