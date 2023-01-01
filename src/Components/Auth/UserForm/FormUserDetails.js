import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RadioButton';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export class FormUserDetails extends Component {
    continue = (e) => {
            e.preventDefault();
            this.props.nextStep();
    }
    render() {
        const {values, handleChange, auth} = this.props;
        if(auth.uid) return <Redirect to="/"/>
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className="container FormKamil">
                    <TextField  
                    className="LogDuo"
                    hintText="Podaj imię"
                    floatingLabelText="Imię"
                    onChange={handleChange('name')}
                    defaultValue={values.name}/>
                    <br/>
                    <TextField  
                    className="LogDuo"
                    hintText="Podaj Nazwisko"
                    floatingLabelText="Nazwisko"
                    onChange={handleChange('surname')}
                    defaultValue={values.surname}/>
                   
                    <RaisedButton
                        label="Dalej"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
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
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(FormUserDetails)
