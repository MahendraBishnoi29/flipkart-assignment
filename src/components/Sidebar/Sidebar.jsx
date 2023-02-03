import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { products as originalProducts } from "../../data/products";
import { useProducts } from "../../store/products";

const Sidebar = () => {
  const {
    setActiveBrands,
    activeBrands,
    activeSizes,
    setActiveSizes,
    activeIdeals,
    setActiveIdeals,
    setSortMethod,
  } = useProducts();

  const [sortMethodState, setSortMethodState] = useState();

  const handleCheckBoxChecked = (event, callback) => {
    if (event.target.checked) {
      callback((prev) => [...prev, event.target.value]);
    } else {
      callback((prev) => prev.filter((p) => p !== event.target.value));
    }
  };

  const clearAllFilters = () => {
    setActiveBrands([]);
    setActiveSizes([]);
    setActiveIdeals([]);
    setSortMethod();
    setSortMethodState();
  };

  const handleFilterProducts = () => {
    setSortMethod(sortMethodState);
  };

  // remove duplicate brands coz some products may have same brands
  const brands = [...new Set(originalProducts?.map((p) => p.brand))];

  return (
    <div className="max-h-[50rem] bg-gray-200 rounded overflow-hidden">
      <div className="p-2">
        <span className="mr-3">Filters</span>
        <Button
          className="sm:p-0 p-1"
          size="m"
          variant="outline-danger"
          onClick={clearAllFilters}
        >
          Clear all Filters
        </Button>
      </div>
      <hr />
      <div className="pl-3">
        <span className="font-bold pb-1">Brands</span>
        {brands?.map((brand) => (
          <div key={brand}>
            <input
              type="checkbox"
              name={brand}
              checked={activeBrands.includes(brand)}
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
              checked={activeSizes.includes(prod)}
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
              checked={activeIdeals.includes(prod)}
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
            type="radio"
            onChange={() => {
              setSortMethodState("price-high-to-low");
            }}
            checked={sortMethodState === "price-high-to-low"}
            id="price-high-to-low"
            name="priceFilter"
          />
          <label className="ml-2" htmlFor="price-high-to-low">
            High To Low
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            onChange={() => {
              setSortMethodState("price-low-to-high");
            }}
            checked={sortMethodState === "price-low-to-high"}
            name="priceFilter"
            id="price-low-to-high"
          />
          <label className="ml-2" htmlFor="price-low-to-high">
            Low To High
          </label>
        </div>
        <Button
          variant="outline-primary"
          className="m-2"
          onClick={handleFilterProducts}
        >
          Set
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
