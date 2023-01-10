import { useState } from "react";
import ProductFilters from "./components/Products/ProductFilters";
import productsData from "./data/products.json";

function App() {
  const [products, setProducts] = useState(productsData); // initial state for products is an empty array

  const handleFilter = (filteredProducts) => {
    setProducts(filteredProducts);
  };

  return (
    <div>
      <ProductFilters products={products} onFilter={handleFilter} />
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.picture} alt={product.name} />
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.size}</p>
          <p>{product.brand}</p>
          <p>{product.idealFor}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
