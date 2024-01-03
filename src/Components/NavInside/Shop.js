import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import ProductAll from '../Products/ProductAll';
import History from '../../store/shop/history';

function Shop(props){


const {auth} = props;

if(!auth.uid) return <Redirect to="/signin" />
return (
    <div className="ShopKamila">
        <History/>
        <hr/>
        <ProductAll />
    </div>
    
)
}

const mapStateToProps = (state,ownProps) => {
    const products = state.firestore.ordered.products;
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        products: products
    }
    
}
export default connect(mapStateToProps)(Shop)