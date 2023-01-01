import React, {  Component } from 'react';
// import {TweenMax, Power3} from 'gsap';
// import logo from '../../images/star.png';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProductAll from '../Products/ProductAll';
import History from '../../store/shop/history';
// import Filter from '../../store/shop/filter';
import Basket from '../../Components/Layaut/Basket';
// import firebase from '../../config/fbconfig';






class Shop extends Component{
    constructor(){
        super();
      
        this.state ={
            filteredProducts:[],
            cart: []
            
        }

       

        this.addToCart = this.addToCart.bind(this)
        this.removeFromCart = this.removeFromCart.bind(this)
        
        
    }
    //Stara wersja bez Reduxa
    addToCart = (product) => {
        console.log(product)
        const cart = [...this.state.cart,product ]
        this.setState({cart})
    }
     //Stara wersja bez Reduxa
    removeFromCart = (index) => {
        const cart = [...this.state.cart,]
        cart.splice(index,1)
        this.setState({cart})
    }
    
    // const logoItem = useRef(null);
    // const textItem = useRef(null);
    
    //     useEffect(() => {
           
    //         return () => {
    //             TweenMax.to(
    //                 this.logoItem,
    //                  .8, 
    //                  {
    //                      opacity: 1, 
    //                      y: -20,
    //                      ease: Power3.easeOut
    //                 })
    //             TweenMax.to(
    //                    this.textItem,
    //                      .8, 
    //                      {
    //                          opacity: 1, 
    //                          y: -20,
    //                          ease: Power3.easeOut,
    //                          delay: .2
    //             })
    //         };
    //     }, [])
   
    handleChangeSort = (e) =>{
        this.setState({sort: e.target.value});
        this.listProducts();
    }

    listProducts(){
        // const {products} = this.props;
        this.setState(state =>{
            if(state.sort !== ''){
                state.sort((a,b) =>(state.sort==='lowest')?(a.price < b.price?1:-1):(a.price > b.price)?1:-1);
            }else{
                state.products.sort((a,b)=>(a.id<b.id?1:-1));
            }
            return {filteredProducts: state.products};
        })
    }
   

  
  
    render(){
             const {auth} = this.props;
            

            
            if(!auth.uid) return <Redirect to="/signin" />
            return (
                <div className="ShopKamila">
                    <History/>
                    <hr/>
                    <ProductAll />
                    <div className='BasketFull'>
                       <Basket/>
                    </div>
   
                </div>
                
            )
        
       
     


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


export default connect(mapStateToProps)(Shop)
