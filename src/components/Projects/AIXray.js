import React, { Component } from 'react';
import "../../css/Projects/shared.css";

class AIXray extends Component {
    render() {
        return (
            <div>
                <div className="cover gray-bg row justify-content-center">
                    <img className="coverImage" src="/images/project3-cover.png" />
                    <div className="col-4 vertical-center">
                        <h5 className="pink-text">Dentall</h5>
                        <h4>AI Image Classification</h4>
                        <h5 className="gray-text">
                            March 2020 - Octobor 2020
                        </h5>
                    </div>
                </div>

                <div className="section">
                    Nowadays, dentists need to manually sort through many unordered images, limiting the time and quality spent on explaining the tooth condition to the patient. As a result, we decide to automize this tedious work with machine learning. In the end, our service successfully reduces dentists' time on classifying one image from 1 second to 0.2 seconds, helping dentists to focus more on their patients.
                </div>

                <div className="section">
                    <h5>MY ROLE</h5>
                    <p>
                        Machine Learning Engineer
                        <br/>
                        Backend Engineer
                    </p>
                </div>

                <div className="section">
                    <h5>TECHNIQUE</h5>
                    <p>
                        Programming language: Python
                        <br/>
                        Convolutional Neural Network
                        <br/>
                        Flask backend api
                    </p>
                </div>

                <div className="section">
                    <h5>PROCESS OVERVIEW</h5>
                    <img className="full-width-img" src="/images/Xray/Process.png" />
                </div>

                <div className="section">
                    <h5>DEVELOP PROCESS</h5>

                    {/* ---- 1. Define Problem ---- */}
                    <p className="secondary-title">1. Define Problem</p>
                    <p className="section-subtitle blue-text">Observation</p>
                    <p>
                        We went to clinics to observe how dentists interact with patients. Later, we found out that whenever a dentist is explaining the patient’s teeth condition, he needs to first open the folder containing many unordered tooth images, manually sort through these images, and later select those that can help the patient understand the teeth’s condition better.
                    </p>
                    <div className="row justify-content-center">
                        <img className="center-img-space" src="/images/Xray/ProblemProcess.png"/>
                    </div>
                    <p>
                        However, dentists have limited time on treating each patient. Therefore, many dentists will explain the teeth’s condition while sorting and selecting images. The time spent on organizing images will reduce the quality for patients to understand what dentists tell them. These patients may be confused, ending up asking the same questions repeatedly.
                    </p>
                </div>
                    
            </div>
        )
    }
}

export default AIXray;