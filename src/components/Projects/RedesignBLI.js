import React, { Component } from 'react';
import "../../css/Projects/shared.css";

class RedesignBLI extends Component {
    render() {
        return (
            <div>
                <div className="cover row justify-content-center">
                    <img className="coverImage" src="/images/project1-cover.png" />
                    <div className="col-4 vertical-center">
                        <h6 className="pink-text">PDIS</h6>
                        <h4>Redesign Website of Bureau of Labor Insurance</h4>
                        <h6 className="gray-text">July 2020 - August 2020</h6>
                    </div>
                </div>
                <div className="section">
                    <h6>PROJECT GOAL</h6>
                    <p>
                        Redesign the website of Bureau of Labor Insurance based on users’ needs
                    </p>
                </div>
                <div className="section">
                    <h6>MY ROLE</h6>
                    <p>
                        Participant in both UX research and UI design                    
                    </p>
                </div>
                <div className="section">
                    <h6>METHOD & TOOL</h6>
                    <p>
                        Methods: User Research, Wireframe, Mockup, Prototype, Usability Testing
                        <br/>
                        Tools: Miro, Figma 
                    </p>
                </div>
                <div className="section">
                    <h6>PROCESS OVERVIEW</h6>
                    <img className="full-width-img" src="/images/Process1.png" />
                </div>
            </div>
        )
    }
}

export default RedesignBLI;