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
          <h5 className="pink-text">{company}</h5>
          <h4>{title}</h4>
          <h5 className="gray-text">{period}</h5>
        </div>
      </div>
    )
}