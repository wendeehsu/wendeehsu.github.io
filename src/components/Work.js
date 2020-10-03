import React, { Component } from 'react';
import ProjectCard from "./ProjectCard";
import '../css/Work.css';

class Work extends Component {
    render() {
        return (
            <div>
                <h3 className="title">
                    My Work
                </h3>
                <ProjectCard />
                <ProjectCard />
            </div>
        )
    }
}

export default Work;