import { useState } from "react";
import Products from "./components/Products/ProductListing";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-between w-screen h-screen bg-gray-300 p-5">
      <Sidebar />
      <Products />
    </div>
  );
}

export default App;
