import React, { Component } from 'react';
import ProjectCard from "./ProjectCard";
import '../css/Work.css';

class Work extends Component {
    render() {
        const project1 = new Project(
            "Redesign Website of Bureau of Labor Insurance",
            "UX Researcher, UI Designer",
            "PDIS",
            "/images/project1-cover.png",
            "/Work/RedesignBLI"
        );

        const project2 = new Project(
            "AR Contact Lens Wearing App",
            "Frontend Engineer",
            "Side-Project",
            "/images/project2-cover.png",
            "/Work/ARLens"
        );

        const project3 = new Project(
            "AI Image Classification",
            "Machine Learning / Backend Engineer",
            "Dentall",
            "/images/project3-cover.png",
            "/Work/AIXray"
        );

        return (
            <div>
                <h3 className="title">
                    My Work
                </h3>
                <ProjectCard project={project1}/>
                <ProjectCard project={project2}/>
                <ProjectCard project={project3}/>
            </div>
        )
    }
};
class Project {
    constructor(name, role, company, imgUrl, pageUrl) {
      this.name = name;
      this.role = role;
      this.company = company;
      this.imgUrl = imgUrl;
      this.pageUrl = pageUrl;
    }
};

export default Work;