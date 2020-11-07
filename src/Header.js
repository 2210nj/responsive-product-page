import React from "react";
import "./Header.css";
import Navigation from "./Navigation";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PolymerIcon from '@material-ui/icons/Polymer';

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <IconButton>
              <PolymerIcon />
            </IconButton>
        </div>
        <div className="header__navigation">
          <Navigation />
          <div className="header__icons">
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <ShoppingBasketIcon />
            </IconButton>
            <div className="header__basketCount">2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
