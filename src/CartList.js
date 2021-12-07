import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import DataContext from "./DataContext";

function CartList() {
  const { DataSet, setDataSet } = useContext(DataContext);
  let handleMinus = (id) => {
    let index = DataSet.findIndex((el) => el.id === id);
    DataSet[index].count--;
    setDataSet([...DataSet]);
  };
  let handlePlus = (id) => {
    let index = DataSet.findIndex((el) => el.id === id);
    DataSet[index].count++;
    setDataSet([...DataSet]);
  };
  let handleRemove = (id) => {
    let index = DataSet.findIndex((el) => el.id === id);
    DataSet[index].count = 0;
    DataSet.splice(index, 1);
    setDataSet([...DataSet]);
  };

  return (
    <div className="txt">
      <Link to="/">
        <button type="submit" className="btn2">
          Home
        </button>
      </Link>
      {DataSet.length === 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        <h3>
          Total : $
          {DataSet.map((e) => e.count * e.price).reduce((a, b) => a + b)}
        </h3>
      )}
      <div className="cartl">
        {DataSet.map((data) => {
          return (
            <div className="cartlist">
              <h3>{data.productName}</h3>
              <p>
                {data.count} * {data.price} = $ {data.count * data.price}
              </p>
              <button
                type="submit"
                className="btn2"
                onClick={() => handleMinus(data.id)}
                disabled={data.count <= 1}
              >
                <FontAwesomeIcon
                  icon={faMinus}
                  size="sm"
                  key={data.id * 50}
                ></FontAwesomeIcon>
              </button>
              <button
                type="submit"
                className="btn2"
                onClick={() => handlePlus(data.id)}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  size="sm"
                  key={data.id * 55}
                ></FontAwesomeIcon>
              </button>
              <button
                type="submit"
                className="btn2"
                onClick={() => handleRemove(data.id)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartList;
