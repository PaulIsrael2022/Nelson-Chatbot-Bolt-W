import React from 'react';
import { Search } from 'lucide-react';

interface ReportsFiltersProps {
  filters: {
    type: string;
    status: string;
    dateRange: string;
    search: string;
  };
  onFilterChange: (filters: ReportsFiltersProps['filters']) => void;
}

export default function ReportsFilters({ filters, onFilterChange }: ReportsFiltersProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700">
            Search Documents
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              value={filters.search}
              onChange={handleChange}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Search by number or customer"
            />
          </div>
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">
            Document Type
          </label>
          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">All Types</option>
            <option value="INVOICE">Invoices</option>
            <option value="QUOTATION">Quotations</option>
          </select>
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Payment Status
          </label>
          <select
            id="status"
            name="status"
            value={filters.status}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">All Status</option>
            <option value="PAID">Paid</option>
            <option value="PENDING">Pending</option>
            <option value="OVERDUE">Overdue</option>
          </select>
        </div>

        <div>
          <label htmlFor="dateRange" className="block text-sm font-medium text-gray-700">
            Date Range
          </label>
          <select
            id="dateRange"
            name="dateRange"
            value={filters.dateRange}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </div>
    </div>
  );
}