import {makeAutoObservable} from "mobx";

const fakeProducts = (number) => Array.from({length: number}, (_, index) => ({
  id: Math.random().toString().slice(0,6),
  title: `Some title ${index}`,
  description: `Some description ${index}`,
  imageUrl: 'https://html5css.ru/html/workplace.jpg',
  number: Math.floor(Math.random() * 10),
  price: Math.floor(Math.random() * 10000)
}))

class ProductsStore {
  products = fakeProducts(50);

  constructor() {
    makeAutoObservable(this)
  }

  setProducts(products) {
    this.products = products;
  }
}

export const productsStore = new ProductsStore();