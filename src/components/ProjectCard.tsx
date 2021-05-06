import * as React from 'react';
import IData from '../assets/IData';
import './projects.css';

interface IProps {
    data: IData;
}

const ProjectCard: React.FC<IProps> = ({ data }: IProps) => {
    return (
        <div className="col mb-4">
            <div className="card">
                <img src={data.img} height="250" width="250" className="card-img-top" alt={data.title} />
                <div className="card-body" style={{ backgroundColor: "grey" }}>
                    <h5 className="card-title text-center"><a href={data.site}>{data.title}</a></h5>
                    <p className="card-text text-center"><a href={data.code}>View Code</a></p>
                    <p className="card-text text-center">{data.description}</p>
                    <p className="card-text text-center">{data.technologies}</p>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard;