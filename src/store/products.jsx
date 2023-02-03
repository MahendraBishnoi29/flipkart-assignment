import { createContext, useContext, useState } from "react";

const ProductsContext = createContext([]);

export const useProducts = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
  const [activeBrands, setActiveBrands] = useState([]);
  const [activeSizes, setActiveSizes] = useState([]);
  const [activeIdeals, setActiveIdeals] = useState([]);
  const [sortMethod, setSortMethod] = useState("");

  return (
    <ProductsContext.Provider
      value={{
        activeBrands,
        setActiveBrands,
        activeSizes,
        setActiveSizes,
        activeIdeals,
        setActiveIdeals,
        sortMethod,
        setSortMethod,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
