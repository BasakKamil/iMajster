import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';


const ProjectDetails = (props) => {

const {project, auth} = props;
  
 if(!auth.uid) return <Redirect to="/signin" />   

 if(project){
    return(


      <div class="container project-details">
         <div class="row">
            <div class="col-sm-8 card-title">Project Title {project.title}</div>
            <div class="col-sm-4 authorProject">{project.authorFirstName} {project.authorLastName}</div>
         </div>
         <div class="row">
            <div class="col-sm">
              <h2 className="textAll">Opis:</h2>
              <p>{project.content}</p>
            </div>
         </div>
      </div>

    //  <div className="project-details">
    //  <div className="card">
    //  <span className="card-title"> Project Title {project.title}</span>

    //     <div className="authorProject">
    //       <p className="Auth">Autor: {project.authorFirstName} {project.authorLastName}</p>
    //     </div>
    //     <span className="textAll">Opis: <br/>
    //     {project.content}</span>
    //  </div>
    // </div>
    )
  } else {
    return(
     <div className="Loading">Loading...</div>
    )
  }
}

const mapStateToProps = (state, ownProps) =>{
    console.log(ownProps);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return{
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails)