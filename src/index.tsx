import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Filter from './components/Filter';
import Products from './components/Products';
// import Navbar from './components/Navbar';
import { SearchStorage } from './contexts/SearchContext';
import { CartStorage } from './contexts/CartContext';
import { FavoritesStorage } from './contexts/FavoritesContext';
import { NotificationStorage } from './contexts/NotificationContext';
import Cart from './components/Cart';
import Favorites from './components/Favorites';

const filters = [
  {
    name: "Burguers",
    id: "burguers"
  },
  {
    name: "Milkshakes",
    id: "milkshakes"
  },
  {
    name: "Cookies",
    id: "cookies" 
  }
]


const products = [
  {
    id: 1,
    name: "X-Burguer",
    price: 4590,
    imageUrl: "https://images.unsplash.com/photo-1586816001966-79b736744398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=340&q=60",
    categoryId: "burguers"
  },
  {
    id: 2,
    name: "Strawberry Milkshale",
    price: 4590,
    imageUrl: "https://images.unsplash.com/photo-1589734575451-8ddc34c5752b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=494&q=60",
    categoryId: "milkshakes"
  },
  {
    id: 3,
    name: "Chocolate Cookie",
    price: 4590,
    imageUrl: "https://images.unsplash.com/photo-1607114910421-a7c2b982d497?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=370&q=70",
    categoryId: "cookies"
  },
  {
    id: 4,
    name: "X-Burguer",
    price: 4590,
    imageUrl: "https://images.unsplash.com/photo-1586816001966-79b736744398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=340&q=60",
    categoryId: "burguer"
  },
  {
    id: 5,
    name: "Strawberry Milkshake",
    price: 4590,
    imageUrl: "https://images.unsplash.com/photo-1589734575451-8ddc34c5752b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=494&q=60",
    categoryId: "milkshakes"
  },
  {
    id: 6,
    name: "Chocolate Cookie",
    price: 4590,
    imageUrl: "https://images.unsplash.com/photo-1607114910421-a7c2b982d497?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=370&q=70",
    categoryId: "cookies"
  },
  {
    id: 7,
    name: "Strawberry Milkshake",
    price: 4590,
    imageUrl: "https://images.unsplash.com/photo-1589734575451-8ddc34c5752b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=494&q=60",
    categoryId: "milkshakes"
  },
  {
    id: 8,
    name: "Chocolate Cookie",
    price: 4590,
    imageUrl: "https://images.unsplash.com/photo-1607114910421-a7c2b982d497?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=370&q=70",
    categoryId: "cookies"
  },
  {
    id: 9,
    name: "Strawberry Milkshake",
    price: 4590,
    imageUrl: "https://images.unsplash.com/photo-1589734575451-8ddc34c5752b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=494&q=60",
    categoryId: "milkshakes"
  },
  {
    id: 10,
    name: "Chocolate Cookie",
    price: 4590,
    imageUrl: "https://images.unsplash.com/photo-1607114910421-a7c2b982d497?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=370&q=70",
    categoryId: "cookies"
  }
]

ReactDOM.render(
  <React.StrictMode>
    <NotificationStorage>
    <CartStorage>
    <FavoritesStorage>
    <SearchStorage>
      <Header />
      <Filter filters={filters} />
      <Products products={products} />
    </SearchStorage>
    {/* <Navbar /> */}
    <Cart/>
    <Favorites/>
    </FavoritesStorage>
    </CartStorage>
    </NotificationStorage>
  </React.StrictMode>,
  document.getElementById('root')
);

