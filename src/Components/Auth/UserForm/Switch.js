import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';





function Switch(props){

  

const { step } = props;
    

    // function error(){
    //     // e.preventDefault();
    //     swal({
    //         title: "UWAGA",
    //         text: "Musisz uzupelnic wszystkie pola!",
    //         icon: "error",
    //         button: "OK!"
    //       });
    // }

    // //Przejscie dalej
    // function nextStep(){
    //     const {step} = this.state;
    //     this.setState({
    //         step: step + 1
    //     });
    // }

    // //Cofnięcie się
    // function prevStep () {
    //     const {step} = this.state;
    //     this.setState({
    //         step: step - 1
    //     })
    // }

    // function handleChange(input){
    //     this.setState({
    //         [input]: e.target.value
    //     })
    // } 
   
 
        // const { step } = this.state;
        // const { email, password, name, surname, address,post, city, phone ,date} = this.state;
        // const values = {email, password, name, surname, address, post, city, phone, date}



        // const {auth} = this.props;
        // if(auth.uid) { return <Redirect to="/"/> }
  
        // eslint-disable-next-line default-case
        switch(step){
            case 1:
                return(
                    <FormUserDetails
                    // nextStep={this.nextStep}
                    // handleChange={this.handleChange}
                    // values={values}
                    // error={this.error}
                    />
                )
            case 2: 
                    return(
                    <FormPersonalDetails 
                    // name={this.state.name}
                    // surname={this.state.surname}
                    // nextStep={this.nextStep}
                    // prevStep={this.prevStep}
                    // handleChange={this.handleChange}
                    // values={values}
                    // error={this.error}
                    />
                    )
            case 3:
                    return(
                    <Confirm
                    // nextStep={this.nextStep}
                    // prevStep={this.prevStep}
                    // handleChange={this.handleChange}
                    // values={values}  
                    // error={this.error}
                    />
                    )
            case 4 :
         
                    return(
                    <Success
                    // nextStep={this.nextStep}
                    // prevStep={this.prevStep}
                    // values={values}  
                    // error={this.error}
                    />
                    )

        }
    }

// const mapStateToProps = (state) =>{
//     return{
//         auth: state.firebase.auth
//     }
// }

// export default connect(mapStateToProps)(Switch)
export default Switch
