import React, { useState } from 'react';
import Cart from '../../store/shop/cart';
import img from './basketicon.png';
import { connect } from 'react-redux';

const Basket = (state) =>{

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const i = state.items.length;


    if(isOpen)
    return(

        <div className="BasketShop">   
            <button type="button" class="btn btn-danger" onClick={toggle}>ZAMKNIJ</button>    
            <Cart toggle={toggle}/>
        </div>
    )
    return(
        <div className='CloseBasket'>
            <button type="button" class="btn btn-success" onClick={toggle}>OTWORZ</button>   
            <img src={img} alt="Logo" className='Miniaturka' />
            <p className='Nowe'>
                Ilosc : {i}
            </p>
       
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

export default connect(mapStateToProps,0)(Basket)