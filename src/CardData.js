import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import datas from "./Data";
import DataContext from "./DataContext";
import "./CardData.css";

function CardData({ data }) {
  let arr = [1, 2, 3, 4, 5];
  const [Rating, setRating] = useState(0);
  const [Hover, setHover] = useState(0);
  const { DataSet, setDataSet } = useContext(DataContext);

  let handleCart = (id) => {
    let ix = datas.find((e) => e.id === id);
    let index = DataSet.find((el) => el.id === id);
    if (index && index.id === ix.id) {
      ix.count++;
    } else {
      ix.count++;
      setDataSet([...DataSet, ix]);
    }
  };

  return (
    <div className="card">
      <img
        src="https://dummyimage.com/450x300/"
        alt="Product"
        className="image"
      />
      <h3>{data.productName}</h3>
      <p>$ {data.price}</p>
      <div>
        {arr.map((e) => {
          let ratingValue = e;
          return (
            <label>
              <input
                type="radio"
                name="ratings"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FontAwesomeIcon
                icon={faStar}
                color={
                  ratingValue <= (Hover || Rating) ? "gold" : "hsl(0, 0%, 90%)"
                }
                size="lg"
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
                key={e * data.id + 1000}
              />
            </label>
          );
        })}
      </div>
      <button
        type="submit"
        className="btn"
        title="addicons"
        onClick={() => handleCart(data.id)}
        disabled={DataSet.some((e) => e.id === data.id)}
      >
        <span className="icon">
          <FontAwesomeIcon icon={faCartPlus} key={data.id + 100} />
        </span>
        Add to Cart
      </button>
    </div>
  );
}

export default CardData;
