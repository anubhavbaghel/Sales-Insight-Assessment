'use client'; // This runs in the browser
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

interface ChartControlsProps {
  threshold: string;
  onThresholdChange: (val: string) => void;
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
    <div className="flex flex-col md:flex-row gap-4 items-end justify-between mb-6 p-4 bg-gray-50 rounded-lg">
      <div className="flex gap-4 items-end">
        <Input
          label="Sales Threshold ($)"
          type="number"
          inputMode="numeric"
          value={threshold}
          onChange={(e) => onThresholdChange(e.target.value)}
        />
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-500 uppercase">Year</label>
          <select
            className="text-gray-500 border border-gray-300 rounded-md px-3 py-2 text-sm"
            value={year}
            onChange={(e) => onYearChange(e.target.value)}
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant={chartType === 'bar' ? 'primary' : 'outline'} onClick={() => onChartTypeChange('bar')}>Bar</Button>
        <Button variant={chartType === 'line' ? 'primary' : 'outline'} onClick={() => onChartTypeChange('line')}>Line</Button>
        <Button variant={chartType === 'pie' ? 'primary' : 'outline'} onClick={() => onChartTypeChange('pie')}>Pie</Button>
      </div>
    </div>
  );
};