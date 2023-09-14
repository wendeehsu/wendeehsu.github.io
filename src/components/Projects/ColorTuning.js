import React, { Component } from 'react';
import "../../css/Projects/shared.css";
import NavLink from '../Navs/NavLink';
import { GApageView } from "../../ga.js";

class ColorTuning extends Component {
    componentDidMount() {
        GApageView("Color Tuning");
    }

    render() {
        return (
            <div>
                <div className="cover gray-bg justify-content-center">
                    <img className="coverImage" src="/images/project5-cover.png" alt="mockup of the tuning tool"/>
                    <div className="col-4 vertical-center">
                        <h5 className="pink-text">Google</h5>
                        <h4>Color Optimization Tuning Tool</h4>
                        <h5 className="gray-text">
                            May 2023 - August 2023
                        </h5>
                    </div>
                </div>

                <div className='section'>
                    Color tuning engineers optimize the colors displayed on different devices. In this project, I built a highly interactive website that results in a 
                    <b className='blue-text'> 99% improvement</b> in the time it takes to initiate tuning settings for new devices.
                </div>

                <div className="section">
                    <h5>MY ROLE</h5>
                    <p>
                        UX Researcher & Designer, Full stack Engineer                    
                    </p>
                </div>

                <div className="section">
                    <h5>METHOD & TOOL</h5>
                    <p>
                        Methods: interview, wireframe, prototype, usability testing<br/>
                        Prototyping Tools: Figma, Tableau<br/>
                        Frontend Framework: Angular.js<br/>
                        Backend: Python
                    </p>
                </div>

                <div className="section">
                    <h5>The Challenge</h5>
                    <p>
                        Color tuning engineers do not have an efficient way to initiate the settings for a new device.
                    </p>
                    <p className='blue-text center-text'>
                        "I want to compare the color changes among different devices. <br/>
                        However, simply looking up the value of each color already costs me <b>1~3 days</b>."
                    </p>
                    <p>
                        To learn their current process of initiating tuning settings and figure out how it can be improved, I <b className='blue-text'>interviewed</b> 2 senior tuning engineers and found <b className='blue-text'>3 main problems</b>.
                    </p>
                </div>

                <div className="section">
                    <h5>Why is the current process so inefficient?</h5>
                </div>
            </div>
        );
    }
}

export default ColorTuning;