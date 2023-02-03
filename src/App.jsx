import ProductsListing from "./components/Products/ProductsListing";
import Sidebar from "./components/Sidebar/Sidebar";
import { products } from "./data/products";
import NewProductsProvider from "./store/products";

function App() {
  return (
    <div className="flex h-screen flex-col md:flex-row p-4 bg-gray-600">
      <NewProductsProvider>
        <div className="md:w-1/4 sm:w-2/4 mr-5 sm:mb-5">
          <Sidebar />
        </div>
        <div className="flex-1">
          <ProductsListing products={products} />
        </div>
      </NewProductsProvider>
    </div>
  );
}

export default App;
