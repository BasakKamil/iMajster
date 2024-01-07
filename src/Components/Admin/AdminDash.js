import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Notifications from '../Dashboard/Notifications';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

function AdminDash(props){

const {auth,notifications} = props;
if(!auth.uid) return <Redirect to="/signin" />
return(

    <div className="DashAdm">
            <h1>PLATFORMA ADMINA:</h1>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                    <span class="navbar-brand" alt="AdminMenu" value="" >Navbar</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="!#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><NavLink exact to="/adminadd"><p>Add Product</p></NavLink></li>
                        <li><NavLink exact to="/admindelete"><p>Delete Product</p></NavLink></li>
                       
                    </ul>
                    </li>
                    </ul>
            </div>
            </div>
            </nav>

            <div className="col s12 m5 offset-m1">
                         <Notifications notifications={notifications}/>
            </div>
    </div>

)    

}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}



export default compose(
    connect(mapStateToProps),
    firestoreConnect([ 
        {collection: 'notifications', limit: 12, orderBy:['time','desc']}
])
)(AdminDash) 
