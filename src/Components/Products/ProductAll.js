import React from 'react';
import ProductDetails from '../Products/ProductDetails';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

function ProductAll(props){
 

    const total = () =>{
        return props.reduce((total,product)=>{
            return total + product.price
        },0)
    } 
    

        const { t } = useTranslation();
        const {products} = props;     
            
             if(Array.isArray(products)){
                return(   
                    <div className="ProductShow">
                         {props.products && props.products.map(product => {
                            return (
                                <ProductDetails product={product} key={product.id} />
                            ) 
                        })}
                    </div>
                )
            }
            else return ( <div class="Nic">{t('Stock')}</div>) 
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