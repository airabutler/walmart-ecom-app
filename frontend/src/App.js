import React, { useState } from "react";
import CsvUploader from "./components/CsvUploader";
import ProductList from "./components/ProductList";
import BarChartExample from "./components/BarChartExample";
import LineChartExample from "./components/LineChartExample";
import PieChartExample from "./components/PieChartExample";
import "./styles.css";

const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className="app">
      <CsvUploader setProducts={setProducts} />
      <ProductList products={products} />
      <BarChartExample products={products} />
      <LineChartExample products={products} />
      <PieChartExample products={products} />
    </div>
  );
};

export default App;
