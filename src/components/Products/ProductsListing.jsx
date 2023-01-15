import { useProducts } from "../../store/products";
import React from "react";

const ProductsListing = () => {
  const { products } = useProducts();

  return (
    <div className="w-2/3 md:w-3/4 max-h-screen overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-y-scroll">
        {products?.map((product) => (
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
