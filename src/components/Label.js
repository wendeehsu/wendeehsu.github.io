import React from "react";

export default function Label({ text, textColor, bgColor }) {
  return (
    <div className={`${bgColor} py-1 px-6 rounded-lg w-fit`}>
      <b className={textColor}>{text}</b>
    </div>
  );
}
