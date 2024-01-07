import React from "react";

export default function Restriction({ imgUrl, need, solution }) {
  return (
    <div className="flex-1 p-2">
      <img className="w-[50%] min-w-[50px] mx-auto" src={imgUrl} alt="restriction" />
      <div>
        <p className="gray-text">{need}</p>
        <p>&#8594; {solution}</p>
      </div>
    </div>
  );
}
