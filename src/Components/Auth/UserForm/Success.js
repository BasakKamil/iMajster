import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RadioButton';
import {List, ListItem} from 'material-ui/List';
import { connect } from 'react-redux';
import { signUp } from '../../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Success(props){
    
   
    const { t } = useTranslation();

    const back = (e) =>{
        e.preventDefault();
        props.prevStep();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.signUp(props.values);
        console.log("No stary zaraz będziesz miał dostęp do Apki Basiego :D");
    } 

    
        const {auth, authError,values:{email, password, name, surname, address, post, city, phone, country, date}} = props;
        console.log(admin, date);
        if(auth.uid) return <Redirect to="/"/>
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className="container FormKamil">
                    <List>
                        <ListItem
                        primaryText={t('Contact.Nam')}
                        secondaryText={name}
                        />
                        <ListItem
                        primaryText={t('Contact.Sur')}
                        secondaryText={surname}
                        />
                         <ListItem
                        primaryText={t('Contact.Phone')}
                        secondaryText={phone}
                        />
                        <ListItem
                        primaryText={t('Contact.Address')}
                        secondaryText={address}
                        />
                        <ListItem
                        primaryText={t('Contact.PostCode')}
                        secondaryText={post}
                        />
                        <ListItem
                        primaryText={t('Contact.City')}
                        secondaryText={city}
                        />
                        <ListItem
                        primaryText={t('Contact.Nat')}
                        secondaryText={country}
                        />
                         <ListItem
                        primaryText={t('Contact.Em')}
                        secondaryText={email}
                        />
                        <ListItem
                        primaryText={t('Contact.Pas')}
                        secondaryText={password}
                        />
                
                 
                       
                    </List>
                   
                    <RaisedButton
                        label={t('Contact.Register')}
                        primary={true}
                        style={styles.button}
                        onClick={handleSubmit}
                        className="ButtonNew Green"
                    />
                    <RaisedButton
                        label={t('Basket.Back')}
                        primary={true}
                        style={styles.buttonBack}
                        onClick={back}
                        className="ButtonNew btn-danger"
                    />
                    <div className="errSignUp"> {authError ? <p>{authError}</p>: null }</div>
                     </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
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

