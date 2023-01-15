import { createContext, useContext, useState } from "react";
import { products } from "../data/products";

const ProductsContext = createContext([]);

export const useProducts = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
  const [activeBrands, setActiveBrands] = useState([]);
  const [activeSizes, setActiveSizes] = useState([]);
  const [activeIdeals, setActiveIdeals] = useState([]);
  const [sortMethod, setSortMethod] = useState("");

  let filteredProducts = products.filter((p) => {
    const isBrandIn =
      activeBrands.length <= 0 ? true : activeBrands.includes(p.brand);
    const isSizesIn =
      activeSizes.length <= 0 ? true : activeSizes.includes(p.size);
    const isIdealIn =
      activeIdeals.length <= 0 ? true : activeIdeals.includes(p.idealFor);
    return isBrandIn && isSizesIn && isIdealIn;
  });

  if (sortMethod === "price-high-to-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortMethod === "price-low-to-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  const clearAllFilters = () => {
    setActiveBrands([]);
    setActiveSizes([]);
    setActiveIdeals([]);
    setSortMethod("");
  };

  return (
    <ProductsContext.Provider
      value={{
        setActiveBrands,
        setActiveIdeals,
        setActiveSizes,
        setSortMethod,
        clearAllFilters,
        products: filteredProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
