import React from "react";
import "./header.scss";
import photo9 from "../../../assets/photo9.jpg";


const Header = () => {
  return (
    <header>
      <h1>Ismatov Sardor</h1>
      <img width={30} src={photo9} alt="" />
    </header>
  );
};

export default Header;
