import { createContext, useContext, useState } from "react";
import { products } from "../data/products";

const ProductsContext = createContext([]);

export const useProducts = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
  const [activeBrands, setActiveBrands] = useState([]);
  const [activeSizes, setActiveSizes] = useState([]);
  const [activeIdeals, setActiveIdeals] = useState([]);

  let filteredProducts = products.filter((p) => {
    const isBrandIn =
      activeBrands.length <= 0 ? true : activeBrands.includes(p.brand);
    const isSizesIn =
      activeSizes.length <= 0 ? true : activeSizes.includes(p.size);
    const isIdealIn =
      activeIdeals.length <= 0 ? true : activeIdeals.includes(p.idealFor);
    return isBrandIn && isSizesIn && isIdealIn;
  });

  const clearAllFilters = () => {
    setActiveBrands([]);
    setActiveSizes([]);
    setActiveIdeals([]);
  };

  return (
    <ProductsContext.Provider
      value={{
        setActiveBrands,
        setActiveIdeals,
        setActiveSizes,
        clearAllFilters,
        products: filteredProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
