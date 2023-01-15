import ProductCard from "./components/Products/ProductsListing";
import Sidebar from "./components/Sidebar/Sidebar";
import { products } from "./data/products";
import ProductsProvider from "./store/products";

function App() {
  return (
    <div className="flex bg-gray-600">
      <ProductsProvider>
        <div className="p-4 flex justify-between">
          <Sidebar />
          <ProductCard products={products} />
        </div>
      </ProductsProvider>
    </div>
  );
}

export default App;
