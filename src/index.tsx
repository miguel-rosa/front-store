import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Filter from './components/Filter';
import Products from './components/Products';
import { SearchStorage } from './contexts/SearchContext';
import { CartStorage } from './contexts/CartContext';
import { FavoritesStorage } from './contexts/FavoritesContext';
import { NotificationStorage } from './contexts/NotificationContext';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import data from "./data";

const {filters, products, whatsapp} = data;
ReactDOM.render(
  <React.StrictMode>
    <main>
      <NotificationStorage>
        <CartStorage>
          <FavoritesStorage>
            <SearchStorage>
              <Header />
              <Filter filters={filters} />
              <Products products={products} />
            </SearchStorage>
            <Cart whatsapp={whatsapp}/>
            <Favorites/>
          </FavoritesStorage>
        </CartStorage>
      </NotificationStorage>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

