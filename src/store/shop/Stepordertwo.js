import React from 'react';
import { useTranslation } from 'react-i18next';

export function Stepordertwo(props){

   
        const { t } = useTranslation();
        const {items,profile} = props;
        
       
        return (
            <div className="NiceBasket">
                {t('Summary')}
                <table className="Sum">
                <tbody>
                <tr><td>{t('Basket.Name')}</td><td>{t('Menu.pieces')}</td></tr>
                {items.map((item,index)=>{
                return <tr key={index}>
                                 <td>{item.name}</td>
                                 <td> </td>
                      </tr>
                      
                })}
                </tbody>
             
                </table>
                <b className="AdressSend"> {t('Contact.Address')}: </b>
                <table>
                    <tbody>
                        <tr>
                            <td>{t('Contact.Nam')} {t('Contact.Sur')}</td>
                             <td>{profile.name} {profile.surname}</td>
                        </tr>
                    </tbody>
                </table>

                <button onClick={props.prevStep} className="btn btn-secondary">{t('Basket.Back')}</button>
                <button onClick={props.nextStep} className="btn btn-danger">{t('Basket.Next')}</button>
            </div>
        )
    }


export default Stepordertwo
