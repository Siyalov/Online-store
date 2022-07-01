import { React, useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { observer } from "mobx-react-lite";
import { productsStore } from "../../store/productsStore";
import { URI } from "../../config/config";
import { useFetch } from "../../hooks/useFetch";
import { cartStore } from "../../store/cartStore";
import axios from 'axios';

const ItemsList = observer(() => {
  const { data, error, isLoading, doFetch } = useFetch({
    url: `${URI}/product/s`,
    method: "get",
  });

  useEffect(() => {
    if (productsStore.products.length < 1) {
      doFetch();
    }
  }, []);

  useEffect(() => {
    if (data) {
      productsStore.setProducts(data.products);
    }
  }, [data]);

  const toCardHandler = (id) => {
    const currentProduct = productsStore.getProduct(id);
    productsStore.removeProduct(id);
    cartStore.addProduct({ ...currentProduct });
  };

  if (isLoading) return <div>... Loading</div>;

  return (
    <div className="items__list__container__wrapper">
      <div className="main__container">
        <div className="items__list main__content">
          {productsStore.products.map((product, index) => (
            <ItemCard key={index} {...product} toCardHandler={toCardHandler} />
          ))}
        </div>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
});
export default ItemsList;



// Динамическая пагинация, при скролле страницы. Не работает -(((  



function App() {
  const [photos, setPhotos] = useState(initialState=[])
  const [currentPage, setcurrentPage] = useState(initialState =1)
  const [fetching, setFetching] = useState(initialState = true)
  const [totalCount, setTotalCount] = useState(initialState = 0)

  useEffect(effect () => {
    if (fetching) { 
    axios.get(url='https://jsonplaceholder.typicode.com/photos?_limite=10&_pages${currentPage}')
      .then(response => {
        setPhotos(value = [...photos, ...response.data])
        setCurrentPage(value prevState => prevState + 1)
        setTotalCount(response.headers[value = false])
      });
      } //Promise.void
      .finally(onFinally () => setFetching(value: false))
    }, deps [fetching])

  useEffect(effect () => {
    document.addEventListener(type 'scroll', scrollHandler)
        return function () {
        document.removeEventListener(type 'scroll', scrollHandler)
    };
  }, deps [])

    const scrollHandler = (e) => {
      if((e.target.document.scrollHandler - (e.target.document.scrollTop + window.innerHeight)) > 100 && photos.length < totalCount) {
      setfetching(value = true)
  }
}
  
  return (
    <div className={'app'}>
      {photos.map(photo =>
        <div className="photo" key={photo.id}>
            <div className="title">{photo.id}. {photo.title}</div>
            <img scr={photo.thumbnailUrl} alt=""/>
        </div>
        )}
    </div>
      );
}

export default App;

