import { FC, useContext } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import { CartContext } from "../../contexts/CartContext";
import formattedPrice from "../../modules/formattedPrice";
import styles from "./Cart.module.css"

type CartProps = {
  whatsapp: string;
}

const Cart:FC<CartProps> = ({whatsapp}) => {
  const {isCartVisible, hideCart, cartItems, removeItemFromCart} = useContext(CartContext);
  return isCartVisible ? (
    <>
    <button className={styles.overlay} onClick={hideCart}/>
    <div className={styles.cart}>
      <header className={styles.header}>
        Cart
        <MdClose className={styles.close} onClick={hideCart} size={24}/>
      </header>
      {
        cartItems.length > 0 ? (
          <>
            <ul className={styles.products}>
              {
                cartItems.map(({id, imageUrl, name, price}) => (
                  <li key={id} className={styles.product}>
                    <img className={styles.image} src={imageUrl} alt={name}/>
                    <div className={styles.infos}>
                      <p className={styles.name}>{name}</p>
                      <p className={styles.price}>{formattedPrice(price)}</p>
                    </div>
                    <FiTrash2 color="#fff" size={18} className={styles.remove} onClick={() => removeItemFromCart(id)}/>
                  </li>
                ))
              }
            </ul>
            <footer className={styles.footer}>
            <a className={styles.submitButton} href={`https://wa.me/${whatsapp}?text=I+would+like+to+buy+the+following+products%3A+${cartItems.map( ({ name }) => name).join(", ")}`}><FaWhatsapp size="24"/>Finish purchase</a>
          </footer>
          </>
        ) : (
          <p className={styles.emptyCart}>Your cart is empty!</p>
        )
      }
      
      
    </div>
    </>
  ) : null
}

export default Cart;