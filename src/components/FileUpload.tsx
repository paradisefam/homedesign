"use client";
import { useState } from "react";

function FileUpload() {
  const [fileName, setFileName] = useState("");

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFileName(files[0].name);
      // handle file upload logic here
    }
  };

  return (
    <div>
      <label htmlFor="file-input" className="customFileUpload">
        <div className="imageContainer">
          <img src="assets/images/step1/Img_box.png" alt="" />
        </div>
        <div className="text-[14px] text-center mt-[120px]">
          Drop an image, tap, take a <br />
          photo, or CTRL + V{" "}
        </div>
      </label>
      <input
        type="file"
        id="file-input"
        name="file-input"
        accept="*"
        className="fileInput"
        onChange={handleFileInputChange}
      />
      <p>{fileName}</p>
    </div>
  );
}

export default FileUpload;
