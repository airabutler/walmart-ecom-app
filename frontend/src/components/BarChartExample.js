import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const BarChartExample = ({ products }) => {
  const chartData = products.map((product) => ({
    name: product.name,
    price: parseFloat(product.price),
  }));

  return (
    <div className="chart-container">
      <h2>Bar Chart: Product Prices</h2>
      <BarChart
        width={600}
        height={300}
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="price" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default BarChartExample;
