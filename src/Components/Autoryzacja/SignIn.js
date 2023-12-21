import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RadioButton';
import { useTranslation } from 'react-i18next';


function SignIn(props){
  
     const { t } = useTranslation();
     const [ email,setEmial ] = useState({
        title: 'Kamil@op2.pl',
        body: '',
        intText: t('Contact.Email')
    });
     const [ password, setPassword ] = useState({
        title: 'password',
        body: '',
        hintText : t('Contact.Password')
     });
     const [ label, setLabel ] = useState('Log in');


    const handleSubmit = (e) => {

        const a = {
            email: email.body,
            password: password.body
        }
        e.preventDefault();
        props.signIn(a);

           
    } 
    // eslint-disable-next-line
    useEffect(() => {   
        setLabel(t('Menu.login.log_in'));
    });


   

        
        const {auth,authError} = props;       
        if(auth.uid) return <Redirect to="/" />
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <div className="container FormKamilLog">
                <TextField  
                hintText={t('Contact.Email')}
                type="email" 
                className="LogUno"
                defaultValue={email.title}
                floatingLabelText={t('Contact.Email')}
                onChange={(e) => setEmial({...email, body: e.target.value})}
                value={email.body}
               />
                <br/>
                <TextField  
                hintText={t('Contact.Password')}
                type="password"
                className="LogUno"
                defaultValue={password.title}
                floatingLabelText={t('Contact.Password')}
                onChange={(e) => setPassword({...password, body: e.target.value})}
                />
               
                <RaisedButton
                    label={label}
                    primary={true}
                    onClick={handleSubmit}
                    className="ButtonLogin btn btn-success"
                />
                 <p className="ErrorInfo">
                         {authError ? <p>{authError}</p> : null}
                 </p>
                 </div>   
                 <div className="work"> {t('Menu.infoError')} </div> 
                 </React.Fragment>
             </MuiThemeProvider>
           
                
            
        )
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
