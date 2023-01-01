import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Nullinfo from './Nullinfo';

export class UserForm extends Component {
    state = {
        step: 1,
        email: '',
        password: '',
        name: '',
        surname: '',
        address: '',
        post: '',
        city: '',
        phone: 0 ,
        date: new Date()
    }
    //Przejscie dalej
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Cofnięcie się
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    } 
   
    render() {
        const { step } = this.state;
        const { email, password, name, surname, address,post, city, phone ,date} = this.state;
        const values = {email, password, name, surname, address, post, city, phone, date}
        const {auth} = this.props;
        if(auth.uid) return <Redirect to="/"/>
        // eslint-disable-next-line default-case
        switch(step){
            case 1:
                return(
                    <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 2: 
                if(!this.state.name || !this.state.surname) return <Nullinfo prevStep={this.prevStep}/>
                    return(
                    <FormPersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                    )
            case 3:
                if(!this.state.address || !this.state.city || !this.state.post || !this.state.phone) return <Nullinfo prevStep={this.prevStep}/>
                    return(
                    <Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}  
                    />
                    )
            case 4 :
                if(!this.state.email || !this.state.password) return <Nullinfo prevStep={this.prevStep}/>
                    return(
                    <Success
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}  
                    />
                    )

        }
    }
}

const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(UserForm)
