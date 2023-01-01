import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RadioButton';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


export class FormPersonalDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
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
                    className="LogDuo"
                    hintText="Podaj Adres"
                    floatingLabelText="Adres"
                    onChange={handleChange('address')}
                    defaultValue={values.address}/>
                    <br/>
                    <TextField  
                    className="LogDuo"
                    hintText="Podaj Miasto"
                    floatingLabelText="Miasto"
                    onChange={handleChange('city')}
                    defaultValue={values.city}/>
                    <TextField  
                    className="LogDuo"
                    hintText="Podaj Kod Pocztowy XX-XXX"
                    floatingLabelText="XX-XXX"
                    onChange={handleChange('post')}
                    defaultValue={values.post}/>
                    <TextField  
                    className="LogDuo"
                    hintText="Podaj Telefon Kontaktowy"
                    floatingLabelText="000-000-000"
                    onChange={handleChange('phone')}
                    defaultValue={values.phone}/>
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

export default connect(mapStateToProps)(FormPersonalDetails)
