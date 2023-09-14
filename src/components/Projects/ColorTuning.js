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
                    <h5>THE CHALLENGE</h5>
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
                    <div className='div-box background-green'>
                        <p className='vertical-center center-text bold-text'>
                            How might we create a tool to generate new tuning settings for new devices 
                            <br/> in an <b className='blue-text'>efficient, insightful, and flexible </b> way?
                        </p>
                    </div>
                    <br/>
                    <p>
                        In this project, I invited color tuning engineers with different experience levels to each round of usability testings to understand if their needs are fulfilled by the design.
                    </p>
                </div>

                <div className='section horizontal-display'>
                    <div className='big-number-section'>
                        <b className='big-title'><b className='blue-text big-number'>7</b> Iterations</b>
                        <p className='number-description'>
                            3 versions of lo-fi prototype
                            <br/>
                            4 versions of product
                        </p>
                    </div>
                    <div className='big-number-section'>
                        <b className='big-title'><b className='blue-text big-number'>16</b> User testings</b>
                        <p className='number-description'>
                            Each version is tested
                            <br/>
                            by 2 or 3 users.
                        </p>
                    </div>
                    <div className='big-number-section'>
                        <b className='big-title'><b className='blue-text big-number'>12</b> Weeks</b>
                        <p className='number-description'>
                            4 weeks on research & design
                            <br/>
                            8 weeks on development & testing
                        </p>
                    </div>
                </div>

                <div className="section">
                    <h5>The final color optimization tuning tool</h5>
                    <p className='gray-text quote-text'>
                        *As I signed the NDA, all screenshots are only used to demonstrate the functionality. The user interface and data are not the same as the actual web tool.
                    </p>
                    <div>
                        <p className="section-subtitle blue-text">1. Auto data extraction with systematic analysis</p>
                        <p>
                            After color tuning engineers upload images into the website, the website automatically extracts each color's information and displays it under different conditions. This drastically cuts down engineers' time to analyze color changing trends from <b>3 days to 1 hour</b>.
                        </p>
                        <img
                            className='demo-picture'
                            src={`${this.imagBasePath}condition_slider.gif`}
                            alt="when switching conditions, the color extracted will be shown on the graph."
                        />
                    </div>
                    <br/>
                    <div>
                        <p className="section-subtitle blue-text">2. Realtime preview</p>
                        <p>
                            An engineer could spend up to a week finding the best value for a new device previously. With previewing the impact of number changes on settings in real time, the website now saves them up to <b>80% of the time</b>.
                        </p>
                        <img
                            className='demo-picture'
                            src={`${this.imagBasePath}live_render.gif`}
                            alt="when dragging a point in one graph, the other graph will shown its corresponding effect on the tuning settings."
                        />
                    </div>
                    <br />
                    <div className='horizontal-display'>
                        <div className='left-text'>
                            <p className="section-subtitle blue-text">3. Flexible interaction</p>
                            <p>
                                To service users with different information consumption behaviors, I added zoom-in functionality so people can focus on a specific part in each chart.                        </p>
                        </div>
                        <img
                            className='zoom-img'
                            src={`${this.imagBasePath}zoom.gif`}
                            alt="Users can zoom in to a region of interest by dragging a bounding box on the graph."
                        />
                    </div>
                </div>

                <div className='section'>
                    <h5>RESULT</h5>
                    <div className='horizontal-display'>
                        <div className='big-number-section'>
                            <b className='big-title blue-text'><b className='big-number'>99</b>%</b>
                            <p className='number-description'>
                                Reduction in value searching time
                            </p>
                        </div>
                        <div className='big-number-section'>
                            <b className='blue-text big-number'>32</b>
                            <p className='number-description'>
                                Hours saved on optimizing initial parameters for a new device
                            </p>
                        </div>
                        <div className='big-number-section'>
                            <b className='blue-text big-number'>500+</b>
                            <p className='number-description'>
                                Potential errors are prevented
                            </p>
                        </div>
                    </div>
                </div>

                <div className='section'>
                    <h5>REFLECTION</h5>
                    <div className='horizontal-display'>
                        <div className='left-text'>
                            <p className="section-subtitle blue-text">1. Create prototypes that communicate</p>
                            <p>
                                This is the first time I tried <b>Tableau to mimic my web data visualization plans</b> as a prototype. The fast and interactive graphs stimulated users to provide constructive feedback. This made me realize that the core of prototyping is to <b>foster understanding and communication</b>, regardless of the tool or approach used.
                            </p>
                        </div>
                        <img
                            className='zoom-img'
                            src={`${this.imagBasePath}tableau.png`}
                            alt="Use tableau for mimic data visualization outcome"
                        />
                    </div>
                    <br/>

                    <p className="section-subtitle blue-text">2. Having knowledge of both design and development can make the project more efficient</p>
                    <p>With limited time, I simultaneously performed design and development. When users came up with new ideas, I could switch to my engineer role to check their feasibility. If I encountered issues that I couldn't solve, I later built prototypes to present alternative solutions. This allowed me to efficiently and effectively test and validate the deliverables.</p>
                    <img
                        className='demo-picture'
                        src={`${this.imagBasePath}workflow.png`}
                        alt="My workflow is switching between design and development."
                    />
                    
                    <br/>
                    <p className="section-subtitle blue-text">3. It's important to prioritize user needs</p>
                    <p>
                        When a user raised a request, I would ask them about their needs behind the request. However, I didn't prioritize these needs in terms of importance in this project. This caused me a lot of stress in the end, as there were many needs to consider. I think it would be better to involve the whole team in <b>prioritizing the needs together</b>, so that we can reach a consensus.
                    </p>
                </div>



                <div className='section'>    
                    <h6>IMAGE SOURCE</h6>
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
                <NavLink pageUrl="/Work/PDOGS" project="Programming Design Online Grading System" />
            </div>
        );
    }
}

export default ColorTuning;