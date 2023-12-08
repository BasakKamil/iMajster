import React, { Component } from 'react';
import {connect} from 'react-redux';


// import formatCurrency from '../../store/shop/util';

class ProductDetails extends Component{


render(){

const {product} = this.props;
const img = this.props.product.img;
return(
   
    <div className="IteamDetails">  
        <div className="ProductInfo">
            <b>Nazwa: {product.name}</b>
            <p>Opis: {product.content}</p>
            <p class="price">Cena: {product.price} zł</p>
       </div>
        <div className="PhotoProduct"> <img src={img} alt=""/></div>
        {/* <p>Cena: {formatCurrency(product.price)}</p> */}
       <button className="btn btn-danger" onClick={() => this.props.addToCart(product)} >Dodaj</button>
    </div>
)


}
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