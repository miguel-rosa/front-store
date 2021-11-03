import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Filter from './components/Filter';
import Products from './components/Products';
import Navbar from './components/Navbar';

const filters = [
  {
    name: "All",
    id: "all"
  },
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
    name: "Burguer",
    price: 4590,
    imageUrl: "https://images.unsplash.com/photo-1586816001966-79b736744398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=340&q=60",
    catalogId: "burguer"
  },
  {
    id: 2,
    name: "Burguer",
    price: 4590,
    imageUrl: "https://images.unsplash.com/photo-1586816001966-79b736744398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=340&q=60",
    catalogId: "burguer"
  },
  {
    id: 3,
    name: "Burguer",
    price: 4590,
    imageUrl: "https://images.unsplash.com/photo-1586816001966-79b736744398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=340&q=60",
    catalogId: "burguer"
  },
  {
    id: 4,
    name: "Burguer",
    price: 4590,
    imageUrl: "https://images.unsplash.com/photo-1586816001966-79b736744398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=340&q=60",
    catalogId: "burguer"
  },
  {
    id: 5,
    name: "Burguer",
    price: 4590,
    imageUrl: "https://images.unsplash.com/photo-1586816001966-79b736744398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=340&q=60",
    catalogId: "burguer"
  },
  {
    id: 6,
    name: "Burguer",
    price: 4590,
    imageUrl: "https://images.unsplash.com/photo-1586816001966-79b736744398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=340&q=60",
    catalogId: "burguer"
  }

]

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Filter filters={filters} />
    <Products products={products} />
    <Navbar />
  </React.StrictMode>,
  document.getElementById('root')
);

