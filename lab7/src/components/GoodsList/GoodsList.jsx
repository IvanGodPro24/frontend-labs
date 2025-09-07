import axios from "axios";
import { useEffect, useState } from "react";
import GoodsCard from "../GoodsCard/GoodsCard";
import css from "./GoodsList.module.css";

const GoodsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=9&select=title,images,price"
        );

        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    }

    getProducts();
  }, []);

  return (
    <ul className={css.list}>
      {products.map(({ id, images, price, title }) => (
        <li key={id} className={css.item}>
          <GoodsCard images={images} price={price} title={title} />
        </li>
      ))}
    </ul>
  );
};

export default GoodsList;
