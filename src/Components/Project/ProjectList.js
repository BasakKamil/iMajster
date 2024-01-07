import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

const ProjectList = (props) => {

    const {projects} = props;


   
    return(
        <div className="project-list section KamilaOrders">
         { projects ? 
        <div> 
        {projects.map(project => {
           return (
               <Link to={'/project/' + project.id} key={project.id} >
                   <ProjectSummary project={project}/>
               </Link>
           ) 
        })}
        </div>   
         : 
         <div className="LoaderSm">
         <ClipLoader
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
        </div>
         }       
         
        </div>
    )
}

export default ProjectList