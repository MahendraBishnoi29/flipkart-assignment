import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { products as originalProducts } from "../../data/products";
import { useProducts } from "../../store/products";

const Sidebar = () => {
  const {
    setActiveBrands,
    setActiveSizes,
    setActiveIdeals,
    setSortMethod,
    clearAllFilters,
  } = useProducts();
  const [sortMethod, setSortMethodState] = useState("");

  const handleCheckBoxChecked = (event, callback) => {
    if (event.target.checked) {
      callback((prev) => [...prev, event.target.value]);
    } else {
      callback((prev) => prev.filter((p) => p !== event.target.value));
    }
  };

  // remove duplicate brands coz some products may have same brands
  const brands = [...new Set(originalProducts?.map((p) => p.brand))];

  return (
    <div className="w-[23%] max-h-screen bg-gray-200 rounded">
      <span className="flex items-center justify-evenly p-2">
        <span className="text-lg font-medium">Filters</span>
        <Button
          className="md:p-1"
          size="m"
          variant="outline-danger"
          onClick={clearAllFilters}
        >
          Clear all Filters
        </Button>
      </span>
      <hr />
      <div className="pl-3">
        <span className="font-bold pb-1">Brands</span>
        {brands?.map((brand) => (
          <div key={brand}>
            <input
              type="checkbox"
              name={brand}
              value={brand}
              onChange={(event) =>
                handleCheckBoxChecked(event, setActiveBrands)
              }
            />
            <label className="mx-2">{brand}</label>
          </div>
        ))}
      </div>
      <div className="pl-3">
        <span className="font-bold pb-1">Sizes</span>
        {["S", "M", "L", "XL"].map((prod) => (
          <div
            key={prod}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              name={prod}
              value={prod}
              onChange={(event) => handleCheckBoxChecked(event, setActiveSizes)}
            />
            <label className="mx-2">{prod}</label>
          </div>
        ))}
      </div>
      <div className="pl-3">
        <span className="font-bold pb-1">Ideal for</span>
        {["Men", "Women", "Kids"].map((prod) => (
          <div
            key={prod}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              name={prod}
              value={prod}
              onChange={(event) =>
                handleCheckBoxChecked(event, setActiveIdeals)
              }
            />
            <label className="mx-2">{prod}</label>
          </div>
        ))}
      </div>
      <div className="pl-3">
        <span className="font-bold pb-1">Price</span>
        <div className="flex items-center">
          <input
            type="checkbox"
            onChange={() => {
              setSortMethodState("price-high-to-low");
              setSortMethod("price-high-to-low");
            }}
          />
          <label>High To Low</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            onChange={() => {
              setSortMethodState("price-low-to-high");
              setSortMethod("price-low-to-high");
            }}
          />
          <label>Low To High</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
