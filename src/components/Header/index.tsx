import { FC, useContext } from 'react';
import { FiShoppingCart} from "react-icons/fi"
import { MdClose, MdSearch } from "react-icons/md"

import styles from "./Header.module.css";
import { SearchContext } from '../../contexts/SearchContext';
import { CartContext } from '../../contexts/CartContext';
import Cart from '../Cart';

type HeaderProps = {
  whatsapp: string;
}

const Header:FC<HeaderProps> = ({whatsapp}) => {
  const { textSearch, setTextSearch } = useContext(SearchContext);
  const { showCart, cartItems } = useContext(CartContext)
  return (
    <header className={styles.header}>

      <p className={styles.logo}>front<b>shop</b></p>
      <div className={styles.search}>
        {textSearch ? <MdClose size="24" color="#BFBFBF" onClick={() => setTextSearch("")}/> : <MdSearch size="24" color="#BFBFBF" />}
        <input onChange={(event) => setTextSearch(event.target.value)} value={textSearch} className={styles.input} type="text" placeholder="Search"/>
      </div>
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
      <Cart whatsapp={whatsapp}/>
    </header>
  );
}

export default Header;
