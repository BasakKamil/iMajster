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
    <Provider store={store}>
        <>
        <Loader/>
        <App />
        </>
    </Provider>, document.getElementById('root'));
    serviceWorker.register();
})



