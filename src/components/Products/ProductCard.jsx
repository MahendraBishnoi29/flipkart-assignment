import React from "react";

const ProductCard = ({ products }) => {
  return (
    <div className="w-3/4 max-h-[90vh] flex flex-wrap gap-1 p-1 overflow-y-scroll">
      {products?.map((product) => (
        <div
          className="w-1/4 mx-auto p-1 cursor-pointer mb-3 bg-white rounded-2xl overflow-hidden shadow-xl"
          key={product.id}
        >
          <img
            src={product.image}
            className="h-64 w-64 object-contain"
            alt={product.name}
          />{" "}
          <div className="flex flex-col p-1">
            <p className="font-medium text-gray-400">{product.brand}</p>
            <span className="text-lg">
              {product.name?.length < 23 ? (
                product.name
              ) : (
                <span>
                  {product.name?.substring(0, 23)}
                  ...
                </span>
              )}
            </span>
            <span className="font-bold">₹{product?.price}</span>{" "}
            <div>
              <span className="font-medium text-gray-500">SIZE: </span>
              {product.size.map((m) => `${m}, `)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
