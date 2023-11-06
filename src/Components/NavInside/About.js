import React, { Component } from 'react';
import Title from '../Animate/Title';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import More from './More';

class About extends Component{
    render(){
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to="/signin" />
        return (
            <div className="container AboutKamil">
                <Title lineContent="Witaj w zakladce" lineContent2=" o Mnie"/>
                <di>Znowu</di>
                <More/>
            </div>
        )
    
    }
 
}
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}


export default connect(mapStateToProps)(About)
