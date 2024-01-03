import React, { useState } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';




function User(props){

  
 const { t } = useTranslation();
 const [state,setState] = useState({
        step: 1,
        email: '',
        password: '',
        name: '',
        surname: '',
        address: '',
        post: '',
        city: '',
        country: '',
        phone: '' ,
        date: new Date(),
        admin: false
    });

    

    const error = (e) => {
        e.preventDefault();
        swal({
            title: t('Basket.Att'),
            text: t('Basket.All'),
            icon: "error",
            button: "OK!"
          });
    }

    //Przejscie dalej
    const nextStep = () => {
        const {step} = state;
        setState({...state, step: step + 1});
    }

    //Cofnięcie się
    const prevStep = () => {
        const {step} = state;
        setState({...state, step: step - 1})
    }

     const handleChange = input => e => {
        setState({...state,
            [input]: e.target.value
        })
    } 

   
        const { step } = state;
        const { email, password, name, surname, address, post, city, phone ,admin, country, date } = state;
        const values = {email, password, name, surname, address, post, city, phone, admin , country, date}
        const {auth} = props;
        if(auth.uid) { return <Redirect to="/"/> }
  
        // eslint-disable-next-line default-case
        switch(step){
            case 1:
                return(
                    <FormUserDetails
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}
                    error={error}
                    />
                )
            case 2: 
                    return(
                    <FormPersonalDetails 
                    name={state.name}
                    surname={state.surname}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={values}
                    error={error}
                    />
                    )
            case 3:
                    return(
                    <Confirm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={values}  
                    error={error}
                    />
                    )
            case 4 :
         
                    return(
                    <Success
                    nextStep={nextStep}
                    prevStep={prevStep}
                    values={values}  
                    error={error}
                    />
                    )

        }
    }


const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(User)
