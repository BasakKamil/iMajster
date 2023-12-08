import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose} from 'redux'; 
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore ,getFirestore } from 'redux-firestore';
import { reactReduxFirebase ,getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbconfig';
import Loader from './Components/Animate/Loader';
import gloabl_pl from './Translation/Pl/global.json';
import gloabl_en from './Translation/En/global.json';
import gloabl_nl from './Translation/Nl/global.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
    interpolation: { escapeValue: false },
    lng: "pl",
    resources: {    
        pl: {
            global : gloabl_pl
        },
        en: {
            global : gloabl_en
        },
        nl: {
            global : gloabl_nl
        },

    }
})



//Dzieki temu sie logują i rejstrują uzytkownicy
const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
    )
);





// dzięki temu po przeładowaniu strony zalogowany uzytkownik nie zostanie wylogowany 
store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(
        <I18nextProvider>
            <Provider store={store} i18n={i18next}>
                <>
                    <Loader/>
                    <App />
                </>
            </Provider> 
        </I18nextProvider>,    
        document.getElementById('root'));
    serviceWorker.register();
})



