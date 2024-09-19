import { SelectProps } from "@/shared/types/components/select.types";
import React from "react";

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <select
      className="p-2 border border-gray-300 rounded-md text-base focus:border-blue-500 focus:outline-none"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
