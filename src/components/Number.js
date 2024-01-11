import React from "react";

export default function Number({ figure, unit, detail }) {
  return (
    <div className="flex-1 sm:text-center p-[5px] min-w-[200px]">
      <div>
        <b className="blue-text font-special text-6xl">{figure}</b>
        <b className="inline text-2xl ml-2">{unit}</b>
      </div>
      <ol>
        {detail.map((d, i) => (
          <li key={i} className="text-sm">{d}</li>
        ))}
      </ol>
    </div>
  );
}
