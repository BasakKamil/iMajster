import React from 'react';
import Map from '../Layaut/Map';
import { connect } from 'react-redux';
import Weather from '../API/Weather';
import { useTranslation } from 'react-i18next';


function Contact() {


  
        const { t } = useTranslation();
        // if(!auth.uid) return <Redirect to="/signin" />
        return (
            <div className="ContactPage">
               <h1>{t('Contact.info.cont')}</h1>
                <div className="map container">
                <div className="Paper row">
                    <div className="Check col">
                            <h2>{t('Contact.title')}</h2>
                            <div>Tel. 796 895 079<br/>
                            E-Mail: Bastric91@gmail.com<br/>
                            </div>
                            <div><h2>{t('Contact.info.look')}</h2>
                                Wraszawa - Wawer - Radość
                                 <span> {t('Contact.info.lub')} </span> 
                                ROTTERDAM
                           </div>
                    </div>
                    
                    <div className="AllMap col">
                         <Map/>
                    </div>
                    </div>
                    <div>
                        <Weather/>
                    </div>
                </div>
                
            </div>
        )
    }

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Contact)
