import React from "react";
import "./App.css";
import Footer from "./Footer";
import datas from "./Data";
import CardData from "./CardData";

function Card() {
  return (
    <>
      <div className="App">
        {datas.map((data) => {
          return <CardData key={data.id * 669} data={data}></CardData>;
        })}
      </div>
      <Footer></Footer>
    </>
  );
}

export default Card;
