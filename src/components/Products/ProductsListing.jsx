import { useProducts } from "../../store/products";
import { products } from "../../data/products";

import React from "react";

const ProductsListing = () => {
  const { activeBrands, activeSizes, activeIdeals, sortMethod } = useProducts();

  let filteredProducts = products.filter((p) => {
    console.log(activeBrands);
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

  if (filteredProducts.length === 0) return <p>No products found</p>;

  return (
    <div className="overflow-y-scroll h-[76vh]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts?.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer mb-3 bg-white rounded-lg overflow-hidden shadow-md"
            onClick={() => handleProductClick(product.id)}
          >
            <img
              src={product.image}
              className="h-64 w-full object-cover"
              alt={product.name}
            />
            <div className="flex flex-col p-3">
              <p className="text-gray-600">{product.brand}</p>
              <h3 className="text-lg font-medium">
                {product.name?.length < 23
                  ? product.name
                  : `${product.name?.substring(0, 23)}...`}
              </h3>
              <p className="text-gray-600">
                <span className="font-medium">SIZE: </span>
                {product.size}
              </p>
              <p className="font-medium text-gray-800">₹{product?.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsListing;
