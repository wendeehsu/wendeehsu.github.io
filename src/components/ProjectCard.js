import React, { Component } from 'react';

class ProjectCard extends Component {
    render(){
        return (
            <a href={this.props.project.pageUrl}>
                <div className="row justify-content-center projectCard">
                    <div className="col-3 projectDescription">
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
            </a>
        )
    }
}

export default ProjectCard;