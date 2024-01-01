import React, { useEffect } from 'react';
import { Card } from "../components";
import { GApageView } from "../ga.js";

function Work() {
    useEffect(() => {
        GApageView("Work", "Work");
    }, []);

    const projects = [{
        title: "Color Optimization Tuning Tool",
        subtitle: "UX Designer, Fullstack Engineer",
        note: "2023 Google",
        imgUrl: "/images/project5-cover.png",
        pageUrl: "/Work/ColorTuning"
    }, {
        title: "Programming Design Online Grading System",
        subtitle: "UX Researcher, Frontend Engineer",
        note: "2021 National Taiwan University",
        imgUrl: "/images/project4-cover.png",
        pageUrl: "/Work/PDOGS"
    }, {
        title: "Redesign Website of Bureau of Labor Insurance",
        subtitle: "UX Researcher, UI Designer",
        note: "2020 PDIS",
        imgUrl: "/images/project1-cover.png",
        pageUrl: "/Work/RedesignBLI"
    }, {
        title: "AR Contact Lens Wearing App",
        subtitle: "Frontend Engineer",
        note: "2019 Formosa Optical",
        imgUrl: "/images/project2-cover.png",
        pageUrl: "/Work/ARLens"
    }, {
        title: "AI Image Classification",
        subtitle: "Machine Learning, Backend Engineer",
        note: "2019 Dentall",
        imgUrl: "/images/project3-cover.png",
        pageUrl: "/Work/AIXray"
    }];

    return (
        <div>
            <h1 className="title">
                My Work
            </h1>
            {
                projects.map((project, i) => (
                    <Card
                        key={`project-${i}`}
                        title={project.title}
                        subtitle={project.subtitle}
                        note={project.note}
                        imgUrl={project.imgUrl}
                        pageUrl={project.pageUrl}
                    />
                ))
            }
        </div>
    )
};

export default Work;