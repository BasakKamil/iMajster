import React from 'react';
import {connect} from 'react-redux';
import { useTranslation } from 'react-i18next';



// import formatCurrency from '../../store/shop/util';

function ProductDetails(props){



const { t } = useTranslation();
const {product} = props;
const img = props.product.img;
return(
   
    <div className="IteamDetails">  
        <div className="ProductInfo">
          <p> {t('Basket.Name')}  </p>  <b>{product.name}</b>
          <p className='contDesc'> {t('Basket.Description')}  
            <span className='Desc'>  
               {product.content}
            </span>
            </p>
            <p class="price">{t('Basket.Price')} : {product.price} zł</p>
       </div>
        <div className="PhotoProduct"> <img src={img} alt=""/></div>
        {/* <p>Cena: {formatCurrency(product.price)}</p> */}
       <button className="btn btn-danger" onClick={() => props.addToCart(product)}>{t('Basket.Add')}</button>
    </div>
)


}



const mapDispatchToProps = (dispatch) =>{
    return{
        addToCart : (product) => {
                        dispatch({
                            type: 'ADD_TO_CART',
                            product
                        })
                    }

    }
}
export default connect(null,mapDispatchToProps)(ProductDetails)