import React, { Component } from 'react';
import { connect } from 'react-redux';
import More from './Components/More';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


class About extends Component{
    render(){
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to="/signin" />
        return (
            <div className="container AboutKamil">          
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
