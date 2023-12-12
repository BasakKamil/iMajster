import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createOrder} from '../actions/createOrder';
import { Redirect } from 'react-router-dom';
import StepOrdertwo from './Stepordertwo';
// import Steporderone from './Steporderone';
import BasketEmpty from "./BasketEmpty";



class Cart extends Component{
    constructor(){
        super();
        this.state={
            stepOrder: 1,
            delete: "Usun"
        }
        this.order = this.order.bind(this);
    
    }
   
      //Przejscie dalej
    nextStep = () => {
        const {stepOrder} = this.state;
        this.setState({
            stepOrder: stepOrder + 1
        });
    }

      //Cofnięcie się
    prevStep = () => {
        const {stepOrder} = this.state;
        this.setState({
            stepOrder: stepOrder - 1
        })
    }

  
    total = () =>{
        return this.props.items.reduce((total,item)=>{
            return total + item.price
        },0)
    }

    order = () => {    
       this.props.createOrder(this.props.items)
    }

    render(){
        const {auth} = this.props;
        const {stepOrder} = this.state;
        
        
        if(!auth.uid) return <Redirect to="/signin" />
        if(this.props.items.length === 0){
            return(
                <div className="NiceBasketZero"> <BasketEmpty/> </div>
            )
        } 
        // eslint-disable-next-line default-case
        switch(stepOrder){
            case 1:
            return (
            //    <Steporderone 
            //    stepOrder={this.state.stepOrder}
            //    order={this.order}
            //    items={this.props.items}
            //    prevStep ={this.prevStep}
            //    nextStep={this.nextStep}
            //    profile={this.props.profile}
            //    />
                <div className="NiceBasket">
                  
                    <table>
                        <tbody>
                            <tr className='een'>
                                <th></th>
                                <th>Nazwa:</th>
                                <th>Cena:</th>
                            </tr>
                            {this.props.items.map((item,index) => {
                                return <tr key={index}>
                                    <td>
                                        <button  className="btn btn-dark" onClick={()=>this.props.removeFromCart(index)}>{this.state.delete}</button>
                                    </td>
                                     <td>{item.name}</td>
                                     <td>{item.price} zł</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                    <br/>
                            <p className="TotalBasket">
                                <b>  Wszystko : {this.total()} zł</b>
                            </p>
                            <p className='Aantal'>
                                <b> Ilosc: {this.props.items.length}</b>
                            </p>
                            <button className="btn btn-danger" onClick={this.nextStep}>Kup !</button>

                </div>
                )
            case 2:
                return (
                    <StepOrdertwo 
                    order={this.order}
                    items={this.props.items}
                    prevStep ={this.prevStep}
                    nextStep={this.nextStep}
                    profile={this.props.profile}
                    />
                )
            case 3: 
                return(
                    <Redirect to="/ordersum"/>
                )
             }
            
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
