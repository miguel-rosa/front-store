import React from "react";
import {FiHome, FiHeart, FiShoppingCart} from "react-icons/fi";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <footer className={styles.navbar}>
      <FiHome color="#BFBFBF" size={24}/>        
      <FiHeart color="#BFBFBF" size={24}/>
      <FiShoppingCart color="#BFBFBF" size={24}/>
    </footer>
  )
}

export default Navbar;