import React, { Component } from "react";
import Filter from "../components/Filter";
import Product from "../components/product";
import Cart from "../components/Cart";

export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="main">
            <Filter></Filter>
            <Product></Product>
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </div>
    );
  }
}