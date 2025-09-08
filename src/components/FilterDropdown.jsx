import React from "react";

const FilterDropdown = ({ label, options, selected, setSelected }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold mb-1">{label}</label>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
