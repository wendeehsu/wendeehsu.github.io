import React from 'react';
import { Link } from "react-router-dom";

function NavLink({ pageUrl, project }) {
    return (
        <div className="text-right my-10 mx-[15%]">
            <h6>
                Visit <Link className="pink-text ml-1 border-b-2 border-dotted" to={pageUrl}>{project} &#8594;</Link>
            </h6>
        </div>
    )
}

export default NavLink;