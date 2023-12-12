import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from "react-icons/lib";
import { FaBeer } from 'react-icons/fa';
import { IoIosCloud } from 'react-icons/io';
import { AiFillFolderOpen } from "react-icons/ai";
import { HiBriefcase } from 'react-icons/hi';
import { GiFamilyHouse } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';


const NewMenu = () =>  {
    
        const { t } = useTranslation();
        return (
        
        <div className='BasiCentral'>
        <IconContext.Provider value={{color: 'black'}}>
            <div className="NewM">
                <ul className="InUl">
                    <li><NavLink exact to="/"><GiFamilyHouse /><p>{t('Menu.login.Nav.Home_page')}</p></NavLink></li>
                    <li><NavLink exact to="/shop"><IoIosCloud /><p>{t('Menu.login.Nav.Shop')}</p></NavLink></li>
                    <li><NavLink exact to="/about"><FaBeer /><p>{t('Menu.login.Nav.Me')}</p></NavLink></li>
                    <li><NavLink to="/createproject"><AiFillFolderOpen /><p>{t('Menu.login.Nav.Repair')}</p></NavLink></li> 
                    <li><NavLink exact to="/contact"><HiBriefcase/><p>{t('Contact.title')}</p></NavLink></li>
                </ul>
            </div>
        </IconContext.Provider>
       
        </div>

        )
    }


export default NewMenu
