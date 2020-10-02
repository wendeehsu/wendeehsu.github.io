import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
                Wendee Hsu
                <img className="navbar-icon" src="/icon.png" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Medium</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;