'use client';

import { useState, useEffect } from "react";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from "recharts";
import { Card } from "../atoms/Card";
import { ChartControls } from "../molecules/ChartControls";

type DataPoint = { name: string; sales: number };

const SalesAnalytics = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);

  const [threshold, setThreshold] = useState(1000);
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');
  const [selectedYear, setSelectedYear] = useState('2024');

  // 🔥 Responsive Pie Radius (SAFE — no weird dropdown issue now)
  const [radius, setRadius] = useState(80);

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 640 ? 60 : 80);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/sales');
        const json = await res.json();
        setData(json[selectedYear as keyof typeof json]);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedYear]);

  const filteredData = data.filter(item => item.sales >= threshold);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Annual Sales</h2>
        <p className="text-gray-500">Revenue Analysis for {selectedYear}</p>
      </div>

      <ChartControls
        threshold={threshold}
        onThresholdChange={setThreshold}
        chartType={chartType}
        onChartTypeChange={setChartType}
        year={selectedYear}
        onYearChange={setSelectedYear}
      />

      <div className="bg-white p-4 border rounded-lg min-h-60 sm:min-h-80">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ResponsiveContainer width="100%" height={260}>
            {chartType === 'line' ? (
              <LineChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
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
                  outerRadius={radius}
                  innerRadius={radius - 40}
                  fill="#8884d8"
                  label
                >
                  {filteredData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            ) : (
              <BarChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
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
