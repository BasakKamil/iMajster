import React, { useState } from 'react';
import Cart from '../../store/shop/cart';
import img from './basketicon.png';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Basket = (state) =>{

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const i = state.items.length;
    const { t } = useTranslation();

    if(isOpen)
    return(

        <div className="BasketShop">   
            <button type="button" class="btn btn-danger" onClick={toggle}>{t('Menu.login.close')}</button>    
            <Cart toggle={toggle}/>
        </div>
    )
    return(
        <div className='CloseBasket'>
            <button type="button" class="btn btn-success" onClick={toggle}>{t('Menu.login.open')}</button>   
            <img src={img} alt="Logo" className='Miniaturka' />
            <p className='Nowe'>
                {t('Menu.pieces')}: {i}
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