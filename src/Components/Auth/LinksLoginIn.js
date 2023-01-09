import React,{Component} from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import NewMenu from '../Layaut/NewMenu';
import Burger from '../../images/burger.png';
import Basket from '../Layaut/Basket';

class LinksLoginIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            isToggleOn: false
        }
    }

    toogle = e =>{
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
      }));
    }
    
    render(){
   
        return (
            <div className="LinksIn">
                <ul className='Reducto'>
                 <li><img className="Burgerek" onClick={this.toogle} src={Burger} alt="Burger"/></li>
                 <li><button className="btn btn-primary" onClick={this.props.signOut}>Wyloguj się!</button></li>    
                 <li><Basket/></li>        
               </ul> 
               
               {this.state.isToggleOn ? <NewMenu toogle={this.toogle}/> : null}
            </div>
        )
}
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
        
    }
}

export default connect(null,mapDispatchToProps)(LinksLoginIn)
