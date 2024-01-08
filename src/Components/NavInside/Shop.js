import React,{ useState } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import ProductAll from '../Products/ProductAll';
import History from '../../store/shop/history';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Filter from '../../store/shop/Filter';


function Shop(props){

const {auth,products} = props;
const [activeGenere, setActiveGenere] = useState([]);
const [filtered, setFiltered] = useState('all');



// let filteredProductList = activeGenere.filter((product)=>{
    // if(filtered ==='all'){
    //     console.log(product)
    // }
    // else if(filtered ==='iPhone'){
    //     console.log(product) 
    // }
//     // return product
// })

// useEffect(() => {
//     setActiveGenere([products]);
// },[]);


function onFilterValueSelected(filterValue){
    setFiltered(filterValue);
    console.log(activeGenere);
}



if(!auth.uid) return <Redirect to="/signin" />
return (
    <div className="ShopKamila">
        <div className="container text-center ContKamila">
           <div className="row">
                <div className="col col-lg-2">
                  <Filter filtered={filtered} setFiltered={setFiltered} products={products} activeGenere={activeGenere} setActiveGenere={setActiveGenere} onFilterValueSelected={onFilterValueSelected}/>   
                </div> 
                <div className="col col-lg-2"><History/></div>
           </div>
        </div>
        <ProductAll filtered={filtered} setFiltered={setFiltered} products={products}/>
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
export default compose (
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'products'}
    ])
)(Shop)