import React from "react";

const Amount: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="rounded-s-md px-2 text-sm h-[33px] bg-[#66d7eb] flex items-center">
        CAD
      </div>
      <select
        id="states"
        className="border-[1px] border-[#66d7eb] rounded-e-md outline-none bg-transparent py-1 "
      >
        <option selected className="text-black">
          500
        </option>
        <option className="text-black">1000</option>
        <option className="text-black">1500</option>
        <option className="text-black">2000</option>
      </select>
    </div>
  );
};

export default Amount;
