import React from 'react';
import styles from "./Header.module.css";
import { FiShoppingCart } from "react-icons/fi"
import { MdSearch } from "react-icons/md"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <MdSearch size="36" color="#BFBFBF" />
        <input className={styles.input} type="text" placeholder="Search"/>
      </div>
      <button className={styles.cart}><FiShoppingCart color="#BFBFBF" size={24}/></button>
    </header>
  );
}

export default Header;
