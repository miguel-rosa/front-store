import { FC, useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import { FavoritesContext } from "../../contexts/FavoritesContext";
import formattedPrice from "../../modules/formattedPrice";
import styles from "./Favorites.module.css"

const Favorites:FC = () => {
  const {isFavoritesVisible, hideFavorites, favoritesItems, removeItemFromFavorites} = useContext(FavoritesContext);
  return isFavoritesVisible && favoritesItems.length > 0 ? (
    <>
    <button className={styles.overlay} onClick={hideFavorites}/>
    <div className={styles.favorites}>
      <header className={styles.header}>
        Favorites
        <MdClose className={styles.close} onClick={hideFavorites} size={24}/>
      </header>
      <ul className={styles.products}>
        {
          favoritesItems.map(({id, imageUrl, name, price}) => (
            <li key={id} className={styles.product}>
              <img className={styles.image} src={imageUrl} alt={name}/>
              <div className={styles.infos}>
                <p className={styles.name}>{name}</p>
                <p className={styles.price}>{formattedPrice(price)}</p>
              </div>
              <FiTrash2 color="#fff" size={18} className={styles.remove} onClick={() => removeItemFromFavorites(id)}/>
            </li>
          ))
        }
      </ul>
    </div>
    </>
  ) : null
}

export default Favorites;