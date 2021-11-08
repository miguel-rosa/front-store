import React, { FC, useContext } from "react";
import { FaWhatsapp } from "react-icons/fa"
import { FiHeart } from "react-icons/fi"
import { CartContext } from "../../contexts/CartContext";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { SearchContext } from "../../contexts/SearchContext";
import formattedPrice from "../../modules/formattedPrice";
import stringSearch from "../../modules/stringSearch";

import style from "./Products.module.css";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  categoryId: string;
}

type ProductsProps = {
  products: Product[];
}

const Products:FC<ProductsProps> = ({ products }) => {
  const { textSearch, categorySearch } = useContext(SearchContext);
  const { addItemToCart } = useContext(CartContext);
  const { addItemToFavorites, removeItemFromFavorites, isProductFavorite } = useContext(FavoritesContext);
  return (
    <ul className={style.products}>
      {
        products.filter(({name, categoryId}) => stringSearch(name, textSearch, categoryId, categorySearch)).map((product) => (
          <li className={style.product}>
            <FiHeart className={style.favorite} color="#fff" size={32} fill={isProductFavorite(product.id) ? "#fff" : "transparent"}
              onClick={
                () => isProductFavorite(product.id) ? removeItemFromFavorites(product.id) :  addItemToFavorites(product)
              }/>
            <img src={product.imageUrl} alt={product.name} className={style.image}/>
            <h2 className={style.name}>{product.name}</h2>
            <h3 className={style.price}>{formattedPrice(product.price)}</h3>
            <button className={style.button} onClick={() => addItemToCart(product)}> <FaWhatsapp color="#042D1C" size={20}/> Buy now </button>
          </li>
        ))
      }
    </ul>
  )
};

export default Products;