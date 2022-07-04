import { makeAutoObservable } from "mobx";

class CartStore {
  products = [];
  sum = 0;
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }
  setProducts(products) {
    this.products = products;
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

    const prod = this.products[productIndex];

    if (prod.count === 1) {
      this.products.splice(productIndex, 1);

      return;
    }

    prod.count--;
  }

  cleaCard() {
    this.products = [];
  }

  getCount() {
    return this.products.reduce((count, product) => count + product.count, 0);
  }

  add() {
    this.count++;
  }

  getTotalPrice() {
    this.sum = this.products.reduce(
      (totalPrice, product) => totalPrice + Number(product.price) * product.count, 0);
    return this.sum
  }

}

export const cartStore = new CartStore();