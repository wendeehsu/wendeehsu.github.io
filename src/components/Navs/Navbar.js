import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light">
            <Link className="navbar-brand" to="/">
                Wendee Hsu
                <img className="navbar-icon" src="/icon.png" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/Work">Work</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Medium">Medium</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Me">Me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;