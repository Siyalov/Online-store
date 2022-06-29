import { makeAutoObservable } from "mobx";

const fakeProducts = (number) =>
  Array.from({ length: number }, (_, index) => ({
    id: Math.random().toString().slice(0, 6),
    name: `Some title ${index}`,
    description: `Some description ${index}`,
    imageUrl: "https://html5css.ru/html/workplace.jpg",
    count: Math.floor(Math.random() * 10),
    price: Math.floor(Math.random() * 10000),
  }));

class ProductsStore {
  products = fakeProducts(10);

  constructor() {
    makeAutoObservable(this);
  }

  setProducts(products) {
    this.products = products;
  }

  addProduct(product) {
    this.products.push(product);
  }
}

export const productsStore = new ProductsStore();
