export const signIn = (credentials) => {
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((err)=>{
            dispatch({type: 'LOGIN_ERROR', err})
        })
    }
}

export const signOut = (credentials) => {
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(()=>{
            dispatch({type: 'SIGNOUT_SUCCESS'});
        }).catch((err)=>{
            dispatch({type: 'SIGNOUT_ERROR', err})
        })
    }
}

export const signUp = (newUser) => {
    return(dispatch,getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
            return firestore.collection('users').doc(resp.user.uid).set({
                name: newUser.name,
                surname: newUser.surname,
                address: newUser.address,
                post: newUser.post,
                city: newUser.city,
                phone: newUser.phone,
                date: newUser.date,
                initials: newUser.name + newUser.surname[0]
            }).then(()=>{
                dispatch({type:'SIGNUP_SUCCESS'})
            }).catch(err => {
                dispatch({type: 'SIGNUP_ERROR', err})
            })
        })

    }
}