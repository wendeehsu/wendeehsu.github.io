import React from 'react';

function ProjectCard() {
    const img = "/images/project1-cover.png";
    return (
        <div className="row justify-content-center projectCard">
            <div className="col-3 projectDescription">
                <h5>Website Redesign</h5>
                <h6 className="gray-text">UX Researcher</h6>
                <h6 className="pink-text">PDIS</h6>
            </div>
            <div className="cardBorder">
                <div 
                    className="card" 
                    style={{backgroundImage: "url(" + process.env.PUBLIC_URL + img + ")"}}
                />
            </div>
        </div>
    )
}

export default ProjectCard;