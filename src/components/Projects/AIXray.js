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
                
            </div>
        )
    }
}

export default AIXray;