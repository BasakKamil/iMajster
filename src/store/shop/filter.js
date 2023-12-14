import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';

function filter(props){
   
        const { t } = useTranslation();
        return (
            <div className="row FilterKamil">
                <div className="col-md-4">
                    {t('Score')}: {props.count} 
                </div>
                <div className="col-md-4">
                    <select className="form-conrol KamilFormContr" value={props.sort}
                    onChange={props.handleChangeSort}>
                         <option value="">Select</option>
                         <option value="">Lowest to Highest</option>
                         <option value="">Highest to Lowest</option>
                    </select>
                </div>
                <div className="col-md-4"></div>
            </div>
        )
    
}

export default filter
