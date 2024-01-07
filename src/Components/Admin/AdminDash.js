import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function AdminDash(props){

const {auth} = props;
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
    </div>

)    

}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}


export default connect(mapStateToProps)(AdminDash)
