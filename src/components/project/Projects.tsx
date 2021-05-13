import * as React from "react";
import Container from "react-bootstrap/Container";
import ProjectData from '../../utils/ProjectData';
import ProjectCard from "./ProjectCard";
//local css
import "./projects.css";


const Projects = () => {
    const info = ProjectData.map((data, index) =>
        <ProjectCard key={index} data={data} />
    );
    return (
        <div>
            <Container>
                <h2 className="text-center display-4 text-white">Projects</h2>
                {/* project card will be populated with information */}
                <div className="row row-cols-1 row-cols-md-2 portfolio">
                    {info}
                </div>
            </Container>
        </div>
    )
}
export default Projects;

