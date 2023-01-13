import React from "react";
import { Button } from "react-bootstrap";

const Sidebar = ({ products }) => {
  const brands = [...new Set(products?.map((p) => p.brand))];

  return (
    <div className="w-1/5 max-h-[90vh] bg-gray-200 rounded">
      <span className="flex items-center justify-evenly p-2">
        <span className="text-lg font-medium">Filters</span>
        <Button size="sm" variant="outline-danger">
          Clear all
        </Button>
      </span>
      <hr />
      <div className="pl-3">
        <span className="font-bold pb-1">Brands</span>
        {brands?.map((brand) => (
          <div key={brand}>
            <input type="checkbox" name={brand} value={brand} />
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
            <input type="checkbox" name={prod} value={prod} />
            <label className="mx-2">{prod}</label>
          </div>
        ))}
      </div>
      <div className="pl-3">
        <span className="font-bold pb-1">Ideal for</span>
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
      <Button className="m-3" variant="outline-primary">
        Filter
      </Button>
    </div>
  );
};

export default Sidebar;
