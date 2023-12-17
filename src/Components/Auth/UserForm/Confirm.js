import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RadioButton';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

export function Confirm(props) {

     const { t } = useTranslation();

     const cont = (e) => {
        e.preventDefault();
        props.nextStep();
    }

    const back = (e) =>{
        e.preventDefault();
        props.prevStep();
    }

        const {values, handleChange, auth, error} = props;
        if(auth.uid) return <Redirect to="/"/>
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className="container FormKamil">
                    <TextField  
                    hintText={t('Contact.Email')}
                    type="email"
                    className="LogDuo"
                    floatingLabelText={t('Contact.Email')}
                    onChange={handleChange('email')}
                    defaultValue={values.email}/>
                    <br/>
                    <TextField  
                    hintText={t('Contact.Password')}
                    type="password"
                    className="LogDuo"
                    floatingLabelText={t('Menu.login.password')}
                    onChange={handleChange('password')}
                    defaultValue={values.password}/>
                   
                   { ( values.emial , values.password )?
                    <RaisedButton
                        label={t('Basket.Next')}
                        primary={true}
                        style={styles.button}
                        onClick={cont}
                        className="ButtonNew"
                    />
                    : <RaisedButton 
                         label="Dalej"
                         className='OutButt'
                         style={styles.button1}
                         onClick={error}
                         />
                         
                    }
                    <RaisedButton
                        label={t('Basket.Back')}
                        primary={true}
                        style={styles.buttonBack}
                        onClick={back}
                        className="ButtonNew"
                    />
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
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Confirm)

