import React, { Component } from 'react';
import Title from '../Animate/Title';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class About extends Component{
    render(){
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to="/signin" />
        return (
            <div className="container AboutKamil">
                <Title lineContent="Witaj w" lineContent2="O Mnie"/>
                <div className="info">
                    O mnieeee
                </div>
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
