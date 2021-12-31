import React, { Component } from 'react';
import "../../css/Projects/shared.css";
import NavLink from '../Navs/NavLink';
import { GApageView } from "../../ga.js";

class PDOGS extends Component {
    componentDidMount() {
        GApageView("BLI");
    }

    render() {
        return(
        <div>
            <div className="cover gray-bg row justify-content-center">
                <img className="coverImage" src="/images/project4-cover-center.png" alt="pdogs"/>
                <div className="col-4 vertical-center">
                    <h5 className="pink-text">NTUIM</h5>
                    <h4>Programming Design Online Grading System</h4>
                    <h5 className="gray-text">
                        June 2021 - September 2021
                    </h5>
                </div>
            </div>

            <div className='section'>
                With the surge increase of users, the existing Programming Design Online Grading System (PDOGS) can no longer afford the rising traffic due to its loosely organized code structure and user interface. Therefore, we spend 14 weeks researching, designing, and implementing an easy-to-use, frontend backend separated new system, enhancing both its user experience and site efficiency.
            </div>

            <div className="section">
                <h5>MY ROLE</h5>
                <p>
                    Design Lead, UX Researcher, Frontend Engineer, QA Lead                    
                </p>
            </div>

            <div className="section">
                <h5>MY TEAMMATES</h5>
                <p>
                    Project Manager - 
                    <a href="https://www.linkedin.com/in/yunchi-cheng/" target="_blank" rel="noopener noreferrer"> Yun-Chi Cheng</a><br/>
                    UI Designer - 
                    <a href="https://www.linkedin.com/in/wpbag" target='_blank' rel="noopener noreferrer"> Chien-Yin Wu</a>,
                    <a href="https://www.linkedin.com/in/derekdylu" target='_blank' rel="noopener noreferrer"> Derek Lu</a><br/>
                    Frontend Engineer - 
                    <a href="https://www.linkedin.com/in/tmcn" target='_blank' rel="noopener noreferrer"> Yi-Tong Chen</a>,
                    <a href="https://www.linkedin.com/in/gary-hu-2000" target='_blank' rel="noopener noreferrer"> Gary Hu</a>,
                    <a href="https://www.linkedin.com/in/li-hsiang-huang-fu-0b1825184" target='_blank' rel="noopener noreferrer"> Li Hsiang Huang Fu</a>
                    , Ray Lee, Po-Chun Wu, Erica Cheng, Daphne Hou, Amber liu, Wilson Hsu, Duge Lu<br/>
                    Backend Engineer - 
                    <a href="https://www.linkedin.com/in/yangcheng1229" target='_blank' rel="noopener noreferrer"> Yang Cheng</a>,
                    <a href="https://www.linkedin.com/in/chessyhsu" target='_blank' rel="noopener noreferrer"> Chessy Hsu</a>
                    , Polly Ho, Benson Wang<br/>
                    DevOps - Fredred Chu, Jtong Chen
                </p>
            </div>

            <div className="section">
                <h5>METHOD & TOOL</h5>
                <p>
                    Methods: User Research, Wireframe, Mockup, Prototype, Usability Testing<br/>
                    Tools: Figma, Qase<br/>
                    Frontend Framework: React.js
                </p>
            </div>

            <div className="section">
                <h5>TIMEFRAME</h5>
                <p>
                    14 weeks
                </p>
            </div>
        </div>
        )
    }
}

export default PDOGS;