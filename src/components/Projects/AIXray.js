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
            </div>
        )
    }
}

export default AIXray;