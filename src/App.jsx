import { useState } from "react";
import ProductCard from "./components/Products/ProductCard";
import Sidebar from "./components/Sidebar/Sidebar";
import { products } from "./data/products";

function App() {
  return (
    <div className="flex bg-gray-600">
      <div className="p-4 flex">
        <Sidebar products={products} />
        <ProductCard products={products} />
      </div>
    </div>
  );
}

export default App;
