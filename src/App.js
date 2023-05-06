import React from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Items from './Components/Items';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Components/Cart';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path="/Items" element={<Items />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
