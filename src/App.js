import { React , useState }  from 'react';
import NavbarComponent from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './components/pages/CartContext';
import Home from './components/pages/Home';
import SpaMenu from './components/pages/SpaMenu';
import Products from './components/pages/Products';
import Membership from './components/pages/Membership';

function App() {
  return (

<div> 
  <CartProvider>
      <NavbarComponent />
      <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/spaMenu" element={<SpaMenu/>}/>
  <Route path="/products" element={<Products/>}/>
  <Route path="/membership" element={<Membership/>}/>
  </Routes>
  </CartProvider>
</div>

  );
}

export default App;
