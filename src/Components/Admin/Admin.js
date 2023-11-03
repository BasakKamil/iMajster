import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Admin extends Component {

    render(){
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to="/signin" />
        return (
            <div className="container AboutKamil">
                <div className='AdminDash'>
                    <h2>Admin</h2>
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
 

export default connect(mapStateToProps)(Admin)
