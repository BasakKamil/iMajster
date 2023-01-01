import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RadioButton';
import {List, ListItem} from 'material-ui/List';
import { connect } from 'react-redux';
import { signUp } from '../../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

export class Success extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) =>{
        e.preventDefault();
        this.props.prevStep();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.props.values);
        console.log("No stary zaraz będziesz miał dostęp do Apki Basiego :D");
    } 

    render() {
        const {auth, authError,values:{email, password, name, surname, address, post, city, phone, date}} = this.props;
        console.log(date);
        if(auth.uid) return <Redirect to="/"/>
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className="container FormKamil">
                    <List>
                        <ListItem
                        primaryText="Imie"
                        secondaryText={name}
                        />
                        <ListItem
                        primaryText="Nazwisko"
                        secondaryText={surname}
                        />
                         <ListItem
                        primaryText="Telefon kontaktowy"
                        secondaryText={phone}
                        />
                        <ListItem
                        primaryText="Adres"
                        secondaryText={address}
                        />
                        <ListItem
                        primaryText="Kod Pocztowy"
                        secondaryText={post}
                        />
                        <ListItem
                        primaryText="Miasto"
                        secondaryText={city}
                        />
                         <ListItem
                        primaryText="Twój Email jako Login"
                        secondaryText={email}
                        />
                        <ListItem
                        primaryText=" Twoje Hasło do zapamietania!"
                        secondaryText={password}
                        />
                       
                    </List>
                   
                    <RaisedButton
                        label="Zarejstruj się!"
                        primary={true}
                        style={styles.button}
                        onClick={this.handleSubmit}
                        className="ButtonNew"
                    />
                    <RaisedButton
                        label="Powrót"
                        primary={true}
                        style={styles.buttonBack}
                        onClick={this.back}
                        className="ButtonNew"
                    />
                    <div className="errSignUp"> {authError ? <p>{authError}</p>: null }</div>
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

const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signUp: (newuser) => dispatch(signUp(newuser))
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Success)

