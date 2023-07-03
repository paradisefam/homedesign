"use client";
import { useState } from "react";

function Checkbox() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div
      className={`checkbox-container relative w-[20px] h-[20px] rounded border-solid border-sky-400 border hover:cursor-pointer text-white inline-block`}
      onClick={() => setChecked(!checked)}
    >
      {checked && <div className="item-checked"></div>}
    </div>
  );
}

export default Checkbox;
