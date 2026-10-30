import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";

import store from "./store";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

import "./App.css";

function Home() {
  return (
    <div className="background-image">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>

        <p>
          Bring nature closer to your home with our beautiful
          collection of indoor and outdoor plants.
        </p>

        <Link to="/plants" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
}

function Navbar() {
  const cart = useSelector((state) => state.cart.cart);

  const totalQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <h2>Paradise Nursery</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/about">About Us</Link>

        <Link to="/cart">
          Cart 🛒 <span className="cart-count">{totalQuantity}</span>
        </Link>
      </div>
    </nav>
  );
}

function MainApp() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plants" element={<ProductList />} />
            <Route path="/cart" element={<CartItem />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default MainApp;
