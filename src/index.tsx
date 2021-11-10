import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Filter from './components/Filter';
import Products from './components/Products';
import { SearchStorage } from './contexts/SearchContext';
import { CartStorage } from './contexts/CartContext';
import { NotificationStorage } from './contexts/NotificationContext';
import data from "./data";

const {filters, products, whatsapp} = data;
ReactDOM.render(
  <React.StrictMode>
    <main>
      <NotificationStorage>
        <CartStorage>
            <SearchStorage>
              <Header whatsapp={whatsapp}/>
              <Filter filters={filters} />
              <Products products={products} />
            </SearchStorage>
        </CartStorage>
      </NotificationStorage>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

