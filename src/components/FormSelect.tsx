"use client";
import { useState } from "react";

function FormSelect() {
  return (
    <div className="form-group">
      <select className="form-select mt-1 w-full rounded-md" id="sel1">
        <option value="" disabled selected hidden>
          Choose your room type
        </option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
    </div>
  );
}

export default FormSelect;
