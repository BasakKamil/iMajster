import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from "react-icons/lib";
import { FaBeer } from 'react-icons/fa';
import { IoIosCloud } from 'react-icons/io';
import { AiFillFolderOpen } from "react-icons/ai";
import { HiBriefcase } from 'react-icons/hi';
import { GiFamilyHouse } from 'react-icons/gi';


const NewMenu = () =>  {
    
       
        return (
        
        <div className='BasiCentral'>
        <IconContext.Provider value={{color: 'black'}}>
            <div className="NewM">
                <ul className="InUl">
                    <li><NavLink exact to="/"><GiFamilyHouse /><p>STRONA GLOWNA</p></NavLink></li>
                    <li><NavLink exact to="/shop"><IoIosCloud /><p>Sklep</p></NavLink></li>
                    <li><NavLink exact to="/about"><FaBeer /><p>O Mnie</p></NavLink></li>
                    <li><NavLink to="/createproject"><AiFillFolderOpen /><p>Zlecenie Naprawy!</p></NavLink></li> 
                    <li><NavLink exact to="/contact"><HiBriefcase/><p>Kontakt</p></NavLink></li>
                </ul>
            </div>
        </IconContext.Provider>
       
        </div>

        )
    }


export default NewMenu
