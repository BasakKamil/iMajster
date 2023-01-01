import React from 'react';
import moment from 'moment';
import 'moment/locale/pl' 
moment.locale('pl')

const ProjectSummary = (props) => {
    const {project} = props;
    
    

    return(
        <div className="ProjectSummaryInfo">
            <div className="card project-summary">
                <span className="card-title">{project.title}</span>
                <p>{project.content}</p>     
                <p> Projekt nr. {project.id}</p>  
                <p className="DataFront"> Data: {moment(project.createdAt.toDate().toString()).calendar()}</p> 
            </div>
        </div>
    )
}

export default ProjectSummary