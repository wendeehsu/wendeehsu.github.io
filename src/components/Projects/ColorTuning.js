import React, { Component } from 'react';
import "../../css/Projects/shared.css";
import "../../css/Projects/colorTuning.css";
import NavLink from '../Navs/NavLink';
import { GApageView } from "../../ga.js";

class ColorTuning extends Component {
    componentDidMount() {
        GApageView("Color Tuning");
    }

    imagBasePath = "/images/ColorTuning/";

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
                        Color tuning engineers do not have an efficient way to initiate the tuning parameters for a new device.
                    </p>
                    <p className='blue-text center-text'>
                        "I want to compare the color changes among different devices. <br/>
                        However, simply looking up the value of each color already costs me <b>1~3 days</b>."
                    </p>
                    <p>
                        To learn their current process of initiating parameter setting files and figure out how it can be improved, I <b className='blue-text'>interviewed</b> 2 senior tuning engineers and found <b className='blue-text'>3 main problems</b>.
                    </p>
                </div>

                <div className="section">
                    <h5>Why is the current process so inefficient?</h5>
                    <div className='horizontal-display'>
                        <div className='left-text'>
                            <p className="section-subtitle blue-text">1. Manual Color Value Search</p>
                            <p>
                                Color information is embedded in each picture, but engineers do not have the tools to extract the values. As a result, they must manually look up the numbers, which is very time-consuming.
                            </p>
                        </div>
                        <img 
                            className='right-img'
                            src={`${this.imagBasePath}checker.png`}
                            alt="color information is embedded in each picture" />
                    </div>
                    <div>
                        <p className="section-subtitle blue-text">2. Lack of systematic analysis</p>
                        <p>Engineers currently adjust the tuning parameters of existing devices to fit new ones, but this process is often biased and inaccurate, as it relies heavily on trial and error.</p>
                    </div>
                    <div>
                        <p className="section-subtitle blue-text">3. Error-prone data manipulation</p>
                        <p>
                            The color optimization team opens large JSON files in a text editor to update parameters one by one. This is a tedious and error-prone process, as they often make mistakes that require extra time to fix.
                        </p>
                    </div>
                </div>

                <div className="section">
                    <h5>Who are the users?</h5>
                    <div className="horizontal-display">
                        <img
                            className='user-image'
                            src={`${this.imagBasePath}captain.png`}
                            alt="captain" />
                        <div className='user-right-text'>
                            <h6 className='bold-text'>Captain</h6>
                            <p className="blue-text quote-text">"To reach our destination, I need a map, a compass, a telescope, and food for 10 days."</p>
                            <ul>
                                <li><b>Experienced</b> color tuning engineers</li>
                                <li>Prefer <b>large amounts of data</b> because they clearly know how to combine different numbers to achieve their goals.</li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <div className="horizontal-display">
                        
                        <div className='user-right-text'>
                            <h6 className='bold-text'>Sailor</h6>
                            <p className="blue-text quote-text">"Let me try the tools on the ship. This map will be helpful! Oh, they have a compass! Great!"</p>
                            <ul>
                                <li><b>Junior</b> color tuning engineers</li>
                                <li>
                                    They check what data is provided first and try to combine tools later. They can be <b>overwhelmed if there is too much information</b> shown at the same time.
                                </li>
                            </ul>
                        </div>
                        <img
                            className='user-image'
                            src={`${this.imagBasePath}sailor.png`}
                            alt="sailor" />
                    </div>
                </div>

                <div className='section'>    
                    <h6>Image Source</h6>
                    <ul>
                        <li>
                            <a
                                className='gray-text'
                                href="https://www.flaticon.com/free-icons/captain"
                                title="captain icons">Captain icons created by Freepik - Flaticon
                            </a>
                        </li>
                        <li>
                            <a
                                className='gray-text'
                                href="https://www.flaticon.com/free-icons/sailor"
                                title="sailor icons">Sailor icons created by Freepik - Flaticon
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default ColorTuning;