import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';
import Footer from './Components/Layout/Footer';
function App() {

  const [cartShow, setCartShow]=useState(true)
  return (
    <CartProvider>
    <div className="App">
      {cartShow && (<Cart close={()=>{setCartShow(false)}} popup={()=>{setCartShow(false)}} />)}
      <><Header onpopup={()=>{setCartShow(true)}} /><Meals /><Footer /></>
    </div>
    </CartProvider>
  );
}

export default App;
