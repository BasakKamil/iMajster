import React from 'react';
import {connect} from 'react-redux';
import { useTranslation } from 'react-i18next';

const  History = (props) => {
        const { t } = useTranslation();
        return (
            <div className="history-controls">
                <button className="btn btn-secondary KamilABut" onClick={props.undo}>{t('Undo')}</button>
                <button className="btn btn-secondary KamilABut" onClick={props.redo}>{t('Redo')}</button>
            </div>
        )
    }


const mapDispatchToProps = (dispatch) => {
    return{
        undo: () => dispatch({type:'UNDO'}),
        redo: () => dispatch({type:'REDO'}),
    }
}
export default connect(null,mapDispatchToProps)(History)
