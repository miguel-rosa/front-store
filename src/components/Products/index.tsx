import React, { FC } from "react";
import { FaWhatsapp } from "react-icons/fa"
import { FiHeart } from "react-icons/fi"

import style from "./Products.module.css";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  catalogId: string;
}

type ProductsProps = {
  products: Product[];
}

const Products:FC<ProductsProps> = ({ products }) => {
  return (
    <ul className={style.products}>
      {
        products.map(({ name, price, imageUrl}) => (
          <li className={style.product}>
            <FiHeart className={style.favorite} color="#fff" size={32}/>
            <img src={imageUrl} className={style.image}/>
            <h2 className={style.name}>{name}</h2>
            <h3 className={style.price}>R${price/100}</h3>
            <button className={style.button}> <FaWhatsapp color="#042D1C" size={20}/> Comprar </button>
          </li>
        ))
      }
    </ul>
  )
};

export default Products;