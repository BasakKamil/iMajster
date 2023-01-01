import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from "react-icons/lib";

export class NewMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: false
        }
    }
 
   
    render() {
       
        return (

        <IconContext.Provider value={{color: 'lightgrey'}}>
            <div className="NewM">
                <ul className="InUl">
                    <li><NavLink exact to="/shop">Sklep</NavLink></li>
                    <li><NavLink exact to="/about">O Mnie</NavLink></li>
                    <li><NavLink to="/createproject">Zlecenie Naprawy!</NavLink></li> 
                    <li><NavLink exact to="/contact">Kontakt</NavLink></li>
                </ul>
            </div>
        </IconContext.Provider>
        )
    }
}

export default NewMenu
