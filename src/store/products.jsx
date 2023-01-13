import { createContext, useContext, useState } from "react";
import { products } from "../data/products";

const ProductsContext = createContext([]);

export const useProducts = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
  return <ProductsContext.Provider>{children}</ProductsContext.Provider>;
};

export default ProductsProvider;
