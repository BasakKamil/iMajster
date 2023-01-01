import authReducer from './authReducer';
import projectReducer from './projectReducer';
import cartReducers from './cartReducers';
import orderReducer from './orderReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';



const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    cart: cartReducers,
    order: orderReducer 

});

export default rootReducer