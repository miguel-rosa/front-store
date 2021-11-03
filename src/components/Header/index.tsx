import { useContext } from 'react';
import styles from "./Header.module.css";
import { FiShoppingCart } from "react-icons/fi"
import { MdClose, MdSearch } from "react-icons/md"
import { SearchContext } from '../../contexts/SearchContext';

const Header = () => {
  const { textSearch, setTextSearch } = useContext(SearchContext);

  return (
    <header className={styles.header}>
      <div className={styles.search}>
        {textSearch ? <MdClose size="36" color="#BFBFBF" onClick={() => setTextSearch("")}/> : <MdSearch size="36" color="#BFBFBF" />}
        <input onChange={(event) => setTextSearch(event.target.value) }className={styles.input} type="text" placeholder="Search"/>
      </div>
      <button className={styles.cart}><FiShoppingCart color="#BFBFBF" size={24}/></button>
    </header>
  );
}

export default Header;
