import "./Top.css";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DataContext from "./DataContext";

function Topbar() {
  const dataList = useContext(DataContext);

  return (
    <div className="topbar">
      <h1>Shopping Cart</h1>
      <Link to="/cart" className="btn1" title="icons">
        <span className="icon1">
          <FontAwesomeIcon icon={faShoppingCart} key="msv" />
        </span>
        Cart
        <span className="cartcount">
          {dataList.DataSet.length > 0 ? dataList.DataSet.length : 0}
        </span>
      </Link>
    </div>
  );
}

export default Topbar;
