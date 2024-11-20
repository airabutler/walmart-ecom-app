import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const LineChartExample = ({ products }) => {
  const chartData = products.map((product) => ({
    id: product.id,
    price: parseFloat(product.price),
  }));

  return (
    <div className="chart-container">
      <h2>Line Chart: Product Prices Over IDs</h2>
      <LineChart
        width={600}
        height={300}
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="id" label={{ value: "Product ID", position: "insideBottomRight", offset: -5 }} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default LineChartExample;
