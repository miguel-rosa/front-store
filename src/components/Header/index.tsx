import { useContext } from 'react';
import { FiShoppingCart, FiHeart} from "react-icons/fi"
import { MdClose, MdSearch } from "react-icons/md"

import styles from "./Header.module.css";
import { SearchContext } from '../../contexts/SearchContext';
import { CartContext } from '../../contexts/CartContext';
import { FavoritesContext } from '../../contexts/FavoritesContext';

const Header = () => {
  const { textSearch, setTextSearch } = useContext(SearchContext);
  const { showCart, cartItems } = useContext(CartContext)
  const { showFavorites } = useContext(FavoritesContext);
  return (
    <header className={styles.header}>
      <p className={styles.logo}>F<b>S</b></p>
      <div className={styles.search}>
        {textSearch ? <MdClose size="24" color="#BFBFBF" onClick={() => setTextSearch("")}/> : <MdSearch size="24" color="#BFBFBF" />}
        <input onChange={(event) => setTextSearch(event.target.value)} value={textSearch} className={styles.input} type="text" placeholder="Search"/>
      </div>
      <button
        className={styles.button}
        onClick={showFavorites}>
        <FiHeart color="#BFBFBF" size={24}/>
      </button>
      <button
        className={styles.button}
        onClick={showCart}
      >
        <FiShoppingCart color="#BFBFBF" size={24}/>
      {
        cartItems.length > 0 &&
          <span className={styles.quantity}>
            {cartItems.length}
          </span>
      }
      </button>
    </header>
  );
}

export default Header;
