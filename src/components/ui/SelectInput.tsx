'use client'
import React from "react";

interface SelectInputProps {
  options: { value: string; label: string }[];
  placeholder: string;
  className?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  placeholder,
  className = "",
}) => {
  return (
    <select
      className={`w-full max-w-[300px] sm:max-w-[400px] md:max-w-[100%] text-[#757575] px-4  py-2 border border-gray-300 rounded-[7px] focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500 ${className}`}
    >
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
