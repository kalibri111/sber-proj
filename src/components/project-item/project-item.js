import React from "react";


const ProjectItem = ({projectLink, projectDescription}) => {
    return (
        <div className={"project-item card bg-secondary card-body"}>
            <a className={"card-subtitle"} href={projectLink}>{projectLink}</a>
            <p className={"card-text"}>{projectDescription}</p>
        </div>
    );
}

export default ProjectItem;
