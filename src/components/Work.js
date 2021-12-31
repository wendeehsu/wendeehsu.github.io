import React, { Component } from 'react';
import ProjectCard from "./ProjectCard";
import '../css/Work.css';
import { GApageView } from "../ga.js";

class Work extends Component {
    componentDidMount() {
        GApageView("Work");
    }
    
    render() {
        const pdogsProject = new Project(
            "Programming Design Online Grading System",
            "UX Researcher, Frontend Engineer",
            "2021 NTUIM",
            "/images/project4-cover.png",
            "/Work/PDOGS"
        );
        
        const bliProject = new Project(
            "Redesign Website of Bureau of Labor Insurance",
            "UX Researcher, UI Designer",
            "2020 PDIS",
            "/images/project1-cover.png",
            "/Work/RedesignBLI"
        );

        const arProject = new Project(
            "AR Contact Lens Wearing App",
            "Frontend Engineer",
            "2019 Side-Project",
            "/images/project2-cover.png",
            "/Work/ARLens"
        );

        const dentallProject = new Project(
            "AI Image Classification",
            "Machine Learning, Backend Engineer",
            "2019 Dentall",
            "/images/project3-cover.png",
            "/Work/AIXray"
        );

        return (
            <div>
                <h3 className="title">
                    My Work
                </h3>
                <ProjectCard project={pdogsProject}/>
                <ProjectCard project={bliProject}/>
                <ProjectCard project={arProject}/>
                <ProjectCard project={dentallProject}/>
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