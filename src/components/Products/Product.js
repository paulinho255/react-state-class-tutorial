import React, { Component } from "react";
import "./Product.css";
import products from "./data";

export default class Product extends Component {
  state = {
    cart: [],
    total: 0,
  };

  add = (product) => {
    this.setState((state) => ({
      cart: [...state.cart, product.nome],
      total: state.total + product.price,
    }));
  };
  remove = (product) => {
    this.setState((state) => {
      const cart = [...state.cart];
      cart.splice(cart.indexOf(product.nome));
      return ({
        cart,
        total: state.total - product.price,
      });
    });
  };

  currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  getTotal = () => {
    return this.state.total.toLocaleString(undefined, this.currencyOptions);
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
