import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RadioButton';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export function FormPersonalDetails(props){


    const { t } = useTranslation();
 
    const contin = (e) => {
        e.preventDefault();
        props.nextStep();
    }

    const back = (e) => {
        e.preventDefault();
        props.prevStep();
    }

        const {values, handleChange, auth, error}= props;
        if(auth.uid) return <Redirect to="/"/>
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className="container FormKamil">
                            <div>
                            <FormControl sx={{ m: 1, minWidth: 80 }} className='CountField'>
                                <InputLabel id="demo-simple-select-autowidth-label">{t('Contact.Country')}</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    onChange={handleChange('country')}
                                    autoWidth
                                    label={t('Contact.Country')}
                                >
                                    <MenuItem value="" className='Mijn'><em>None</em></MenuItem>
                                    <MenuItem value='Polska' className='Mijn'>{t('Lang.Poland')}</MenuItem>
                                    <MenuItem value='Niderlandy' className='Mijn'>{t('Lang.Netherlands')}</MenuItem>
                                    <MenuItem value='Anglia' className='Mijn'>{t('Lang.England')}</MenuItem>
                                </Select>
                            </FormControl>
                            </div>
          
                    <TextField  
                    className="LogDuo"
                    hintText={t('Contact.Number')}
                    floatingLabelText={t('Contact.Street')}
                    onChange={handleChange('address')}
                    defaultValue={values.address}/>
                    <br/>
                    <TextField  
                    className="LogDuo"
                    hintText={t('Contact.CityM')}
                    floatingLabelText={t('Contact.City')}
                    onChange={handleChange('city')}
                    defaultValue={values.city}/>
                    <TextField  
                    className="LogDuo"
                    hintText={t('Contact.PostCode')}
                    floatingLabelText="XX-XXX"
                    onChange={handleChange('post')}
                    defaultValue={values.post}/>
                    <TextField  
                    className="LogDuo"
                    hintText={t('Contact.Phone')}
                    floatingLabelText="000-000-000"
                    onChange={handleChange('phone')}
                    defaultValue={values.phone}/>

                 

                 
                 {(values.address && values.city && values.post && values.country ) ?
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
        auth: state.firebase.auth,
        
    }
}

export default connect(mapStateToProps)(FormPersonalDetails)
