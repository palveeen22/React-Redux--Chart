import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProducts from "./components/AddProducts";
import ShowProducts from "./components/ShowProducts";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="container ">
        <Routes>
          <Route path="/" element={<ShowProducts />} />
          <Route path="add" element={<AddProducts />} />
          <Route path="edit/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
