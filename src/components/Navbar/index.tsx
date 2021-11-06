import React, { useContext } from "react";
import {FiHome, FiHeart, FiShoppingCart} from "react-icons/fi";
import { CartContext } from "../../contexts/CartContext";
import { FavoritesContext } from "../../contexts/FavoritesContext";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const { showFavorites } = useContext(FavoritesContext);
  const { showCart } = useContext(CartContext);
  return (
    <footer className={styles.navbar}>
      <FiHome color="#BFBFBF" size={24} className={styles.icon}/>        
      <FiHeart color="#BFBFBF" size={24} onClick={showFavorites} className={styles.icon}/>
      <FiShoppingCart color="#BFBFBF" size={24} onClick={showCart} className={styles.icon}/>
    </footer>
  )
}

export default Navbar;