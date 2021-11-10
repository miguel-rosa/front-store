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



import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbzwMUBnWUvWfa_M5X3wi90A3zZEn0wpk",
  authDomain: "front-store-8adc8.firebaseapp.com",
  projectId: "front-store-8adc8",
  storageBucket: "front-store-8adc8.appspot.com",
  messagingSenderId: "604800544353",
  appId: "1:604800544353:web:1b75da087f681f4f62c420",
  measurementId: "G-S5Q1LG3548"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db:any) {
  const citiesCol = collection(db, 'stores');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}


async function getProducts(db:any) {
  const citiesCol = collection(db, 'products');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

getCities(db).then( test => console.log("test s", test));
getProducts(db).then( test => console.log("test p", test));


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

