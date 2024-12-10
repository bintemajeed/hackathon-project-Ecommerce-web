'use client'
import React from "react";
import SelectInput from "./SelectInput";

const SelectState: React.FC = () => {
  const stateOptions = [
    { value: "CA", label: "California" },
    { value: "NY", label: "New York" },
    { value: "TX", label: "Texas" },
    // Add more states
  ];

  return (
    <div className="p-4">
      <SelectInput
        placeholder="Select State"
        options={stateOptions}
        className="mt-4"
      />
    </div>
  );
};

export default SelectState;
