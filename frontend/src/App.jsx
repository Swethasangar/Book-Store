import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import SingleBook from "./components/Shop/SingleBook";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Cart from "../src/Pages/Cart"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cartItems,setCartItems] = useState([]);
  return (
    <BrowserRouter>
    <ToastContainer theme="dark" position="top-center"/>
      <Navbar cartItems={cartItems}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/book/:id" element={<SingleBook cartItems={cartItems} setCartItems={setCartItems}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
        <Route path="/all-books" element={<Home/>}/>
      </Routes>
      <Footer className="bottom-0 w-auto" />
    </BrowserRouter>
  );
}

export default App;
