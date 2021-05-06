import * as React from 'react';
import './projects.css';

interface IProps{ 
    img: string;
    code: string;
    title: string;
    site: string;
    description: string;
    technologies: string;
}

const ProjectCard: React.FC<IProps> = (props) => { 
    return (
        <div className="col mb-4">
            <div className="card">
                <img src={props.img} height="250" width="250" className="card-img-top" alt={props.title} />
                <div className="card-body" style={{ backgroundColor: "grey" }}>
                    <h5 className="card-title text-center"><a href={props.site}>{props.title}</a></h5>
                    <p className="card-text text-center"><a href={props.code}>View Code</a></p>
                    <p className="card-text text-center">{props.description}</p>
                    <p className="card-text text-center">{props.technologies}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;