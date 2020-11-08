import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./SideNav.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { IconButton } from "@material-ui/core";
function SideNav() {
  return (
    <div className="product__options">
      <div className="product__optionsVerticalText">Details</div>
      <div className="product__optionsLinksContainer">
        <div className="product__optionsLinks">
          <ul>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Details
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Description
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Review
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Custom Tab
              </Link>
            </li>
            {/* <li className="nav-item">
              <a href="" id="details">
                Details
              </a>
            </li> */}
            {/* <li>
              <a href="" id="description">
                Description
              </a>
            </li> */}
            {/* <li>
              <a href="" id="reviews">
                Reviews
              </a>
            </li> */}
            {/* <li>
              <a href="" id="customTab">
                Custom Tab
              </a>
            </li> */}
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

export default SideNav;
