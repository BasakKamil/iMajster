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
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLangs: ['en','nl' ,'pl'],
        interpolation: { escapeValue: false },
        falbacklang: 'en',
        detection: {
            order: ['htmlTag', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],
            caches: ['cookie']
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        },
        react: { useSuspense: false }
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
            <Provider store={store} i18n={i18n}>
                    <App />
            </Provider> 
        </I18nextProvider>,    
        document.getElementById('root'));
    serviceWorker.register();
})



