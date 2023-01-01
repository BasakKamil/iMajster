import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RadioButton';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export class Confirm extends Component {
    continue = (e) => {
            e.preventDefault();
            this.props.nextStep();
    }

    back = (e) =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {values, handleChange, auth} = this.props;
        if(auth.uid) return <Redirect to="/"/>
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className="container FormKamil">
                    <TextField  
                    hintText="Podaj Email"
                    type="email"
                    className="LogDuo"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}/>
                    <br/>
                    <TextField  
                    hintText="Podaj Hasło"
                    type="password"
                    className="LogDuo"
                    floatingLabelText="Hasło"
                    onChange={handleChange('password')}
                    defaultValue={values.password}/>
                   
                    <RaisedButton
                        label="Dalej"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                        className="ButtonNew"
                    />
                    <RaisedButton
                        label="Powrót"
                        primary={true}
                        style={styles.buttonBack}
                        onClick={this.back}
                        className="ButtonNew"
                    />
                     </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles={
    button: {
        margin: '1%',
        width: '98%',
        padding: '1%'
    },
    buttonBack: {
        background: 'red',
        padding: '1%',
        margin: '1%',
        width: '98%'
    }
}
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Confirm)

