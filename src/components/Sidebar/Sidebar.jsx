import React from "react";
import { Button } from "react-bootstrap";

const Sidebar = ({
  products,
  setsortValue,
  setFilterValues,
  filterValues,
  sortValue,
  setProducts,
}) => {
  return (
    <div className="w-1/5 bg-gray-200 rounded">
      <span className="flex items-center justify-evenly p-2">
        <span className="text-lg font-medium">Filters</span>
        <Button size="sm" variant="outline-danger">
          Clear all
        </Button>
      </span>
      <hr />
      <div className="pl-3">
        <span>Brands</span>
        {products.map((brand) => (
          <div key={brand.id}>
            <input type="checkbox" name={brand.brand} value={brand.brand} />
            <label className="mx-2">{brand.brand}</label>
          </div>
        ))}
      </div>
      <div className="sidebar__categories">
        <span>Sizes</span>
        {["S", "M", "L", "XL"].map((prod) => (
          <div
            key={prod}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <input type="checkbox" name={prod} value={prod} />
            <label className="mx-2">{prod}</label>
          </div>
        ))}
      </div>
      <div className="sidebar__categories">
        <span>Ideal for</span>
        {["Men", "Women", "Girl", "Kids"].map((prod) => (
          <div
            key={prod}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <input type="checkbox" name={prod} value={prod} />
            <label className="mx-2">{prod}</label>
          </div>
        ))}
      </div>
      <Button variant="outline-primary">Filter</Button>
    </div>
  );
};

export default Sidebar;
