import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import NewMenu from '../Layaut/NewMenu';
import Burger from '../../images/burger.png';
import Basket from '../Layaut/Basket';
import { useLocation } from 'react-router-dom';
// import Language from '../Layaut/Language';

const LinksLoginIn =(props)=> {


    const [dropDownOpen, setDropDownOpen] = useState(false);
    const toggle = () => setDropDownOpen(prevState => !prevState); 

   
    const {pathname} = useLocation();

    useEffect(() => {
        setDropDownOpen(false);
        
    },[ pathname ]);

   
        return (
            <div className="LinksIn">
                <ul className='Reducto'>
                 <li><img className="Burgerek" onClick={toggle} src={Burger} alt="Burger"/></li>
                 <li><button className="btn btn-primary" onClick={props.signOut}>Wyloguj się!</button></li>    
                 <li><Basket/></li>        
                 {/* <li><Language/></li> */}
               </ul> 
               {dropDownOpen ? <NewMenu /> : null}
            </div>
        )
}
// }

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
        
    }
}

export default connect(null,mapDispatchToProps)(LinksLoginIn)
