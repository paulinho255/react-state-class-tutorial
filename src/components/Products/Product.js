import React, { Component } from "react";
import "./Product.css";
import products from "./data";

export default class Product extends Component {
  state = {
    cart: [],
  };

  add = (product) => {
    this.setState((state) => ({
      cart: [...state.cart, product],
    }));
  };
  remove = (product) => {
    this.setState((state) => {
      const cart = [...state.cart];
      const productIndex = cart.findIndex((p) => p.nome === product.nome);
      if (productIndex < 0) {
        return;
      }
      cart.splice(productIndex, 1);
      return {
        cart,
      };
    });
  };

  currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  getTotal = () => {
    const total = this.state.cart.reduce((totalCost, item) => totalCost + item.price,0);
    return total.toLocaleString(undefined, this.currencyOptions);
  };

  render() {
    return (
      <div className="wrapper">
        <div>Shopping Cart: {this.state.cart.length} total items.</div>
        <div>Total: {this.getTotal()}</div>
        <div>
          {products.map((product) => (
            <div key={product.nome}>
              <div className="product">
                <span role="img" aria-label={product.nome}>
                  {product.emoji}
                </span>
              </div>
              <button onClick={() => this.add(product)}>Add</button>
              <button onClick={() => this.remove(product)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
