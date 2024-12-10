'use client'
import React from "react";
import SelectInput from "@/components/ui/SelectInput";

const SelectCountry: React.FC = () => {
  const countryOptions = [
    { value: "IN", label: "India" },
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "GB", label: "United Kingdom" },
    { value: "AU", label: "Australia" },
    // Add more countries
  ];

  return (
    <div className="p-4">
      <SelectInput
        placeholder="Select Country"
        options={countryOptions}
        className="mt-4 w-[100%] mb-4"
      />
    </div>
  );
};

export default SelectCountry;
