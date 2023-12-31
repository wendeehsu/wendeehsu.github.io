import React from 'react';
import { Link } from "react-router-dom";

function Card({
    pageUrl,
    title,
    subtitle,
    note,
    imgUrl,
    isExternal = false
}) {
    const cardContent = () => {
        let imageLink = isExternal ? imgUrl : process.env.PUBLIC_URL + imgUrl;

        return (
            <div className="justify-center mb-8 flex flex-wrap animate-fadeIn">
                <div className="p-4 w-1/4 min-w-80">
                    <h2>{title}</h2>
                    <h3 className="gray-text">{subtitle}</h3>
                    <h3 className="pink-text">{note}</h3>
                </div>
                <div
                    className="w-80 h-48 rounded bg-center bg-normal bg-no-repeat hover:bg-lg transition-all duration-500"
                    style={{ backgroundImage: "url(" + imageLink + ")" }}
                />
            </div>
        )
    };

    return (
        <>{isExternal ?
            <a href={pageUrl} target="_blank">
                {cardContent()}
            </a>
            : <Link to={pageUrl}>
                {cardContent()}
            </Link>}
        </>
    )
}

export default Card;