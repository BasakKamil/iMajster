import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Language from '../Layaut/Language';
import { useTranslation } from 'react-i18next';
import Burger from '../../images/burger.png'
import { RiLoginBoxLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { BiMailSend } from "react-icons/bi";

function LinksLoginOut(){

        const { t } = useTranslation();
        const Toggle = () => setDropDownOpen(prevState => !prevState); 
        const [dropDownOpen, setDropDownOpen] = useState(false);

        return (
      
          <div className="LinksOutShow">
            {dropDownOpen ? <div className='Op'>
               <ul>
                 <li><div  onClick={Toggle} className="NowyBut"><span>{t('Menu.login.close')}</span></div></li>
                 <li><div  className="NowyK"><Link onClick={Toggle} to="/signin"><p>{t('Menu.login.log_in')}</p><RiLoginBoxLine /></Link></div></li>
                 <li><div  className="NowyK"><Link onClick={Toggle} to="/signup"><p>{t('Menu.login.register')}</p><VscAccount /></Link></div></li> 
                 <li><div  className="NowyK"><Link onClick={Toggle} to="/contact"><p>{t('Contact.title')}</p><BiMailSend /></Link></div></li> 
                 <li><Language/></li>
               </ul>
               <span className='BasiBas'>{t('CRB')}</span> 
            </div> 
            :
            <img className="BurgerekOnze" src={Burger} onClick={Toggle} alt="Menu"/>
            }
          </div>
        )
    
}

export default LinksLoginOut
