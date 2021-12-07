// import './App.css';

// function App() {
//   const datas = [
//     {
//       productName: "Fancy Product",
//       price: 212,
//       id: 1,
//       count: 0,
//     },
//     {
//       productName: "Special Item",
//       price: 346,
//       id: 2,
//       count: 0,
//     },
//     {
//       productName: "Sale Item",
//       price: 625,
//       id: 3,
//       count: 0,
//     },
//     {
//       productName: "Popular Item",
//       price: 938,
//       id: 4,
//       count: 0,
//     },
//     {
//       productName: "Fancy Product",
//       price: 179,
//       id: 5,
//       count: 0,
//     },
//     {
//       productName: "Popular Item",
//       price: 158,
//       id: 6,
//       count: 0,
//     },
//     {
//       productName: "Special Item",
//       price: 305,
//       id: 7,
//       count: 0,
//     },
//     {
//       productName: "Fancy Product",
//       price: 525,
//       id: 8,
//       count: 0,
//     },
//     {
//       productName: "Special Item",
//       price: 346,
//       id: 9,
//       count: 0,
//     },
//     {
//       productName: "Sale Item",
//       price: 625,
//       id: 10,
//       count: 0,
//     },
//     {
//       productName: "Fancy Item",
//       price: 764,
//       id: 11,
//       count: 0,
//     },
//     {
//       productName: "Popular Item",
//       price: 259,
//       id: 12,
//       count: 0,
//     },
//   ];

//   return (
//     <div className="App">
//               <div className="container">
//             <div className="row">
//                 <div className="col-md-12">

// </div>
// </div>
// </div>

//       {/* <h1>Shopping Cart</h1>
//     {datas.map((data)=>(
//       <div>
//       product name={data.productName}
//       price={data.price}
//       id={data.id}
//       count={data.count}
//       </div>
//     ))} */}
//     </div>
//   );
// }

// export default App;

import "./App.css";
import Card from "./Card";
import Topbar from "./Topbar";
import CartList from "./CartList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DataProvider } from "./DataContext";
import React from "react";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <DataProvider>
          <Topbar></Topbar>
          <Route path="/" component={Card} exact={true}></Route>
          <Route path="/cart" component={CartList} exact={true}></Route>
        </DataProvider>
      </Switch>
    </BrowserRouter>
  );
}
