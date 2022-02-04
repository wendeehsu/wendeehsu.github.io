import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProjectCard extends Component {
    render(){
        return (
            <Link to={this.props.project.pageUrl}>
                <div className="justify-content-center projectCard">
                    <div className="projectDescription">
                        <h5>{this.props.project.name}</h5>
                        <h6 className="gray-text">{this.props.project.role}</h6>
                        <h6 className="pink-text">{this.props.project.company}</h6>
                    </div>
                    <div className="cardBorder">
                        <div 
                            className="card" 
                            style={{backgroundImage: "url(" + process.env.PUBLIC_URL + this.props.project.imgUrl + ")"}}
                        />
                    </div>
                </div>
            </Link>
        )
    }
}

export default ProjectCard;