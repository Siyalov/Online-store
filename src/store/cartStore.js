import { makeAutoObservable } from "mobx";
import { productsStore } from "./productsStore";

class CartStore {
  products = [];
  sum = 0;

  constructor() {
    makeAutoObservable(this);
  }

  addProduct(newProduct) {
    const productIndex = this.products.findIndex(
      (product) => product.id === newProduct.id
    );

    if (productIndex < 0) {
      this.products.push({ ...newProduct, count: 1 });
      return;
    }

    this.products[productIndex].count++;
  }

  getProduct(id) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id
    );

    return this.products[productIndex];
  }

  removeProductGroup = (id) => {
    const productIndex = this.products.findIndex(
      (product) => product.id === id
    );

    if (productIndex < 0) {
      return;
    }

    this.products.splice(productIndex, 1);
  };

  removeProduct(id) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id
    );

    if (productIndex < 0) {
      return;
    }

    const product = this.products[productIndex];

    if (product.count === 1) {
      this.products.splice(productIndex, 1);

      return;
    }

    product.count--;
  }

  cleaCard() {
    this.products = [];
  }

  getCount() {
    return this.products.reduce((count, product) => count + product.count, 0);
  }

  getTotalPrice() {
    this.sum = this.products.reduce(
      (totalPrice, product) => totalPrice + Number(product.price) * product.count, 0);
    return this.sum
  }

}

export const cartStore = new CartStore();
