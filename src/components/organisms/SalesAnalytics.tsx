'use client';

import { useState, useEffect, useMemo } from "react";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from "recharts";
import { Card } from "../atoms/Card";
import { ChartControls } from "../molecules/ChartControls";

type DataPoint = { name: string; sales: number };

const SalesAnalytics = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);

  const [thresholdInput, setThresholdInput] = useState("1000");

  const threshold = Number(thresholdInput) || 0;


  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');
  const [selectedYear, setSelectedYear] = useState('2024');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/sales');
        const json = await res.json();
        setData([...json[selectedYear as keyof typeof json]]);
      } catch (error) {
        console.error("Failed to fetch data", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedYear]);

  // ✅ Memoized filtered data
  const filteredData = useMemo(
    () => data.filter(item => item.sales >= threshold),
    [data, threshold]
  );

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  return (
    <Card className="w-full max-w-5xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Annual Sales</h2>
        <p className="text-gray-500">Revenue Analysis for {selectedYear}</p>
      </div>

      <ChartControls
        threshold={thresholdInput}
        onThresholdChange={setThresholdInput}
        chartType={chartType}
        onChartTypeChange={setChartType}
        year={selectedYear}
        onYearChange={setSelectedYear}
      />

      <div className="bg-white p-4 border rounded-lg min-h-96">
        {loading ? (
          <p>Loading...</p>
        ) : filteredData.length === 0 ? (
          <p className="text-center text-gray-500 mt-20">
            No sales above selected threshold
          </p>
        ) : (
          <ResponsiveContainer
            width="100%"
            height={400}
            key={`${chartType}-${threshold}-${selectedYear}`}
          >
            {chartType === 'line' ? (
              <LineChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              </LineChart>
            ) : chartType === 'pie' ? (
              <PieChart>
                <Pie
                  data={filteredData}
                  dataKey="sales"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  label
                >
                  {filteredData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            ) : (
              <BarChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#3b82f6" />
              </BarChart>
            )}
          </ResponsiveContainer>
        )}
      </div>
    </Card>
  );
};

export default SalesAnalytics;
