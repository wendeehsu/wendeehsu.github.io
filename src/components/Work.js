import React, { Component } from 'react';
import ProjectCard from "./ProjectCard";
import { GApageView } from "../ga.js";

class Work extends Component {
    componentDidMount() {
        GApageView("Work", "Work");
    }
    
    render() {
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

        const pdogsProject = new Project(
            "Programming Design Online Grading System",
            "UX Researcher, Frontend Engineer",
            "2021 National Taiwan University",
            "/images/project4-cover.png",
            "/Work/PDOGS"
        );
        
        const googleProject = new Project(
            "Color Optimization Tuning Tool",
            "UX Designer, Fullstack Engineer",
            "2023 Google",
            "/images/project5-cover.png",
            "/Work/ColorTuning"
        );

        return (
            <div>
                <h1 className="title">
                    My Work
                </h1>
                <ProjectCard project={googleProject}/>
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