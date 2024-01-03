import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import ProductAll from '../Products/ProductAll';
import History from '../../store/shop/history';
import Filter from '../../store/shop/filter';

function Shop(props){


const {auth} = props;

if(!auth.uid) return <Redirect to="/signin" />
return (
    <div className="ShopKamila">
        <div className="container text-center ContKamila">
           <div className="row">
                <div className="col col-lg-2"><Filter/></div> 
                <div className="col col-lg-2"><History/></div>
           </div>
        </div>
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