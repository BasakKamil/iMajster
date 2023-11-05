import React, { Component, useState } from 'react';
import ProductDetails from '../Products/ProductDetails';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';

class ProductAll extends Component {
 

    total(){
        return this.props.reduce((total,product)=>{
            return total + product.price
        },0)
    } 
    

    render(){  
        const {products} = this.props;     
            
             if(Array.isArray(products)){
                return(   
                    <div className="ProductShow">
                         {this.props.products && this.props.products.map(product => {
                            return (
                                <ProductDetails product={product} key={product.id} />
                            ) 
                        })}
                    </div>
                )
            }
            else return ( <div>Nie ma nic na Stanie!</div>) 
    }
}
const mapStateToProps = (state,ownProps) => {
    
    const products = state.firestore.ordered.products;

    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        products: products

    }
    
}


export default compose (
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'products'}
    ])
)(ProductAll)