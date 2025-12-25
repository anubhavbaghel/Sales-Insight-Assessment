'use client';

import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

interface ChartControlsProps {
  threshold: number;
  onThresholdChange: (val: number) => void;
  chartType: 'bar' | 'line' | 'pie';
  onChartTypeChange: (type: 'bar' | 'line' | 'pie') => void;
  year: string;
  onYearChange: (year: string) => void;
}

export const ChartControls = ({
  threshold,
  onThresholdChange,
  chartType,
  onChartTypeChange,
  year,
  onYearChange
}: ChartControlsProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:items-end justify-between mb-6 p-4 bg-gray-50 rounded-lg">
      
      {/* LEFT SIDE */}
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        
        {/* Threshold */}
        <div className="w-full sm:w-auto">
          <Input
            label="Sales Threshold ($)"
            type="number"
            value={threshold}
            onChange={(e) => onThresholdChange(Number(e.target.value))}
          />
        </div>

        {/* Year */}
        <div className="flex flex-col gap-1.5 relative w-full sm:w-auto">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Year
          </label>

          <select
            className="w-full sm:w-auto bg-white text-gray-700 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 relative z-50"
            value={year}
            onChange={(e) => onYearChange(e.target.value)}
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>

      {/* RIGHT SIDE BUTTONS */}
      <div className="flex flex-wrap gap-2 justify-start md:justify-end">
        <Button
          variant={chartType === 'bar' ? 'primary' : 'outline'}
          onClick={() => onChartTypeChange('bar')}
        >
          Bar
        </Button>

        <Button
          variant={chartType === 'line' ? 'primary' : 'outline'}
          onClick={() => onChartTypeChange('line')}
        >
          Line
        </Button>

        <Button
          variant={chartType === 'pie' ? 'primary' : 'outline'}
          onClick={() => onChartTypeChange('pie')}
        >
          Pie
        </Button>
      </div>
    </div>
  );
};
