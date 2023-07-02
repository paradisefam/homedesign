"use client";

import { useState } from "react";

const ToggleSwitch: React.FC = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="flex">
        <span className="mr-2 text-[] font-medium text-white">Monthly</span>
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={() => {
              setEnabled(!enabled);
            }}
            className="w-11 h-[15px] bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[gray] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#43B0FF]"
          ></div>
          <span className="ml-2 text-[] font-medium text-white">Yearly</span>
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
