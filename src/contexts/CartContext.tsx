import { createContext, useState, FC, useEffect, useContext } from "react";
import { NotificationContext } from "./NotificationContext";

type CartItems = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  categoryId: string;
};

type CartContextType = {
  isCartVisible: boolean;
  showCart(): void;
  hideCart(): void;
  cartItems: CartItems[];
  addItemToCart(previousValue: CartItems): void;
  removeItemFromCart(itemId: number): void;
  removeAllItemsFromCart(): void;
};

export const CartContext = createContext({} as CartContextType);

export const CartStorage:FC = ({ children }) => {
  const CART_LOCAL_STORAGE = "cartItems";
  const {setShowNotification} = useContext(NotificationContext);
  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  const addItemToCart = (item: CartItems) => {
    setShowNotification(true);
    if(cartItems.some( ({id}) => id === item.id)) return;
    setCartItems(previousCartItems => [...previousCartItems, item])
  }

  const removeItemFromCart = (itemId: number) => {
    setCartItems(previousCartItems => previousCartItems.filter(({id}) => id !== itemId))
  }
  
  const removeAllItemsFromCart = () => {
    setCartItems([])
  }

  const showCart = () => {
    setIsCartVisible(true)
  }

  const hideCart = () => {
    setIsCartVisible(false)
  }

  useEffect(() => {
    const storagedCart = window.localStorage.getItem(CART_LOCAL_STORAGE);
    if(!storagedCart) return;
    setCartItems(JSON.parse(storagedCart))
  }, [])

  useEffect(() => {
    window.localStorage.setItem(CART_LOCAL_STORAGE, JSON.stringify(cartItems));
  }, [cartItems])

  return (
    <CartContext.Provider value={{isCartVisible, showCart, hideCart, cartItems, addItemToCart, removeItemFromCart, removeAllItemsFromCart}}>
      {children}
    </CartContext.Provider>
  )
}