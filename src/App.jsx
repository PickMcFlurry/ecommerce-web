import React from "react";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDescription from "./pages/ProductDescription";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDescription />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
