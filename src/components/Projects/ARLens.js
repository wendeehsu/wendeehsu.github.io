import React, { Component } from 'react';
import "../../css/Projects/shared.css";
import "../../css/Projects/ARLens.css";

class ARLens extends Component {
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
                        Programming language: Swift and Objective C++
                    </p>
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
                        <img className="restriction-icon" src="/images/AR/Restriction1.png" />
                        <img className="restriction-icon" src="/images/AR/Restriction2.png" />
                        <img className="restriction-icon" src="/images/AR/Restriction3.png" />
                    </div>
                    <div className="row justify-content-center">
                        <p className="col text-center gray-text">
                            The app will be installed on iPad 6, which does not have a true depth camera that natively captures face data.
                        </p>
                        <p className="col text-center gray-text">
                            Apple’s ARkit cannot produce a contact lens wearing experience that is true enough.
                        </p>
                        <p className="col text-center gray-text">
                            The contact lens wearing service needs to be executable offline. 
                        </p>
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

            </div>
        )
    }
}

export default ARLens;