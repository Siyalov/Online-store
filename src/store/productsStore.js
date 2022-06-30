import { makeAutoObservable } from "mobx";

class ProductsStore {
  products = [];

  constructor() {
    makeAutoObservable(this);
  }

  setProducts(products) {
    this.products = products;
  }

  removeProduct(id) {
    const index = this.products.findIndex((product) => product.id === id);

    if (index < 0) {
      return;
    }

    if (this.products[index].count > 0) {
      this.products[index].count--;
    }
  }

  addProduct(product) {
    this.products.push(product);
  }

  changeProduct(id, newProduct) {
    const index = this.products.findIndex((product) => product.id === id);

    this.products.splice(index, 1, newProduct);
  }

  getProduct(id) {
    const productIndex = productsStore.products.findIndex(
      (product) => product.id === id
    );

    return this.products[productIndex];
  }
}

export const productsStore = new ProductsStore();
