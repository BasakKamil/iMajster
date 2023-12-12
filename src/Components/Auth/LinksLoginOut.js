import React from 'react';
import {Link} from 'react-router-dom';
import Language from '../Layaut/Language';
import { useTranslation } from 'react-i18next';

function LinksLoginOut(){

        const { t } = useTranslation();
    
        return (
            <div className="LinksOut">
               <ul>
                 <li><button className="btn btn-dark NowyK"><Link to="/signin">{t('Menu.login.log_in')}</Link></button></li>
                 <li><button className="btn btn-danger NowyK"><Link to="/signup">{t('Menu.login.register')}</Link></button></li> 
                 <li><button className="btn btn-primary NowyK"><Link to="/contact">{t('Contact.title')}</Link></button></li> 
                 <li><Language/></li>
               </ul> 
            </div>
        )
    
}

export default LinksLoginOut
