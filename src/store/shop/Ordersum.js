import React,{ useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {createOrder} from '../actions/createOrder';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import { loadStripe } from '@stripe/stripe-js';


function Ordersum(props){

    const [sum,setSum] = useState(0);
    const [dol,setDol] = useState(0);
    const [description,setDescription] = useState({});
    const { t } = useTranslation();

    const terug = () => {
        props.history.push('/shop');
        console.log(props)
    }


    const order = () =>{
        props.createOrder(props.items,description);
        props.history.push('/');
    }


    // let  stripePromise;
    // const getStripe = () => {
    //     if(!stripePromise){
    //          stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);
    //     }
    //     return stripePromise;
    // }

    
    // const Checkout = () => {
    //     const itemy = {
    //         price: "price_1OULH0I23OgygHg9KKqSQFGG",
    //         quantity: 1
    //     };

    //     const checkoutoptions = {
    //         lineItems: [itemy],
    //         mode: "payment",
    //         successUrl: `${window.location.origin}`,
    //         cancelUrl: `${window.location.origin}`
    //     };    
    // }

    
    // const redirectToCheckOut = async() => {
    //     console.log("redirectToCheckOut");
    //     const stripe = await getStripe();
    //     const { error } = await stripe.redirectToCheckOut;
    //     console.log(error)

    // }




    const dolce = (a) =>{
        const proxyy = 'https://cors-anywhere.herokuapp.com/';
        const doll = `${proxyy}https://api.nbp.pl/api/exchangerates/rates/c/usd?format=json`;
        fetch(doll)
        .then(res=> res.json())
        .then(
        arr=>{
        const course =  arr.rates[0].bid;
        function Round(n, k){
          let factor = Math.pow(10, k+1);
          n = Math.round(Math.round(n*factor)/10);
          return n/(factor/10);
        }
        let ameryk =  Round(course, 2);
        let sum = a/ameryk;
        setSum(sum);
        setDol(ameryk);
        });
             
    }

    const totalsum = () =>{
       return props.items.reduce((total,item)=>{
            return total + item.price
        },0)    

    }

  

    // const handleToken = (token,addresses,orders) =>{
    //     console.log(token,addresses,orders);
    //     order();
        
       
    // }



    useEffect(() => {
        let a = totalsum()
        dolce(a);
      });
   
        
        const {auth, items, profile} = props;
     
        if(!auth.uid) return <Redirect to="/signin" />
        if(items.length===0) return <Redirect to="/shop" />
        return(
            <div className="SumOrderKamila">
               <p className="CallOrder">Podsumoawnie Zamowienia :D</p> 
                <table className="OrderSum">
                    <tbody>
                        <tr>
                            <td>{t('Basket.Name')}</td>
                            <td>Cena</td>
                            <td>Sztuk</td>
                        </tr>
                        {items.map((item,index)=>{
                            return(
                                <tr key={index}>
                                     <td>{item.name}</td>           
                                     <td>{item.price}</td>
                                     <td></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <table className="InfoProfile">
                    <tbody>
                        <tr>
                             <td>Imie i Nazwisko: </td>
                             <td>{profile.name} {profile.surname}</td>
                        </tr>
                        <tr>
                             <td>Ulica: </td>
                             <td>{profile.address}</td>
                        </tr>
                        <tr>
                             <td>Kod Pocztowy: </td>
                             <td>{profile.post}</td>
                        </tr>
                        <tr>
                             <td>Miasto: </td>
                             <td>{profile.city}</td>
                        </tr>
                        <tr>
                             <td>Telefon: </td>
                             <td>{profile.phone}</td>
                        </tr>
                        <tr>
                            <td>Dodatkowe info:</td>
                            <td><textarea onChange={(e)=> setDescription(e.target.value)} className="Description"></textarea></td>
                        </tr>
                    </tbody>
                </table>
                    <div>$ = {dol} <br/></div>
                    <p className="EquilBasi">Suma: {totalsum()} zł</p>
                    <p>Suma w $: {sum} $</p>


                    <div className="enquil">

                   
                         <button className="btn btn-danger" onClick={terug}>{t('Basket.Back')}</button>
                         <br/>
                         <button onClick={order} className="btn btn-success">Zamów</button>
                       
                    </div>
            </div>
        )
    
    }
    
 

const mapStateToProps= (state) =>{
    return{
        items: state.cart.cart,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createOrder: (order, description) =>  dispatch(createOrder(order,description))
        // createOrder: (order) =>  dispatch(createOrder(order))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Ordersum)