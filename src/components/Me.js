import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import ReactTooltip from 'react-tooltip';
import "../css/Me.css";
import { GApageView } from "../ga.js";

export default class Me extends Component {
    componentDidMount() {
        GApageView("About Me");
    }

    render() {
        return (
            <div>
                <h3 className="title">
                    About Me
                </h3>
                <div className="row justify-content-center">
                    <h6 className="gray-text col-6 center-text">
                        Frontend Developer, Mechine Learning Engineer<br/>
                        I love cooking, coding, and sharing, now exploring the field of user-centered design and seeking for new challenges.
                    </h6>
                </div>
                <br/>
                <div className="row justify-content-center">
                    <a data-tip="LinkedIn" href="https://www.linkedin.com/in/yuan-chih-hsu/?locale=en_US" target="_blank">
                        <FontAwesomeIcon className="icon" icon={faLinkedin} />
                    </a>
                    <a data-tip="Github" href="https://github.com/wendeehsu" target="_blank">
                        <FontAwesomeIcon className="icon" icon={faGithub} />
                    </a>
                    <a data-tip="Email" href="mailto:wendeehsu@gmail.com" target="_blank">
                        <FontAwesomeIcon className="icon" icon={faEnvelope} />
                    </a>
                    <a data-tip="Resume" href="https://drive.google.com/file/d/195KO07QdIGgMgvufB_3KxeaRtFlYlxCM/view?usp=sharing" target="_blank">
                        <FontAwesomeIcon className="icon" icon={faFileInvoice} />
                    </a>
                </div>
                <ReactTooltip effect="solid" place="bottom" />
            </div>
        )
    }
}
