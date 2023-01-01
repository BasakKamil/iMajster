import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RadioButton';

export class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = input => (e) => {
        this.setState({
            [input]: e.target.value
        })
    } 
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
       
        
    } 

   

    render() {
        const {auth,authError} = this.props;
        if(auth.uid) return <Redirect to="/" />
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <div className="container FormKamilLog">
                <TextField  
                hintText="email"
                type="email" 
                className="LogUno"
                floatingLabelText="email"
                onChange={this.handleChange('email')}
                defaultValue={this.state.email}
               />
                <br/>
                <TextField  
                hintText="password"
                type="password"
                className="LogUno"
                floatingLabelText="password"
                onChange={this.handleChange('password')}
                defaultValue={this.state.password}
                />
               
                <RaisedButton
                    label="Zaloguj !"
                    primary={true}
                    onClick={this.handleSubmit}
                    className="ButtonLogin btn btn-warning"
                />
                 <p className="ErrorInfo">
                         {authError ? <p>{authError}</p> : null}
                 </p>
                 </div>   
                 <div className="work">Website/App for Everybody and repair Apple !</div> 
                 </React.Fragment>
             </MuiThemeProvider>
           
                
            
        )
    }
}
const mapStateToProps= (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
