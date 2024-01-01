import React from "react";

export default function Banner({
    imgUrl, company, title, period
}) {
    return (
        <div className="flex flex-wrap gray-bg justify-center">
        <img
          className="h-60"
          src={imgUrl}
          alt={`mockup of the product about ${title}`}
        />
        <div className="sm:w-1/3 my-auto">
          <h3 className="pink-text">{company}</h3>
          <h1>{title}</h1>
          <h3 className="gray-text">{period}</h3>
        </div>
      </div>
    )
}