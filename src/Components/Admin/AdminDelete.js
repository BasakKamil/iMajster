import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import ProductDetailDel from './ProductDetailDel';



function AdminDelete(props){

const {auth,products} = props;





if(!auth.uid) return <Redirect to="/signin" />
if(!products) return <div className="loaden"> Laduje sie !!!</div>
return(

    <div className="DashAdmPage">
            <h1>DELETE PRODUCT:</h1>
            <div className="container">
                <div className="row">
                    <div className="col"> 
                    {products && products.map((product)=>{
                      return(
                      <ProductDetailDel product={product}/>
                      )  
                    })}
                    </div>
                </div>
            </div>

    </div>

)    

}

const mapStateToProps = (state) => {
    const products = state.firestore.ordered.products;
    return{
        auth: state.firebase.auth,
        products: products
    }
}


export default compose (
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'products'}
    ])
)(AdminDelete)
