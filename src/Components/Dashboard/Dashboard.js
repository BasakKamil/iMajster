import React from 'react';
import ProjectList from '../Project/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

function Dashboard(props){
        
        const { projects, auth} = props;
        if(!auth.uid) return <Redirect to="/signin"/>
        return (
            <div className="DashboardCont">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                </div>
                
            </div>
        )
    }

const mapStateToProps = (state) =>{
   
    return{
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([ 
        {collection: 'projects', orderBy:['createdAt','desc']},
])
)(Dashboard) 
