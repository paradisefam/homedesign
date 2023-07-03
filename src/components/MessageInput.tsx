"use client";
import React from "react";

type Props = {
  id: string;
  rows: number;
  placeholder: string;
};

const MessageInput: React.FC<Props> = ({ id, rows, placeholder }) => {
  return (
    <textarea
      id={id}
      rows={rows}
      className="block p-2.5 w-full text-md text-gray-900 custom-textarea rounded-lg"
      placeholder={placeholder}
    />
  );
};

export default MessageInput;
