import React from "react";
import i18next from "i18next";
import { useTranslation } from 'react-i18next';
import Flag from 'react-flagkit';


const Language = () => {

    const { t } = useTranslation();


    const languages = [
        {
            code: 'Pl',
            name:  'Polski',
            country_code: 'pl',
            codeUpper: 'PL'
        },
        {
            code: 'En',
            name:  'English',
            country_code: 'en',
            codeUpper: 'GB'
        },
        {
            code: 'Nl',
            name:  'Nederlandse',
            country_code: 'nl',
            codeUpper: 'NL'
        }
    ]

    return(
        
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"  >
                {t('Lange')}
            </button>
   

            <ul className="dropdown-menu KamilaNav" aria-labelledby="dropdownMenuButton1">
                    {languages.map(({code,name,country_code, codeUpper}) => (
                        <li key={country_code} >
                            <button className="dropdown-item" onClick={()=>i18next.changeLanguage(code)} >      
                                <p>  <Flag country={codeUpper} size={30} /> <span>{name}</span></p>
                            </button>
                        </li>
                    ))}
                    
            </ul>
        </div>

        

    )

}

export default Language