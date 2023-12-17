import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RadioButton';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';


export function FormUserDetails(props){
  
    const { t } = useTranslation();
    const contin = (e) => {
            e.preventDefault();
            props.nextStep();
    }
  
        const {values, handleChange, auth, error} = props;
        if(auth.uid) return <Redirect to="/"/>
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className="container FormKamil">
                    <TextField  
                    className="LogDuo"
                    hintText={t('Contact.Name')}
                    floatingLabelText={t('Contact.Name')}
                    onChange={handleChange('name')}
                    defaultValue={values.name}/>
                    <br/>
                    <TextField  
                    className="LogDuo"
                    hintText={t('Contact.Surname')}
                    floatingLabelText={t('Contact.Surname')}
                    onChange={handleChange('surname')}
                    defaultValue={values.surname}/>

                   {(values.name && values.surname) ?
                    <RaisedButton
                        label={t('Basket.Next')}
                        primary={true}
                        style={styles.button}
                        onClick={contin}
                        className="ButtonNew"
                    />
                    : <RaisedButton 
                         label={t('Basket.Next')}
                         className='OutButt btn-danger'
                         style={styles.button}
                         onClick={error}
                         />
                         
                    }
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
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(FormUserDetails)
