'use client'
const GenderSelector = () => {
    return (
      <div className="flex justify-between gap-4">
        {/* Male Option */}
        <label className="w-full max-w-[50%] px-4 py-2 border text-[#757575] border-gray-300 rounded-[7px] text-center cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="male"
            className="hidden"
          />
          Male
        </label>
  
        {/* Female Option */}
        <label className="w-full max-w-[50%] px-4 py-2 border text-[#757575] border-gray-300 rounded-[7px] text-center cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="female"
            className="hidden"
          />
          Female
        </label>
      </div>
    );
  };
  
  export default GenderSelector;
  