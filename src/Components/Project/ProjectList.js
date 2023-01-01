import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';

const ProjectList = (props) => {
    const {projects} = props;
    // console.log(projects);
    return(
        <div className="project-list section KamilaOrders">
         {projects && projects.map(project => {
            return (
                <Link to={'/project/' + project.id} key={project.id} >
                    <ProjectSummary project={project}/>
                </Link>
            ) 
         })}
        </div>
    )
}

export default ProjectList