import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import ReactTooltip from 'react-tooltip';
import { GApageView } from "../ga.js";

function Me() {
    useEffect(() => {
        GApageView("Me", "About Me");
    }, []);

    const iconList = [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/yuan-chih-hsu",
            icon: faLinkedin
        }, {
            name: "Github",
            link: "https://github.com/wendeehsu",
            icon: faGithub
        }, {
            name: "Email",
            link: "mailto:wendeehsu@gmail.com",
            icon: faEnvelope
        }, {
            name: "Resume",
            link: "https://drive.google.com/file/d/1uZavHTciCalVYo9OuldSbFd5Rluci8hi/view?usp=sharing",
            icon: faFileInvoice
        }
    ];

    return (
        <div>
            <h1 className="title">
                About Me
            </h1>
            <p className="gray-text text-center font-special">
                UX Designer, Software Developer<br />
                Passionate about building sustainable products that make a difference.
            </p>
            <div className="text-center mt-4">
                {
                    iconList.map((item, i) => (
                        <a
                            key={`icon-${i}`}
                            data-tip={item.name}
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className='mx-2'>
                            <FontAwesomeIcon icon={item.icon} />
                        </a>
                    ))
                }
            </div>
            <ReactTooltip effect="solid" place="bottom" />
        </div>
    )
}

export default Me;