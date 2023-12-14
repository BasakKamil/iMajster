import React, { useState } from 'react';
import { connect } from 'react-redux';
import {createOrder} from '../actions/createOrder';
import { Redirect } from 'react-router-dom';
import StepOrdertwo from './Stepordertwo';
import Steporderone from './Steporderone';
import BasketEmpty from "./BasketEmpty";



function Cart(props){
    
        
    const [ step, setStep ]= useState(1);
    
   
    //   //Przejscie dalej
    const nextStep = () => {
       setStep( step + 1)
    }

    //   //Cofnięcie się
    const prevStep = () => {
        setStep( step - 1 )
    }


   //    Podsumowanie
//    const total = () =>{
//         return props.items.reduce((total,item)=>{
//             return total + item.price
//         },0)
//     }

    const order = () => {    
       props.createOrder(props.items)
    }

    
        const {auth} = props; 
        if(!auth.uid) return <Redirect to="/signin" />
        if(props.items.length === 0){
            return(
                <div className="NiceBasketZero"> <BasketEmpty/> </div>
            )
        } 
        // eslint-disable-next-line default-case
        switch(step){
            case 1:
            return (
                    <Steporderone 
                    step={step}
                    order={order}
                    items={props.items}
                    prevStep ={prevStep}
                    nextStep ={nextStep}
                    profile={props.profile}
                    />
                )
            case 2:
                return (
                    <StepOrdertwo 
                    order={order}
                    items={props.items}
                    prevStep ={prevStep}
                    nextStep={nextStep}
                    profile={props.profile}
                    />
                )
            case 3: 
                return(
                    <Redirect to="/ordersum"/>
                )
             }
            
        }

    

    const mapStateToProps = (state) => {
        return{
            items: state.cart.cart,
            auth: state.firebase.auth,
            profile: state.firebase.profile
        }
    }

    const mapDispatchToProps = (dispatch) => {
       
        return{
            removeFromCart : (index) => {
                dispatch({
                    type: 'REMOVE_FROM_CART',
                    index
                })
            },
            createOrder: (order) =>  dispatch(createOrder(order))
            
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
