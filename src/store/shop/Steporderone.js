import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from 'react-redux';
import {createOrder} from '../actions/createOrder';

const Steporderone = (props) => {

    const { t } = useTranslation();
    const [tot,setTot] = useState(0);


    const total = () =>{
        return props.items.reduce((total,item)=>{
           return total + item.price;
         },0);
     }
    // eslint-disable-next-line
    useEffect(() => {    
       setTot(total);
    });


    return (
        <div className="NiceBasket">
                  
        <table>
            <tbody>
                <tr className='een'>
                    <th></th>
                    <th>{t('Basket.Name')}:</th>
                    <th>{t('Basket.Price')}:</th>
                </tr>
                {props.items.map((item,index) => {
                    return <tr key={index}>
                        <td>
                            <button  className="btn btn-dark" onClick={()=>props.removeFromCart(index)}>{t('Basket.Delete')}</button>
                        </td>
                         <td>{item.name}</td>
                         <td>{item.price} zł</td>
                    </tr>
                })}
            </tbody>
        </table>
        <br/>
                <p className="TotalBasket">
                    <b>  {t('Basket.Sum')} : {tot} zł</b>
                </p>
                <p className='Aantal'>
                    <b> {t('Menu.pieces')} : {props.items.length}</b>
                </p>
                <button className="btn btn-danger" onClick={props.nextStep}>{t('Basket.Next')}</button>
               

    </div>

    )
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

export default connect(mapStateToProps,mapDispatchToProps)(Steporderone)