import React, { useState } from "react";
import "./Products.css";
import blackSofa from "./images/black_sofa.JPG";
import StarRatingComponent from "react-star-rating-component";

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
        </div>
      </div>
    </div>
  );
}

export default Products;
