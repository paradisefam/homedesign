"use client";
import React from "react";

function MessageInput(props) {
  return (
    <textarea
      id={props.id}
      rows={props.rows}
      className="block p-2.5 w-full text-md text-gray-900 custom-textarea rounded-lg border"
      placeholder={props.placeholder}
    />
  );
}

export default MessageInput;
