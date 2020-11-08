import React, { useState } from "react";
import "./Product.css";
import sofaSection1 from "./images/sofa6.webp";
import sofaSection2 from "./images/sofa1.webp";
import sofaSection3 from "./images/sofa7.webp";
import data from "./data.json";
import Description from "./Description";
import Details from "./Details";
import Review from "./Review";
import CustomTab from "./CustomTab";

function Product() {
  return (
    <div className="products">
      <div className="products__firstProduct products__details">
        <Details
          id="section1"
          title={data.details.title}
          image={sofaSection1}
        />
      </div>
      <div className="product__desscription">
        <Description
          id="section2"
          title={data.description.title}
          image={sofaSection2}
          subtitle={data.description.subtitle}
        />
      </div>

      <div className="product__desscription">
        <Review id="section3" title={data.review.title} image={sofaSection3} />
      </div>

      <div className="product__desscription">
        <CustomTab
          id="section4"
          verticalText={data.customTab.verticalText}
          imageLarge={sofaSection3}
          imageSmall={sofaSection3}
        />
      </div>
    </div>
  );
}

export default Product;
