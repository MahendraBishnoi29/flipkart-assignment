import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="">
      <img src={product.image} className="singlecard__img" alt={product.name} />
      <div className="singlecard__data">
        <span className="singlecard__brand">{product.brand}</span>
        <span className="singlecard__name">
          {product.name.length < 23 ? (
            product.name
          ) : (
            <span>
              {product.name.substring(0, 23)}
              ...
            </span>
          )}
        </span>
        <span className="singlecard__data--price">
          <span style={{ fontWeight: 500 }}>₹{product.price}</span>{" "}
          <strike className="singlecard__brand">₹{product.price}</strike>{" "}
          <span style={{ fontWeight: 500, color: "green" }}>
            {product.offer} off
          </span>
        </span>
        <div>
          <span className="singlecard__brand">SIZE: </span>
          {product.size.map((m) => `${m}, `)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
