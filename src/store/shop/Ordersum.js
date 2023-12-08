import React,{Component} from 'react';
import {connect} from 'react-redux';
import {createOrder} from '../actions/createOrder';
import { Redirect } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';



class Ordersum extends Component{

    state = {
        description: {},
        dolarek: 0, 
        suma: 0
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
        
    } 
    order = () =>{
        this.props.createOrder(this.props.items,this.state.description);
    }


    dolce = (a) =>{
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
        let ameryka =  Round(course, 2);
        let sum = a/ameryka;
        this.setState({dolarek : ameryka, suma: sum}); 
        });
             
    }

    totalsum = () =>{
       return this.props.items.reduce((total,item)=>{
            return total + item.price
        },0)    

    }

  

    handleToken = (token,addresses,orders) =>{
        console.log(token,addresses,orders);
        this.order();
        
       
    }
    componentDidMount(){
        let a = this.totalsum()
        this.dolce(a);
      
       
    }
    
    render(){
        
        const {auth} = this.props;
        const {items} = this.props;
        const {profile} = this.props;
        if(!auth.uid) return <Redirect to="/signin" />
        if(items.length===0) return <Redirect to="/shop" />
        return(
            <div className="SumOrderKamila">
               <p className="CallOrder">Podsumoawnie Zamowienia :D</p> 
                <table className="OrderSum">
                    <tbody>
                        <tr>
                            <td>Nazwa</td>
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
                            <td><textarea onChange={this.handleChange("description")} className="Description"></textarea></td>
                        </tr>
                    </tbody>
                </table>
                    <div>$ = {this.state.dolarek} <br/></div>
                    <p className="EquilBasi">Suma: {this.totalsum()} zł</p>
                    <p>Suma w $: {this.state.suma} $</p>


                    <div className="enquil">
                        <StripeCheckout 
                        stripeKey="pk_test_EcCwO3KxmaJx7fQb18wrJ4fZ00w3vwuc9G"
                        token={this.handleToken} 
                        billingAddress
                        shippingAddress
                        orders={this.props.items}
                        amount={this.state.suma *100}/>
                
                         <button onClick={this.order} className="btn btn-success">Zamów</button>
                    </div>
            </div>
        )
    
    }
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
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Ordersum)