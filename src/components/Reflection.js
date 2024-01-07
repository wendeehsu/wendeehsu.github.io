import React from "react";

export default function Reflection({ imgUrl, title, detail }) {
  return (
    <div className="md:flex flex-wrap mb-8">
      <img className="md:w-[15%] min-w-0 mx-auto sm:mr-2 sm:ml-0" src={imgUrl} alt="reflection" />
      <div className="flex-1">
        <h3 className="blue-text"><b>{title}</b></h3>
        <p>{detail}</p>
      </div>
    </div>
  );
}
