import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Language from '../Layaut/Language';
import { useTranslation } from 'react-i18next';
import Burger from '../../images/burger.png'

function LinksLoginOut(){

        const { t } = useTranslation();
        const Toggle = () => setDropDownOpen(prevState => !prevState); 
        const [dropDownOpen, setDropDownOpen] = useState(false);

        return (
      
          <div className="LinksOutShow">
            {dropDownOpen ? <div className='Op'>
               <ul>
                 <li><div  onClick={Toggle} className="NowyBut"><span>{t('Menu.login.close')}</span></div></li>
                 <li><div  className="NowyK"><Link onClick={Toggle} to="/signin">{t('Menu.login.log_in')}</Link></div></li>
                 <li><div  className="NowyK"><Link onClick={Toggle} to="/signup">{t('Menu.login.register')}</Link></div></li> 
                 <li><div  className="NowyK"><Link onClick={Toggle} to="/contact">{t('Contact.title')}</Link></div></li> 
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
