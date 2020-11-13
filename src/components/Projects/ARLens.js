import React, { Component } from 'react';
import "../../css/Projects/shared.css";
import "../../css/Projects/ARLens.css";
import NavLink from '../Navs/NavLink';
import { GApageView } from "../../ga.js";

class ARLens extends Component {
    componentDidMount() {
        GApageView("AR Lens");
    }

    render() {
        return (
            <div>
                <div className="cover gray-bg row justify-content-center">
                    <img className="coverImage" src="/images/project2-cover.png" />
                    <div className="col-4 vertical-center">
                        <h5 className="pink-text">Side-Project</h5>
                        <h4>AR Contact Lens Wearing App</h4>
                        <h5 className="gray-text">
                            March 2019 - January 2020
                        </h5>
                    </div>
                </div>

                <div className="section">
                    Since users are not able to try on the color contact lens before buying, their hesitation about whether the color suits them may set them back while purchasing. As a result, we cooperated with Formosa Optical, one of the largest glass retailer in Taiwan, to develop an iOS app that enables users to virtually wear color contact lens.
                </div>

                <div className="section">
                    <h5>MY ROLE</h5>
                    <p>
                        Frontend Engineer
                    </p>
                </div>

                <div className="section">
                    <h5>TECHNIQUE</h5>
                    <p>
                        iOS app <br/>
                        Programming language: Swift and Objective C++
                    </p>
                </div>

                <div className="section">
                    <h5>TIMEFRAME</h5>
                    <p>
                        10 months
                    </p>
                </div>

                <div className="section">
                    <h5>BACKGROUND</h5>
                    <p>
                        Formosa Optical, the owner of this project, planned to create an AR color contact lens wearing app to assist customers to choose a lens. The app is designed for iPad6 because each of their stores has at least one iPad6. They finished designing the entire app, including the user interface of each page and the user flow. With a limited budget, they contacted us, a group of three students, to develop this app.
                    </p>
                    <div className="row justify-content-center">
                        <div className="col">
                            <img className="restriction-icon" src="/images/AR/Background1.png" />
                            <div>
                                <p className="gray-text">
                                    The owner has finished designing all the interfaces and user flows.
                                </p>
                                <p>
                                    &#8594; They do not want us to modify their designs.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <img className="restriction-icon" src="/images/AR/Background2.png" />
                            <div>
                                <p className="gray-text">
                                    The app is designed for iPad6 only because there is at least one iPad6 in each store.
                                </p>
                                <p>
                                    &#8594; The app does not need to fit different resolutions.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <img className="restriction-icon" src="/images/AR/Background3.png" />
                            <div>
                                <p className="gray-text">The owner has a limited budget.</p>
                                <p>
                                    &#8594; We cannot buy well-known software development kits, so we need to implement most of the algorithm on our own.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h5>PROCESS OVERVIEW</h5>
                    <img className="full-width-img" src="/images/AR/Process.png" />
                </div>

                <div className="section">
                    <h5>DEVELOP PROCESS</h5>

                    {/* ---- 1. Develop Len-wearing Algorithm ---- */}
                    <p className="secondary-title">1. Develop Len-wearing Algorithm</p>
                    <p className="section-subtitle pink-text">Restriction</p>
                    <p>
                        We should seek an offline approach on iPad 6 to imitate the real experience of trying on a color contact lens.
                    </p>
                    <div className="row justify-content-center">
                        <div className="col">
                            <img className="restriction-icon" src="/images/AR/Restriction1.png" />
                            <p className="col text-center gray-text">
                                iPad6 does not have a true depth camera that natively captures face data.                            </p>
                        </div>
                        <div className="col">
                            <img className="restriction-icon" src="/images/AR/Restriction2.png" />
                            <p className="col text-center gray-text">
                                Apple’s ARkit cannot produce a contact lens wearing experience that is true enough.
                            </p>
                        </div>
                        <div className="col">
                            <img className="restriction-icon" src="/images/AR/Restriction3.png" />
                            <p className="col text-center gray-text">
                                The contact lens wearing service needs to be executable offline. 
                            </p>
                        </div>
                    </div>
                    
                    <p className="section-subtitle pink-text">Solution</p>
                    <p>
                        We bought an offline executable software development kit that captures face data perfectly, combining it to implement the customized Len-wearing algorithm with OpenCV, an open-source computer vision library.                    
                    </p>
                    <div className="row justify-content-center">
                        <video src="/images/AR/mock.mp4" autoPlay="true" loop="true"/>
                    </div>
                    <p className="gray-text">
                        The len-wearing algorithm was developed on a Windows 10 laptop by my teammate Jenny Ho using C++, while I was in charge of reproducing it on iPad 6.
                    </p>

                    </div>

                {/* ---- 2. Develop iOS App ---- */}
                <div className="section">
                    <p className="secondary-title">2. Develop iOS App</p>
                    <p>
                        After we finished the main algorithm, Formosa Optical, the owner of this project, sent us the user interface design for each page. When developing the iOS app, we encountered several technical problems as listed below.
                    </p>
                    <img className="full-width-img" src="/images/AR/DevelopTable.png" />
                </div>

                <div className="section">
                    <h5>FINAL PRODUCT</h5>
                    <p className="section-subtitle pink-text">Scenario</p>
                    <p>
                        At the store, the staff will login with his/her account. They will later let customers try the contact lens wearing service.
                    </p>
                </div>
                <div className="full-width-section gray-bg">
                    <img className="full-width-img" src="/images/AR/FinalProduct.png" />
                </div>

                <div className="section">
                    <h5>RESULT</h5>
                    <p>
                        Our app is able to render a color contact lens on users’ iris in almost real-time. Customers can try on more than <b>10 lenses</b> in one minute.
                    </p>
                </div>

                <div className="section">
                    <h5>REFLECTION</h5>
                    <div className="row">
                        <img className="reflection-icon col" src="/images/AR/Reflection1.png" />
                        <div className="col">
                            <p className="bold-text">
                                1. Doing a side project is the fastest way to pick up a new skill                            
                            </p>
                            <p>
                                This is my first time to develop a pure iOS app. In the past, I used to learn step by step from following tutorials on Codecademy to finishing little applications later. However, since the project has a strict deadline this time, I had no choice but to jump into development right away. Checking what feature needs to be done next, I searched for resources online that taught me how to implement it. I certainly encountered a lot of problems since I didn’t even know the basics in Swift and Objective C. Nevertheless, I quickly build up the knowledge in the process of troubleshooting.                            
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <img className="reflection-icon col" src="/images/AR/Reflection2.png" />
                        <div className="col">
                            <p className="bold-text">
                                2. Don’t be afraid to show “I need help”                            </p>
                            <p>
                                After my team member finished the computer vision algorithm using C++, I was in charge of executing it on iOS along with all the rest of the frontend development. During that time, I had little knowledge of both computer vision and iOS development. As a result, I was aimless when the app was not working. It took me months struggling on my own but in vain. I later decided to ask my team members for help (and also posted questions on the developer’s forum.) Things became much easier when others provided their previous experience. With their assistance, I not only learned how computer vision worked but was also able to solve similar questions posted by other developers on the forum.
                            </p>
                            </div>
                    </div>
                    <div className="row">
                        <img className="reflection-icon col" src="/images/AR/Reflection3.png" />
                        <div className="col">
                            <p className="bold-text">
                                3. We should only start a project when the contract is completed
                            </p>
                            <p>
                                Having no experience in working for people outside the school, our team jumped into development before any contract was done. We later realized the owner kept demanding new functions and requirements during our cooperation. The suffering of project creeping was real, using up extra time and effort but not receiving any additional payments. From this experience, we found out how important a contract was as it will serve as protection under this situation.
                            </p>
                        </div>
                    </div>
                </div>
                <NavLink pageUrl="/Work/AIXray" project="AI Image Classification" />
            </div>
        )
    }
}

export default ARLens;