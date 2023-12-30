import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProjectCard extends Component {
    render() {
        return (
            <Link to={this.props.project.pageUrl}>
                <div className="justify-center mb-8 flex flex-wrap animate-fadeIn">
                    <div className="p-4 w-1/4 min-w-80">
                        <h2>{this.props.project.name}</h2>
                        <h3 className="gray-text">{this.props.project.role}</h3>
                        <h3 className="pink-text">{this.props.project.company}</h3>
                    </div>
                    <div
                        className="w-80 h-48 rounded bg-center bg-normal bg-no-repeat hover:bg-lg transition-all duration-500"
                        style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + this.props.project.imgUrl + ")" }}
                    />
                </div>
            </Link>
        )
    }
}

export default ProjectCard;