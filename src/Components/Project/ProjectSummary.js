import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import 'moment/locale/pl'; 
moment.locale('pl');

const ProjectSummary = (props) => {
    const {project} = props;
    const { t } = useTranslation();
    

    return(
        <div className="ProjectSummaryInfo">
            <div className="card project-summary">
                <span className="card-title">{project.title}</span>
                <p>{project.content}</p>     
                <p className="DataFront">{t('Date')} {moment(project.createdAt.toDate().toString()).calendar()}</p> 
            </div>
        </div>
    )
}

export default ProjectSummary