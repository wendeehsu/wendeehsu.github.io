import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navList = [
        {
            name: 'Work',
            path: '/Work'
        },
        {
            name: 'Medium',
            path: '/Medium'
        },
        {
            name: 'Me',
            path: '/Me'
        }
    ];

    return (
        <nav className="sticky top-0 bg-gradient-to-b from-white from-10% via-white via-50% p-2 sm:flex">
            <div className='flex mx-2'>
                <Link to="/">
                    Wendee Hsu
                    <img className="logo" src="/icon.png" />
                </Link>
                <button
                    className="ml-auto sm:hidden"
                    onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon className='' icon={isOpen ? faTimes : faBars} />
                </button>
            </div>

            <div className={`ml-auto ${isOpen ? 'block animate-fadeIn' : 'hidden'} sm:flex`} id="menu">
                {
                    navList.map((item, i) => (
                        <Link key={i} className="mx-4 text-right font-special block" to={item.path}>{item.name}</Link>
                    ))
                }
            </div>
        </nav>
    )
}

export default Navbar;