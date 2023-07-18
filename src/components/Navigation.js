import "../styles/navigation.scss";
import React from "react";
import logo from "../images/instagramLogo.png";
import searchIcon from "../images/searchIcon.png";

import Menu from "./Menu";

function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <img className="logo" src={logo} alt="instagram logo"></img>
        <div className="search">
          <img className="searchIcon" src={searchIcon} alt="search icon"></img>
          <span className="searchText">Search</span>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Navigation;
