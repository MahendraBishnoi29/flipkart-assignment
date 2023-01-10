import React, { useState } from "react";

function ProductFilters({ products, onFilter }) {
  const [size, setSize] = useState("");
  const [brand, setBrand] = useState("");
  const [idealFor, setIdealFor] = useState("");

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleIdealForChange = (event) => {
    setIdealFor(event.target.value);
  };

  const handleFilter = () => {
    const filteredProducts = products.filter((product) => {
      return (
        (size === "" || product.size === size) &&
        (brand === "" ||
          product.brand.toLowerCase().includes(brand.toLowerCase())) &&
        (idealFor === "" || product.idealFor === idealFor)
      );
    });
    // you can use the filteredProducts here, for example, to update the state of the parent component
    onFilter(filteredProducts);
  };

  return (
    <div>
      <label htmlFor="size-filter">Size:</label>
      <select id="size-filter" value={size} onChange={handleSizeChange}>
        <option value="">All</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
      <br />
      <label htmlFor="brand-filter">Brand:</label>
      <input
        type="text"
        id="brand-filter"
        value={brand}
        onChange={handleBrandChange}
      />
      <br />
      <label htmlFor="ideal-for-filter">Ideal for:</label>
      <select
        id="ideal-for-filter"
        value={idealFor}
        onChange={handleIdealForChange}
      >
        <option value="">All</option>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
        <option value="Kids">Kids</option>
      </select>
      <br />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
}

export default ProductFilters;
